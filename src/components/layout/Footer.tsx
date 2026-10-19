import { Link } from "react-router-dom";
import me from "../../assets/me.jpg";
import { profile } from "../../data/profile";
import { NAV } from "../../lib/nav";
import { SOCIALS } from "../ui/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-label">Me contacter</p>
          <a className="footer-mail" href={`mailto:${profile.email}`}>
            <img src={me} alt="" width={52} height={52} />
            <span>{profile.email}</span>
          </a>
          <p className="footer-note">Ouvert aux opportunités, aux missions et aux collaborations autour de React.</p>
        </div>

        <div>
          <p className="footer-label">Navigation</p>
          <ul className="footer-nav">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <a href={profile.cv} download>
                CV
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Réseaux</p>
          <ul className="footer-socials">
            {SOCIALS.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap footer-giant" aria-hidden="true">
        <span>{profile.lastName}</span>
        <small>©{new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
