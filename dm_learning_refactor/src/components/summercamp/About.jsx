import React from "react";

const featureIconStyles = {
  g1: "bg-[rgba(200,241,53,0.2)] text-[#a8d418]",
  g2: "bg-[rgba(255,107,71,0.12)] text-[#FF6B47]",
  g3: "bg-[rgba(78,203,245,0.12)] text-[#2aa8d4]",
  g4: "bg-[rgba(124,58,237,0.12)] text-[#7C3AED]",
};

const features = [
  {
    cls: "g1",
    icon: "fa-puzzle-piece",
    title: "AI-Driven Thinking Frameworks",
    desc: "Learn powerful mental models used by top innovators, now enhanced with AI to break down complex problems faster and smarter.",
  },
  {
    cls: "g2",
    icon: "fa-lightbulb",
    title: "Creative Problem Solving with AI",
    desc: "Move beyond memorisation. Use AI to explore ideas, structure solutions, and tackle open-ended challenges with clarity and confidence.",
  },
  {
    cls: "g3",
    icon: "fa-robot",
    title: "AI as a Thinking Partner",
    desc: "Understand how to use AI the right way, not as a shortcut, but as a tool to enhance thinking, creativity, and decision-making.",
  },
  {
    cls: "g4",
    icon: "fa-users",
    title: "Real-World Projects with AI",
    desc: "Work in teams on practical challenges, using AI tools to build, refine, and present solutions, just like in the real world.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
          <div className="reveal-left">
            <div className="mb-[18px] inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
              About the Program
            </div>
            <h2 className="mb-4 font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              Built for the{" "}
              <span className="ml-1 inline-block rounded-md bg-[#C8F135] px-2 py-0.5 font-extrabold text-[#111111]">
                AI-First
              </span>{" "}
              Generation
            </h2>
            <p className="max-w-[520px] text-[1.05rem] leading-[1.7] text-[#6b6555]">
              Schools are evolving to include new-age skills. This hackathon
              complements that by helping students apply thinking, creativity,
              and AI in real-world ways. Because in an AI-driven world, the
              ability to think clearly sets students apart.
            </p>
            <div className="mt-8 flex flex-col gap-3.5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3.5 rounded-[14px] border border-[#D8D3C8] bg-[#F5F2EB] p-4 px-[18px] transition-all duration-[250ms] hover:translate-x-1.5 hover:border-[#a8d418]"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-base ${featureIconStyles[f.cls]}`}
                  >
                    <i className={`fa-solid ${f.icon}`} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-[0.95rem] font-bold">{f.title}</h4>
                    <p className="text-[0.85rem] text-[#6b6555]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="relative mb-4 overflow-hidden rounded-[20px] bg-[#111111] p-10 text-white before:pointer-events-none before:absolute before:-top-10 before:-right-10 before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(200,241,53,0.15),transparent_70%)] before:content-[''] max-[480px]:px-5 max-[480px]:py-7">
              <div className="mb-1.5 text-[4.5rem] leading-none font-black tracking-[-0.05em] text-[#C8F135] max-[480px]:text-[3.5rem]">
                85%
              </div>
              <div className="text-base font-medium text-[rgba(255,255,255,0.5)]">
                of future jobs will evolve with AI, but thinking skills will
                always stay relevant.
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3.5 min-[700px]:grid-cols-2">
              {[
                ["1 Day", "Intensive Experience"],
                ["5–6 hrs", "Hands-on Learning"],
                ["Class 8–10", "Target Group"],
                ["No", "Coding Required"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-xl border border-[#D8D3C8] bg-[#F5F2EB] p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#a8d418]"
                >
                  <div className="text-[2rem] font-black tracking-[-0.04em] text-[#111111]">
                    {n}
                  </div>
                  <div className="mt-0.5 text-[0.78rem] text-[#6b6555]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
