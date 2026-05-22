import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | DMLearning",
  description:
    "Read DMLearning's privacy policy to understand how we collect, use, and protect your personal information while you access our services and courses.",
  openGraph: {
    title: "Privacy Policy | DMLearning",
    description:
      "Read DMLearning's privacy policy to understand how we collect, use, and protect your personal information while you access our services and courses.",
  },
};

const index = () => {
  return <PrivacyPolicy />;
};

export default index;
