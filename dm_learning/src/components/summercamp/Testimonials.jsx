import React from "react";
import styles from "./Testimonials.module.css";

const tests = [
  { cls: "t1", av: "P", name: "Priya Sharma", role: "Parent · New Delhi", text: "My son came home explaining \"first principles thinking\" to the whole family over dinner. I didn't know what that meant — but I could see he was genuinely excited about it. That was a first." },
  { cls: "t2", av: "A", name: "Arjun Mehta", role: "Student · Class 9 · Mumbai", text: "The AI demo completely changed how I see technology. I always thought AI was just chatting — I didn't know you could actually use it to solve real problems. Now I want to learn more." },
  { cls: "t3", av: "R", name: "Rekha Iyer", role: "School Teacher · Bengaluru", text: "As an educator, I was skeptical. By the end, I was taking notes for myself. The methodology is exceptional — students were engaged the entire 6 hours. That almost never happens." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={`fsc-section ${styles.section}`}>
      <div className={styles.container}>
        <div className={`reveal ${styles.head}`}>
          <div className={styles.eyebrow}>Social Proof</div>
          <h2 className={styles.title}>
            Families love it. <span className={styles.titleHighlight}>Students obsess over it.</span>
          </h2>
        </div>

        <div className={`testi-grid ${styles.grid}`}>
          {tests.map((t) => (
            <div key={t.name} className={`testi-card reveal ${styles.card}`}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={`${styles.avatar} ${styles[t.cls]}`}>{t.av}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
