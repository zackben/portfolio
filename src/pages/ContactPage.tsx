import { FiArrowUpRight, FiCopy, FiDownload, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SOCIALS } from "../components/ui/icons";
import { collaborate, profile } from "../data/profile";
import { useLocalTime } from "../hooks/useLocalTime";
import { useApp } from "../lib/app-context";
import "../styles/pages.css";

export default function ContactPage() {
  const { copyEmail } = useApp();
  const { time, offset } = useLocalTime(profile.timeZone);

  return (
    <div className="page">
      <section className="wrap narrow" aria-labelledby="contact-title">
        <div className="contact-label-row">
          <p className="label">Me contacter</p>
          <span className="status-pill">
            <i aria-hidden="true" />
            {profile.available}
          </span>
        </div>
        <h1 id="contact-title" className="big-title">
          Parlons-en
          <span className="dot" aria-hidden="true" />
        </h1>
        <p className="lead">
          Un projet en tête, une mission, une collaboration, ou juste envie de dire bonjour : écrivez-moi, je serai ravi
          d'échanger.
        </p>

        <div className="contact-top">
          <article className="card email-card">
            <p className="mini-kicker">
              <FiMail aria-hidden="true" /> Email principal
            </p>
            <a className="email-big" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="muted-sm">Le moyen le plus simple de me joindre</p>
            <button type="button" className="copy-btn" onClick={copyEmail}>
              <FiCopy aria-hidden="true" /> Copier
            </button>
          </article>

          <a className="card action-card" href={profile.cv} download>
            <span className="action-icon" aria-hidden="true">
              <FiDownload />
            </span>
            <FiArrowUpRight className="corner-arrow" aria-hidden="true" />
            <p className="action-title">Mon CV</p>
            <p className="muted-sm">Télécharger le PDF</p>
          </a>
        </div>

        <h2 className="sub-h">Réseaux</h2>
        <p className="muted-sm sub-p">Retrouvez-moi sur ces plateformes</p>
        <div className="social-grid">
          {SOCIALS.map((s) => (
            <a key={s.id} className="card social-card" href={s.url} target="_blank" rel="noreferrer">
              <span
                className="social-icon"
                style={{ background: s.color, color: s.id === "x" ? "#000" : "#fff" }}
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <FiArrowUpRight className="corner-arrow" aria-hidden="true" />
              <p className="social-name">{s.label}</p>
              <p className="muted-sm">{s.handle}</p>
            </a>
          ))}
        </div>

        <div className="contact-bottom">
          <a className="card row-card" href={profile.links.linkedin.url} target="_blank" rel="noreferrer">
            <span className="action-icon" aria-hidden="true">
              <FaLinkedinIn />
            </span>
            <div>
              <p className="row-title">Écrire sur LinkedIn</p>
              <p className="muted-sm">Pour les échanges pro</p>
            </div>
            <FiArrowUpRight className="row-arrow" aria-hidden="true" />
          </a>
          <div className="card row-card">
            <span className="action-icon" aria-hidden="true">
              <span className="time-dot" />
            </span>
            <div>
              <p className="row-title">{time}</p>
              <p className="muted-sm">Casablanca ({offset})</p>
            </div>
            <span className="row-tag">Heure locale</span>
          </div>
        </div>

        <div className="card collab">
          <h2>Ouvert à collaborer sur</h2>
          <ul className="collab-grid">
            {collaborate.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
