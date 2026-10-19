import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../../data/profile";
import ProjectPreview from "../previews/ProjectPreview";

export default function ProjectCard({
  project,
  onOpen,
  wide = false,
}: {
  project: Project;
  onOpen: (id: string) => void;
  wide?: boolean;
}) {
  return (
    <article className={`project-card pc-${project.preview}${wide ? " is-wide" : ""}`}>
      <button
        type="button"
        className="project-hit"
        onClick={() => onOpen(project.id)}
        aria-label={`${project.title} : ouvrir le niveau ${project.level} dans la console`}
      />
      <p className="project-meta">
        {project.category} <span aria-hidden="true">•</span> {project.year}
      </p>
      <div className="project-visual">
        <ProjectPreview kind={project.preview} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.short}</p>
      </div>
      <span className="project-cta" aria-hidden="true">
        Niveau {project.level} <FiArrowUpRight />
      </span>
    </article>
  );
}
