"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Icons } from "./Icons";

const testimonials = [
  {
    q: "The sessions were interactive and easy to follow. I enjoyed building projects and learning new AI tools.",
    n: "Student Participant",
    a: "Age 16",
  },
  {
    q: "A well-structured program with practical learning. The projects kept students engaged throughout.",
    n: "Student Participant",
    a: "Age 15",
  },
  {
    q: "A productive way for my child to spend the summer while learning something relevant and future-focused.",
    n: "Parent Feedback",
    a: "",
  },
  {
    q: "The trainers were supportive, and the learning experience was beginner-friendly and engaging.",
    n: "Parent Feedback",
    a: "",
  },
  {
    q: "Great balance of creativity, technology, and hands-on activities. My child really enjoyed the program.",
    n: "Parent Feedback",
    a: "",
  },
];

const TOTAL = testimonials.length;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number, direction: "left" | "right") => {
    setDir(direction);
    setIndex(next);
    setAnimKey((k) => k + 1);
  }, []);

  const prev = useCallback(() => {
    setIndex((prevIdx) => {
      const nextIdx = (prevIdx - 1 + TOTAL) % TOTAL;
      setDir("left");
      setAnimKey((k) => k + 1);
      return nextIdx;
    });
  }, []);

  const next = useCallback(() => {
    setIndex((prevIdx) => {
      const nextIdx = (prevIdx + 1) % TOTAL;
      setDir("right");
      setAnimKey((k) => k + 1);
      return nextIdx;
    });
  }, []);

  // Auto-advance every 4s, reset timer on manual interaction
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDir("right");
      setIndex((i) => (i + 1) % TOTAL);
      setAnimKey((k) => k + 1);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir("right");
      setIndex((i) => (i + 1) % TOTAL);
      setAnimKey((k) => k + 1);
    }, 4000);
  }, []);

  const handlePrev = useCallback(() => {
    prev();
    resetTimer();
  }, [prev, resetTimer]);

  const handleNext = useCallback(() => {
    next();
    resetTimer();
  }, [next, resetTimer]);

  const handleDot = useCallback((i: number) => {
    setIndex((prevIdx) => {
      setDir(i > prevIdx ? "right" : "left");
      setAnimKey((k) => k + 1);
      return i;
    });
    resetTimer();
  }, [resetTimer]);

  // 3 cards starting from index, wrapping
  const cards = [0, 1, 2].map((offset) => testimonials[(index + offset) % TOTAL]);

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <style>{`
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .t-card-enter-right { animation: slideFromRight 0.35s ease forwards; }
        .t-card-enter-left  { animation: slideFromLeft  0.35s ease forwards; }
        @media (max-width: 900px) { .t-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .t-grid { grid-template-columns: 1fr !important; } }
        .sc-testimonial-btn {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
          color: #fafafa;
          padding: 0;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
        .sc-testimonial-btn:hover {
          background: rgba(255,255,255,0.15);
        }
        .sc-testimonial-dot {
          height: 0.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: width 0.3s ease, background 0.3s ease;
          padding: 0;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
      `}</style>

      {/* Cards */}
      <div
        className="t-grid"
        key={animKey}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {cards.map((t, i) => (
          <div
            key={`${animKey}-${i}`}
            className={dir === "right" ? "t-card-enter-right" : "t-card-enter-left"}
            style={{
              animationDelay: `${i * 60}ms`,
              borderRadius: "1rem",
              padding: "1.75rem",
              background: "var(--white-05)",
              border: "1px solid var(--white-10)",
              display: "flex",
              flexDirection: "column",
              gap: ".75rem",
            }}
          >
            <div style={{ display: "flex", gap: 2, color: "var(--accent-yellow)" }}>
              {Array.from({ length: 5 }).map((_, j) => <Icons.Star key={j} />)}
            </div>
            <p style={{ fontSize: ".9rem", opacity: 0.9, lineHeight: 1.7, flexGrow: 1 }}>
              &ldquo;{t.q}&rdquo;
            </p>
            <div>
              <p style={{ fontWeight: 700, fontSize: ".9375rem" }}>{t.n}</p>
              <p style={{ fontSize: ".75rem", opacity: 0.65, marginTop: ".15rem" }}>{t.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "1.75rem" }}>
        <button
          type="button"
          aria-label="Previous"
          className="sc-testimonial-btn"
          onClick={handlePrev}
        >
          <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 404.43">
            <path d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z" />
          </svg>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="sc-testimonial-dot"
              style={{
                width: i === index ? "1.5rem" : ".5rem",
                background: i === index ? "var(--accent-yellow)" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          className="sc-testimonial-btn"
          onClick={handleNext}
        >
          <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 404.39">
            <path d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
