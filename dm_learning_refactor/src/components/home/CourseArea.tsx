"use client";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "@/components/ui/link";
import course_data from "../../app/data/home-data/CourseData";
import dynamic from "next/dynamic";
import { generateStars } from "../courses/CourseArea";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

const setting = {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  autoplay: false,
  navigation: {
    nextEl: ".courses-button-next",
    prevEl: ".courses-button-prev",
  },
  breakpoints: {
    "1500": { slidesPerView: 3 },
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 2, spaceBetween: 24 },
    "768": { slidesPerView: 2, spaceBetween: 24 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
};

const courseNavBtn =
  "absolute top-1/2 z-[1] flex h-15 w-15 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black bg-primary text-white text-2xl leading-none transition-all duration-300 ease-out hover:shadow-none";

const enrollBtn =
  "inline-flex w-[120px] items-center justify-center gap-1.5 rounded-full border border-black bg-course-btn-dark px-[19px] py-2.5 text-sm leading-[18px] font-semibold text-white no-underline transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-course-btn-dark-hover hover:text-white max-[768px]:w-full max-[768px]:text-center";

const CourseArea = () => {
  return (
    <section className="relative z-[1] bg-[radial-gradient(circle,#f4e5fa,#fff_40%,#f4e5fa)] py-25 max-[991px]:py-15">
      <div className="relative mx-auto max-w-[1440px] px-[15px] pt-12.5 pr-15 pl-15 max-[991px]:px-[30px]">
        <Swiper
          {...setting}
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          loop={false}
          className="!-my-5 !py-5"
        >
          {course_data[0]?.course_details?.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div
                className="flex h-full w-full flex-col overflow-hidden rounded-[20px] border-0 bg-white shadow-course-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-course-card-hover"
                style={{ padding: 8, background: item.border_color }}
              >
                <div
                  className="relative flex min-h-[250px] gap-5 overflow-hidden rounded-t-[20px] max-[1024px]:min-h-[220px] max-[768px]:min-h-0 max-[768px]:flex-col max-[768px]:p-5"
                  style={{
                    backgroundImage: `url(${item.bgImage?.trim()})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 224,
                    border: "1px solid #FFEEE6",
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                  }}
                >
                  <div className="z-[2] flex h-full flex-1 flex-col justify-between p-6 text-white">
                    <div className="flex min-h-6 flex-wrap gap-2.5 max-[824px]:gap-1.25">
                      {item.tag?.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-white/30 bg-white/25 px-[7px] py-1 text-[10px] font-semibold tracking-wider text-white uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="m-0 text-xl leading-[1.1] font-bold text-white max-[946px]:text-sm max-[1024px]:text-lg max-[768px]:!text-xs">
                      {item.title}
                    </h3>
                    {item.review && (
                      <div className="flex w-fit items-center gap-0.5 rounded-[1.27px] bg-gradient-to-br from-white/19 to-white/13 px-1.5 py-1.25 text-xs text-white">
                        <span className="text-xs tracking-[2px]">
                          {Array.from({ length: 5 }).map((_, si) => (
                            <span
                              key={si}
                              style={{
                                color:
                                  si < generateStars(item.review).stars
                                    ? "#ffffff"
                                    : "#ccc",
                              }}
                            >
                              ★
                            </span>
                          ))}
                        </span>
                        <span className="text-xs font-semibold">
                          {generateStars(item.review).rating.toFixed(1)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative flex flex-1 items-center justify-center" />
                </div>

                <div
                  className="flex flex-grow flex-col justify-between rounded-b-2xl px-6 py-5"
                  style={{ background: item.footer_bg_color }}
                >
                  <div>
                    <h5 className="mb-[15px] text-xl leading-snug font-bold text-benefit-text max-[1024px]:text-lg">
                      {item.heading || item.title}
                    </h5>
                    <p className="mb-5 text-base leading-relaxed text-course-footer-text">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-5 max-[768px]:flex-col max-[768px]:items-stretch">
                    <Link
                      href={item.url}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-base font-semibold text-primary no-underline transition-[gap] duration-300 hover:gap-3"
                    >
                      Start Learning <span>›</span>
                    </Link>
                    <Link
                      href="/student-enrollment"
                      className={enrollBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Enroll Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-[767px]:flex max-[767px]:justify-center max-[767px]:gap-[15px]">
          <div
            className={`courses-button-prev home-courses-prev ${courseNavBtn} left-[-90px] shadow-course-nav-prev max-[1600px]:left-[-15px] max-[1600px]:top-[42%] max-[767px]:relative max-[767px]:left-0 max-[767px]:translate-y-0`}
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
          </div>
          <div
            className={`courses-button-next home-courses-next ${courseNavBtn} right-[-90px] shadow-course-nav-next max-[1600px]:right-[-15px] max-[1600px]:top-[42%] max-[767px]:relative max-[767px]:right-0 max-[767px]:translate-y-0`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseArea;
