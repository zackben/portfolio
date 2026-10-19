import { FiDownload } from "react-icons/fi";
import meLarge from "../../assets/me-large.jpg";
import { bio, profile } from "../../data/profile";

export default function Intro() {
  return (
    <section className="wrap section intro" aria-labelledby="intro-title">
      <div className="intro-text">
        <h2 id="intro-title" className="intro-title">
          Développeur front-end.
          <span>Toujours curieux.</span>
        </h2>
        {bio.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <a className="btn btn-accent" href={profile.cv} download>
          <FiDownload aria-hidden="true" />
          Voir mon CV
        </a>
      </div>

      <figure className="intro-photo" tabIndex={0}>
        <img src={meLarge} alt={`Portrait de ${profile.fullName}`} width={900} height={900} loading="lazy" />
        <figcaption className="hand-note" aria-hidden="true">
          <span className="hover-only">passez la souris</span>
          <span className="touch-only">touchez la photo</span>
          <svg viewBox="0 0 60 70">
            <path d="M40 4 C 52 20, 50 44, 22 62" />
            <path d="M22 62 L 34 60 M22 62 L 26 50" />
          </svg>
        </figcaption>
      </figure>
    </section>
  );
}
