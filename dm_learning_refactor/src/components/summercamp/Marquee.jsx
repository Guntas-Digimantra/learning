import React from "react";

const items = [
  "AI-Powered Learning",
  "Critical Thinking",
  "No Coding Needed",
  "Problem Solving",
  "Certificate Included",
  "Limited Seats",
  "Hands-On Activities",
  "Future-Ready Skills",
];
const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#111111] py-[18px] text-white">
      <div className="flex gap-[60px] whitespace-nowrap animate-sc-marquee">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 text-[0.85rem] font-semibold tracking-[0.04em]"
          >
            <i className="fa-solid fa-star text-[0.75rem] text-[#C8F135]" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
