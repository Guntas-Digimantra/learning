import Image from "next/image";

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

export default function Camps() {
  return (
    <section id="camps" className="sc-mobile-section" style={sectionAlt}>
      <div style={container}>
        <h2 style={{ ...h2Style, marginBottom: "3rem" }}>Choose the Right AI Camp for Your Child</h2>
        <div className="sc-auto-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem" }}>
          {[
            {
              img: "/explorers-camp.jpg", alt: "Young AI Creators",
              pill: "Age 10–13", pillCyan: true,
              title: "Young AI Creators",
              desc: "A fun and beginner-friendly introduction to Artificial Intelligence for young learners who love to explore, create, and experiment.",
              learns: ["Understand AI in simple terms", "Explore how AI learns and makes decisions", "Create images, stories, and content using AI", "Build a simple AI assistant", "Design a beginner-friendly AI webpage/project", "Present their final project with confidence"],
              chips: ["AI Story Creator", "AI Art Generator", "AI Homework Buddy", "AI Quiz Challenge"],
            },
            {
              img: "/innovators-camp.jpg", alt: "Future Builders Camp",
              pill: "Age 14–17", pillCyan: false,
              title: "Future Builders Camp",
              desc: "Designed for teens interested in technology, innovation, and future-ready skills.",
              learns: ["Understand AI tools and real-world applications", "Use Generative AI effectively", "Learn prompt writing techniques", "Build AI chatbots and smart assistants", "Solve practical challenges with AI", "Develop and showcase an AI mini project"],
              chips: ["AI Study Planner", "Career Guidance Bot", "Smart Learning Assistant", "AI Idea Generator"],
            },
          ].map((camp) => (
            <div key={camp.title} style={{ borderRadius: "1.5rem", overflow: "hidden", background: "var(--white-05)", border: "1px solid var(--white-10)", color: fg }}>
              <Image src={camp.img} alt={camp.alt} width={600} height={224} style={{ width: "100%", height: 224, objectFit: "cover" }} />
              <div style={{ padding: "1.5rem" }}>
                <span style={{
                  display: "inline-block", fontSize: ".75rem", fontWeight: 600, padding: ".25rem .75rem", borderRadius: 9999,
                  background: camp.pillCyan ? "rgba(96,165,250,.2)" : "rgba(165,158,255,.2)",
                  color: camp.pillCyan ? "var(--accent-cyan)" : "var(--accent-pink)",
                }}>{camp.pill}</span>
                <h3 style={{ fontFamily: "'Sora',sans-serif", marginTop: ".75rem", fontSize: "1.5rem", fontWeight: 700, color: fg }}>{camp.title}</h3>
                <p style={{ marginTop: ".5rem", opacity: .8, color: fg }}>{camp.desc}</p>
                <h4 style={{ marginTop: "1.25rem", fontWeight: 600, color: fg }}>Students will learn to</h4>
                <ul style={{ marginTop: ".5rem", listStyle: "none", fontSize: ".875rem", opacity: .9 }}>
                  {camp.learns.map(l => <li key={l} style={{ padding: ".125rem 0", color: fg }}>• {l}</li>)}
                </ul>
                <h4 style={{ marginTop: "1rem", fontWeight: 600, color: fg }}>Sample Projects</h4>
                <div style={{ marginTop: ".5rem", display: "flex", flexWrap: "wrap", gap: ".5rem", fontSize: ".875rem" }}>
                  {camp.chips.map(c => <span key={c} style={{ padding: ".25rem .75rem", borderRadius: 9999, background: "var(--white-10)", border: "1px solid var(--white-10)", color: fg }}>{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
