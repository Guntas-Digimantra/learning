import { Icons } from './Icons'

const fg = "var(--foreground)";
const container: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 1rem",
};
const sectionAlt: React.CSSProperties = {
    padding: "5rem 0",
    background: "hsl(230,45%,14%)",
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

export default function ProgramDetails() {
    return (
        <>
            <section id="details" className="sc-mobile-section" style={sectionAlt}>
                <div style={container}>
                    <h2 style={{ ...h2Style, marginBottom: "3rem" }}>Program Details</h2>

                    <div className="sc-program-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
                        {[
                            { icon: <Icons.Clock />, color: "var(--accent-cyan)", label: "DURATION", val: "2 Weeks" },
                            { icon: <Icons.Book />, color: "var(--accent-yellow)", label: "TOTAL LEARNING", val: "12 Hours" },
                            { icon: <Icons.Video />, color: "var(--accent-pink)", label: "SESSIONS", val: "6 Sessions" },
                            { icon: <Icons.Clock />, color: "var(--accent-cyan)", label: "PER SESSION", val: "2 Hours" },
                            { icon: <Icons.Calendar />, color: "var(--accent-yellow)", label: "SCHEDULE", val: "3 Classes/Week" },
                        ].map(({ icon, color, label, val }) => (
                            <div key={label} style={{ ...card, textAlign: "center" }}>
                                <div style={{ color, width: 28, height: 28, margin: "0 auto .75rem" }}>{icon}</div>
                                <p style={{ fontSize: ".75rem", fontWeight: 600, opacity: .7, letterSpacing: ".1em", color: fg }}>{label}</p>
                                <p style={{ fontSize: "1.125rem", fontWeight: 700, marginTop: ".25rem", color: fg }}>{val}</p>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(1.5rem,4vw,1.875rem)", fontWeight: 700, textAlign: "center", margin: "3.75rem 0 2rem", color: fg }}>
                        What Students Will Create
                    </h3>

                    <div className="sc-three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
                        {[
                            { icon: <Icons.Bot size={40} />, label: "AI Assistant", color: "var(--accent-cyan)" },
                            { icon: <Icons.Image size={40} />, label: "AI Art & Image Creation", color: "var(--accent-pink)" },
                            { icon: <Icons.Rocket size={40} />, label: "Mini Innovation Projects", color: "var(--accent-yellow)" },
                        ].map(({ icon, label, color }) => (
                            <div key={label} style={{ borderRadius: "1rem", padding: "1.5rem", background: "linear-gradient(135deg,var(--white-10),var(--white-05))", border: "1px solid var(--white-10)", color: fg, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                <div style={{ color }}>{icon}</div>
                                <h4 style={{ marginTop: "1rem", fontSize: "1.25rem", fontWeight: 700, color: fg }}>{label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
