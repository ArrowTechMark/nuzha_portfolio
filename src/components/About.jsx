import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HubIcon from "@mui/icons-material/Hub";
import ApiIcon from "@mui/icons-material/Api";
import ArchitectureIcon from "@mui/icons-material/Architecture";

function About() {
  const highlights = [
    { icon: <SmartphoneIcon />, title: "Flutter Mobile Development" },
    { icon: <HubIcon />, title: "Full-Stack Application Development" },
    { icon: <ApiIcon />, title: "REST API Integration" },
    { icon: <ArchitectureIcon />, title: "Clean Architecture" }
  ];

  return (
    <section id="about" className="section-light">
      <div className="container">
        <span className="section-kicker">About Me</span>
        <h2 className="section-title">Building Useful Mobile Experiences</h2>

        <p className="section-subtitle">
          I am an aspiring Software Engineer with hands-on experience in Flutter mobile
          application development and backend technologies including FastAPI and PostgreSQL.
          I enjoy building modern digital solutions that solve real-world problems through
          clean architecture, responsive interfaces, and scalable systems.
        </p>

        <p className="section-subtitle">
          I have developed multiple mobile applications including financial management
          systems, restaurant ordering apps, eCommerce platforms, salon booking applications,
          and fitness tracking systems. My experience includes frontend mobile development,
          API integration, authentication systems, database connectivity, and UI/UX implementation.
        </p>

        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <div className="card icon-card fade-up" key={index}>
              <div className="icon-badge">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
