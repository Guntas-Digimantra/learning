"use client";
import React from "react";
import Image from "next/image";

const perks = [
  "Digitally signed and shareable on LinkedIn & portfolios",
  "QR code verified — can't be faked, can't be ignored",
  "Documents specific skills: logic, AI literacy, collaboration",
  "Recognised by partner schools for extracurricular records",
  "Gives students confidence to own their achievements",
];

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="relative overflow-hidden bg-[#111111] py-[100px] text-white max-[700px]:py-[70px] max-[480px]:py-[50px] max-[380px]:py-10 max-[320px]:py-8"
    >
      <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
        <div className="grid grid-cols-1 items-center gap-20 max-[900px]:gap-10 lg:grid-cols-2">
          <div className="reveal-left">
            <div className="mb-[18px] inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-[rgba(255,255,255,0.4)] uppercase before:block before:h-0.5 before:w-5 before:bg-[#a8d418] before:content-['']">
              Certification
            </div>
            <h2 className="mb-4 font-['Outfit',sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-white">
              A certificate that{" "}
              <span className="text-[#C8F135]">actually means something.</span>
            </h2>
            <p className="max-w-[520px] text-[1.05rem] leading-[1.7] text-[rgba(255,255,255,0.5)]">
              This isn&apos;t a participation sticker. It&apos;s proof of
              real skill-building — verifiable, shareable, and genuinely
              impressive on any portfolio.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {perks.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 text-[0.92rem] text-[rgba(255,255,255,0.7)]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8F135] text-[0.6rem] font-extrabold text-[#111111]">
                    <i className="fa-solid fa-check" />
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="overflow-hidden rounded-2xl leading-none shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
              <Image
                src="/certificate.png"
                alt="Certificate of Participation - AI Hackathon"
                width={600}
                height={424}
                className="block h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
