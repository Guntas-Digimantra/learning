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

  const handleDot = useCallback(
    (i: number) => {
      setIndex((prevIdx) => {
        setDir(i > prevIdx ? "right" : "left");
        setAnimKey((k) => k + 1);
        return i;
      });
      resetTimer();
    },
    [resetTimer],
  );

  const cards = [0, 1, 2].map((offset) => testimonials[(index + offset) % TOTAL]);
  const enterAnim =
    dir === "right"
      ? "animate-[sc-slide-from-right_0.35s_ease_forwards]"
      : "animate-[sc-slide-from-left_0.35s_ease_forwards]";

  return (
    <div className="mt-10">
      <div
        key={animKey}
        className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1"
      >
        {cards.map((t, i) => (
          <div
            key={`${animKey}-${i}`}
            className={`flex flex-col gap-3 rounded-2xl border border-(--white-10) bg-(--white-05) p-7 ${enterAnim}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex gap-0.5 text-(--accent-yellow)">
              {Array.from({ length: 5 }).map((_, j) => (
                <Icons.Star key={j} />
              ))}
            </div>
            <p className="grow text-[0.9rem] leading-[1.7] text-(--foreground) opacity-90">
              &ldquo;{t.q}&rdquo;
            </p>
            <div>
              <p className="text-[0.9375rem] font-bold text-(--foreground)">{t.n}</p>
              <p className="mt-0.5 text-xs text-(--foreground) opacity-65">{t.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          className="flex h-11 w-11 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border border-white/15 bg-white/10 p-0 text-[#fafafa] transition-colors duration-200 outline-none hover:bg-white/15"
          onClick={handlePrev}
        >
          <svg fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 404.43">
            <path d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 cursor-pointer appearance-none rounded-full border-0 p-0 outline-none transition-[width,background] duration-300 ease-out"
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
          className="flex h-11 w-11 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border border-white/15 bg-white/10 p-0 text-[#fafafa] transition-colors duration-200 outline-none hover:bg-white/15"
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
