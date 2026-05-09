import { skillGroups } from "../data/skills";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Skills() {
  return (
    <section id="skills" className="section-soft">
      <div className="container">
        <span className="section-kicker">Technical Stack</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A focused technology stack for mobile development, backend integration,
          database management, and professional software engineering workflows.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="card skill-box fade-up" key={index}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill, i) => (
                  <li key={i}>
                    <CheckCircleIcon /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
