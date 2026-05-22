import React from "react";
import styles from "./Parents.module.css";

const cards = [
  { icon: "🎯", title: "Career-Relevant, Right Now", desc: "AI and critical thinking are the top two skills employers will demand over the next decade. We start building them at the right age." },
  { icon: "🔒", title: "Safe, Guided AI Exposure", desc: "All AI tools are age-appropriate, supervised, and used as learning instruments. Students learn to use AI — not be used by it." },
  { icon: "🧩", title: "Builds 21st-Century Skills", desc: "Logic, reasoning, creativity, collaboration — these aren't soft skills anymore. They're the hardest skills to teach and the most valuable to have." },
  { icon: "📈", title: "Measurable Growth", desc: "Students leave with a verifiable certificate and a tangible shift in how they think — not just what they know. Results you can actually see." },
];

export default function Parents() {
  return (
    <section id="parents" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`parents-grid ${styles.grid}`}>

          {/* Left */}
          <div className="reveal-left">
            <div className={styles.eyebrow}>For Parents &amp; Teachers</div>
            <h2 className={styles.title}>Your biggest question, <span className={styles.titleHighlight}>answered.</span></h2>
            <p className={styles.sub}>We know you&apos;re thinking: &ldquo;Is this worth it? Is it safe? Will my child actually learn something?&rdquo; Yes, yes, and yes — here&apos;s why.</p>
            <div className={styles.quote}>
              &ldquo;The skills they&apos;ll build here — structured thinking, AI awareness, and confidence — are exactly what recruiters, universities, and life will demand from them in 5 years.&rdquo;
              <strong className={styles.quoteAuthor}>— Workshop Design Team, FutureSkills Camp</strong>
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right">
            <div className={`parents-cards ${styles.cards}`}>
              {cards.map((c) => (
                <div key={c.title} className={`parent-card ${styles.card}`}>
                  <span className={styles.cardIcon}>{c.icon}</span>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
