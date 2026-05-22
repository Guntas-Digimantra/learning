import Contact from '@/components/contact';

export const metadata = {
  title: 'Contact Us | DMLearning',
  description:
    "Get in touch with DMLearning for inquiries, support, or more details about our IT training programs. We're here to help you with all your questions.",
  openGraph: {
    title: 'Contact Us | DMLearning',
    description:
      "Get in touch with DMLearning for inquiries, support, or more details about our IT training programs. We're here to help you with all your questions.",
  },
};
const page = () => {
  return <Contact />;
};

export default page;
