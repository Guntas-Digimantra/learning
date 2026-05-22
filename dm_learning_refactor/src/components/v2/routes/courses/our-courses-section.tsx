'use client';

import { COURSES } from '@/services/data/app-data';
import { COURSE_DATA } from '@/services/data/home-page-data';

import { Tabs } from '../../ui/tabs';
import CourseCard from '../../cards/course-card';
import ContainerSection from '../../common/container-section';
import SplitText from '@/components/gsap/split-text';
import SectionReveal from '@/components/gsap/section-reveal';

export default function OurCoursesSection() {
  return (
    <ContainerSection className="mx-auto">
      <SplitText animation="jitter-typewriter">
        <h3 className="uppercase section-heading text-start! mb-10">
          Our <span className="text-primary">Courses</span>
        </h3>
      </SplitText>
      <SectionReveal>
        <Tabs
          defaultValue="all"
          items={COURSES.map((item) => ({
            label: item[0].toUpperCase() + item.slice(1),
            value: item,
            content: ({ activeTab }) => {
              const courses =
                activeTab === 'all'
                  ? COURSE_DATA
                  : COURSE_DATA.filter((course) => activeTab === course.tag.toLowerCase());
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-14">
                  {courses?.map((course) => (
                    <CourseCard key={course.id} enrollFooter data={course} rootClassName="" />
                  ))}
                </div>
              );
            },
          }))}
          tabHeaderClassName="mb-10"
        />
      </SectionReveal>
    </ContainerSection>
  );
}
