'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function VerticalImageSlider({
  data,
  reverseDirection = false,
}: {
  data: string[];
  reverseDirection?: boolean;
}) {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={2}
      spaceBetween={30}
      loop
      speed={1200}
      autoplay={{
        delay: 2500,
        reverseDirection,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="h-[840px] w-1/2 max-[767px]:w-full"
    >
      {data.map((img, i) => (
        <SwiperSlide key={i} style={{ borderRadius: '10px' }}>
          <div className="h-full w-full" style={{ borderRadius: '10px' }}>
            <Image
              src={img}
              alt={`slide-${i}`}
              fill
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
