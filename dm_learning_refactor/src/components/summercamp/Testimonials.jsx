import React from "react";

const avatarStyles = {
  t1: "bg-gradient-to-br from-[#C8F135] to-[#7fc800]",
  t2: "bg-gradient-to-br from-[#FF6B47] to-[#ff9c70]",
  t3: "bg-gradient-to-br from-[#4ECBF5] to-[#7C3AED]",
};

const tests = [
  {
    cls: "t1",
    av: "P",
    name: "Priya Sharma",
    role: "Parent · New Delhi",
    text: "My son came home explaining \"first principles thinking\" to the whole family over dinner. I didn't know what that meant — but I could see he was genuinely excited about it. That was a first.",
  },
  {
    cls: "t2",
    av: "A",
    name: "Arjun Mehta",
    role: "Student · Class 9 · Mumbai",
    text: "The AI demo completely changed how I see technology. I always thought AI was just chatting — I didn't know you could actually use it to solve real problems. Now I want to learn more.",
  },
  {
    cls: "t3",
    av: "R",
    name: "Rekha Iyer",
    role: "School Teacher · Bengaluru",
    text: "As an educator, I was skeptical. By the end, I was taking notes for myself. The methodology is exceptional — students were engaged the entire 6 hours. That almost never happens.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-white py-[100px] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="reveal mb-[60px] text-center">
          <div className="mb-[18px] inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[#6b6555] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
            Social Proof
          </div>
          <h2 className="text-center font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
            Families love it.{" "}
            <span className="text-[#a8d418]">Students obsess over it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[700px]:grid-cols-3">
          {tests.map((t) => (
            <div
              key={t.name}
              className="reveal relative overflow-hidden rounded-[20px] border border-[#D8D3C8] bg-[#F5F2EB] p-7 transition-all duration-300 before:pointer-events-none before:absolute before:top-2.5 before:right-5 before:font-['Playfair_Display',serif] before:text-[6rem] before:leading-none before:font-black before:text-[rgba(0,0,0,0.05)] before:content-['\0022'] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              <div className="mb-3.5 text-[0.9rem] tracking-[2px] text-[#F59E0B]">
                ★★★★★
              </div>
              <p className="mb-5 text-[0.92rem] leading-[1.7] text-[#444] italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-extrabold ${avatarStyles[t.cls]}`}
                >
                  {t.av}
                </div>
                <div>
                  <div className="text-[0.9rem] font-extrabold">{t.name}</div>
                  <div className="text-[0.75rem] text-[#6b6555]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
