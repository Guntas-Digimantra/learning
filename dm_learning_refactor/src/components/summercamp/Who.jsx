import React from "react";
import { GraduationCap, Users, School } from "lucide-react";

const iconWrapStyles = {
  c1: "bg-[rgba(200,241,53,0.1)] shadow-[0_0_0_1.5px_rgba(200,241,53,0.5),0_8px_24px_rgba(168,212,24,0.18)]",
  c2: "bg-[rgba(255,107,71,0.08)] shadow-[0_0_0_1.5px_rgba(255,107,71,0.4),0_8px_24px_rgba(255,107,71,0.15)]",
  c3: "bg-[rgba(78,203,245,0.08)] shadow-[0_0_0_1.5px_rgba(78,203,245,0.4),0_8px_24px_rgba(78,203,245,0.15)]",
};

const cards = [
  {
    cls: "c1",
    icon: GraduationCap,
    gradId: "whoGradC1",
    title: "Students (Classes 8–10)",
    desc: "You don't need to be a topper, a tech expert, or know anything about AI. Just bring curiosity and we'll show you how to think, build, and create with AI.",
    tags: ["Any stream", "No prior knowledge", "All levels"],
  },
  {
    cls: "c2",
    icon: Users,
    gradId: "whoGradC2",
    title: "Parents & Guardians",
    desc: "You want your child to stay ahead, not just in marks, but in thinking, confidence, and real-world skills. This hackathon introduces AI in a safe, guided, and meaningful way.",
    tags: ["Future-ready", "Safe environment", "Expert-led"],
  },
  {
    cls: "c3",
    icon: School,
    gradId: "whoGradC3",
    title: "Schools & Educators",
    desc: "Looking to bring AI-powered, practical learning to your students? This program complements traditional education with skills the future demands.",
    tags: ["Group programs", "Practical learning", "Future skills"],
  },
];

export default function Who() {
  return (
    <section
      id="who"
      className="relative bg-[#F5F2EB] py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <svg width="0" height="0" className="absolute">
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

      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="reveal mb-[60px] text-center">
          <div className="mb-[18px] inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
            Who Should Attend
          </div>
          <h2 className="mb-4 text-center font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
            Built for{" "}
            <span className="text-[#a8d418]">curious minds</span> in the age of
            AI.
          </h2>
          <p className="mx-auto max-w-[520px] text-center text-[1.05rem] leading-[1.7] text-[#6b6555]">
            Whether you&apos;re a student exploring the future, a parent making
            the right decision, or an educator shaping young minds, this
            experience is designed to deliver real, future-ready value.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="who-card reveal rounded-[32px] border border-[#D8D3C8] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a8d418] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              >
                <div
                  className={`mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] ${iconWrapStyles[c.cls]}`}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.75}
                    stroke={`url(#${c.gradId})`}
                  />
                </div>
                <h3 className="mb-2.5 text-[1.1rem] font-extrabold">
                  {c.title}
                </h3>
                <p className="mb-5 text-[0.87rem] leading-[1.65] text-[#6b6555]">
                  {c.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#D8D3C8] bg-[#F5F2EB] px-3.5 py-[5px] text-[0.72rem] font-bold tracking-[0.05em] text-[#6b6555]"
                    >
                      {t}
                    </span>
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
