import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { companyById, projects } from "../../data/profile";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "../../styles/console.css";

type Mode = "title" | "boot" | "menu" | "detail";
type Btn = "up" | "down" | "left" | "right" | "a" | "b" | "select" | "start";

export type ConsoleTarget = { id: string; nonce: number } | null;

const PALETTES: { name: string; vars: Record<string, string> }[] = [
  { name: "Classique", vars: { "--lcd-0": "#9bbc0f", "--lcd-1": "#8bac0f", "--lcd-2": "#306230", "--lcd-3": "#0f380f" } },
  { name: "Pocket", vars: { "--lcd-0": "#d7d8c8", "--lcd-1": "#b3b4a3", "--lcd-2": "#5b5d4f", "--lcd-3": "#1f201b" } },
  { name: "Violet", vars: { "--lcd-0": "#e6ddff", "--lcd-1": "#c3b1f7", "--lcd-2": "#6343cc", "--lcd-3": "#241452" } },
];

const BOOT_MS = 2300;

const KEYMAP: Record<string, Btn> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  Enter: "a",
  a: "a",
  A: "a",
  Escape: "b",
  Backspace: "b",
  b: "b",
  B: "b",
  s: "select",
  S: "select",
  " ": "start",
};

export default function GameConsole({ target }: { target: ConsoleTarget }) {
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<Mode>(() => (reduced ? "menu" : "title"));
  const [index, setIndex] = useState(0);
  const [palette, setPalette] = useState(0);
  const [powered, setPowered] = useState(reduced);
  const [flash, setFlash] = useState<string | null>(null);
  const [pressed, setPressed] = useState<Btn | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const bootTimer = useRef<number>();
  const flashTimer = useRef<number>();
  const started = useRef(false);

  const boot = useCallback(() => {
    setPowered(true);
    window.clearTimeout(bootTimer.current);
    if (reduced) {
      setMode("menu");
      return;
    }
    setMode("boot");
    bootTimer.current = window.setTimeout(() => setMode("menu"), BOOT_MS);
  }, [reduced]);

  // Démarrage automatique la première fois que la console apparaît à l'écran.
  useEffect(() => {
    if (reduced) return;
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          if (!started.current) {
            started.current = true;
            boot();
          }
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [boot, reduced]);

  useEffect(() => () => {
    window.clearTimeout(bootTimer.current);
    window.clearTimeout(flashTimer.current);
  }, []);

  // Ouverture d'un niveau depuis l'extérieur (palette ⌘K, section Expérience).
  useEffect(() => {
    if (!target) return;
    const i = projects.findIndex((p) => p.id === target.id);
    if (i < 0) return;
    started.current = true;
    window.clearTimeout(bootTimer.current);
    setPowered(true);
    setIndex(i);
    setMode("detail");
  }, [target]);

  // Garde le niveau sélectionné visible dans la liste.
  useEffect(() => {
    if (mode !== "menu") return;
    const list = listRef.current;
    const item = list?.children[index] as HTMLElement | undefined;
    if (!list || !item) return;
    const top = item.offsetTop;
    const bottom = top + item.offsetHeight;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight;
  }, [index, mode]);

  useEffect(() => {
    if (mode === "detail" && detailRef.current) detailRef.current.scrollTop = 0;
  }, [mode, index]);

  const showFlash = (text: string) => {
    setFlash(text);
    window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setFlash(null), 1200);
  };

  const press = (btn: Btn) => {
    started.current = true;
    setPressed(btn);
    window.setTimeout(() => setPressed((p) => (p === btn ? null : p)), 150);

    if (mode === "title") {
      if (btn === "a" || btn === "start") boot();
      return;
    }
    if (mode === "boot") {
      window.clearTimeout(bootTimer.current);
      setMode("menu");
      return;
    }
    if (btn === "select") {
      const next = (palette + 1) % PALETTES.length;
      setPalette(next);
      showFlash(`Écran : ${PALETTES[next].name}`);
      return;
    }

    const n = projects.length;
    if (mode === "menu") {
      if (btn === "up") setIndex((i) => (i - 1 + n) % n);
      else if (btn === "down") setIndex((i) => (i + 1) % n);
      else if (btn === "a" || btn === "right") setMode("detail");
      else if (btn === "start") boot();
      return;
    }

    // mode === "detail"
    if (btn === "b" || btn === "start") setMode("menu");
    else if (btn === "left") setIndex((i) => (i - 1 + n) % n);
    else if (btn === "right" || btn === "a") setIndex((i) => (i + 1) % n);
    else if (btn === "up" && detailRef.current) detailRef.current.scrollTop -= 28;
    else if (btn === "down" && detailRef.current) detailRef.current.scrollTop += 28;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const btn = KEYMAP[e.key];
    if (!btn) return;
    // Laisse Entrée et Espace activer un bouton focalisé normalement.
    const onButton = (e.target as HTMLElement).tagName === "BUTTON";
    if (onButton && (e.key === "Enter" || e.key === " ")) return;
    e.preventDefault();
    press(btn);
  };

  const project = projects[index];
  const company = companyById(project.companyId);

  const liveText =
    mode === "menu"
      ? `Niveau ${project.level}, ${project.title}. ${index + 1} sur ${projects.length}.`
      : mode === "detail"
        ? `${project.title}, ${company.fullName}, ${project.year}. ${project.short}`
        : "";

  return (
    <div
      ref={rootRef}
      className="gb"
      role="group"
      aria-label="Console de projets"
      aria-describedby="console-help"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="gb-bezel">
        <div className="gb-led-row" aria-hidden="true">
          <span className={`gb-led${powered ? " is-on" : ""}`} />
          <span>Power</span>
        </div>

        <div className="lcd" style={PALETTES[palette].vars as CSSProperties}>
          {(mode === "title" || mode === "boot") && (
            <div className={`lcd-title${mode === "boot" ? " is-booting" : ""}`}>
              <span className="lcd-logo">Console Pocket</span>
              <span className="lcd-sub">{mode === "title" ? "Appuyer sur A" : "Zakaria Benaddi"}</span>
            </div>
          )}

          {mode === "menu" && (
            <div className="lcd-screen">
              <p className="lcd-head">
                <span>Choisir un niveau</span>
                <span>
                  {index + 1}/{projects.length}
                </span>
              </p>
              <ul ref={listRef} className="lcd-list">
                {projects.map((p, i) => (
                  <li
                    key={p.id}
                    className={i === index ? "is-active" : undefined}
                    onClick={() => {
                      setIndex(i);
                      setMode("detail");
                    }}
                  >
                    <span className="lcd-cursor" aria-hidden="true">
                      {i === index ? "▶" : ""}
                    </span>
                    <span className="lcd-lvl">{p.level}</span>
                    <span className="lcd-name">{p.title}</span>
                  </li>
                ))}
              </ul>
              <p className="lcd-foot">
                <span>A ouvrir</span>
                <span>Select couleurs</span>
              </p>
            </div>
          )}

          {mode === "detail" && (
            <div className="lcd-screen">
              <p className="lcd-head">
                <span>Niveau {project.level}</span>
                <span>Monde {company.world}</span>
              </p>
              <div ref={detailRef} className="lcd-detail">
                <p className="lcd-ptitle">{project.title}</p>
                <p className="lcd-meta">
                  {company.name}, {project.year}
                </p>
                <p className="lcd-text">{project.short}</p>
                <p className="lcd-stack">{company.stack.slice(0, 4).join(" / ")}</p>
              </div>
              <p className="lcd-foot">
                <span>◀ ▶ niveaux</span>
                <span>B retour</span>
              </p>
            </div>
          )}

          {flash && <div className="lcd-flash">{flash}</div>}
        </div>
      </div>

      <p className="gb-brand" aria-hidden="true">
        Console <span>Pocket</span>
      </p>

      <div className="gb-controls">
        <div className="dpad">
          <button type="button" className={`dpad-up${pressed === "up" ? " is-pressed" : ""}`} aria-label="Haut" onClick={() => press("up")} />
          <button type="button" className={`dpad-left${pressed === "left" ? " is-pressed" : ""}`} aria-label="Gauche" onClick={() => press("left")} />
          <span className="dpad-center" aria-hidden="true" />
          <button type="button" className={`dpad-right${pressed === "right" ? " is-pressed" : ""}`} aria-label="Droite" onClick={() => press("right")} />
          <button type="button" className={`dpad-down${pressed === "down" ? " is-pressed" : ""}`} aria-label="Bas" onClick={() => press("down")} />
        </div>

        <div className="ab">
          <div className="ab-btn ab-b">
            <button type="button" className={pressed === "b" ? "is-pressed" : undefined} aria-label="B, revenir" onClick={() => press("b")} />
            <span aria-hidden="true">B</span>
          </div>
          <div className="ab-btn ab-a">
            <button type="button" className={pressed === "a" ? "is-pressed" : undefined} aria-label="A, ouvrir" onClick={() => press("a")} />
            <span aria-hidden="true">A</span>
          </div>
        </div>
      </div>

      <div className="gb-pills">
        <div className="pill-btn">
          <button type="button" className={pressed === "select" ? "is-pressed" : undefined} aria-label="Select, changer les couleurs de l'écran" onClick={() => press("select")} />
          <span aria-hidden="true">Select</span>
        </div>
        <div className="pill-btn">
          <button type="button" className={pressed === "start" ? "is-pressed" : undefined} aria-label="Start, retour au menu" onClick={() => press("start")} />
          <span aria-hidden="true">Start</span>
        </div>
      </div>

      <div className="gb-speaker" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {liveText}
      </p>
    </div>
  );
}
