import Image from 'next/image';
import Link from '@/components/ui/link';
import React from 'react';

const StudentCertification = () => {
  return (
    <section className="student-certification-section">
      <div className="dml-container">
        <div className="student-certification-content">
          <div className="microsoft-student-left min-w-0">
            <span className="uppercase tracking-[0.225rem] max-[767px]:!text-[10px]">Microsoft Learn Student Hub</span>
            <h2 className="!mt-0 !text-[48px] !font-semibold !leading-[1.3] max-[767px]:!text-[28px]">Student certifications</h2>
            <p className="!mt-[30px] !mb-10 !text-base !leading-[1.7]">
              With 91% of hiring managers prioritizing certifications in their candidate evaluations, it&apos;s clear
              that these credentials can set you apart in the job market. Boost your technical skills and enhance your
              professional profile with a Microsoft Certification. Eligible students can take advantage of discounted
              rates for certification exams, making this an excellent opportunity to invest in your future.
            </p>
            <Link href="/student-enrollment" className="microsoft-button-transparent">
              Get Started
            </Link>
          </div>
          <div className="microsoft-student-right">
            <Image src="/certificate-image.png" alt="student-certificate-img" width={590} height={362} className="max-[1024px]:mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertification;
