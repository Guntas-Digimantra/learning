import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/v2/routes/courses/hero-section'));
const OurCoursesSection = dynamic(() => import('@/components/v2/routes/courses/our-courses-section'));
const WhatStudentsSaySection = dynamic(() => import('@/components/v2/routes/courses/what-students-say-section'));
const CertificationSlider = dynamic(() => import('@/components/v2/common/certification-slider'));

export const metadata = {
  title: 'Top IT Courses & Professional Certifications',
  description:
    'Enroll in courses across fields like AI, ML, data science, cloud, and more. Complete internships and earn certifications to boost your career opportunities.',
  openGraph: {
    title: 'Top IT Courses & Professional Certifications',
    description:
      'Enroll in courses across fields like AI, ML, data science, cloud, and more. Complete internships and earn certifications to boost your career opportunities.',
  },
};

export default function CoursesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <OurCoursesSection />
      <CertificationSlider />
      <WhatStudentsSaySection />
    </div>
  );
}
