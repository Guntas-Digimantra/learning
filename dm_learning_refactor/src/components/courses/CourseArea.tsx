'use client';

import Link from '@/components/ui/link';
import BreadcrumbOne from '@/components/common/BreadcrumbOne';
import { generateStars } from '@/libs/generate-stars';
import course_data from '@/app/data/courses-page-data';
import { useRouter } from 'next/navigation';

export { generateStars } from '@/libs/generate-stars';

const CourseArea = () => {
  const router = useRouter();

  return (
    <>
      <BreadcrumbOne title="All Courses" sub_title="Courses" />

      <section className="all-courses-area-section max-[991px]:!py-[60px]">
        <div className="dml-container">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="grid" role="tabpanel">
              <div className="courses__grid-wrap">
                {course_data[0]?.course_details?.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => router.push(item.url)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      className="course-item courses-page-cards"
                      style={{
                        position: 'relative',
                        padding: '8px',
                        borderRadius: '20px',
                        background: item.border_color,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <div
                        className="max-[1024px]:!min-h-0"
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
                        <div className="course-item-left max-[768px]:p-5">
                          <div className="course-tags">
                            {item.tag?.map((t, idx) => (
                              <span key={idx} className="course-tag">
                                {t}
                              </span>
                            ))}
                          </div>

                          <h3 className="!leading-[110%] max-[1024px]:!text-[12px]">
                            {item.title}
                          </h3>
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
                              <span>{generateStars(item.review).rating.toFixed(1)}</span>
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
                        />
                      </div>

                      <div
                        style={{
                          background: item.footer_bg_color,
                          borderBottomLeftRadius: '16px',
                          borderBottomRightRadius: '16px',
                          padding: '20px 24px',
                        }}
                      >
                        <div>
                          <h5 className="max-[1024px]:!text-[18px]">{item.heading || item.title}</h5>
                          <p>{item.description}</p>
                        </div>

                        <div className="courses__item-bottom max-[1024px]:flex-col max-[1024px]:items-stretch">
                          <span className="start-learning-link">
                            Start Learning <span>›</span>
                          </span>
                          <Link
                            className="dml-button-slider max-[1024px]:!block max-[1024px]:!w-full max-[1024px]:text-center"
                            href="/student-enrollment"
                            onClick={(e) => e.stopPropagation()}
                            style={{ borderRadius: '56px' }}
                          >
                            <span className="text">Enroll Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseArea;
