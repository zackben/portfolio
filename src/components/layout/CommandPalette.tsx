import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { FiBriefcase, FiCopy, FiFileText, FiHome, FiMessageSquare, FiSearch, FiSend, FiTool, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { profile } from "../../data/profile";
import { useApp } from "../../lib/app-context";
import { SOCIALS } from "../ui/icons";

type Command = { id: string; label: string; group: string; icon: ReactNode; keywords?: string; run: () => void };

const PAGE_ICONS: Record<string, ReactNode> = {
  "/": <FiHome />,
  "/a-propos": <FiUser />,
  "/projets": <FiBriefcase />,
  "/outils": <FiTool />,
  "/livre-dor": <FiMessageSquare />,
  "/contact": <FiSend />,
};

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export default function CommandPalette() {
  const { paletteOpen, setPaletteOpen, copyEmail } = useApp();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const commands = useMemo<Command[]>(
    () => [
      ...[
        ["/", "Accueil"],
        ["/a-propos", "À propos"],
        ["/projets", "Projets"],
        ["/outils", "Outils"],
        ["/livre-dor", "Livre d'or"],
        ["/contact", "Contact"],
      ].map(([to, label]) => ({
        id: `page-${to}`,
        label,
        group: "Pages",
        icon: PAGE_ICONS[to],
        run: () => navigate(to),
      })),
      ...SOCIALS.map((s) => ({
        id: `social-${s.id}`,
        label: s.label,
        group: "Réseaux",
        icon: s.icon,
        run: () => window.open(s.url, "_blank", "noopener"),
      })),
      {
        id: "cv",
        label: "CV",
        group: "Réseaux",
        icon: <FiFileText />,
        keywords: "resume pdf",
        run: () => {
          const a = document.createElement("a");
          a.href = profile.cv;
          a.download = "BENADDI-Zakaria-CV.pdf";
          a.click();
        },
      },
      { id: "copy", label: "Copier mon email", group: "Actions", icon: <FiCopy />, keywords: "mail contact", run: copyEmail },
    ],
    [copyEmail, navigate],
  );

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return q ? commands.filter((c) => normalize(`${c.label} ${c.group} ${c.keywords ?? ""}`).includes(q)) : commands;
  }, [commands, query]);

  // ⌘K / Ctrl+K partout sur le site.
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setPaletteOpen]);

  useEffect(() => {
    if (!paletteOpen) return;
    returnFocus.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActive(0);
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = prev;
      returnFocus.current?.focus?.();
    };
  }, [paletteOpen]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    if (!list || !el) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (top < list.scrollTop + 36) list.scrollTop = Math.max(0, top - 36);
    else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight + 8;
  }, [active, results]);

  if (!paletteOpen) return null;

  const close = () => setPaletteOpen(false);
  const runAt = (i: number) => {
    const cmd = results[i];
    if (!cmd) return;
    close();
    window.setTimeout(cmd.run, 10);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (results.length ? (a + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (results.length ? (a - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(active);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  const groups: { name: string; items: { cmd: Command; index: number }[] }[] = [];
  results.forEach((cmd, index) => {
    let g = groups.find((x) => x.name === cmd.group);
    if (!g) groups.push((g = { name: cmd.group, items: [] }));
    g.items.push({ cmd, index });
  });

  return (
    <div className="cmdk-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="cmdk" role="dialog" aria-modal="true" aria-label="Navigation rapide">
        <div className="cmdk-input">
          <FiSearch aria-hidden="true" />
          <input
            ref={inputRef}
            id="cmdk-search"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={results[active] ? `cmdk-${results[active].id}` : undefined}
            placeholder="Où voulez-vous aller ?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div ref={listRef} id="cmdk-list" role="listbox" className="cmdk-list" aria-label="Résultats">
          {results.length === 0 && <p className="cmdk-empty">Rien trouvé pour « {query} ». Essayez « projets » ou « CV ».</p>}
          {groups.map((g) => (
            <div key={g.name} role="presentation" className="cmdk-group">
              <p className="cmdk-group-name" role="presentation">
                {g.name}
              </p>
              {g.items.map(({ cmd, index }) => (
                <div
                  key={cmd.id}
                  id={`cmdk-${cmd.id}`}
                  role="option"
                  aria-selected={index === active}
                  data-index={index}
                  className={`cmdk-item${index === active ? " is-active" : ""}`}
                  onMouseMove={() => index !== active && setActive(index)}
                  onClick={() => runAt(index)}
                >
                  <span className="cmdk-icon" aria-hidden="true">
                    {cmd.icon}
                  </span>
                  {cmd.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
