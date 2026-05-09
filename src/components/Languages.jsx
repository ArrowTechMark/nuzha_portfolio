import TranslateIcon from "@mui/icons-material/Translate";

function Languages() {
  const languages = [
    "Tamil — Native",
    "English — Professional Working Proficiency",
    "Sinhala — Conversational",
    "Arabic — Reading & Writing"
  ];

  return (
    <section className="section-light">
      <div className="container">
        <span className="section-kicker">Languages</span>
        <h2 className="section-title">Communication Skills</h2>

        <div className="language-grid">
          {languages.map((language, index) => (
            <div className="card language-card fade-up" key={index}>
              <TranslateIcon />
              <span>{language}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
