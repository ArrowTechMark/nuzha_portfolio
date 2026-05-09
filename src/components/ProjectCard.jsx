import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function ProjectCard({ project }) {
  return (
    <article className="card project-card fade-up">
      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} className="project-img" />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>

        <div className="tech-tags">
          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <p>{project.description}</p>

        <ul className="feature-list">
          {project.features.slice(0, 5).map((feature, index) => (
            <li key={index}>
              <CheckCircleIcon /> {feature}
            </li>
          ))}
        </ul>

        <button className="project-link">
          View Case Study <ArrowOutwardIcon />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
