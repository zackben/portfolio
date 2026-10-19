import { FiArrowUpRight, FiEdit3 } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { companies, lastPlayed, projects, tools } from "../../data/profile";
import { TOOL_ICONS } from "../ui/icons";
import SectionHeading from "../ui/SectionHeading";

export default function AroundHere() {
  const showcase = tools[0].items.slice(0, 8);

  return (
    <section className="wrap section" aria-labelledby="around-title">
      <SectionHeading id="around-title" title="Autour de moi" />

      <div className="bento">
        {/* Outils */}
        <article className="card bento-tools">
          <div className="grid-bg" aria-hidden="true" />
          <div className="bento-head">
            <span className="pill pill-accent">Explorer</span>
            <Link to="/outils" className="round-link" aria-label="Voir tous mes outils">
              <FiArrowUpRight />
            </Link>
          </div>
          <h3 className="bento-title">Outils & setup</h3>
          <p className="bento-text">Mon espace de travail et les outils que j'utilise chaque jour pour livrer.</p>
          <ul className="tool-tiles">
            {showcase.map((t) => (
              <li key={t.name} title={t.name}>
                <span style={{ color: t.color }} aria-hidden="true">
                  {TOOL_ICONS[t.icon]}
                </span>
                <span className="sr-only">{t.name}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Dernière partie */}
        <article className="card bento-game">
          <p className="bento-kicker">
            <span className="kicker-icon">
              <IoGameControllerOutline aria-hidden="true" />
            </span>
            Dernière partie
          </p>
          <div className="pitch" aria-hidden="true">
            <span className="pitch-line" />
            <span className="pitch-circle" />
            <span className="pitch-box left" />
            <span className="pitch-box right" />
            <span className="pitch-ball" />
          </div>
          <p className="game-title">{lastPlayed.title}</p>
          <p className="game-mode">{lastPlayed.mode}</p>
          <p className="game-note">{lastPlayed.note}</p>
          <span className="eq" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </article>

        {/* Livre d'or */}
        <article className="card bento-guest">
          <span className="bento-icon">
            <FiEdit3 aria-hidden="true" />
          </span>
          <h3 className="bento-title small">Livre d'or</h3>
          <p className="bento-text">Laissez votre signature</p>
          <Link to="/livre-dor" className="accent-link">
            Signer le livre d'or
          </Link>
          <svg className="squiggle" viewBox="0 0 300 120" aria-hidden="true">
            <path d="M5 60 C 40 -10, 70 130, 110 70 S 170 10, 200 60 S 260 110, 295 40" />
          </svg>
          <div className="lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </article>

        {/* Console */}
        <article className="card bento-console">
          <Link to="/projets" className="round-link corner" aria-label="Ouvrir la console de projets">
            <FiArrowUpRight />
          </Link>
          <div className="bento-head start">
            <span className="mini-icon violet">
              <IoGameControllerOutline aria-hidden="true" />
            </span>
          </div>
          <h3 className="bento-title">Mode arcade</h3>
          <p className="bento-text">
            Mes projets rangés comme les niveaux d'un jeu, à parcourir sur la console Pocket.
          </p>
          <div className="mini-cards">
            <div>
              <p className="mini-label">Mondes</p>
              <p className="mini-value">{companies.length} entreprises</p>
            </div>
            <div>
              <p className="mini-label">Niveaux</p>
              <p className="mini-value">{projects.length} projets</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
