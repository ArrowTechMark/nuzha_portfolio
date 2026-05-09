import SchoolIcon from "@mui/icons-material/School";

function Education() {
  const education = [
    {
      title: "Advanced Program in Professional AI & Software Engineering",
      place: "C-Clarke International Institute",
      period: "2025 – 2026"
    },
    {
      title: "Higher National Diploma (HND) in Information Technology",
      place: "SLIATE",
      period: "2022 – 2024"
    },
    {
      title: "Bachelor of Arts (BA)",
      place: "University of Peradeniya",
      period: "2025 – 2026"
    }
  ];

  return (
    <section id="education" className="section-light">
      <div className="container">
        <span className="section-kicker">Education</span>
        <h2 className="section-title">Academic Background</h2>

        <div className="education-grid">
          {education.map((item, index) => (
            <div className="card education-card fade-up" key={index}>
              <div className="icon-badge">
                <SchoolIcon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <span className="date-pill">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
