"use client";
import React from "react";
import styles from "./Hero.module.css";
import { Brain } from "lucide-react";

function openRegisterModal(e) {
  e.preventDefault();
  if (typeof window !== "undefined" && window.__openRegisterModal) {
    window.__openRegisterModal();
  }
}

export default function Hero() {
  return (
    <section id="hero" className={`fsc-hero ${styles.section}`}>
      <div className={styles.bgText}>AI</div>
      <div className={`hdc1 ${styles.decorCircle1}`} />
      <div className={`hdc2 ${styles.decorCircle2}`} />

      <div className={styles.container}>
        <div className={`hero-inner ${styles.inner}`}>
          {/* Left column */}
          <div>
            <div className={styles.badge}>
              <span className={`pulse-dot ${styles.pulseDot}`} />
              AI Hackathon 2026 · Class 8th - 10th
            </div>

            <h1 className={styles.title}>
              Think <span className={styles.titleHighlight}>Smart</span>
              <br />
              with <em className={styles.titleItalic}>Artificial</em>
              <br />
              Intelligence.
            </h1>
            <p className={styles.descItalic}>
              An AI-Powered, Creation-First Learning Experience
            </p>
            <p className={styles.desc}>
              A powerful 1-day AI hackathon where students don&apos;t just learn
              AI; they use it to create, solve, and think independently. Build
              real-world problem-solving skills, logical thinking, and
              future-ready AI abilities that go beyond school learning
            </p>

            <div className={styles.actions}>
              <button
                onClick={openRegisterModal}
                className={`btn-primary ${styles.btnPrimary}`}
              >
                <i className="fa-solid fa-bolt" /> Register Now
              </button>
            </div>

            <div className={styles.tags}>
              {[
                "No Coding Required",
                "Certificate Included",
                "Limited Seats",
              ].map((t) => (
                <div key={t} className={styles.tag}>
                  <i className={`fa-solid fa-circle-check ${styles.tagIcon}`} />{" "}
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className={`hero-right ${styles.rightCol}`}>
            <div>
              <div className={`hero-card-main ${styles.card}`}>
                <div className={styles.cardLabel}>Future-Ready Session</div>
                <div className={`hcm-icon-ring ${styles.cardIconRing}`}>
                  <Brain size={32} strokeWidth={1.5} color="#111111" />
                </div>
                <div className={styles.cardTitle}>AI Hackathon Experience</div>
                <div className={styles.cardSub}>
                  Thinking Smart with AI. Build &amp; Create in 1 Day.
                </div>
                <div className={styles.statsGrid}>
                  {[
                    ["5–6", "Hours Session"],
                    ["1", "Certificate"],
                    ["4", "AI-Integrated Modules"],
                  ].map(([n, l]) => (
                    <div key={l} className={styles.statItem}>
                      <div className={styles.statNum}>{n}</div>
                      <div className={styles.statLabel}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
