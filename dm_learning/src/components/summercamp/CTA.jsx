"use client";
import React from "react";
import styles from "./CTA.module.css";

function openRegisterModal(e) {
  e.preventDefault();
  if (typeof window !== "undefined" && window.__openRegisterModal) {
    window.__openRegisterModal();
  }
}

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.container}>
        <div>
          <div className={styles.badge}>
            <i className="fa-solid fa-fire cta-urgency-blink" /> Registrations are open!
          </div>
          <h2 className={styles.title}>
            Ready to Build <br /> with AI?
          </h2>
          <p className={styles.description}>
            Step into an exclusive 1-day AI Hackathon designed for school students.
            A unique opportunity to experience AI-powered learning, real-world problem solving, and hands-on creation.
          </p>
          <button onClick={openRegisterModal} className={styles.button}>
            <i className="fa-solid fa-bolt" /> Register Now – It&apos;s Free!
          </button>
          <div className={styles.footnote}>
            One day · Real skill · Lasting impact
          </div>
        </div>
      </div>
    </section>
  );
}
