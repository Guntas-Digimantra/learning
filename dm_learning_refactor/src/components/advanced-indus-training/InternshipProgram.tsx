'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

interface DataType {
  count: string;
  description: string;
}

const cardData: DataType[] = [
  {
    count: '50+',
    description: 'Certified Trainers',
  },
  {
    count: '1000+',
    description: 'Students',
  },
  {
    count: '35+',
    description: 'Courses available',
  },
  {
    count: '10+',
    description: 'Years in the industry',
  },
];

const setting = {
  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const InternshipProgram = () => {
  return (
    <section className="flex min-h-[800px] items-center bg-gradient-to-l from-[#f58c1b] from-50% to-black to-50% py-[100px] max-[1260px]:block max-[1260px]:min-h-0 max-[1260px]:bg-none max-[1260px]:pb-0">
      <div className="mx-auto max-w-[1240px] px-[15px]">
        <div className="flex text-center max-[1260px]:flex-col">
          <div className="w-full max-w-[50%] pr-[100px] text-left max-[1260px]:max-w-full max-[1260px]:px-[15px] max-[1260px]:text-center">
            <h2 className="mb-9 text-white max-[1260px]:mb-5 max-[1260px]:text-center max-[1260px]:text-[#302c41]">
              THE DML IMPACT
            </h2>
            <p className="text-white max-[1260px]:mb-[15px] max-[1260px]:text-[#6d6c80]">
              DMlearning empowers talented individuals by connecting them with transformative internship experiences.
              With hundreds already launched on their career journeys, we&apos;re building a community that will soon
              reach over 1,000+ students.
            </p>
          </div>
          <div className="swiper-dml-pagination w-full max-[1260px]:bg-[#fc8b20] max-[1260px]:px-[15px] max-[1260px]:pb-5 max-[1260px]:pt-[5px]">
            <Swiper
              className="w-full"
              {...setting}
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              loop={false}
              pagination={{ clickable: true }}
            >
              {cardData.map((card, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <h3 className="text-[60px] text-black lg:text-[120px]">{card.count}</h3>
                    <p className="mb-[30px] text-xl font-semibold text-black lg:text-[28px]">
                      {card.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipProgram;
