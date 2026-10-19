import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GameConsole, { type ConsoleTarget } from "../components/ui/GameConsole";
import ProjectCard from "../components/ui/ProjectCard";
import SectionHeading from "../components/ui/SectionHeading";
import { companies, profile, projects } from "../data/profile";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "../styles/home.css";
import "../styles/pages.css";

export default function ProjectsPage() {
  const location = useLocation();
  const reduced = useReducedMotion();
  const [target, setTarget] = useState<ConsoleTarget>(null);
  const state = location.state as { level?: string; nonce?: number } | null;

  const focusConsole = useCallback(() => {
    // Laisse le retour en haut de page se faire avant de descendre vers la console.
    window.setTimeout(() => {
      document.getElementById("console")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    }, 80);
  }, [reduced]);

  useEffect(() => {
    if (!state?.level) return;
    setTarget({ id: state.level, nonce: state.nonce ?? Date.now() });
    focusConsole();
  }, [state?.level, state?.nonce, focusConsole]);

  const openLevel = (id: string) => {
    setTarget({ id, nonce: Date.now() });
    focusConsole();
  };

  return (
    <div className="page">
      <section className="wrap">
        <SectionHeading as="h1" label="Travaux choisis" title="Projets">
          <p className="lead">
            Les projets de {profile.fullName}, de l'assurance à la banque digitale. Les applications sont internes : les
            visuels sont des illustrations, et la console raconte ce que j'y ai construit.
          </p>
        </SectionHeading>
      </section>

      <section className="wrap projects-console">
        <article id="console" className="card console-feature" aria-labelledby="zb-title">
          <p className="project-meta static">
            Mode arcade <span aria-hidden="true">•</span> 2026
          </p>
          <div className="console-feature-grid">
            <div className="console-help">
              <dl className="controls" id="console-help">
                <div>
                  <dt>
                    <kbd>↑</kbd>
                    <kbd>↓</kbd>
                  </dt>
                  <dd>Choisir un niveau</dd>
                </div>
                <div>
                  <dt>
                    <kbd>A</kbd>
                    <kbd>Entrée</kbd>
                  </dt>
                  <dd>Ouvrir</dd>
                </div>
                <div>
                  <dt>
                    <kbd>←</kbd>
                    <kbd>→</kbd>
                  </dt>
                  <dd>Niveau précédent ou suivant</dd>
                </div>
                <div>
                  <dt>
                    <kbd>B</kbd>
                    <kbd>Échap</kbd>
                  </dt>
                  <dd>Retour au menu</dd>
                </div>
                <div>
                  <dt>
                    <kbd>S</kbd>
                  </dt>
                  <dd>Couleurs de l'écran</dd>
                </div>
              </dl>
              <p className="touch-hint">Touchez la croix pour choisir, A pour ouvrir, B pour revenir.</p>
            </div>
            <div className="console-stage">
              <GameConsole target={target} />
            </div>
            <div className="console-stats">
              <div>
                <p className="mini-label">Mondes</p>
                <p className="mini-value">{companies.length}</p>
              </div>
              <div>
                <p className="mini-label">Niveaux</p>
                <p className="mini-value">{projects.length}</p>
              </div>
              <div>
                <p className="mini-label">Depuis</p>
                <p className="mini-value">{profile.since}</p>
              </div>
            </div>
          </div>
          <div className="console-feature-info">
            <h2 id="zb-title">Console Pocket</h2>
            <p>Mes projets rangés comme les niveaux d'un jeu : un monde par entreprise, un niveau par projet.</p>
          </div>
        </article>
      </section>

      <section className="wrap section" aria-label="Tous les projets">
        <div className="works-grid">
          {[...projects].reverse().map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={openLevel} />
          ))}
        </div>
      </section>
    </div>
  );
}
