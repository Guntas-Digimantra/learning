"use client";
import React from "react";
import { Brain } from "lucide-react";

function openRegisterModal(e) {
  e.preventDefault();
  if (typeof window !== "undefined" && window.__openRegisterModal) {
    window.__openRegisterModal();
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F2EB] px-0 py-[140px] pb-20 max-[700px]:py-[120px] max-[700px]:pb-[60px] max-[480px]:py-[90px] max-[480px]:pb-10 max-[380px]:py-20 max-[380px]:pb-8 max-[320px]:py-[72px] max-[320px]:pb-7"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-['Outfit',sans-serif] text-[28vw] font-black tracking-[-0.05em] whitespace-nowrap text-[rgba(0,0,0,0.04)]">
        AI
      </div>
      <div className="pointer-events-none absolute -top-[100px] -right-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.25),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[60px] -left-[60px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,107,71,0.12),transparent_70%)]" />

      <div className="relative z-[2] mx-auto max-w-[1420px] px-7 max-[600px]:px-5 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-[7px] text-[0.75rem] font-bold tracking-[0.1em] text-[#C8F135] uppercase max-[380px]:px-3 max-[380px]:py-1.5 max-[380px]:text-[0.68rem]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#C8F135] animate-sc-blink" />
              AI Hackathon 2026 · Class 8th - 10th
            </div>

            <h1 className="mb-[22px] font-['Outfit',sans-serif] text-[clamp(2.8rem,5.5vw,4.4rem)] leading-none font-black tracking-[-0.04em]">
              Think{" "}
              <span className="inline-block rotate-[-1.5deg] rounded-lg bg-[#C8F135] px-2.5 text-[#111111]">
                Smart
              </span>
              <br />
              with{" "}
              <em className="font-['Playfair_Display',serif] text-[0.92em] font-bold text-[#FF6B47] not-italic">
                Artificial
              </em>
              <br />
              Intelligence.
            </h1>
            <p className="mb-3 max-w-[460px] text-[1.1rem] leading-[1.75] text-[#6b6555] italic max-[600px]:text-base">
              An AI-Powered, Creation-First Learning Experience
            </p>
            <p className="mb-9 max-w-[460px] text-[1.1rem] leading-[1.4] text-[#6b6555] max-[600px]:text-base">
              A powerful 1-day AI hackathon where students don&apos;t just learn
              AI; they use it to create, solve, and think independently. Build
              real-world problem-solving skills, logical thinking, and
              future-ready AI abilities that go beyond school learning
            </p>

            <div className="mb-11 flex flex-wrap items-center gap-3.5 max-[380px]:mb-7">
              <button
                onClick={openRegisterModal}
                className="inline-flex cursor-pointer items-center gap-[9px] rounded-full border-none bg-[#111111] px-[34px] py-4 font-['Outfit',sans-serif] text-base font-bold text-white shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-[#a8d418] hover:text-[#111111] hover:shadow-[0_8px_32px_rgba(200,241,53,0.4)] max-[480px]:px-6 max-[480px]:py-3.5 max-[480px]:text-[0.9rem]"
              >
                <i className="fa-solid fa-bolt" /> Register Now
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "No Coding Required",
                "Certificate Included",
                "Limited Seats",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-1.5 rounded-full border border-[#D8D3C8] bg-white px-4 py-[7px] text-[0.8rem] font-semibold text-[#6b6555] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  <i className="fa-solid fa-circle-check text-[0.75rem] text-[#a8d418]" />{" "}
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden items-center justify-center lg:flex">
            <div>
              <div className="relative z-[1] w-[370px] overflow-hidden rounded-[32px] bg-[#111111] p-9 text-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] before:pointer-events-none before:absolute before:-top-[60px] before:-right-[60px] before:h-[250px] before:w-[250px] before:rounded-full before:bg-[radial-gradient(circle,rgba(200,241,53,0.2),transparent_70%)] before:content-['']">
                <div className="mb-6 text-[0.7rem] font-bold tracking-[0.15em] text-[rgba(255,255,255,0.4)] uppercase">
                  Future-Ready Session
                </div>
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#C8F135] animate-sc-pulse-ring">
                  <Brain size={32} strokeWidth={1.5} color="#111111" />
                </div>
                <div className="mb-2.5 text-[1.6rem] leading-[1.2] font-black tracking-[-0.03em] whitespace-nowrap">
                  AI Hackathon Experience
                </div>
                <div className="mb-6 text-[0.85rem] text-[rgba(255,255,255,0.5)]">
                  Thinking Smart with AI. Build &amp; Create in 1 Day.
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["5–6", "Hours Session"],
                    ["1", "Certificate"],
                    ["4", "AI-Integrated Modules"],
                  ].map(([n, l]) => (
                    <div
                      key={l}
                      className={`rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)] p-3.5 ${l === "AI-Integrated Modules" ? "col-span-2" : ""}`}
                    >
                      <div className="text-[1.4rem] font-black tracking-[-0.03em] text-[#C8F135]">
                        {n}
                      </div>
                      <div className="mt-0.5 text-[0.72rem] text-[rgba(255,255,255,0.45)]">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
