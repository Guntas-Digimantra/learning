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
        <SwiperSlide key={i} className="overflow-hidden rounded-[10px]">
          <div className="relative h-full w-full overflow-hidden rounded-[10px]">
            <Image
              src={img}
              alt={`slide-${i}`}
              fill
              className="rounded-[10px] object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
