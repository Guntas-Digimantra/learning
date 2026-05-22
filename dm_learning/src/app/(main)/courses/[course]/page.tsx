import { Metadata } from 'next';

import dmlCourses from '@/app/data/courses/courses-details';
import developmentCourses from '@/app/data/courses/development-courses-details';
import {
  Banner,
  CallToAction,
  CertificationSection,
  CourseIncludedSection,
  DiscoverCourses,
  FAQSection,
  RoadmapSection,
  SkillsThatMatter,
  StatsBar,
} from '@/components/course-details';

import '/public/css/dummy.css';
import '/public/css/course-details.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const courseId = (await params).course;

  const course =
    courseId in dmlCourses
      ? dmlCourses[courseId as keyof typeof dmlCourses]
      : courseId in developmentCourses
        ? developmentCourses[courseId as keyof typeof developmentCourses]
        : null;

  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course does not exist.',
    };
  }

  return {
    title: `${course.title} | DM Learning`,
    description: course.description,
    keywords: [course.title, 'online course', 'learn'],
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.bgImage || '/default-course.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: [course.bgImage || '/default-course.jpg'],
    },
  };
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const courseId = (await params).course;

  const isCourseInDevCourses = courseId in developmentCourses;
  const course =
    courseId in dmlCourses
      ? dmlCourses[courseId as keyof typeof dmlCourses]
      : isCourseInDevCourses
        ? developmentCourses[courseId as keyof typeof developmentCourses]
        : null;

  return !course ? (
    <>Course not found</>
  ) : (
    <>
      <Banner
        title={course.title}
        description={course.description}
        buttonText="Enroll Now"
        bgImage={course.bgImage}
        rightImage={course.rightImage}
      />

      <StatsBar
        stats={course.statsData}
        backgroundColor={course.backgroundColor}
        borderColor={course.borderColor}
      />

      <SkillsThatMatter
        titleStart="Build"
        titleHighlight="Skills"
        titleEnd="That Matter"
        items={course.skillsData}
      />

      <CourseIncludedSection
        backgroundColor={course.backgroundColor}
        title={course.includeDescription}
        description="Get the skills, structure, and hands-on experience to launch your career."
        buttonText="Register Now"
        includedTitle="What's included"
        includedItems={course.includedData}
      />

      <RoadmapSection
        titleStart={course.title}
        titleHighlight="ROADMAP"
        steps={course.roadmapData}
      />

      <DiscoverCourses
        titleStart="Career-Focused "
        titleHighlight="Programs"
        cards={course.discoverCoursesData}
        viewAllText="View All"
        viewAllUrl="/courses"
        backgroundColor="#FFF8F2"
      />

      <CertificationSection
        titleStart="GET"
        titleHighlight1="CERTIFIED"
        titleMid="& BOOST YOUR"
        titleHighlight2="CAREER"
        description={`Complete your course and earn a personalised certificate that recognises your effort, dedication, and newly acquired skills. This certification enhances your professional profile, making it easier to showcase your expertise with confidence, whether you're applying for jobs, working with clients, or pursuing further education.`}
        image="/course-details/certified.png"
        backgroundColor="#FFF"
      />

      <FAQSection faqData={course.faq}/>
      <CallToAction
        backgroundColor="#FFF8F2"
        title={
          <>
            <span>Degree?</span> Nice.
            <br />
            Skills?
            <span> Game-changer.</span>
          </>
        }
        description={`No more “Someday”. Join us now and start your ${course.title} journey.`}
      />
    </>
  );
}
