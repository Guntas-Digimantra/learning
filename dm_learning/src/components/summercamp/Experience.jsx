import React from "react";
import { Zap, Palette, Globe, Rocket } from "lucide-react";
import styles from "./Experience.module.css";

const blocks = [
  {
    cls: "b1",
    icon: Zap,
    gradId: "expGradB1",
    num: "Block 01",
    title: "AI-Powered Problem Solving",
    desc: "Get hands-on with real AI tools. Learn how to break down problems, write effective prompts, and critically evaluate AI outputs. AI isn't magic, it's a skill students learn to control.",
    tag: "AI Literacy"
  },
  {
    cls: "b2",
    icon: Palette,
    gradId: "expGradB2",
    num: "Block 02",
    title: "Creative Thinking with AI",
    desc: "Use AI to generate ideas, structure thoughts, and unlock creativity. Through design challenges and thinking sprints, students learn how imagination + AI = innovation.",
    tag: "Creativity"
  },
  {
    cls: "b3",
    icon: Globe,
    gradId: "expGradB3",
    num: "Block 03",
    title: "Real-World AI Challenges",
    desc: "Solve problems inspired by real-life scenarios from environment to technology. Students apply AI + structured thinking to build meaningful solutions.",
    tag: "Applied Thinking"
  },
  {
    cls: "b4",
    icon: Rocket,
    gradId: "expGradB4",
    num: "Block 04",
    title: "Build & Pitch with AI",
    desc: "Teams create a mini project using AI, then present their ideas with clarity and confidence. The day ends with a showcase where every student gets recognized.",
    tag: "Project-Based Learning"
  }
];

export default function Experience() {
  return (
    <section id="experience" className={`fsc-section ${styles.section}`}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="expGradB1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8f135" />
            <stop offset="100%" stopColor="#7db800" />
          </linearGradient>
          <linearGradient id="expGradB2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c69" />
            <stop offset="100%" stopColor="#e63000" />
          </linearGradient>
          <linearGradient id="expGradB3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ecbf5" />
            <stop offset="100%" stopColor="#0e8ab5" />
          </linearGradient>
          <linearGradient id="expGradB4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.container}>
        <div className={`reveal ${styles.head}`}>
          <div className={styles.eyebrow}>What Students Experience</div>
          <h2 className={styles.title}>4 AI-Powered Blocks.<br />Endless discovery.</h2>
          <p className={styles.sub}>Every session is built for doing, creating, and thinking with AI, no passive learning, only hands-on exploration.</p>
        </div>

        <div className={`exp-grid ${styles.grid}`}>
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className={`exp-card reveal ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.emoji}>
                    <Icon size={24} strokeWidth={2} stroke={`url(#${b.gradId})`} />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
                <span className={`${styles.tag} ${styles[b.cls]}`}>{b.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
