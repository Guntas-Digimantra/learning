'use client';
import React from 'react';
import course1 from '../../../public/web-development.png';
import course2 from '../../../public/data-science.png';
import course3 from '../../../public/cyber-security.png';
import course4 from '../../../public/mobile-app-development.png';
import course5 from '../../../public/ux-ui.png';
import Image from 'next/image';
import backgroundCourses from '../../../public/courses-bg.png';
import { usePathname } from 'next/navigation';

const courses = [
  { icon: course1, title: 'Web Development' },
  { icon: course2, title: 'Data Science/Analytics' },
  { icon: course3, title: 'Cloud Computing' },
  { icon: course4, title: 'Mobile App Development' },
  { icon: course5, title: 'UX/UI Design' },
];

const Courses = () => {
  const pathname = usePathname();
  const isSummerRoute = pathname?.includes('summer-bootcamp-and-internship') ?? false;

  return (
    <section
      className={`bg-[#FFF9F2] bg-cover bg-center py-[100px] max-lg:pb-[60px] ${isSummerRoute ? 'pb-[120px] max-lg:pb-[60px]' : 'pb-[200px]'}`}
      style={{
        backgroundImage: `url(${backgroundCourses.src})`,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div>
          <h2 className="text-center text-[#121212]">
            {isSummerRoute ? (
              <>
                Focus <span className="font-bold text-[#fc8b20]">Areas</span>
              </>
            ) : (
              <>
                Explore Our <span className="font-bold text-[#fc8b20]">Courses</span>
              </>
            )}
          </h2>
          <div className="grid grid-cols-1 gap-[45px] pt-[50px] min-[576px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-5 max-[1200px]:gap-[30px]">
            {courses.map((course, i) => (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center justify-center rounded-[25px] bg-white p-[27px] text-center shadow-[0_0_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-90"
              >
                <Image src={course.icon} alt="courses" className="pb-3" />
                <p className="text-xl font-semibold leading-[1.2] text-black">{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
