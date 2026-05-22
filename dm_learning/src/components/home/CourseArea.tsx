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
import { generateStars } from "../courses/CourseArea";
import router from "next/router";
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
    <section className="all-courses-area-mobile  courses-area">
      <div className="dml-container courses-container" style={{ position: 'relative' }}>
            <Swiper
              {...setting}
              modules={[Navigation, Autoplay]}
              pagination={{ clickable: true }}
              loop={false}
              style={{ paddingTop: '20px', paddingBottom: '30px', margin: '-20px 0 -30px 0' }}
            >
              {course_data[0]?.course_details?.map((item, i) => (
                <SwiperSlide key={i} style={{ height: 'auto' }}>
                 {/* <div
                    key={item.id}
                    onClick={() => router.push(item.url)}
                    style={{ cursor: 'pointer', height: '100%' }}
                  > */}
                    <div
                      className="course-item courses-page-cards"
                      style={{
                        position: 'relative',
                        padding: '8px',
                        borderRadius: '20px',
                        background: item.border_color,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${item.bgImage?.trim()})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '224px',
                          border: '1px solid #FFEEE6',
                          borderTopRightRadius: '16px',
                          borderTopLeftRadius: '16px',
                          overflow: 'hidden',
                        }}
                      >
                        <div className="course-item-left">
                          <div className="course-tags">
                            {item.tag?.map((t, idx) => (
                              <span key={idx} className="course-tag">
                                {t}
                              </span>
                            ))}
                          </div>

                          <h3>{item.title}</h3>
                          {item.review && (
                            <div className="rating-display">
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
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                          }}
                        >
                          {/* <Image
                            src={item.thumb1}
                            alt={item.title}
                            style={{
                              width: '63px',
                              height: '63px',
                              objectFit: 'contain',
                            }}
                          /> */}
                        </div>
                      </div>

                      {/* Bottom Section - White with Description and Buttons */}
                      <div
                        style={{
                          background: item.footer_bg_color,
                          borderBottomLeftRadius: '16px',
                          borderBottomRightRadius: '16px',
                          padding: '20px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <h5>{item.heading || item.title}</h5>
                          <p>{item.description}</p>
                        </div>

                        <div className="courses__item-bottom">
                             <Link
                            href={item.url}
                            onClick={(e) => e.stopPropagation()}
                          >
                          <span className="start-learning-link">
                            Start Learning <span>›</span>
                          </span>
                          </Link>
                         <Link
                            className="dml-button-slider"
                            href="/student-enrollment"
                            onClick={(e) => e.stopPropagation()}
                            style={{ borderRadius: '56px' }}
                          >
                            <span className="text">Enroll Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="courses__nav">
              <div className="courses-button-prev home-courses-prev">
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
              <div className="courses-button-next home-courses-next">
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
