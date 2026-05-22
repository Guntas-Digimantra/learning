import React from "react";
import { Zap, Palette, Globe, Rocket } from "lucide-react";

const tagStyles = {
  b1: "bg-[rgba(200,241,53,0.2)] text-[#a8d418]",
  b2: "bg-[rgba(255,107,71,0.1)] text-[#FF6B47]",
  b3: "bg-[rgba(78,203,245,0.1)] text-[#2aa8d4]",
  b4: "bg-[rgba(124,58,237,0.1)] text-[#7C3AED]",
};

const blocks = [
  {
    cls: "b1",
    icon: Zap,
    gradId: "expGradB1",
    title: "AI-Powered Problem Solving",
    desc: "Get hands-on with real AI tools. Learn how to break down problems, write effective prompts, and critically evaluate AI outputs. AI isn't magic, it's a skill students learn to control.",
    tag: "AI Literacy",
  },
  {
    cls: "b2",
    icon: Palette,
    gradId: "expGradB2",
    title: "Creative Thinking with AI",
    desc: "Use AI to generate ideas, structure thoughts, and unlock creativity. Through design challenges and thinking sprints, students learn how imagination + AI = innovation.",
    tag: "Creativity",
  },
  {
    cls: "b3",
    icon: Globe,
    gradId: "expGradB3",
    title: "Real-World AI Challenges",
    desc: "Solve problems inspired by real-life scenarios from environment to technology. Students apply AI + structured thinking to build meaningful solutions.",
    tag: "Applied Thinking",
  },
  {
    cls: "b4",
    icon: Rocket,
    gradId: "expGradB4",
    title: "Build & Pitch with AI",
    desc: "Teams create a mini project using AI, then present their ideas with clarity and confidence. The day ends with a showcase where every student gets recognized.",
    tag: "Project-Based Learning",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#F5F2EB] py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <svg width="0" height="0" className="absolute">
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

      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="reveal mb-[60px] text-center">
          <div className="mb-[18px] inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
            What Students Experience
          </div>
          <h2 className="mb-4 text-center font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
            4 AI-Powered Blocks.
            <br />
            Endless discovery.
          </h2>
          <p className="mx-auto max-w-[520px] text-center text-[1.05rem] leading-[1.7] text-[#6b6555]">
            Every session is built for doing, creating, and thinking with AI, no
            passive learning, only hands-on exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-2">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="reveal relative overflow-hidden rounded-[20px] border border-[#D8D3C8] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex shrink-0 items-center justify-center">
                    <Icon size={24} strokeWidth={2} stroke={`url(#${b.gradId})`} />
                  </span>
                </div>
                <h3 className="mb-2.5 text-[1.15rem] font-extrabold tracking-[-0.02em]">
                  {b.title}
                </h3>
                <p className="mb-5 text-[0.88rem] leading-[1.65] text-[#6b6555]">
                  {b.desc}
                </p>
                <span
                  className={`inline-block rounded-full px-3.5 py-[5px] text-[0.7rem] font-bold tracking-[0.08em] uppercase ${tagStyles[b.cls]}`}
                >
                  {b.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
