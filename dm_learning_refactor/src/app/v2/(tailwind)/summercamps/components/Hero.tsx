import RegisterForm from "./RegisterForm";

const fg = "var(--foreground)";
const container: React.CSSProperties = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 1rem",
};

export default function Hero() {
  return (
    <section
      className="sc-hero-banner"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, hsl(235,60%,10%), hsl(230,45%,14%))",
        padding: "4rem 0 3rem",
        color: fg,
      }}
    >
      {/* radial glows */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, opacity: .2, pointerEvents: "none",
          background:
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,.4), transparent 40%)," +
            "radial-gradient(circle at 80% 60%, rgba(96,165,250,.3), transparent 50%)",
        }}
      />
      <div
        className="sc-hero-grid"
        style={{
          ...container,
          position: "relative",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left copy */}
        <div>
          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: 800,
              letterSpacing: "-.02em",
              lineHeight: 1.15,
              color: fg,
            }}
          >
            AI Summer Camp 2026{" "}
            <span style={{ color: "var(--accent-yellow)" }}>Turn Curiosity into AI Creation</span>{" "}
            <span style={{ color: "var(--accent-cyan)", display: "block" }}>
              No Coding Needed
            </span>
          </h1>

          <p style={{ marginTop: "1rem", fontSize: "1.125rem", fontWeight: 600, color: fg }}>
            For Young Innovators (Age 10–17)
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: ".75rem", fontSize: ".875rem" }}>
            {["Beginner Friendly", "Expert-Led Live Classes", "Hands-on AI Projects", "Laptop/Desktop Required"].map(tag => (
              <span key={tag} style={{ padding: ".5rem 1rem", borderRadius: 9999, background: "var(--white-10)", border: "1px solid var(--white-15)", color: fg }}>{tag}</span>
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <span style={{ fontSize: "1.5rem", textDecoration: "line-through", opacity: .6, color: fg }}>₹2,599</span>
            <span style={{ fontSize: "clamp(3rem,8vw,3.75rem)", fontWeight: 800, color: "var(--accent-yellow)" }}>₹699</span>
            <span style={{ padding: ".5rem .75rem", borderRadius: 9999, border: "1px solid var(--accent-pink)", color: "var(--accent-pink)", fontSize: ".75rem", fontWeight: 700 }}>Summer Offer</span>
          </div>

          <p style={{ marginTop: ".5rem", fontSize: ".875rem", opacity: .8, color: fg }}>One-time · No hidden charges</p>

          <div style={{ marginTop: "2rem", padding: "1.25rem", borderRadius: "1rem", background: "var(--white-05)", border: "1px solid var(--white-10)", textAlign: "center" }}>
            <p style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>Limited Seats Available</p>
            <p style={{ fontSize: ".875rem", marginTop: ".25rem", opacity: .9, color: fg }}>June Batch Now Open</p>
            <p style={{ marginTop: ".5rem", color: "var(--accent-cyan)", fontWeight: 600 }}>Build future-ready AI skills this summer</p>
          </div>

          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem", fontSize: ".875rem", fontWeight: 500, flexWrap: "wrap", color: fg }}>
            <span>✔ Expert Mentorship</span>
            <span>✔ Future-Focused Learning Experience</span>
          </div>
        </div>

        {/* Registration form */}
        <RegisterForm />
      </div>
    </section>
  );
}
