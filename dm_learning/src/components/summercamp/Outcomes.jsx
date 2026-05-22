import React from "react";
import styles from "./Outcomes.module.css";

const outcomes = [
  {
    title: "Structured Decision Making",
    desc: "Learn to break complex problems into clear, manageable steps using logic and AI as support tools."
  },
  {
    title: "Logical Reasoning & Root-Cause Thinking",
    desc: "Move beyond guesswork. Identify the real problem and solve it systematically with clarity."
  },
  {
    title: "AI Awareness & Smart Usage",
    desc: "Understand when AI helps, when it misleads, and how to use AI intelligently not blindly."
  },
  {
    title: "Clear Communication & Idea Pitching",
    desc: "Learn to present ideas with confidence to explain, defend, and articulate thinking effectively."
  },
  {
    title: "Collaboration & Team Problem Solving",
    desc: "Work in teams, combine ideas, and solve challenges together just like in real-world environments."
  },
  {
    title: "Future-Ready Confidence",
    desc: "The biggest outcome: students who feel confident facing new challenges because they know how to think, adapt, and use AI as an advantage."
  }
];

export default function Outcomes() {
  return (
    <section id="outcomes" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`outcomes-wrap ${styles.wrap}`}>

          {/* Left */}
          <div className="reveal-left">
            <div className={styles.eyebrow}>Learning Outcomes</div>
            <h2 className={styles.title}>
              Skills, not just certificates.<br />
              <span className={styles.highlight}>Well… both.</span>
            </h2>
            <p className={styles.sub}>By the end of the day, students don&apos;t just walk away with a certificate, they walk away with a new way of thinking, building, and solving problems using AI.</p>
            <div className={styles.callout}>
              <strong className={styles.calloutLabel}>The Real Outcome?</strong>
              Students who say: &ldquo;I can figure this out.&rdquo; instead of &ldquo;I don&apos;t know where to start.&rdquo;
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right">
            <div className={styles.list}>
              {outcomes.map((o, idx) => (
                <div
                  key={o.title}
                  className={`${styles.listItem} ${idx < outcomes.length - 1 ? styles.listItemBordered : ""}`}
                >
                  <div className={styles.listIcon}>
                    <i className="fa-solid fa-check" />
                  </div>
                  <div>
                    <h4 className={styles.listTitle}>{o.title}</h4>
                    <p className={styles.listDesc}>{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
