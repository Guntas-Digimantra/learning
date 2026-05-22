import React from "react";
import { GraduationCap, Users, School } from "lucide-react";
import styles from "./Who.module.css";

const cards = [
  {
    cls: "c1",
    icon: GraduationCap,
    gradId: "whoGradC1",
    title: "Students (Classes 8–10)",
    desc: "You don't need to be a topper, a tech expert, or know anything about AI. Just bring curiosity and we'll show you how to think, build, and create with AI.",
    tags: ["Any stream", "No prior knowledge", "All levels"]
  },
  {
    cls: "c2",
    icon: Users,
    gradId: "whoGradC2",
    title: "Parents & Guardians",
    desc: "You want your child to stay ahead, not just in marks, but in thinking, confidence, and real-world skills. This hackathon introduces AI in a safe, guided, and meaningful way.",
    tags: ["Future-ready", "Safe environment", "Expert-led"]
  },
  {
    cls: "c3",
    icon: School,
    gradId: "whoGradC3",
    title: "Schools & Educators",
    desc: "Looking to bring AI-powered, practical learning to your students? This program complements traditional education with skills the future demands.",
    tags: ["Group programs", "Practical learning", "Future skills"]
  }
];

export default function Who() {
  return (
    <section id="who" className={`fsc-section ${styles.section}`}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="whoGradC1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8f135" />
            <stop offset="100%" stopColor="#7db800" />
          </linearGradient>
          <linearGradient id="whoGradC2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c69" />
            <stop offset="100%" stopColor="#e63000" />
          </linearGradient>
          <linearGradient id="whoGradC3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ecbf5" />
            <stop offset="100%" stopColor="#0e8ab5" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.container}>
        <div className={`reveal ${styles.head}`}>
          <div className={styles.eyebrow}>Who Should Attend</div>
          <h2 className={styles.title}>
            Built for <span className={styles.titleHighlight}>curious minds</span> in the age of AI.
          </h2>
          <p className={styles.sub}>Whether you&apos;re a student exploring the future, a parent making the right decision, or an educator shaping young minds, this experience is designed to deliver real, future-ready value.</p>
        </div>

        <div className={`who-grid ${styles.grid}`}>
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className={`who-card reveal ${styles.card}`}>
                <div className={`${styles.iconWrap} ${styles[c.cls]}`}>
                  <Icon size={28} strokeWidth={1.75} stroke={`url(#${c.gradId})`} />
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <div className={styles.tags}>
                  {c.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
