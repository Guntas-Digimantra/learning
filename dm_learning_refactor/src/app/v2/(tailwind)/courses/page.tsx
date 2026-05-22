import CourseArea from '@/components/courses/CourseArea';

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
  return <CourseArea />;
};
