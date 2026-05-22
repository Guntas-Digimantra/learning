import React from "react";

const cards = [
  {
    icon: "fa-hand",
    label: "100% Hands-On",
    desc: "Every module is built around doing, not watching. No 40-minute PPT sessions. No passive note-taking.",
  },
  {
    icon: "fa-ban",
    label: "Zero Boring Lectures",
    desc: "Learning happens through games, sprints, and challenges. If it isn't engaging, it isn't in our curriculum.",
  },
  {
    icon: "fa-globe",
    label: "Industry-Relevant",
    desc: "Frameworks used by top companies, tools used by professionals — designed for the world students will actually enter.",
  },
  {
    icon: "fa-certificate",
    label: "Verified Certificate",
    desc: "A digitally-signed, QR-verified certificate that documents actual skills — not just attendance.",
  },
];

export default function Different() {
  return (
    <section
      id="different"
      className="relative bg-[#F5F2EB] py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="mb-[60px] grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal-left">
            <div className="mb-[18px] inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
              Why We&apos;re Different
            </div>
            <h2 className="mb-4 font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              <span>Thinking Over </span>{" "}
              <span className="text-[#a8d418]">Memorising.</span>
            </h2>
            <p className="max-w-[520px] text-[1.05rem] leading-[1.7] text-[#6b6555]">
              We don&apos;t teach answers. We teach students how to approach
              problems, structure thinking, and find solutions using AI.
            </p>
          </div>
          <div className="reveal-right">
            <div className="rounded-[20px] border-l-4 border-[#C8F135] bg-[#111111] p-8 text-white">
              <p className="text-[1.1rem] leading-[1.7] text-[rgba(255,255,255,0.8)] italic">
                &ldquo;An answer solves a single question, but the ability to
                think solves countless ones&rdquo;
              </p>
              <small className="mt-4 block text-[0.8rem] tracking-[0.05em] text-[rgba(255,255,255,0.35)] uppercase">
                — 8ucate
              </small>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[700px]:grid-cols-2 min-[1024px]:grid-cols-4 max-[480px]:gap-3">
          {cards.map((c) => (
            <div
              key={c.label}
              className="group reveal flex flex-col gap-3.5 rounded-[20px] border border-[#D8D3C8] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111111] hover:text-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-[480px]:p-[18px]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D8D3C8] bg-[#F5F2EB] text-[1.2rem] transition-all duration-300 group-hover:border-transparent group-hover:bg-[rgba(200,241,53,0.15)] group-hover:text-[#C8F135]">
                <i className={`fa-solid ${c.icon}`} />
              </div>
              <div className="text-[0.95rem] font-extrabold tracking-[-0.01em] transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
                {c.label}
              </div>
              <div className="text-[0.83rem] leading-[1.6] text-[#6b6555] transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
