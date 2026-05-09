import BoltIcon from "@mui/icons-material/Bolt";
import DevicesIcon from "@mui/icons-material/Devices";
import ApiIcon from "@mui/icons-material/Api";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CodeIcon from "@mui/icons-material/Code";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

function WhyHireMe() {
  const reasons = [
    { icon: <DevicesIcon />, title: "Flutter Experience", text: "Hands-on experience building responsive mobile UIs and real-world application screens." },
    { icon: <ApiIcon />, title: "API Integration", text: "Understands REST API workflows, backend connectivity, authentication, and data handling." },
    { icon: <CodeIcon />, title: "Clean Code", text: "Focused on reusable components, clean architecture, and maintainable application structure." },
    { icon: <PsychologyIcon />, title: "Problem Solving", text: "Strong debugging mindset with experience improving software logic and stability." },
    { icon: <AutoFixHighIcon />, title: "Fast Learner", text: "Actively improving skills in AI, backend engineering, and advanced mobile development." },
    { icon: <BoltIcon />, title: "Job Ready", text: "Prepared for junior software engineering, Flutter developer, and internship opportunities." }
  ];

  return (
    <section className="section-soft">
      <div className="container">
        <span className="section-kicker">Why Hire Me?</span>
        <h2 className="section-title">Value I Bring</h2>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div className="card icon-card fade-up" key={index}>
              <div className="icon-badge">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;
