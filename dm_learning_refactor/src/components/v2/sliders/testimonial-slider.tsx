'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import type { Swiper as SwiperType } from 'swiper';
import { RatingStars } from '../ui/stars';
import { TestimonialItem } from '@/services/data/home-page-data';
import { cn } from '@/libs/utils';

type Props = { data: Array<TestimonialItem>; showRating?: boolean; loop?: boolean };

function TestimonialCard({ item, showRating }: { item: TestimonialItem; showRating?: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col h-full min-h-87 text-center rounded-2xl bg-white p-7 shadow-sm testimonial-card',
        'scale-90 opacity-60 transition-all duration-500 ',
        'group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:scale-105 group-[.swiper-slide-active]:shadow-lg'
      )}
    >
      <h3 className="font-bold text-xl text-primary mb-6 group-[.swiper-slide-active]:text-2xl">{item.title}</h3>

      <p className="text-gray-600 text-sm leading-6 flex-1 overflow-hidden group-[.swiper-slide-active]:text-lg">
        <span className="line-clamp-4 italic">{item.desc}</span>
      </p>

      <div className="flex items-start gap-4 mt-6 border-t pt-5">
        <Image
          src={item.avatar_img}
          alt={item.avatar_name}
          width={46}
          height={46}
          className="rounded-full object-cover group-[.swiper-slide-active]:size-13"
        />

        <div className="flex items-start flex-col gap-px">
          <h4 className="font-bold text-lg group-[.swiper-slide-active]:text-lg">{item.avatar_name}</h4>
          <p className="text-xs text-gray-500 group-[.swiper-slide-active]:text-sm">{item.role}</p>
          {showRating ? (
            <div className="flex items-center gap-px">
              <RatingStars count={item.rating} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSlider({ data, showRating = true, loop = true }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(!loop && true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <div className="max-w-294 flex gap-4.25 items-center justify-center mx-auto">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className={cn(
            'sm:size-14 size-10 sm:min-w-14 min-w-10 rounded-full border flex items-center justify-center bg-primary hover:bg-primary/50 hover:text-white transition',
            !loop && isBeginning ? 'cursor-not-allowed opacity-50' : ''
          )}
        >
          <ArrowLeft size={22} className="text-white" />
        </button>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (!loop) {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }
          }}
          onSlideChange={(swiper) => {
            if (!loop) {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }
          }}
          modules={[Pagination, Autoplay]}
          centeredSlides
          loop={loop}
          speed={600}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: '.testimonial-pagination',
            clickable: true,
          }}
          spaceBetween={5}
          // slidesPerView={1.15}
          breakpoints={{
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-26 testimonial-swiper min-h-93"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="h-auto! flex group">
              <TestimonialCard key={item.id} item={item} showRating={showRating} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={cn(
            'sm:size-14 size-10 sm:min-w-14 min-w-10 rounded-full border flex items-center justify-center bg-primary hover:bg-primary/50 hover:text-white transition',
            !loop && isEnd ? 'cursor-not-allowed opacity-50' : ''
          )}
        >
          <ArrowRight size={22} className="text-white" />
        </button>
      </div>
      {/* <div className="testimonial-pagination mt-10 flex justify-center [&_.swiper-pagination-bullet-active]:bg-foreground!" /> */}
    </>
  );
}
