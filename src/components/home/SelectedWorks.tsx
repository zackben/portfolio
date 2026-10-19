import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { profile, projects } from "../../data/profile";
import { useOpenLevel } from "../../lib/useOpenLevel";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export default function SelectedWorks() {
  const openLevel = useOpenLevel();
  const featured = projects.filter((p) => p.featured).reverse();

  return (
    <section className="wrap section" aria-labelledby="works-title">
      <div className="head-row">
        <SectionHeading id="works-title" title="Projets phares">
          <p className="lead">
            Une sélection de parcours bancaires et de crédit construits par {profile.fullName}, du mobile au back-office.
          </p>
        </SectionHeading>
        <Link to="/projets" className="btn btn-white">
          Tous mes projets
          <FiChevronRight aria-hidden="true" />
        </Link>
      </div>

      <div className="works-grid">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={openLevel} />
        ))}
      </div>
    </section>
  );
}
