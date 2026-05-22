import Image from "next/image";

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

export default function Why() {
  return (
    <section className="sc-mobile-section" style={sectionBase}>
      <div style={container}>
        <h2 style={h2Style}>How This Camp Helps Your Child</h2>
        <p style={{ textAlign: "center", marginTop: ".75rem", opacity: .8, color: fg }}>More than just screen time, it is a productive summer learning experience.</p>

        <div className="sc-five-grid" style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1rem" }}>
          {[
            { n: "1", title: "Explore New Technology", p: "Get introduced to the world of Artificial Intelligence." },
            { n: "2", title: "Learn by Doing", p: "Hands-on activities and practical project work." },
            { n: "3", title: "Boost Creativity", p: "Use AI tools to create images, content, and projects." },
            { n: "4", title: "Improve Thinking Skills", p: "Encourage curiosity, logic, and innovation." },
            { n: "5", title: "Build Confidence", p: "Learn to present and communicate ideas effectively." },
          ].map(({ n, title, p }) => (
            <div key={n} style={{ ...card, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: 9999, background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff" }}>{n}</div>
              <h4 style={{ marginTop: ".75rem", fontWeight: 700, color: fg }}>{title}</h4>
              <p style={{ marginTop: ".25rem", fontSize: ".875rem", opacity: .8, color: fg }}>{p}</p>
            </div>
          ))}
        </div>

        <div className="sc-auto-grid" style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2.5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: ".875rem", textTransform: "uppercase", letterSpacing: ".2em", opacity: .7, color: fg }}>By the End of the Camp</p>
            <h3 style={{ fontFamily: "'Sora',sans-serif", marginTop: ".5rem", fontSize: "clamp(1.875rem,5vw,2.25rem)", fontWeight: 800, color: fg }}>Students will understand, use, and create with <span style={{ color: "var(--accent-cyan)" }}>AI confidently</span> </h3>
          </div>
          <Image
            src="/ai-creators.jpg"
            alt="AI creators"
            width={600} height={400}
            style={{ borderRadius: "1.5rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,.5)", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
