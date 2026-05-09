import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-box fade-up">
        <span className="section-kicker light">Contact</span>
        <h2 className="section-title light-title">Let’s Build Something Amazing</h2>

        <p className="section-subtitle light-subtitle">
          I am open to internships, junior software engineering roles,
          freelance opportunities, and collaborative software development projects.
        </p>

        <div className="contact-info">
          <a href="mailto:fathimanusha1998@gmail.com">
            <EmailIcon /> fathimanusha1998@gmail.com
          </a>

          <a href="tel:+94779835230">
            <PhoneIcon /> +94 77 983 5230
          </a>

          <p>
            <LocationOnIcon /> Colombo, Sri Lanka
          </p>

          <a
            href="https://www.linkedin.com/in/fathima-nusha-fasan"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
