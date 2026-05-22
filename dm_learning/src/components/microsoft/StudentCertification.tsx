import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";

const StudentCertification = () => {
  return (
    <section className="student-certification-section">
      <div className="dml-container">
        <div className="student-certification-content">
          <div className="student-left">
            <span className="uppercase">Microsoft Learn Student Hub</span>
            <h2>Student certifications</h2>
            <p>
              With 91% of hiring managers prioritizing certifications in their
              candidate evaluations, it&apos;s clear that these credentials can
              set you apart in the job market. Boost your technical skills and
              enhance your professional profile with a Microsoft Certification.
              Eligible students can take advantage of discounted rates for
              certification exams, making this an excellent opportunity to
              invest in your future.
            </p>
            <Link href="/student-enrollment" className="microsoft-button-transparent">
              Get Started
            </Link>
          </div>
          <div className="student-right">
            <Image
              src="/certificate-image.png"
              alt="student-certificate-img"
              width={590}
              height={362}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertification;
