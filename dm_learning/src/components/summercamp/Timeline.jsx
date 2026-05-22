import React from "react";
import { Sun, Brain, Bot, UtensilsCrossed, Globe, Trophy } from "lucide-react";
import styles from "./Timeline.module.css";

const items = [
  { cls: "n1", icon: Sun, time: "09:00 – 09:30 AM", title: "Welcome & Ice Breaker Challenge", desc: "Fast-paced team game to warm up brains, break the ice, and get everyone talking. Energy from minute one." },
  { cls: "n2", icon: Brain, time: "09:30 – 11:00 AM", title: "Module 1: Logic & Thinking Frameworks", desc: "First-principles thinking, root-cause analysis, and decision trees. Taught through puzzles and interactive group exercises, not lectures." },
  { cls: "n3", icon: Bot, time: "11:00 AM – 12:30 PM", title: "Module 2: AI Exploration Lab", desc: "Students go hands-on with leading AI tools. Learn to prompt smarter, evaluate AI output critically, and use AI as a collaborator, not a crutch." },
  { cls: "n4", icon: UtensilsCrossed, time: "12:30 – 01:00 PM", title: "Lunch & Community Time", desc: "Recharge and connect with peers from different schools. Community-building is built into the schedule — not an afterthought." },
  { cls: "n5", icon: Globe, time: "01:00 – 02:30 PM", title: "Module 3: Real-World Problem Sprint", desc: "Teams receive a challenge brief inspired by real situations. Apply every framework learned and use AI as a thinking partner to develop a solution." },
  { cls: "n6", icon: Trophy, time: "02:30 – 04:00 PM", title: "Pitch Day + Certificate Ceremony", desc: "Teams present their solutions. Expert feedback, peer recognition, and a proper closing ceremony — because every achievement deserves to be celebrated.", last: true },
];

export default function Timeline() {
  return (
    <section id="timeline" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`reveal ${styles.head}`}>
          <div className={styles.eyebrow}>Workshop Flow</div>
          <h2 className={styles.title}>Your day, <span className={styles.titleHighlight}>mapped out.</span></h2>
          <p className={styles.sub}>Every hour is purpose-driven. No boring lectures, only discovery, hands-on doing, and real learning that builds future-ready skills.</p>
        </div>

        <div className={styles.wrap}>
          <div className={styles.grid}>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.title}>
                  <div className={styles.nodeCol}>
                    <div className={`${styles.node} ${styles[item.cls]}`}><Icon size={20} strokeWidth={2} /></div>
                    {!item.last && <div className={styles.connector} />}
                  </div>
                  <div className={`reveal ${styles.content}`}>
                    <div className={styles.time}>{item.time}</div>
                    <div className={`tl-card ${styles.card}`}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
