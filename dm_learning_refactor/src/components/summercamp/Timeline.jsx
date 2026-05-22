import React from "react";
import { Sun, Brain, Bot, UtensilsCrossed, Globe, Trophy } from "lucide-react";

const nodeStyles = {
  n1: {
    className: "bg-[#C8F135] text-[#111111]",
    style: { "--node-pulse-color": "rgba(200, 241, 53, 0.55)" },
  },
  n2: {
    className: "bg-[#111111] text-[#C8F135]",
    style: { "--node-pulse-color": "rgba(17, 17, 17, 0.45)" },
  },
  n3: {
    className: "bg-[#FF6B47] text-white",
    style: { "--node-pulse-color": "rgba(255, 107, 71, 0.5)" },
  },
  n4: {
    className: "bg-[#4ECBF5] text-[#111111]",
    style: { "--node-pulse-color": "rgba(78, 203, 245, 0.5)" },
  },
  n5: {
    className: "bg-[#7C3AED] text-white",
    style: { "--node-pulse-color": "rgba(124, 58, 237, 0.5)" },
  },
  n6: {
    className: "bg-[#111111] text-[#C8F135]",
    style: { "--node-pulse-color": "rgba(17, 17, 17, 0.45)" },
  },
};

const items = [
  {
    cls: "n1",
    icon: Sun,
    time: "09:00 – 09:30 AM",
    title: "Welcome & Ice Breaker Challenge",
    desc: "Fast-paced team game to warm up brains, break the ice, and get everyone talking. Energy from minute one.",
  },
  {
    cls: "n2",
    icon: Brain,
    time: "09:30 – 11:00 AM",
    title: "Module 1: Logic & Thinking Frameworks",
    desc: "First-principles thinking, root-cause analysis, and decision trees. Taught through puzzles and interactive group exercises, not lectures.",
  },
  {
    cls: "n3",
    icon: Bot,
    time: "11:00 AM – 12:30 PM",
    title: "Module 2: AI Exploration Lab",
    desc: "Students go hands-on with leading AI tools. Learn to prompt smarter, evaluate AI output critically, and use AI as a collaborator, not a crutch.",
  },
  {
    cls: "n4",
    icon: UtensilsCrossed,
    time: "12:30 – 01:00 PM",
    title: "Lunch & Community Time",
    desc: "Recharge and connect with peers from different schools. Community-building is built into the schedule — not an afterthought.",
  },
  {
    cls: "n5",
    icon: Globe,
    time: "01:00 – 02:30 PM",
    title: "Module 3: Real-World Problem Sprint",
    desc: "Teams receive a challenge brief inspired by real situations. Apply every framework learned and use AI as a thinking partner to develop a solution.",
  },
  {
    cls: "n6",
    icon: Trophy,
    time: "02:30 – 04:00 PM",
    title: "Pitch Day + Certificate Ceremony",
    desc: "Teams present their solutions. Expert feedback, peer recognition, and a proper closing ceremony — because every achievement deserves to be celebrated.",
    last: true,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative bg-white py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="reveal mb-[60px] text-center">
          <div className="mb-[18px] inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
            Workshop Flow
          </div>
          <h2 className="mb-4 text-center font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
            Your day, <span className="text-[#a8d418]">mapped out.</span>
          </h2>
          <p className="mx-auto max-w-[520px] text-center text-[1.05rem] leading-[1.7] text-[#6b6555]">
            Every hour is purpose-driven. No boring lectures, only discovery,
            hands-on doing, and real learning that builds future-ready skills.
          </p>
        </div>

        <div className="mx-auto max-w-[740px]">
          <div className="grid grid-cols-[60px_1fr] gap-x-5">
            {items.map((item) => {
              const Icon = item.icon;
              const node = nodeStyles[item.cls];
              return (
                <React.Fragment key={item.title}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[1.2rem] animate-sc-node-pulse ${node.className}`}
                      style={node.style}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    {!item.last && (
                      <div className="min-h-10 w-0.5 flex-1 bg-[#D8D3C8]" />
                    )}
                  </div>
                  <div className="reveal pb-8">
                    <div className="mb-1.5 text-[0.72rem] font-bold tracking-[0.1em] text-[#6b6555] uppercase">
                      {item.time}
                    </div>
                    <div className="rounded-xl border border-[#D8D3C8] bg-[#F5F2EB] px-6 py-5 transition-all duration-200 hover:translate-x-1 hover:border-[#111111]">
                      <h3 className="mb-[5px] text-base font-extrabold">
                        {item.title}
                      </h3>
                      <p className="text-[0.86rem] text-[#6b6555]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
