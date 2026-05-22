"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

interface DataType {
  count: string;
  description: string;
}
[];

const cardData: DataType[] = [
  {
    count: "50+",
    description: "Certified Trainers",
  },
  {
    count: "1000+",
    description: "Students",
  },
  {
    count: "35+",
    description: "Courses available",
  },
  {
    count: "10+",
    description: "Years in the industry",
  },
];

const setting = {
  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const InternshipProgram = () => {
  return (
    <section className="internship-program">
      <div className="internship-container">
        <div className="internship-content">
          <div className="internship-left-section">
            <h2>THE DML IMPACT</h2>
            <p>
              DMlearning empowers talented individuals by connecting them with
              transformative internship experiences. With hundreds already
              launched on their career journeys, we&apos;re building a community
              that will soon reach over 1,000+ students.
            </p>
          </div>
          <div className="advanced-slider-container">
            <Swiper
              className="advanced-slider"
              {...setting}
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={false}
              pagination={{ clickable: true }}
            >
              {cardData.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="advanced-slider-content">
                    <h3>{card.count}</h3>
                    <p>{card.description}</p>
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
