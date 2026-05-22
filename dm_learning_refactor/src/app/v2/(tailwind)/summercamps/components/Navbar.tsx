import Image from "next/image";
import Link from "@/components/ui/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(12px)",
        background: "rgba(18,20,40,.8)",
        borderBottom: "1px solid var(--white-10)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link style={{display:"flex", alignItems:"center"}} href="#">
          <Image
            src="/8ucate-logo-new.png"
            alt="8ucate logo"
            width={240}
            height={80}
            style={{
              height: 62,
              width: "auto",
              padding:"1px",
              borderRadius:"6px"
            }}
          />
        </Link>
        <nav
          className="sc-nav-links"
          style={{
            display: "flex",
            gap: "2.5rem",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          <Link href="#details" style={{ transition: ".2s" }}>Details</Link>
          <Link href="#camps" style={{ transition: ".2s" }}>Camps</Link>
        </nav>
        <Link
          href="#register"
          style={{
            display: "inline-block",
            padding: ".625rem 1.5rem",
            borderRadius: 9999,
            fontWeight: 600,
            background: "var(--brand)",
            color: "#fff",
            boxShadow: "0 10px 30px -10px var(--brand)",
            transition: ".2s",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Register Now
        </Link>
      </div>
    </header>
  );
}
