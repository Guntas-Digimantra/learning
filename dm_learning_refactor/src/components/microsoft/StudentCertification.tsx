import Image from 'next/image';
import Link from '@/components/ui/link';
import React from 'react';

const transparentButtonClass =
  'rounded-[36px] border-2 border-white px-[34px] py-4 text-base font-semibold leading-6 text-white transition-colors hover:bg-white hover:text-black max-[767px]:px-3 max-[767px]:py-2 max-[767px]:text-[15px]';

const StudentCertification = () => {
  return (
    <section className="bg-black py-[100px] max-[1024px]:pt-[60px] max-[1024px]:pb-0">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex rounded-[43px] border border-white px-[30px] max-[1024px]:flex-col-reverse">
          <div className="w-1/2 content-center py-[30px] max-[1024px]:w-full [&_h2]:text-[48px] [&_h2]:text-white [&_h2]:max-[767px]:text-[28px] [&_p]:mt-[30px] [&_p]:mb-10 [&_p]:text-white">
            <span className="uppercase tracking-[0.225rem] text-white max-[767px]:text-[10px]">
              Microsoft Learn Student Hub
            </span>
            <h2>Student certifications</h2>
            <p>
              With 91% of hiring managers prioritizing certifications in their candidate evaluations, it&apos;s clear
              that these credentials can set you apart in the job market. Boost your technical skills and enhance your
              professional profile with a Microsoft Certification. Eligible students can take advantage of discounted
              rates for certification exams, making this an excellent opportunity to invest in your future.
            </p>
            <Link href="/student-enrollment" className={transparentButtonClass}>
              Get Started
            </Link>
          </div>
          <div className="w-1/2 pt-10 text-right max-[1024px]:w-full max-[1024px]:text-center [&_img]:h-full [&_img]:rounded-[43px]">
            <Image src="/certificate-image.png" alt="student-certificate-img" width={590} height={362} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertification;
