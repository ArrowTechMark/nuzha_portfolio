import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Experience() {
  const responsibilities = [
    "Maintained and processed large-scale digital records with high accuracy and attention to detail.",
    "Collaborated with teams to ensure efficient document handling and workflow management.",
    "Improved data validation and verification processes to minimize operational errors.",
    "Developed strong analytical, communication, and organizational skills in a fast-paced environment."
  ];

  return (
    <section id="experience" className="section-light">
      <div className="container">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline-card card fade-up">
          <div className="timeline-icon">
            <WorkHistoryIcon />
          </div>

          <div>
            <h3>Data Entry Analyst Trainee</h3>
            <h4>Intelligent Image Management Lanka (Pvt.) Ltd. — Colombo 10</h4>
            <span className="date-pill">2024</span>

            <ul className="feature-list">
              {responsibilities.map((item, index) => (
                <li key={index}>
                  <CheckCircleIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
