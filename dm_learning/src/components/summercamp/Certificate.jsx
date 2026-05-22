"use client";
import React from "react";
import Image from "next/image";
import styles from "./Certificate.module.css";

const perks = [
  "Digitally signed and shareable on LinkedIn & portfolios",
  "QR code verified — can't be faked, can't be ignored",
  "Documents specific skills: logic, AI literacy, collaboration",
  "Recognised by partner schools for extracurricular records",
  "Gives students confidence to own their achievements",
];

export default function Certificate() {
  return (
    <section id="certificate" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`cert-layout ${styles.layout}`}>

          {/* Left: copy */}
          <div className="reveal-left">
            <div className={styles.eyebrow}>Certification</div>
            <h2 className={styles.title}>
              A certificate that{" "}
              <span className={styles.titleHighlight}>actually means something.</span>
            </h2>
            <p className={styles.sub}>
              This isn&apos;t a participation sticker. It&apos;s proof of real skill-building —
              verifiable, shareable, and genuinely impressive on any portfolio.
            </p>
            <div className={styles.perkList}>
              {perks.map((p) => (
                <div key={p} className={styles.perkItem}>
                  <span className={styles.perkIcon}>
                    <i className="fa-solid fa-check" />
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Right: certificate image */}
          <div className="reveal-right">
            <div className={styles.certImgWrap}>
              <Image
                src="/certificate.png"
                alt="Certificate of Participation - AI Hackathon"
                width={600}
                height={424}
                className={styles.certImg}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
