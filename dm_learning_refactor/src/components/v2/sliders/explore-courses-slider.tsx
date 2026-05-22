'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Swiper as SwiperType } from 'swiper';
import type { CourseCardData } from '@/services/data/home-page-data';

import { Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CourseCard from '../cards/course-card';

export default function ExploreCoursesSlider({ data }: { data: Array<CourseCardData> }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex gap-6 items-center justify-center max-w-393 mx-auto">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="sm:size-14 size-10 sm:min-w-14 min-w-10 rounded-full border flex items-center justify-center bg-primary hover:bg-primary/50 hover:text-white transition"
      >
        <ArrowLeft size={22} className="text-white" />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={54}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        //   autoplay={{ delay: 3500 }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8!"
      >
        {data.map((course, i) => (
          <SwiperSlide key={i} className="h-auto! flex">
            <CourseCard data={course} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="sm:size-14 size-10 sm:min-w-14 min-w-10 rounded-full border flex items-center justify-center bg-primary hover:bg-primary/50 hover:text-white transition"
      >
        <ArrowRight size={22} className="text-white" />
      </button>
    </div>
  );
}
