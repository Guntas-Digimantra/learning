import Link from "@/components/ui/link";

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
const h2Style: React.CSSProperties = {
  fontFamily: "'Sora', sans-serif",
  fontSize: "clamp(1.875rem, 5vw, 3rem)",
  fontWeight: 800,
  textAlign: "center",
  letterSpacing: "-.02em",
  color: fg,
};

export default function Cta() {
  return (
    <section className="sc-mobile-section" style={sectionBase}>
      <div style={{ ...container, maxWidth: 800, textAlign: "center" }}>
        <h2 style={h2Style}>Ready to Explore AI This Summer?</h2>
        <p style={{ marginTop: ".75rem", opacity: .8, color: fg }}>Give your child an opportunity to learn, create, and build with future-ready technology.</p>
        <Link
          href="#register"
          style={{ display: "inline-block", marginTop: "2rem", padding: "1rem 2rem", borderRadius: 9999, background: "var(--accent-pink)", color: "#fff", fontWeight: 700, fontSize: "1.125rem" }}
        >
          Enroll Now
        </Link>
        <p style={{ marginTop: ".75rem", fontSize: ".875rem", opacity: .8, color: fg, paddingTop: ".25rem" }}>
          Email us at{" "}
          <a href="mailto:learning@digimantra.com" style={{ color: fg, textDecoration: "underline" }}>
            learning@digimantra.com
          </a>
        </p>
      </div>
    </section>
  );
}
