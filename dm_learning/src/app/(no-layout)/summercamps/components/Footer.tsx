import Image from "next/image";

const fg = "var(--foreground)";
const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 1rem",
};

export default function Footer() {
  return (
    <footer style={{ padding: "2.5rem 0", borderTop: "1px solid var(--white-10)", color: fg }}>
      <div style={{ ...container, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <Image src="/8ucate-logo-new.png" alt="8ucate" width={140} height={62}
          style={{ height: 64, width: "auto", borderRadius: 6, padding: "4px" }} />
        <p style={{ fontSize: "1rem", opacity: .8, color: fg }}>© {new Date().getFullYear()} 8ucate·learning.digimantra.com</p>
      </div>
    </footer>
  );
}
