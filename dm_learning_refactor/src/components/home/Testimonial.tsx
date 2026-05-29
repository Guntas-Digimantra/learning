"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { renderStars } from "../common/common";

interface DataType {
  id: number;
  avatar_name: string;
  desc: string;
  rating: number;
}

const testi_data: DataType[] = [
  {
    id: 1,
    avatar_name: "Nitin Kumar",
    desc: "With DMLearning, I learned exactly what I needed to know in the real world. It helped me to sell myself to get a new role.",
    rating: 5,
  },
  {
    id: 2,
    avatar_name: "Harsh Gogia",
    desc: "DMLearning helped me gain a lot of practical knowledge. Within 1 month of completing the course, I cracked the role of Data Scientist.",
    rating: 5,
  },
  {
    id: 3,
    avatar_name: "Simarjeet Kaur",
    desc: "The Program Coordinator was always there to guide me. I was able to build strong foundational skills in Python, R, and Tableau.",
    rating: 5,
  },
  {
    id: 4,
    avatar_name: "Sagar Krishna",
    desc: "DMLearning helped me gain on-the-job confidence, build a portfolio, and earn a certificate to share with prospective employers.",
    rating: 4.5,
  },
];

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  loop: true,
  breakpoints: {
    "1500": { slidesPerView: 3 },
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 3, spaceBetween: 24 },
    "768": { slidesPerView: 2, spaceBetween: 24 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
};

const Testimonial = () => {
  return (
    <section
      className="testimonial__area bg-white max-[767px]:!pt-[60px] max-[767px]:!pb-[200px]"
      style={{ paddingTop: 100, paddingBottom: 250 }}
    >
      <div className="dml-container">
        <div
          className="section__title"
          style={{ paddingBottom: 20, textAlign: "center", maxWidth: 500, margin: "0 auto" }}
        >
          <span className="sub-title">Our Testimonials</span>
          <h2 className="title max-[767px]:!text-[28px] max-[767px]:!leading-[1.3]" style={{ color: "#000" }}>
            What Students Think and Say About Us
          </h2>
        </div>

        <div className="home-testimonial">
          <div>
            <div className="testimonial__item-wrap">
              <Swiper
                {...setting}
                modules={[Navigation]}
                loop={false}
                className="swiper-container testimonial-swiper-active"
              >
                {testi_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="testimonial__item max-[767px]:!p-[30px]">
                      <div className="testimonial__item-top">
                        <div className="testimonial__author">
                          <div className="testimonial__author-content">
                            <div className="rating">{renderStars(item.rating)}</div>
                            <h4 className="title">{item.avatar_name}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial__content">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="testimonial__nav max-[767px]:!flex max-[767px]:!items-center max-[767px]:!justify-center max-[767px]:!gap-[15px]">
                <button
                  className="testimonial-button-prev home-courses-prev max-[767px]:!static max-[767px]:!translate-y-0"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    fill="#fff"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 404.43"
                  >
                    <path d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z" />
                  </svg>
                </button>
                <button
                  className="testimonial-button-next home-courses-next max-[767px]:!static max-[767px]:!translate-y-0"
                  aria-label="Next Testimonial"
                >
                  <svg
                    fill="#fff"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 404.39"
                  >
                    <path d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
