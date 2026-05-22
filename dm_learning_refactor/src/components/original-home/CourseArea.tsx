"use client";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "@/components/ui/link";
import course_data from "../../app/data/home-data/CourseData";
import dynamic from "next/dynamic";
import { renderStars } from "../common/common";
import router from "next/router";

export const generateStars = (reviewText: string) => {
  const ratingMatch = reviewText.match(/(\d+\.?\d*)/);
  if (!ratingMatch) return { stars: 0, rating: 0 };

  const rating = parseFloat(ratingMatch[1]);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return {
    stars: fullStars + (hasHalfStar ? 1 : 0),
    rating: rating,
  };
};
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

// slider setting
const setting = {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  autoplay: false,
  // Navigation arrows
  navigation: {
    nextEl: ".courses-button-next",
    prevEl: ".courses-button-prev",
  },
  breakpoints: {
    "1500": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

const CourseArea = () => {
  return (
    <section 
      className="relative bg-center z-10 py-[100px]" 
      style={{ background: 'radial-gradient(circle, #f4e5fa, #ffffff 40%, #f4e5fa)' }}
    >
      <div className="relative mx-auto max-w-[1440px] px-[30px] pt-0 md:px-[60px] md:pt-[50px] max-lg:max-w-[720px]">
            <Swiper
              {...setting}
              modules={[Navigation, Autoplay]}
              pagination={{ clickable: true }}
              loop={true}
              className="pt-5 pb-[30px] -mt-5 -mb-[30px] mx-0"
            >
              {course_data[0]?.course_details?.map((item, i) => (
                <SwiperSlide key={i} className="h-auto">
                    <div
                      className="relative p-2 rounded-[20px] h-full flex flex-col"
                      style={{ background: item.border_color }}
                    >
                      <div
                        className="bg-cover bg-center h-56 border rounded-t-2xl overflow-hidden relative"
                        style={{
                          backgroundImage: `url(${item.bgImage?.trim()})`,
                          borderColor: '#FFEEE6',
                        }}
                      >
                        <div className="absolute top-[30px] left-[30px] w-[calc(100%-60px)]">
                          <div className="flex gap-[10px] flex-wrap">
                            {item.tag?.map((t, idx) => (
                              <span key={idx} className="bg-white/20 py-[5px] px-[15px] rounded-[5px] text-white text-sm font-medium leading-normal inline-block">
                                {t}
                              </span>
                            ))}
                          </div>

                          <h3 className="text-[26px] text-white leading-tight mt-[15px] mb-[10px] font-semibold">{item.title}</h3>
                          {item.review && (
                            <div className="flex items-center gap-[10px] text-white">
                              <span>
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span
                                    key={i}
                                    style={{
                                      color:
                                        i < generateStars(item.review).stars
                                          ? '#ffffff'
                                          : '#ccc',
                                    }}
                                  >
                                    ★
                                  </span>
                                ))}
                              </span>
                              <span>
                                {generateStars(item.review).rating.toFixed(1)}
                              </span>
                            </div>
                          )}
                        </div>
                        {/* Course Image */}
                        <div className="flex items-center justify-center h-full">
                          {/* <Image src={item.thumb1} alt={item.title} style={{ width: '63px', height: '63px', objectFit: 'contain' }} /> */}
                        </div>
                      </div>

                      {/* Bottom Section - White with Description and Buttons */}
                      <div
                        className="rounded-b-2xl py-5 px-6 flex flex-col grow justify-between"
                        style={{ background: item.footer_bg_color }}
                      >
                        <div>
                          <h5 className="text-[22px] font-semibold leading-7 mb-2.5">{item.heading || item.title}</h5>
                          <p className="m-0 text-base leading-6 text-neutral-800">{item.description}</p>
                        </div>

                        <div className="flex items-center justify-between border-t border-black/10 pt-5 mt-5">
                          <Link href={item.url} onClick={(e) => e.stopPropagation()}>
                            <span className="text-black font-semibold text-base flex items-center gap-[5px]">
                              Start Learning <span>›</span>
                            </span>
                          </Link>
                          <Link
                            className="flex py-2.5 px-[19px] w-[120px] items-center gap-1.5 rounded-[50px] border border-black text-white text-sm leading-[18px] transition-all duration-300 ease-out hover:shadow-none"
                            href="/student-enrollment"
                            onClick={(e) => e.stopPropagation()}
                            style={{ backgroundColor: '#fc8b20' }}
                          >
                            <span className="text">Enroll Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex gap-[10px] absolute top-1/2 left-0 w-full justify-between -translate-y-1/2 z-10 pointer-events-none">
              <div className="courses-button-prev w-10 h-10 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 hover:bg-orange-500" style={{ backgroundColor: '#2e2e2e' }}>
                <svg fill="#fff" height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 404.43">
                  <path d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z" />
                </svg>
              </div>
              <div className="courses-button-next w-10 h-10 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 hover:bg-orange-500" style={{ backgroundColor: '#2e2e2e' }}>
                <svg fill="#fff" height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 404.39">
                  <path d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z" />
                </svg>
              </div>
            </div>
      </div>
    </section>
  );
};

export default CourseArea;
