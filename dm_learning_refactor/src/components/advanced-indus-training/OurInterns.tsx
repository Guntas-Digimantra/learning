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
    <section className="our-interns">
      <div className="dml-container">
        <div className="our-intern-content">
          <div className="intern-slider">
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
                      alt="intern-images"
                      className="intern-slide-image"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination" />
          </div>
          <div className="intern-right-content">
            <h2>Meet the DML Interns</h2>
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
