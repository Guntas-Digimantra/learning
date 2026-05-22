"use client";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "@/components/ui/link";
import course_data from "../../app/data/home-data/CourseData";
import dynamic from "next/dynamic";
import { generateStars } from "@/libs/generate-stars";

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
  "absolute top-1/2 z-[1] flex h-[60px] w-[60px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[1.2px] border-black bg-[#fc8b20] text-2xl leading-none text-white transition-all duration-300 ease-out hover:shadow-none max-[1600px]:top-[42%] max-[767px]:relative max-[767px]:translate-y-0";

const CourseArea = () => {
  return (
    <section className="relative z-[1] bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)] py-[100px] max-[767px]:py-[60px]">
      <div
        className="relative mx-auto max-w-[1440px] px-[60px] pt-[50px] max-[991px]:max-w-[720px] max-[767px]:px-[30px]"
      >
        <Swiper
          {...setting}
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          className="-my-5 py-5"
        >
          {course_data[0]?.course_details?.map((item, i) => (
            <SwiperSlide key={i} className="flex h-auto justify-center">
              <div
                className="relative flex h-full w-full flex-col overflow-hidden rounded-[20px] border-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
                style={{ padding: "8px", background: item.border_color }}
              >
                <div
                  className="relative flex min-h-[250px] gap-5 rounded-t-[20px] max-[1024px]:min-h-[220px] max-[768px]:min-h-0 max-[768px]:p-5"
                  style={{
                    backgroundImage: `url(${item.bgImage?.trim()})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "224px",
                    border: "1px solid #FFEEE6",
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div className="z-[2] flex h-full flex-1 flex-col justify-between p-6 text-white max-[946px]:[&_h3]:text-sm max-[768px]:[&_h3]:!text-xs">
                    <div className="flex min-h-6 flex-wrap gap-2.5 max-[824px]:gap-[5px]">
                      {item.tag?.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-[20px] border border-white/30 bg-white/25 px-[7px] py-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="m-0 text-xl font-bold leading-[110%] text-white max-[1024px]:text-lg max-[946px]:text-sm max-[768px]:!text-xs">
                      {item.title}
                    </h3>
                    {item.review && (
                      <div className="flex w-fit items-center gap-[2.53px] rounded-[1.27px] bg-[linear-gradient(96.9deg,rgba(255,255,255,0.19)_1.92%,rgba(255,255,255,0.13)_125.84%)] px-[6.34px] py-[5.07px] text-xs text-white max-[1024px]:px-1.5 max-[1024px]:py-1 max-[1024px]:[&_span:first-child]:text-sm max-[1024px]:[&_span:first-child]:tracking-[2px]">
                        <span className="text-xs tracking-[2px]">
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <span
                              key={starIdx}
                              style={{
                                color:
                                  starIdx < generateStars(item.review).stars
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
                  <div className="flex flex-1 items-center justify-center" />
                </div>
                <div
                  className="flex flex-1 flex-col justify-between p-[30px] max-[1024px]:p-6"
                  style={{ background: item.footer_bg_color }}
                >
                  <div>
                    <h5 className="m-0 mb-[15px] text-xl font-bold leading-[1.3] text-[#161439] max-[1024px]:text-lg">
                      {item.heading || item.title}
                    </h5>
                    <p className="m-0 mb-5 text-base leading-[1.6] text-[#666]">
                      {item.description}
                    </p>
                  </div>
                  <div className="m-0 flex items-center justify-between gap-5 max-[768px]:flex-col max-[768px]:items-stretch">
                    <Link href={item.url} onClick={(e) => e.stopPropagation()}>
                      <span className="flex items-center gap-2 text-base font-semibold text-[#fc8b20] no-underline transition-[gap] duration-300 hover:gap-3">
                        Start Learning <span>›</span>
                      </span>
                    </Link>
                    <Link
                      className="inline-flex w-[120px] items-center gap-1.5 rounded-full border border-black bg-[#2a2a2a] px-[19px] py-2.5 text-sm font-semibold leading-[18px] text-white no-underline transition-[background,transform] duration-200 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:text-white max-[768px]:w-full max-[768px]:justify-center max-[768px]:text-center"
                      href="/student-enrollment"
                      onClick={(e) => e.stopPropagation()}
                      style={{ borderRadius: "56px" }}
                    >
                      <span>Enroll Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="courses__nav max-[767px]:mt-0 max-[767px]:flex max-[767px]:justify-center max-[767px]:gap-[15px]">
          <div
            className={`courses-button-prev home-courses-prev ${courseNavBtn} left-[-90px] shadow-[-3.6px_2.4px_0_0_#23232b] max-[1600px]:left-[-15px] min-[768px]:max-[991px]:!left-[-50px] max-[767px]:left-0`}
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
            className={`courses-button-next home-courses-next ${courseNavBtn} right-[-90px] border-[#23232b] shadow-[3.6px_2.4px_0_0_#23232b] max-[1600px]:right-[-15px] min-[768px]:max-[991px]:!right-[-50px] max-[767px]:right-0`}
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
