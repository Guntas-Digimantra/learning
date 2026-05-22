"use client";
import React from "react";

function openRegisterModal(e) {
  e.preventDefault();
  if (typeof window !== "undefined" && window.__openRegisterModal) {
    window.__openRegisterModal();
  }
}

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#C8F135] py-[100px] text-center text-[#111111] max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8 before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:font-['Outfit',sans-serif] before:text-[18vw] before:font-black before:tracking-[-0.05em] before:text-[rgba(0,0,0,0.05)] before:whitespace-nowrap before:content-['REGISTER'] max-[480px]:before:text-[24vw]"
    >
      <div className="relative z-[2] mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div>
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-[rgba(0,0,0,0.08)] px-5 py-2 text-[0.8rem] font-bold">
            <i className="fa-solid fa-fire animate-sc-blink-fast" /> Registrations
            are open!
          </div>
          <h2 className="mb-[18px] font-['Outfit',sans-serif] text-[clamp(2.8rem,6vw,5rem)] leading-none font-black tracking-[-0.04em]">
            Ready to Build <br /> with AI?
          </h2>
          <p className="mx-auto mb-10 max-w-[500px] text-[1.1rem] leading-[1.7] text-[rgba(0,0,0,0.6)]">
            Step into an exclusive 1-day AI Hackathon designed for school
            students. A unique opportunity to experience AI-powered learning,
            real-world problem solving, and hands-on creation.
          </p>
          <button
            onClick={openRegisterModal}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border-none bg-[#111111] px-12 py-5 font-['Outfit',sans-serif] text-[1.15rem] font-extrabold text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-[250ms] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <i className="fa-solid fa-bolt" /> Register Now – It&apos;s Free!
          </button>
          <div className="mt-5 text-[0.82rem] font-medium text-[rgba(0,0,0,0.5)]">
            One day · Real skill · Lasting impact
          </div>
        </div>
      </div>
    </section>
  );
}
