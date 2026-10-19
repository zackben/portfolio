import { TOOL_ICONS } from "../components/ui/icons";
import SectionHeading from "../components/ui/SectionHeading";
import { tools } from "../data/profile";
import "../styles/pages.css";

export default function ToolsPage() {
  return (
    <div className="page">
      <section className="wrap narrow">
        <SectionHeading as="h1" label="Stack & setup" title="Outils">
          <p className="lead">
            Les logiciels et les technos qui font tourner mon quotidien de développeur, choisis pour la fiabilité et la
            vitesse.
          </p>
        </SectionHeading>

        {tools.map((sec) => (
          <section key={sec.section} className="tools-section" aria-label={sec.section}>
            <div className="tools-head">
              <h2>{sec.section}</h2>
              <span className="tools-line" aria-hidden="true" />
              <span className="tools-count">{sec.items.length} outils</span>
            </div>
            <ul className="tools-grid">
              {sec.items.map((t) => (
                <li key={t.name} className="tool-card">
                  <span className="tool-icon" style={{ color: t.color, background: `${t.color}1f` }} aria-hidden="true">
                    {TOOL_ICONS[t.icon]}
                  </span>
                  <div className="tool-text">
                    <p className="tool-name">{t.name}</p>
                    <p className="tool-desc">{t.desc}</p>
                  </div>
                  <span className="tool-cat">{t.category}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </div>
  );
}
