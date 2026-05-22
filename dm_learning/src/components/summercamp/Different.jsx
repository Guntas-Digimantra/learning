import React from "react";
import styles from "./Different.module.css";

const cards = [
  { icon: "fa-hand", label: "100% Hands-On", desc: "Every module is built around doing, not watching. No 40-minute PPT sessions. No passive note-taking." },
  { icon: "fa-ban", label: "Zero Boring Lectures", desc: "Learning happens through games, sprints, and challenges. If it isn't engaging, it isn't in our curriculum." },
  { icon: "fa-globe", label: "Industry-Relevant", desc: "Frameworks used by top companies, tools used by professionals — designed for the world students will actually enter." },
  { icon: "fa-certificate", label: "Verified Certificate", desc: "A digitally-signed, QR-verified certificate that documents actual skills — not just attendance." },
];

export default function Different() {
  return (
    <section id="different" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>

        {/* Top row */}
        <div className={`diff-top ${styles.top}`}>
          <div className="reveal-left">
            <div className={styles.eyebrow}>Why We&apos;re Different</div>
            <h2 className={styles.title}>
              <span>Thinking Over </span>{" "}
              <span className={styles.titleHighlight}>Memorising.</span>
            </h2>
            <p className={styles.sub}>We don&apos;t teach answers. We teach students how to approach problems, structure thinking, and find solutions using AI.</p>
          </div>
          <div className="reveal-right">
            <div className={styles.quote}>
              <p className={styles.quoteText}>&ldquo;An answer solves a single question, but the ability to think solves countless ones&rdquo;</p>
              <small className={styles.quoteAuthor}>— 8ucate</small>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className={`diff-cards ${styles.cards}`}>
          {cards.map((c) => (
            <div key={c.label} className={`diff-card reveal ${styles.card}`}>
              <div className={`diff-icon ${styles.icon}`}>
                <i className={`fa-solid ${c.icon}`} />
              </div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.desc}>{c.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
