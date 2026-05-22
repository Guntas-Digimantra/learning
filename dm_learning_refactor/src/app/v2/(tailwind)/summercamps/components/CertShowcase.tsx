import { Icons } from "./Icons";

const fg = "var(--foreground)";
const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 1rem",
};
const sectionBase: React.CSSProperties = {
  padding: "5rem 0",
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

export default function CertShowcase() {
  return (
    <section className="sc-mobile-section" style={sectionBase}>
      <div style={{ ...container, maxWidth: 900, textAlign: "center" }}>
        <h2 style={h2Style}>Show What You Built</h2>
        <p style={{ marginTop: ".75rem", opacity: .8, color: fg }}>Students present their final AI project and share what they built during the camp. Each participant receives a Certificate of Completion after successfully finishing the program.</p>
        <div className="sc-three-grid" style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {[
            { icon: <Icons.Trophy size={40} />, color: "var(--accent-yellow)", label: "Confidence Building" },
            { icon: <Icons.Msg size={40} />, color: "var(--accent-cyan)", label: "Communication Skills" },
            { icon: <Icons.Bulb size={40} />, color: "var(--accent-pink)", label: "Creative Thinking" },
          ].map(({ icon, color, label }) => (
            <div key={label} style={card}>
              <div style={{ color, display: "flex", justifyContent: "center" }}>{icon}</div>
              <p style={{ marginTop: ".75rem", fontWeight: 700, color: fg }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
