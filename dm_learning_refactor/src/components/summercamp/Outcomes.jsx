import React from "react";

const outcomes = [
  {
    title: "Structured Decision Making",
    desc: "Learn to break complex problems into clear, manageable steps using logic and AI as support tools.",
  },
  {
    title: "Logical Reasoning & Root-Cause Thinking",
    desc: "Move beyond guesswork. Identify the real problem and solve it systematically with clarity.",
  },
  {
    title: "AI Awareness & Smart Usage",
    desc: "Understand when AI helps, when it misleads, and how to use AI intelligently not blindly.",
  },
  {
    title: "Clear Communication & Idea Pitching",
    desc: "Learn to present ideas with confidence to explain, defend, and articulate thinking effectively.",
  },
  {
    title: "Collaboration & Team Problem Solving",
    desc: "Work in teams, combine ideas, and solve challenges together just like in real-world environments.",
  },
  {
    title: "Future-Ready Confidence",
    desc: "The biggest outcome: students who feel confident facing new challenges because they know how to think, adapt, and use AI as an advantage.",
  },
];

export default function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative bg-white py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal-left">
            <div className="mb-[18px] inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
              Learning Outcomes
            </div>
            <h2 className="mb-4 font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              Skills, not just certificates.
              <br />
              <span className="text-[#a8d418]">Well… both.</span>
            </h2>
            <p className="max-w-[520px] text-[1.05rem] leading-[1.7] text-[#6b6555]">
              By the end of the day, students don&apos;t just walk away with a
              certificate, they walk away with a new way of thinking, building,
              and solving problems using AI.
            </p>
            <div className="mt-7 rounded-[20px] bg-[#C8F135] p-6 px-7 text-base leading-[1.65] text-[#111111]">
              <strong className="mb-2 block text-[0.75rem] font-bold tracking-[0.1em] uppercase">
                The Real Outcome?
              </strong>
              Students who say: &ldquo;I can figure this out.&rdquo; instead of
              &ldquo;I don&apos;t know where to start.&rdquo;
            </div>
          </div>

          <div className="reveal-right">
            <div className="flex flex-col">
              {outcomes.map((o, idx) => (
                <div
                  key={o.title}
                  className={`flex items-start gap-[18px] py-5 ${idx < outcomes.length - 1 ? "border-b border-[#D8D3C8]" : ""}`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8F135] text-[0.75rem] text-[#111111]">
                    <i className="fa-solid fa-check" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[0.95rem] font-extrabold">
                      {o.title}
                    </h4>
                    <p className="text-[0.85rem] leading-[1.6] text-[#6b6555]">
                      {o.desc}
                    </p>
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
