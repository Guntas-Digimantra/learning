"use client";

import { useRef } from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "@/components/ui/link";
import course_data from "@/app/data/home-data/CourseData";

/* ── Build course list from the homepage central data ── */
const allCourses = course_data[0].course_details.map((c) => ({
  id: c.id,
  title: c.heading || c.title,
  thumbnailTitle: c.heading || c.title,
  description: c.description || "",
  bgImage: c.bgImage,
  borderGradient: c.border_color.replace(" border-box", ""),
  footerGradient: c.footer_bg_color,
  tags: c.tag.filter((t) => !t.toLowerCase().includes("20%")),
  rating: c.review.replace(/[^0-9.]/g, ""),
  url: c.url,
}));

function StarRating({ rating }: { rating: string }) {
  const score = parseFloat(rating);
  return (
    <div className="inline-flex w-fit gap-0.5 items-center px-1.5 py-1 rounded-xs border border-white/20 shadow-badge">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(score);
        const half = !filled && i - 0.5 <= score;
        return half ? (
          <StarHalf key={i} size={8} className="fill-white text-white" />
        ) : (
          <Star
            key={i}
            size={8}
            className={filled ? "fill-white text-white" : "fill-white/30 text-white/30"}
          />
        );
      })}
      <span className="text-tiny text-white font-semibold ml-0.5">
        {rating}
      </span>
    </div>
  );
}

function CourseCard({ course }: { course: (typeof allCourses)[number] }) {
  return (
    <div
      className="rounded-card p-2 h-full flex flex-col"
      style={{ background: course.borderGradient }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          backgroundImage: `url(${course.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 224,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        }}
      >
        {/* Badges + title + rating overlay */}
        <div className="absolute inset-0 p-6 flex flex-col gap-3 justify-center">
          {/* Tags */}
          {course.tags.length > 0 && (
            <div className="flex gap-1.75 flex-wrap">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-badge font-bold text-white uppercase px-2.25 py-1.25 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-badge whitespace-nowrap leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <p
            className="font-bold text-white leading-extra-tight whitespace-pre-line"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 22,
              maxWidth: 185,
            }}
          >
            {course.thumbnailTitle}
          </p>

          <StarRating rating={course.rating} />
        </div>
      </div>

      {/* Body */}
      <div
        className="flex flex-col px-6 pt-5 pb-6 flex-1 gap-3"
        style={{
          background: course.footerGradient,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <h3
          className="font-bold text-black m-0"
          style={{ fontSize: 20, lineHeight: "28px" }}
        >
          {course.title}
        </h3>
        <p
          className="text-black m-0 flex-1"
          style={{ fontSize: 15, lineHeight: "1.52" }}
        >
          {course.description}
        </p>
        <div className="flex items-center justify-between mt-1">
          <Link
            href={course.url}
            className="flex items-center gap-1 font-semibold text-base text-accent no-underline"
          >
            Start Learning
            <ChevronRight size={14} />
          </Link>
          <Link
            href={course.url}
            className="bg-black text-white font-medium text-base px-4.5 py-2.5 rounded-full no-underline"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OtherCourses() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-10 xl:py-16">
      <div className="mx-auto w-full max-w-[76.25rem] px-6 flex flex-col gap-10 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            Other Courses
          </span>
          <h2
            className="text-at-ink font-semibold m-0"
            style={{ fontSize: 40, lineHeight: 1.1 }}
          >
            Explore Our Other Courses
          </h2>
        </div>

        {/* Swiper + nav */}
        <div className="flex items-center gap-4">
          <div className="flex-1 min-w-0 overflow-hidden">
            <Swiper
              onSwiper={(s) => {
                swiperRef.current = s;
              }}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 1.8, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
              }}
            >
              {allCourses.map((course) => (
                <SwiperSlide key={course.id} className="!h-auto">
                  <CourseCard course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Stacked nav — visible on desktop, matches Figma layout */}
          <div className="hidden xl:flex flex-col gap-3 shrink-0">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-at-border shadow-card-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={22} className="text-at-cta" />
            </button>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-at-border shadow-card-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={22} className="text-at-muted" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
