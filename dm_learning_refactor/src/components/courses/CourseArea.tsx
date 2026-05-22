'use client';

import Link from '@/components/ui/link';
import BreadcrumbOne from '@/components/common/BreadcrumbOne';
import { generateStars } from '@/libs/generate-stars';
import course_data from '@/app/data/home-data/CourseData';
import { useRouter } from 'next/navigation';

export { generateStars } from '@/libs/generate-stars';

const CourseArea = () => {
  const router = useRouter();

  return (
    <>
      <BreadcrumbOne title="All Courses" sub_title="Courses" />

      <section className="bg-white py-[100px]">
        <div className="dml-container">
          <div
            className="grid grid-cols-4 items-stretch gap-5 max-[1420px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[575px]:grid-cols-1"
            id="myTabContent"
          >
            {course_data[0]?.course_details?.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(item.url)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    router.push(item.url);
                  }
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[20px] bg-white p-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
                  style={{ background: item.border_color }}
                >
                  <div
                    className="h-[224px] overflow-hidden rounded-t-2xl border border-[#FFEEE6] bg-cover bg-center max-[991px]:min-h-[220px] max-[991px]:p-6 max-[767px]:min-h-0 max-[767px]:p-5"
                    style={{ backgroundImage: `url(${item.bgImage?.trim()})` }}
                  >
                    <div className="flex h-full flex-col p-6 text-white">
                      <div className="mb-[15px] flex flex-wrap gap-2.5 max-[767px]:gap-1.5">
                        {item.tag?.map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded-[20px] bg-white/20 px-[7px] py-1 text-[10px] font-medium max-[991px]:px-[7px] max-[991px]:py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-[15px] text-xl font-bold leading-[1.1] max-[991px]:text-lg max-[767px]:!text-xs max-[480px]:text-sm">
                        {item.title}
                      </h3>

                      {item.review && (
                        <div className="mt-auto flex items-center gap-[2.53px] rounded px-1.5 py-1">
                          <span className="text-xs tracking-[2px] max-[991px]:text-sm">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                style={{
                                  color: i < generateStars(item.review).stars ? '#ffffff' : '#ccc',
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
                  </div>

                  <div
                    className="flex flex-1 flex-col justify-between rounded-b-2xl p-6 max-[991px]:p-6"
                    style={{ background: item.footer_bg_color }}
                  >
                    <div>
                      <h5 className="mb-[15px] text-xl font-bold text-[#121212] max-[991px]:text-lg">
                        {item.heading || item.title}
                      </h5>
                      <p className="text-base leading-[1.6] text-[#666]">{item.description}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between max-[767px]:flex-col max-[767px]:items-stretch max-[767px]:gap-3">
                      <span className="flex items-center gap-2 text-base font-semibold text-[#fc8b20] transition-all duration-300 hover:gap-3">
                        Start Learning <span className="text-xl">›</span>
                      </span>
                      <Link
                        className="rounded-[56px] bg-[#2a2a2a] px-6 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] max-[767px]:w-full"
                        href="/student-enrollment"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Enroll Now</span>
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

export default CourseArea;
