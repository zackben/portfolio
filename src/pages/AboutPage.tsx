import { FiCpu, FiGlobe } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import me from "../assets/me.jpg";
import meLarge from "../assets/me-large.jpg";
import SectionHeading from "../components/ui/SectionHeading";
import { bio, companies, education, profile, quote } from "../data/profile";
import { greetingFor, useLocalTime } from "../hooks/useLocalTime";
import "../styles/pages.css";

const HOBBIES = [
  {
    icon: <IoGameControllerOutline />,
    title: "Jeux vidéo",
    text: "EA FC en Ultimate Team surtout. C'est aussi pour ça que mes projets tiennent dans une console.",
  },
  {
    icon: <FiCpu />,
    title: "Nouvelles technos",
    text: "Je teste les nouveaux outils et frameworks dès qu'ils sortent, pour garder une longueur d'avance.",
  },
  {
    icon: <FiGlobe />,
    title: "Voyages",
    text: "Découvrir d'autres pays et d'autres façons de voir, c'est ce qui nourrit ma curiosité.",
  },
];

export default function AboutPage() {
  const { hour } = useLocalTime(profile.timeZone);

  return (
    <div className="page">
      <section className="wrap about-hero" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="label">Un peu sur moi</p>
          <h1 id="about-title" className="big-title medium">
            {greetingFor(hour)}
            <span className="dot" aria-hidden="true" />
          </h1>
          <p className="about-hello">
            Ravi de vous rencontrer. Je suis <strong>{profile.fullName}</strong>.
          </p>
          {bio.about.map((p) => (
            <p key={p} className="about-p">
              {p}
            </p>
          ))}
          <p className="scroll-hint">
            <span aria-hidden="true" />
            Faites défiler pour découvrir mon parcours
          </p>
        </div>

        <figure className="tilt-photo">
          <div className="tilt-back" aria-hidden="true" />
          <img src={meLarge} alt={`Portrait de ${profile.fullName}`} width={900} height={900} />
          <figcaption>Gamer à mes heures</figcaption>
        </figure>
      </section>

      <section className="wrap section" aria-labelledby="journey-title">
        <SectionHeading id="journey-title" label="Le parcours" title="Depuis 2020, en production" size="medium" />

        <div className="timeline">
          <div className="timeline-rail" aria-hidden="true">
            <img src={me} alt="" className="timeline-avatar" />
          </div>

          {companies.map((c, i) => (
            <article key={c.id} className={`tl-item${i % 2 ? " is-right" : ""}`}>
              <div className="tl-date">
                <span className="date-pill">
                  {c.start} – {c.end}
                </span>
              </div>
              <div className="tl-body">
                <h3 className="tl-role">{c.role}</h3>
                <p className="tl-org">{c.fullName}</p>
                <ul className="tl-points">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="chip-list">
                  {c.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className={`tl-item${companies.length % 2 ? " is-right" : ""}`}>
            <div className="tl-date">
              <span className="date-pill">{education.year}</span>
            </div>
            <div className="tl-body">
              <h3 className="tl-role">{education.degree}</h3>
              <p className="tl-org">
                {education.school}, {education.place}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="beyond-title">
        <SectionHeading id="beyond-title" label="Hors écran" title="Au-delà du code" size="medium" />
        <div className="hobby-grid">
          {HOBBIES.map((h) => (
            <article key={h.title} className="card hobby">
              <span className="bento-icon" aria-hidden="true">
                {h.icon}
              </span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <figure className="card quote">
          <span className="quote-mark open" aria-hidden="true">
            “
          </span>
          <blockquote>{quote.text}</blockquote>
          <p className="quote-translation">{quote.translation}</p>
          <figcaption>{quote.author}</figcaption>
          <span className="quote-mark close" aria-hidden="true">
            ”
          </span>
        </figure>
      </section>
    </div>
  );
}
