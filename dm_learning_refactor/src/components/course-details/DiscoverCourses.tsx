"use client";
import Link from "@/components/ui/link";
import React from "react";
import { generateStars } from "@/libs/generate-stars";

export interface CourseCard {
  headerImage?: string;
  bgImage?: string;
  title: string;
  heading?: string;
  description: string;
  startLearningUrl?: string;
  enrollUrl?: string;
  borderColor?: string;
  border_color?: string;
  cardBackground?: string;
  footer_bg_color?: string;
  url?: string;
  [key: string]: unknown;
}

export interface DiscoverCoursesProps {
  titleStart: string;
  titleHighlight: string;
  titleEnd?: string;
  cards: CourseCard[];
  viewAllText?: string;
  viewAllUrl?: string;
  backgroundColor?: string;
}

const DiscoverCourses: React.FC<DiscoverCoursesProps> = ({
  titleStart,
  titleHighlight,
  titleEnd = "",
  cards,
  viewAllText = "View All",
  viewAllUrl = "#",
  backgroundColor = "#FFF6EA",
}) => {
  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="mb-12 text-center text-[56px] font-semibold leading-[110%] tracking-[-1px] text-black [font-variant:all-small-caps] max-[1240px]:text-[48px] max-[991px]:text-[40px] max-[600px]:text-[32px]">
          {titleStart}{' '}
          <span className="text-[#fc8b20]">{titleHighlight}</span>
          {titleEnd ? ` ${titleEnd}` : ""}
        </h2>

        <div className="mb-14 grid grid-cols-3 items-stretch gap-[54px] max-[991px]:mx-auto max-[991px]:mb-10 max-[991px]:max-w-[480px] max-[991px]:grid-cols-1">
          {cards.map((item: any, index) => {
            const image =
              item.bgImage?.trim() || item.headerImage?.trim() || "";
            const border = item.border_color || item.borderColor || "#E0E0E0";
            const bg = item.footer_bg_color || item.cardBackground || "#fff";

            return (
              <div
                key={index}
                className="relative flex h-full overflow-hidden rounded-[20px]"
              >
                <div
                  className="relative flex w-full flex-col overflow-hidden rounded-[20px] border-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
                  style={{ padding: "8px", background: border }}
                >
                  <div
                    className="relative flex min-h-[250px] gap-5 rounded-t-[20px] max-[1024px]:min-h-[220px] max-[768px]:min-h-0 max-[768px]:p-5"
                    style={{
                      backgroundImage: `url(${image})`,
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
                        {item.tag?.map(
                          (t: any, idx: React.Key | null | undefined) => (
                            <span
                              key={idx}
                              className="rounded-[20px] border border-white/30 bg-white/25 px-[7px] py-1 text-[10px] font-semibold uppercase tracking-[0.5px] text-white"
                            >
                              {t}
                            </span>
                          ),
                        )}
                      </div>

                      <h3 className="m-0 text-xl font-bold leading-[110%] text-white max-[1024px]:text-lg max-[946px]:text-sm max-[768px]:!text-xs">
                        {item.title}
                      </h3>
                      {item.review && (
                        <div className="flex w-fit items-center gap-[2.53px] rounded-[1.27px] bg-[linear-gradient(96.9deg,rgba(255,255,255,0.19)_1.92%,rgba(255,255,255,0.13)_125.84%)] px-[6.34px] py-[5.07px] text-xs text-white max-[1024px]:px-1.5 max-[1024px]:py-1 max-[1024px]:[&_span:first-child]:text-sm max-[1024px]:[&_span:first-child]:tracking-[2px]">
                          <span className="text-xs tracking-[2px]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                style={{
                                  color:
                                    i < generateStars(item.review).stars
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
                    style={{
                      background: bg,
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "16px",
                    }}
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
                      <Link
                        href={item.url ?? ""}
                        aria-label={`View details for ${item.title}`}
                      >
                        <span className="flex items-center gap-2 text-base font-semibold text-[#fc8b20] no-underline transition-[gap] duration-300 hover:gap-3">
                          Start Learning <span>›</span>
                        </span>
                      </Link>

                      <Link
                        href="/student-enrollment"
                        className="relative z-[2] inline-flex w-[120px] items-center gap-1.5 rounded-full border border-black bg-[#2a2a2a] px-[19px] py-2.5 text-sm font-semibold leading-[18px] text-white no-underline transition-[background,transform] duration-200 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:text-white max-[768px]:w-full max-[768px]:justify-center max-[768px]:text-center"
                        style={{ borderRadius: "56px" }}
                      >
                        <span>Enroll Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href={viewAllUrl}
            className="inline-flex h-[54px] w-[188px] items-center justify-center gap-2 rounded-full bg-[#2e2e2e] px-[18px] py-4 text-base font-medium leading-6 text-white no-underline transition-colors hover:bg-[#333]"
          >
            {viewAllText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCourses;
