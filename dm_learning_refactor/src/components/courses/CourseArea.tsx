'use client';
import Image from 'next/image';
import Link from 'next/link';
import course_data from '@/app/data/home-data/CourseData';
import FAQAccordion from '../home/FaqArea';

export const generateStars = (reviewText: string) => {
  const ratingMatch = reviewText.match(/(\d+\.?\d*)/);
  if (!ratingMatch) return { stars: 0, rating: 0 };

  const rating = parseFloat(ratingMatch[1]);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return {
    stars: fullStars + (hasHalfStar ? 1 : 0),
    rating,
  };
};

const CourseArea = () => {
  return (
    <section className="dml-container">
      <div className="courses-header">
        <div>
          <h1>
            EXPLORE OUR <span className="orange-letter">COURSES</span>
          </h1>
          <p>
            Discover career-ready programs designed to build your skills from the ground up. Whether you&apos;re a
            beginner or looking to upgrade, our expert-led courses cover today&apos;s most in-demand technologies and
            tools, helping you stay competitive in an ever-evolving digital landscape.
          </p>
        </div>
        <div>
          <img src="course.svg" style={{ height: '403px', maxWidth: '490px' }}></img>
        </div>
      </div>
      <div className="all-courses-area-section">
        <h2>
          OUR <span className="orange-letter">CORE VALUES</span>
        </h2>
        <div className="courses__grid-wrap">
          {course_data[0]?.course_details.map((item, index) => (
            <div key={index} className="catalog-card-item">
              <Image
                src={item.image}
                alt="catalog"
                width={320}
                height={224}
                quality={100}
                className="catalog-card-item-image"
              />
              <div>
                <div className="catalog-card-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="catalog-buttons">
                    <Link href="/contact" className="view-course">
                      Start Learning
                      <Image src="/right-arrow.svg" alt="arrow" width={7} height={14} />
                    </Link>
                    <Link href="/student-enrollment" className="enroll-button">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQAccordion />
    </section>
  );
};

export default CourseArea;
