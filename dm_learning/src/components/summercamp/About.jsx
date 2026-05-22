import React from "react";
import styles from "./About.module.css";

const features = [
  {
    cls: "g1",
    icon: "fa-puzzle-piece",
    title: "AI-Driven Thinking Frameworks",
    desc: "Learn powerful mental models used by top innovators, now enhanced with AI to break down complex problems faster and smarter."
  },
  {
    cls: "g2",
    icon: "fa-lightbulb",
    title: "Creative Problem Solving with AI",
    desc: "Move beyond memorisation. Use AI to explore ideas, structure solutions, and tackle open-ended challenges with clarity and confidence."
  },
  {
    cls: "g3",
    icon: "fa-robot",
    title: "AI as a Thinking Partner",
    desc: "Understand how to use AI the right way, not as a shortcut, but as a tool to enhance thinking, creativity, and decision-making."
  },
  {
    cls: "g4",
    icon: "fa-users",
    title: "Real-World Projects with AI",
    desc: "Work in teams on practical challenges, using AI tools to build, refine, and present solutions, just like in the real world."
  }
];

export default function About() {
  return (
    <section id="about" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`about-grid ${styles.grid}`}>

          {/* Left */}
          <div className="reveal-left">
            <div className={styles.eyebrow}>About the Program</div>
            <h2 className={styles.title}>
              Built for the
              <span className={styles.titleHighlight}>AI-First</span>{" "}
              Generation
            </h2>
            <p className={styles.sub}>
              Schools are evolving to include new-age skills.
              This hackathon complements that by helping students apply thinking, creativity, and AI in real-world ways.
              Because in an AI-driven world, the ability to think clearly sets students apart.
            </p>
            <div className={styles.featureList}>
              {features.map((f) => (
                <div key={f.title} className={`af-item ${styles.featureItem}`}>
                  <div className={`${styles.featureIcon} ${styles[f.cls]}`}>
                    <i className={`fa-solid ${f.icon}`} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{f.title}</h4>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right">
            <div className={`big-stat-card ${styles.statCard}`}>
              <div className={styles.statNum}>85%</div>
              <div className={styles.statSub}>of future jobs will evolve with AI, but thinking skills will always stay relevant.</div>
            </div>
            <div className={`mini-cards-row ${styles.miniGrid}`}>
              {[["1 Day", "Intensive Experience"], ["5–6 hrs", "Hands-on Learning"], ["Class 8–10", "Target Group"], ["No", "Coding Required"]].map(([n, l]) => (
                <div key={l} className={`mini-card ${styles.miniCard}`}>
                  <div className={styles.miniCardNum}>{n}</div>
                  <div className={styles.miniCardLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
