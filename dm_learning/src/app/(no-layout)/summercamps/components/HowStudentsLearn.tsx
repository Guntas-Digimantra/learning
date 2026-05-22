import { Icons } from "./Icons";

const fg = "var(--foreground)";
const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 1rem",
};
const sectionAlt: React.CSSProperties = {
  padding: "5rem 0",
  background: "hsl(230,45%,14%)",
  color: fg,
};
const card: React.CSSProperties = {
  borderRadius: "1rem",
  padding: "1.25rem",
  background: "var(--white-05)",
  border: "1px solid var(--white-10)",
  color: fg,
};
const h2Style: React.CSSProperties = {
  fontFamily: "'Sora', sans-serif",
  fontSize: "clamp(1.875rem, 5vw, 3rem)",
  fontWeight: 800,
  textAlign: "center",
  letterSpacing: "-.02em",
  color: fg,
};

export default function HowStudentsLearn() {
  return (
    <section className="sc-mobile-section sc-how-learn-section" style={sectionAlt}>
      <div style={container}>
        <h2 style={h2Style}>How Students <span style={{ color: "var(--accent-yellow)" }}>Learn</span></h2>
        <p style={{ textAlign: "center", marginTop: ".75rem", opacity: .8, maxWidth: 640, marginLeft: "auto", marginRight: "auto", color: fg }}>
          A practical and engaging learning experience where students explore, create, and build with AI.
        </p>
        <div className="sc-five-grid" style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1rem" }}>
          {[
            { title: "Live Learning Sessions", sub: "Interactive classes with guided learning and demonstrations" },
            { title: "Hands-on Activities", sub: "Practice concepts through exercises and real-time activities" },
            { title: "Build Projects", sub: "Work on beginner-friendly AI projects from idea to creation" },
            { title: "Collaborative Learning", sub: "Participate in group tasks, discussions, and challenges" },
            { title: "Project Showcase", sub: "Present final projects and share learnings with confidence" },
          ].map(({ title, sub }) => (
            <div key={title} style={{ ...card, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ color: "var(--accent-cyan)" }}><Icons.Sparkle /></div>
              <h4 style={{ marginTop: ".75rem", fontWeight: 700, color: fg }}>{title}</h4>
              <p style={{ marginTop: ".25rem", fontSize: ".875rem", opacity: .8, color: fg }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
