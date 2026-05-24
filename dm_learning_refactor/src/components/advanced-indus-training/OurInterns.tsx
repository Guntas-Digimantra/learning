'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import intern1 from '../../../public/intern1.jpg';
import intern2 from '../../../public/intern2.jpeg';
import intern3 from '../../../public/intern3.jpg';
import intern4 from '../../../public/intern4.jpeg';
import intern5 from '../../../public/intern5.jpeg';
import intern6 from '../../../public/intern6.jpg';

interface ImageItem {
  thumb: StaticImageData;
  id: number;
}

const images: ImageItem[] = [
  { thumb: intern1, id: 1 },
  { thumb: intern2, id: 2 },
  { thumb: intern3, id: 3 },
  { thumb: intern4, id: 4 },
  { thumb: intern5, id: 5 },
  { thumb: intern6, id: 6 },
];

const setting = {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const OurInterns: React.FC = () => {
  return (
    <section className="bg-white px-[15px] py-[100px] max-md:pt-0">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-row gap-10 rounded-[4rem] bg-[#f7f8f9] px-[82px] py-16 max-[991px]:flex-col max-md:px-[30px] max-md:py-[30px]">
          <div className="w-[45%] max-[991px]:w-full max-[991px]:text-center [&_.swiper]:pb-[30px] [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-black [&_.swiper-pagination-bullet-active]:!bg-black">
            <Swiper
              {...setting}
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <Image
                      src={item.thumb}
                      alt={'intern-images'}
                      className="w-full rounded-2xl object-cover"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
          <div className="w-[55%] content-center max-[991px]:w-full">
            <h2 className="mb-[15px] text-[#302c41] max-lg:text-center">Meet the DML Interns</h2>
            <p>
              Interns at DigiMantra work across various teams including software engineering, marketing, user experience
              and more. Our internships are available globally and offer many opportunities to learn and grow. You can
              help us build products and services that are used by billions of people around the world. Join us today
              and be a part of the revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInterns;
