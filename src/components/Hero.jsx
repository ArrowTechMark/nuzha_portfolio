import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import VerifiedIcon from "@mui/icons-material/Verified";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      <div className="container hero-grid">
        <div className="hero-content fade-left">
          <span className="eyebrow">Software Engineer Portfolio</span>
          <h1>Fathima Nusha</h1>
          <h2>Software Engineer | Flutter Developer | Full-Stack Mobile App Developer</h2>

          <p>
            I build modern, scalable, and user-friendly mobile applications using Flutter,
            FastAPI, PostgreSQL, REST APIs, and clean software engineering practices.
          </p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="/cv/Fathima-Nusha-CV.pdf" download>
              <DownloadIcon /> Download CV
            </a>

            <a className="btn btn-outline-light" href="#projects">
              <WorkIcon /> View Projects
            </a>

            <a className="btn btn-outline-light" href="#contact">
              <EmailIcon /> Contact Me
            </a>
          </div>

          <div className="hero-highlights">
            <span><PhoneIphoneIcon /> Flutter Developer</span>
            <span><ApiIcon /> REST API Integration</span>
            <span><StorageIcon /> PostgreSQL & FastAPI</span>
            <span><VerifiedIcon /> Clean Architecture</span>
          </div>
        </div>

        <div className="profile-wrapper fade-right">
          <div className="profile-ring">
            <img
              src="/images/profile.jpeg"
              alt="Fathima Nusha"
              className="profile-img float-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
