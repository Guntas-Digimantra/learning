import StudentEnrollment from '@/components/student-detailed-form';

export const metadata = {
  title: 'Student Enrollment | DMLearning',
  description:
    'Ready to kickstart your career? Enroll with DMLearning by completing the form to access quality IT courses and professional development programs.',
  openGraph: {
    title: 'Student Enrollment | DMLearning',
    description:
      'Ready to kickstart your career? Enroll with DMLearning by completing the form to access quality IT courses and professional development programs.',
  },
};

export default function StudentEnrollmentPage() {
  return <StudentEnrollment />;
}
