"use client";
import Link from "@/components/ui/link";
import React from "react";
import "/public/css/home-page.css";

const generateStars = (reviewText: string) => {
  const ratingMatch = reviewText.match(/(\d+\.?\d*)/);
  if (!ratingMatch) return { stars: 0, rating: 0 };
  const rating = parseFloat(ratingMatch[1]);
  return { stars: Math.round(rating), rating };
};

export interface CourseCard {
  headerImage?: string;
  bgImage?: string; // alias used in some data sources
  title: string;
  heading?: string;
  description: string;
  startLearningUrl?: string;
  enrollUrl?: string;
  borderColor?: string;
  border_color?: string; // alias used in some data sources
  cardBackground?: string;
  footer_bg_color?: string; // alias used in some data sources
  url?: string;
  [key: string]: unknown; // allow extra fields without breaking
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
    <section className="discover-courses-section" style={{ backgroundColor }}>
      <div className="dml-container">
        <h2 className="discover-courses-title">
          {titleStart} <span>{titleHighlight}</span>
          {titleEnd ? ` ${titleEnd}` : ""}
        </h2>

        <div className="discover-courses-grid">
          {cards.map((item: any, index) => {
            const image =
              item.bgImage?.trim() || item.headerImage?.trim() || "";
            const border = item.border_color || item.borderColor || "#E0E0E0";
            const bg = item.footer_bg_color || item.cardBackground || "#fff";

            return (
              <div
                key={index}
                style={{
                  height: "100%",
                  display: "flex",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
           
                <div
                  className="course-item courses-page-cards"
                  style={{
                    position: "relative",
                    padding: "8px",
                    borderRadius: "20px",
                    background: border,
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div
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
                    <div className="course-item-left">
                      <div className="course-tags">
                        {item.tag?.map(
                          (t: any, idx: React.Key | null | undefined) => (
                            <span key={idx} className="course-tag">
                              {t}
                            </span>
                          ),
                        )}
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
                                      ? "#ffffff"
                                      : "#ccc",
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
                      background: bg,
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "16px",
                      padding: "20px 24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h5>{item.heading || item.title}</h5>
                      <p>{item.description}</p>
                    </div>

                    <div className="courses__item-bottom">
                           <Link
                  href={item.url ?? ""}
                  aria-label={`View details for ${item.title}`}
                >
                      <span className="start-learning-link">
                        Start Learning <span>›</span>
                      </span>
                      </Link>

                      <Link
                        href="/student-enrollment"
                        className="dml-button-slider"
                        style={{ borderRadius: "56px", position: "relative", zIndex: 2 }}
                        >
                        <span className="text">Enroll Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="discover-courses-footer">
          <Link href={viewAllUrl} className="view-all-btn">
            {viewAllText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCourses;
