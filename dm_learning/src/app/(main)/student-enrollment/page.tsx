import StudentEnrollment from "@/components/student-detailed-form";
import "/public/css/home-page.css";
import "/public/css/contact-us.css";

export const metadata = {
  title: "Student Enrollment | DMLearning",
  description:
    "Ready to kickstart your career? Enroll with DMLearning by completing the form to access quality IT courses and professional development programs.",
  openGraph: {
    title: "Student Enrollment | DMLearning",
    description:
      "Ready to kickstart your career? Enroll with DMLearning by completing the form to access quality IT courses and professional development programs.",
  },
};

const page = () => {
  return <StudentEnrollment />;
};

export default page;
