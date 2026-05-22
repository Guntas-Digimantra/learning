'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import ContainerSection from './container-section';

const images = [
  '/certificates-given/certificate-1.png',
  '/certificates-given/certificate-2.png',
  '/certificates-given/certificate-3.png',
  '/certificates-given/certificate-4.png',
  '/certificates-given/certificate-5.png',
  '/certificates-given/certificate-1.png',
  '/certificates-given/certificate-2.png',
];

export default function CertificationSlider() {
  return (
    <ContainerSection className="mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 md:w-2xs sm:w-3xs w-30 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 md:w-2xs sm:w-3xs w-30 bg-linear-to-l from-background to-transparent z-10" />
        <Swiper
          modules={[Autoplay]}
          loop
          freeMode
          //   centeredSlides
          allowTouchMove={false}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            767: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1380: { slidesPerView: 4.2 },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-87.5 w-78 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt="collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContainerSection>
  );
}
