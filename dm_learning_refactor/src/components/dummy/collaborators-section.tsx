'use client';

import Image from 'next/image';

const PARTNER_LOGOS = [
  '/collaborations/ctu.svg',
  '/collaborations/cgc.svg',
  '/collaborations/ct-group.svg',
  '/collaborations/shoolini.svg',
  '/collaborations/iitr.svg',
  '/collaborations/cgc-j.png',
  '/collaborations/dbu.png',
  '/collaborations/chitkara.png',
  '/collaborations/mau.png',
  '/collaborations/pct.png',
  '/collaborations/mmk.png',
];

export default function CollaborationsSection() {
  return (
    <div className="relative mx-auto max-w-[1440px] overflow-hidden py-[60px]">
      <h2 className="mb-10 text-center text-[48px] font-semibold [&_span]:text-[var(--primary)]">
        OUR <span>COLLABORATIONS</span>
      </h2>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[clamp(3rem,10vw,12rem)] bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[clamp(3rem,10vw,12rem)] bg-gradient-to-l from-[var(--background)] to-transparent" />
        <div className="flex w-max animate-collab-scroll gap-[60px]">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
            <div
              key={i}
              className="flex h-20 min-w-[180px] items-center justify-center"
            >
              <Image
                src={src}
                alt=""
                width={180}
                height={80}
                className="object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
