"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface DataType {
  id: number;
  name: string;
  desc: string;
}

const testi_data: DataType[] = [
  {
    id: 1,
    name: "Arshnoor Kaur",
    desc: "Microsoft certifications have been a game-changer for my career. This program from DMLearning provided me with the in-depth knowledge and practical skills I needed to land my dream job in IT.",
  },
  {
    id: 2,
    name: "Harshwardhan Singh",
    desc: "I was struggling to advance in my current role. Earning Microsoft certifications through DMLearning has significantly boosted my confidence and opened doors to new opportunities within my company.",
  },
  {
    id: 3,
    name: "Neha Malik",
    desc: "This program from DMLearning equipped me with the latest industry-recognized skills in Microsoft technologies. It has been invaluable in helping me stay ahead of the curve in this rapidly evolving field.",
  },
  {
    id: 4,
    name: "Arun Dev Sharma",
    desc: "I highly recommend this program from DMLearning to anyone looking to enhance their career prospects in IT.",
  },
];

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const Testimonial = () => {
  return (
    <section className="microsoft-testimonial-section">
      <div className="dml-container">
        <div className="testimonial-content">
          <h2 className="testimonial-heading">Don&apos;t Just take our Word</h2>
          <p>See what students have to say about our certification program</p>
        </div>

        <Swiper {...setting} modules={[Navigation, Autoplay, Pagination]}>
          {testi_data.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="microsoft-testimonial-slide">
                <div className="microft-slider-left">
                  <p className="testimonial-desc">{testimonial.desc}</p>
                  <p className="testimonial-username">~ {testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
