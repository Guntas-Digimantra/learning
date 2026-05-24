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

const testimonialNavBtn =
  "absolute top-1/2 z-[3] flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-testimonial-nav-border bg-primary text-xl leading-none text-white transition-all duration-300 ease-out hover:cursor-pointer hover:shadow-none";

const Testimonial = () => {
  return (
    <section className="bg-surface pt-25 pb-[250px] max-[991px]:pt-15 max-[991px]:pb-[200px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto max-w-[500px] pb-5 text-center">
          <span className="mb-3.5 inline-block rounded-[30px] bg-subtitle-bg px-4 py-[3px] font-medium leading-[1.62] text-subtitle-accent">
            Our Testimonials
          </span>
          <h2 className="title pb-5 text-section-title font-semibold max-[991px]:text-section-title-sm">
            What Students Think and Say About Us
          </h2>
        </div>

        <div className="max-[1600px]:px-10">
          <div className="relative max-[991px]:mx-auto max-[991px]:max-w-[690px]">
            <Swiper
              {...setting}
              modules={[Navigation]}
              loop={false}
              className="testimonial-swiper-active"
            >
              {testi_data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative z-[1] rounded-[10px] bg-testimonial-card p-10 px-[45px] max-[767px]:min-h-[250px] max-[767px]:p-[30px] max-[991px]:min-h-[270px]">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="mb-2.5 flex items-center gap-0.5 text-[15px] text-rating-star">
                          {renderStars(item.rating)}
                        </div>
                        <h4 className="title m-0 text-xl font-semibold text-fg">
                          {item.avatar_name}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <p className="text-base text-fg-muted">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="max-[767px]:relative max-[767px]:flex max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-[15px]">
              <button
                type="button"
                className={`testimonial-button-prev home-courses-prev ${testimonialNavBtn} right-auto left-[-75px] shadow-testimonial-prev max-[1600px]:left-[-20px] max-[767px]:relative max-[767px]:left-0 max-[767px]:translate-y-0`}
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
                type="button"
                className={`testimonial-button-next home-courses-next ${testimonialNavBtn} right-[-75px] left-auto shadow-testimonial-next max-[1600px]:right-[-20px] max-[767px]:relative max-[767px]:right-0 max-[767px]:translate-y-0`}
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
    </section>
  );
};

export default Testimonial;
