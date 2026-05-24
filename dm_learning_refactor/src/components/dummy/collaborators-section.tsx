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
    <section className="home-collaborations-section" aria-labelledby="collaborations-heading">
      <h2 id="collaborations-heading" className="m-0 text-[48px] font-semibold leading-[1.3]">
        OUR <span>COLLABORATIONS</span>
      </h2>

      <div className="relative overflow-hidden">
        <div className="collab-fade collab-fade-left" aria-hidden />
        <div className="collab-fade collab-fade-right" aria-hidden />
        <div className="collab-track">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
            <div key={i} className="collab-logo">
              <Image src={src} alt="" width={180} height={80} unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
