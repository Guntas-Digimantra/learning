'use client';

import Image from 'next/image';

const PARTNER_LOGOS = [
  '/collaborations/ctu.svg',
  '/collaborations/cgc.svg',
  '/collaborations/ct-group.svg',
  '/collaborations/shoolini.svg',
  '/collaborations/iitr.svg',
  '/collaborations/cgc-j.png',
  '/collaborations/dbu.png',
  '/collaborations/chitkara.png',
  '/collaborations/mau.png',
  '/collaborations/pct.png',
  '/collaborations/mmk.png',
];

export default function CollaborationsSection() {
  return (
    <section
      className="home-collaborations-section"
      style={{
        padding: "60px 0",
        overflow: "hidden",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 40,
          marginTop: 0,
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        OUR <span style={{ color: "#fc8b20" }}>COLLABORATIONS</span>
      </h2>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "clamp(3rem, 10vw, 12rem)",
            zIndex: 10,
            pointerEvents: "none",
            background: "linear-gradient(to right, #fff, transparent)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "clamp(3rem, 10vw, 12rem)",
            zIndex: 10,
            pointerEvents: "none",
            background: "linear-gradient(to left, #fff, transparent)",
          }}
        />
        <div
          className="collab-track animate-collab-scroll"
          style={{
            display: "flex",
            gap: 60,
            width: "max-content",
          }}
        >
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 180,
                height: 80,
              }}
            >
              <Image
                src={src}
                alt=""
                width={180}
                height={80}
                unoptimized
                style={{ objectFit: "contain", opacity: 0.8 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
