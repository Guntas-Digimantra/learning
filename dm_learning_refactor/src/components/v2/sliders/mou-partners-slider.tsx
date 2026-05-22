'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const PARTNER_LOGOS = [
  '/logo1.svg',
  '/logo2.svg',
  '/logo3.svg',
  '/logo4.svg',
  '/logo5.svg',
  '/logo6.svg',
  '/logo7.svg',
  '/logo8.svg',
  '/logo9.svg',
  '/logo10.svg',
];

function Logo({ src, index }: { src: string; index: number }) {
  return (
    <div className="flex items-center justify-center h-16 md:h-20">
      <Image
        src={src}
        alt={`partner-${index}`}
        width={180}
        height={80}
        className="
          object-contain
          h-full
          w-auto
          opacity-80
          hover:opacity-100
          transition
        "
      />
    </div>
  );
}

export default function MouPartnersSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      freeMode
      allowTouchMove={false}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      spaceBetween={60}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
      className="mt-12"
    >
      {PARTNER_LOGOS.map((src, i) => (
        <SwiperSlide key={i}>
          <Logo src={src} index={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
