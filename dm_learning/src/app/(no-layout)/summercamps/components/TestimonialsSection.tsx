"use client";
import Testimonials from "./Testimonials";

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
const h2Style: React.CSSProperties = {
  fontFamily: "'Sora', sans-serif",
  fontSize: "clamp(1.875rem, 5vw, 3rem)",
  fontWeight: 800,
  textAlign: "center",
  letterSpacing: "-.02em",
  color: fg,
};

export default function TestimonialsSection() {
  return (
    <section className="sc-mobile-section" style={sectionAlt}>
      <div style={container}>
        <h2 style={h2Style}>Parent & Student Feedback</h2>
        <p style={{ textAlign: "center", marginTop: ".75rem", opacity: .8, color: fg }}>See what learners and parents loved about their AI learning experience</p>
        <Testimonials />
      </div>
    </section>
  );
}
