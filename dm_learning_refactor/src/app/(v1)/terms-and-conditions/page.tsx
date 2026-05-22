import TermsAndConditions from '@/components/terms-conditions/TermsAndConditions';

export const metadata = {
  title: 'Terms & Conditions | DMLearning',
  description:
    "Review DMLearning's Terms & Conditions to understand the legal framework governing your use of our platform, services, and courses, including information about payment processing and our payment gateway.",
  openGraph: {
    title: 'Terms & Conditions | DMLearning',
    description:
      "Review DMLearning's Terms & Conditions to understand the legal framework governing your use of our platform, services, and courses, including information about payment processing and our payment gateway.",
  },
};

const index = () => {
  return <TermsAndConditions />;
};

export default index;
