import PaymentPage from '@/components/payment-page';

export const metadata = {
  title: 'Complete Enrollment with Payment for Your Course',
  description:
    'Submit your course and payment details to successfully enroll in our program. Begin your journey toward a professional career with confidence & ease.',
  openGraph: {
    title: 'Complete Enrollment with Payment for Your Course',
    description:
      'Submit your course and payment details to successfully enroll in our program. Begin your journey toward a professional career with confidence & ease.',
  },
};

const page = () => {
  return <PaymentPage />;
};

export default page;
