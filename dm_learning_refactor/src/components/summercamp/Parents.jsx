import React from "react";

const cards = [
  {
    icon: "🎯",
    title: "Career-Relevant, Right Now",
    desc: "AI and critical thinking are the top two skills employers will demand over the next decade. We start building them at the right age.",
  },
  {
    icon: "🔒",
    title: "Safe, Guided AI Exposure",
    desc: "All AI tools are age-appropriate, supervised, and used as learning instruments. Students learn to use AI — not be used by it.",
  },
  {
    icon: "🧩",
    title: "Builds 21st-Century Skills",
    desc: "Logic, reasoning, creativity, collaboration — these aren't soft skills anymore. They're the hardest skills to teach and the most valuable to have.",
  },
  {
    icon: "📈",
    title: "Measurable Growth",
    desc: "Students leave with a verifiable certificate and a tangible shift in how they think — not just what they know. Results you can actually see.",
  },
];

export default function Parents() {
  return (
    <section
      id="parents"
      className="relative bg-[#F5F2EB] py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[1fr_1.5fr]">
          <div className="reveal-left">
            <div className="mb-[18px] inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
              For Parents &amp; Teachers
            </div>
            <h2 className="mb-4 font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              Your biggest question,{" "}
              <span className="text-[#a8d418]">answered.</span>
            </h2>
            <p className="max-w-[520px] text-[1.05rem] leading-[1.7] text-[#6b6555]">
              We know you&apos;re thinking: &ldquo;Is this worth it? Is it safe?
              Will my child actually learn something?&rdquo; Yes, yes, and yes —
              here&apos;s why.
            </p>
            <div className="mt-5 rounded-[20px] border-l-4 border-[#C8F135] bg-[#111111] p-7 text-[1.05rem] leading-[1.65] text-white italic">
              &ldquo;The skills they&apos;ll build here — structured thinking,
              AI awareness, and confidence — are exactly what recruiters,
              universities, and life will demand from them in 5 years.&rdquo;
              <strong className="mt-3.5 block text-[0.8rem] font-normal tracking-[0.05em] text-[rgba(255,255,255,0.4)] not-italic uppercase">
                — Workshop Design Team, FutureSkills Camp
              </strong>
            </div>
          </div>

          <div className="reveal-right">
            <div className="grid grid-cols-1 gap-4 min-[900px]:grid-cols-2">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[20px] border border-[#D8D3C8] bg-white p-[22px] transition-all duration-[250ms] hover:-translate-y-1 hover:border-[#a8d418]"
                >
                  <span className="mb-3 block text-2xl">{c.icon}</span>
                  <h4 className="mb-1.5 text-[0.95rem] font-extrabold">
                    {c.title}
                  </h4>
                  <p className="text-[0.83rem] leading-[1.6] text-[#6b6555]">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
