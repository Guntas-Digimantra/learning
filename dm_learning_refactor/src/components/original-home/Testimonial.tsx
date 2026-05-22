"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
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
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <section className="pt-[100px] pb-[250px] bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="pb-5 text-center max-w-[500px] mx-auto">
          <span className="inline-block leading-[1.62] bg-[#efeefe] rounded-[30px] py-[3px] px-4 font-medium text-[#5751e1] mb-3.5">Our Testimonials</span>
          <h2 className="pb-5 text-4xl">What Students Think and Say About Us</h2>
        </div>

        <div className="max-[1600px]:px-10 md:px-0">
          <div>
            <div className="relative">
              <Swiper
                {...setting}
                modules={[Navigation]}
                loop={isLoop}
                className="swiper-container testimonial-swiper-active"
              >
                {testi_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="bg-[#f6f5fe] py-10 px-[45px] rounded-[10px] relative z-10 max-lg:min-h-[270px]">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div>
                            <div className="flex items-center gap-[3px] text-[15px] text-[#f8bc24] mb-2.5">
                              {renderStars(item.rating)}
                            </div>
                            <h4 className="text-xl mb-0 font-semibold text-black">{item.avatar_name}</h4>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-base">{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div>
                <button 
                  className="testimonial-button-prev rounded-full border-2 border-[#1c1a4a] w-[50px] h-[50px] flex items-center justify-center bg-orange-500 text-white text-xl leading-none shadow-[-3.6px_2.4px_0_0_#23232b] absolute left-[-75px] top-1/2 transition-all duration-300 ease-out -translate-y-1/2 z-30 right-auto max-lg:left-0 max-lg:shadow-none"
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
                  className="testimonial-button-next rounded-full border-2 border-[#1c1a4a] w-[50px] h-[50px] flex items-center justify-center bg-orange-500 text-white text-xl leading-none shadow-[3.6px_2.4px_0_0_#23232b] absolute right-[-75px] top-1/2 transition-all duration-300 ease-out -translate-y-1/2 z-30 max-lg:right-0 max-lg:shadow-none" 
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
