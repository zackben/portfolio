import { profile } from "../../data/profile";
import RotatingBadge from "../ui/RotatingBadge";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <p className="hero-tag">{profile.tagline}</p>
      <h1 id="hero-name" className="hero-name" aria-label={profile.fullName}>
        <span aria-hidden="true">{profile.firstName}</span>
        <span aria-hidden="true">{profile.lastName}</span>
      </h1>
      <div className="hero-badge">
        <RotatingBadge text={profile.available} />
      </div>
    </section>
  );
}
