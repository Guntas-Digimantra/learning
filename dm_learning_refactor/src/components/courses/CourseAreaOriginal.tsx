'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import course_data from '@/app/data/home-data/CourseData';
import BreadcrumbOne from '@/components/common/BreadcrumbOne';

export const generateStars = (reviewText: string) => {
  const ratingMatch = reviewText.match(/(\d+\.?\d*)/);
  if (!ratingMatch) return { stars: 0, rating: 0 };
  const rating = parseFloat(ratingMatch[1]);
  return {
    stars: Math.floor(rating) + (rating % 1 >= 0.5 ? 1 : 0),
    rating: rating,
  };
};

const CourseAreaOriginal = () => {
  const router = useRouter();
  
  return (
    <>
      <BreadcrumbOne title="All Courses" sub_title="Courses" />
      <section className="py-[100px] bg-white">
        <div className="dml-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] items-stretch">
            {course_data[0]?.course_details?.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(item.url)}
                className="cursor-pointer group flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className="relative p-[8px] rounded-[20px] h-full flex flex-col"
                  style={{ background: item.border_color }}
                >
                  <div
                    className="h-[224px] border border-[#FFEEE6] rounded-t-[16px] overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.bgImage?.trim()})` }}
                  >
                    <div className="p-[24px_20px] text-white h-full flex flex-col">
                      <div className="flex flex-wrap gap-[8px] mb-[15px]">
                        {item.tag?.map((t, idx) => (
                          <span key={idx} className="bg-white/20 px-[12px] py-[4px] rounded-[20px] text-[14px]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-[24px] font-semibold mb-[15px] leading-[1.3]">{item.title}</h3>
                      {item.review && (
                        <div className="flex items-center gap-[8px] mt-auto">
                          <span className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                style={{ color: i < generateStars(item.review).stars ? '#ffffff' : '#ccc' }}
                              >
                                ★
                              </span>
                            ))}
                          </span>
                          <span>{generateStars(item.review).rating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className="rounded-b-[16px] p-[20px_24px] flex flex-col flex-grow justify-between"
                    style={{ background: item.footer_bg_color }}
                  >
                    <div>
                      <h5 className="text-[1.25rem] font-semibold text-black mb-2">{item.heading || item.title}</h5>
                      <p className="text-[#6d6c80]">{item.description}</p>
                    </div>

                    <div className="flex justify-between items-center mt-[20px]">
                      <span className="text-[#121212] font-semibold flex items-center gap-[5px]">
                        Start Learning <span className="text-[20px]">›</span>
                      </span>
                      <Link
                        href="/student-enrollment"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#FC8B20] text-white px-[24px] py-[10px] font-semibold rounded-[56px] transition-colors duration-300 hover:bg-[#121212]"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseAreaOriginal;
