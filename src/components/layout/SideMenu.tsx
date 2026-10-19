import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { NAV } from "../../lib/nav";
import { useApp } from "../../lib/app-context";
import { useScrolled } from "../../hooks/useScrolled";
import { SOCIALS } from "../ui/icons";

export default function SideMenu() {
  const { menuOpen, setMenuOpen } = useApp();
  const scrolled = useScrolled(40);
  const panelRef = useRef<HTMLElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Ferme le menu à chaque changement de page.
  useEffect(() => setMenuOpen(false), [location.pathname, setMenuOpen]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (menuOpen) {
      panel.removeAttribute("inert");
      const first = panel.querySelector<HTMLElement>("a, button");
      window.setTimeout(() => first?.focus(), 50);
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    panel.setAttribute("inert", "");
  }, [menuOpen, setMenuOpen]);

  const close = () => {
    setMenuOpen(false);
    openerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        className={`menu-btn${scrolled ? " is-solid" : ""}`}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
        aria-controls="side-menu"
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
      </button>

      <div className={`side-overlay${menuOpen ? " is-open" : ""}`} onClick={close} aria-hidden="true" />

      <aside ref={panelRef} id="side-menu" className={`side-menu${menuOpen ? " is-open" : ""}`} aria-label="Menu">
        <button type="button" className="side-close" aria-label="Fermer le menu" onClick={close}>
          <FiX aria-hidden="true" />
        </button>

        <p className="label">Navigation</p>
        <nav className="side-nav">
          {NAV.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
              style={{ transitionDelay: menuOpen ? `${120 + i * 45}ms` : "0ms" }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <p className="label side-label">Réseaux</p>
        <ul className="side-socials">
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
