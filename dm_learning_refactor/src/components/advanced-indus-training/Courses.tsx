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
      className={`courses-advanced-section ${isSummerRoute ? 'summer-route' : ''}`}
      style={{
        backgroundImage: `url(${backgroundCourses.src})`,
        backgroundSize: 'cover',
        backgroundColor: '#FFF9F2',
        backgroundPosition: 'center',
      }}
    >
      <div className="dml-container">
        <div className="explore-courses">
          <h2>
            {isSummerRoute ? (
              <>
                Focus <span className="orange-letter">Areas</span>
              </>
            ) : (
              <>
                Explore Our <span className="orange-letter">Courses</span>
              </>
            )}
          </h2>
          <div className="courses-container">
            {courses.map((course, i) => (
              <div key={i} className="courses-cards-styling">
                <Image src={course.icon} alt="courses" />
                <p className="courses-name">{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
