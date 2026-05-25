"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "@/components/ui/link";
import course_data from "../../app/data/home-data/CourseData";
import { generateStars } from "@/libs/generate-stars";

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

const CourseArea = () => {
  return (
    <section
      className="courses-area all-courses-area-mobile relative z-[1] bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)] max-[767px]:!py-[60px]"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="courses-container relative mx-auto box-border w-full max-w-[1440px] !px-[60px] !pt-[50px] max-[991px]:!max-w-[720px] max-[767px]:!px-[30px]">
        <Swiper
          {...setting}
          modules={[Navigation, Autoplay]}
          loop={false}
          className="overflow-hidden"
          style={{
            paddingTop: "20px",
            paddingBottom: "30px",
            margin: "-20px 0 -30px 0",
          }}
        >
          {course_data[0]?.course_details?.map((item, i) => (
            <SwiperSlide key={i} style={{ height: "auto" }}>
              <div
                className="course-item courses-page-cards relative flex h-full w-full min-h-[565px] flex-col overflow-hidden rounded-[20px] border-0 bg-white transition-[transform,box-shadow] duration-300 ease-in-out hover:!-translate-y-2"
                style={{
                  padding: "8px",
                  background: item.border_color,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  className="relative flex !min-h-[250px] !gap-5 overflow-hidden rounded-t-[16px] border border-[#FFEEE6]"
                  style={{
                    backgroundImage: `url(${item.bgImage?.trim()})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="course-item-left z-[2] flex !h-full flex-1 flex-col justify-between !p-6 text-white">
                    <div className="course-tags flex !min-h-6 flex-wrap !gap-[10px]">
                      {item.tag?.map((t, idx) => (
                        <span
                          key={idx}
                          className="course-tag rounded-[20px] border border-[rgba(255,255,255,0.3)] !px-[7px] !py-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-white"
                          style={{ background: "rgba(255, 255, 255, 0.25)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="!m-0 !text-[20px] !font-bold !leading-[110%] !text-white">
                      {item.title}
                    </h3>
                    {item.review && (
                      <div className="rating-display flex w-fit items-center gap-[2.53px] rounded-[1.27px] !bg-[linear-gradient(96.9deg,rgba(255,255,255,0.19)_1.92%,rgba(255,255,255,0.13)_125.84%)] !px-[6.34px] !py-[5.07px] !text-xs !leading-[normal] text-white">
                        <span className="!text-xs tracking-[2px]">
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
                        <span className="!text-xs !font-semibold">
                          {generateStars(item.review).rating.toFixed(1)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative flex flex-1 items-center justify-center" />
                </div>
                <div
                  className="flex flex-1 flex-col justify-between"
                  style={{
                    background: item.footer_bg_color,
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5 className="!m-0 !mb-[15px] !text-[20px] !font-bold !leading-[1.3] !text-[#161439]">
                      {item.heading || item.title}
                    </h5>
                    <p className="!m-0 !mb-5 !text-base !leading-[1.6] !text-[#666] ![font-family:var(--font-poppins),Poppins,sans-serif]">
                      {item.description}
                    </p>
                  </div>
                  <div className="courses__item-bottom !m-0 flex items-center justify-between !gap-5">
                    <Link href={item.url} onClick={(e) => e.stopPropagation()}>
                      <span className="start-learning-link flex items-center gap-2 !text-base !font-semibold !leading-[normal] text-[#fc8b20] no-underline transition-[gap] duration-300 ease-out hover:gap-3">
                        Start Learning <span>›</span>
                      </span>
                    </Link>
                    <Link
                      className="dml-button-slider inline-flex !h-10 !w-[120px] items-center justify-center gap-1.5 !rounded-[56px] !border-0 !bg-[#2a2a2a] !px-[19px] !py-2.5 text-sm font-semibold !leading-[18px] !text-white no-underline transition-[background,transform] duration-200 hover:!scale-[1.02] hover:!bg-[#1a1a1a] hover:!text-white"
                      href="/student-enrollment"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text">Enroll Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="courses__nav max-[767px]:mt-0 max-[767px]:flex max-[767px]:justify-center max-[767px]:gap-[15px]">
          <div
            className="courses-button-prev home-courses-prev absolute z-[1] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-[1.2px] border-black bg-[#fc8b20] text-2xl leading-none text-white transition-all duration-300 ease-out hover:shadow-none min-[1601px]:left-[-90px] min-[1601px]:top-1/2 max-[1600px]:left-[-15px] max-[1600px]:top-[42%] min-[768px]:max-[991px]:!left-[-50px] max-[767px]:relative max-[767px]:left-0 max-[767px]:top-auto max-[767px]:translate-y-0"
            style={{ boxShadow: "-3.6px 2.4px 0 0 #23232b", transform: "translateY(-50%)" }}
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
            className="courses-button-next home-courses-next absolute z-[1] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-[1.2px] border-[#23232b] bg-[#fc8b20] text-2xl leading-none text-white transition-all duration-300 ease-out hover:shadow-none min-[1601px]:right-[-90px] min-[1601px]:top-1/2 max-[1600px]:right-[-15px] max-[1600px]:top-[42%] min-[768px]:max-[991px]:!right-[-50px] max-[767px]:relative max-[767px]:right-0 max-[767px]:top-auto max-[767px]:translate-y-0"
            style={{ boxShadow: "3.6px 2.4px 0 0 #23232b", transform: "translateY(-50%)" }}
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
