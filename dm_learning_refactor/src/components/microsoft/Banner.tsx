import Image from 'next/image';
import Link from '@/components/ui/link';
import React from 'react';

const transparentButtonClass =
  'rounded-[36px] border-2 border-white px-[34px] py-4 text-base font-semibold leading-6 text-white transition-colors hover:bg-white hover:text-black max-[767px]:px-3 max-[767px]:py-2 max-[767px]:text-[15px]';

const Banner = () => {
  return (
    <section className="bg-black py-[100px] max-[1024px]:pt-20 max-[1024px]:pb-[60px]">
      <div className="mx-auto max-w-[1500px] px-[15px]">
        <div className="flex">
          <div className="relative flex-1 opacity-0 scale-[0.8] animate-zoom-in-out [animation-delay:0.5s] max-[1024px]:hidden">
            <Image src="/DMLearning-left.png" alt="microosft-tools-image" width={500} height={500} />
          </div>
          <div className="flex-1 content-center px-20 text-center text-white max-[1200px]:px-10 max-[1024px]:p-0">
            <h1 className="text-[62px] leading-[1.2] max-[767px]:text-[40px]">Microsoft Certifications</h1>
            <p className="pt-[30px] pb-[50px] text-white">
              Welcome to DMLearning, the leading platform for certified Microsoft courses and professional development
              with a focus on delivering high-quality, industry-recognized certifications, we empower learners to unlock
              their full potential and stay ahead of the curve in their careers.
            </p>
            <div className="flex justify-center gap-5 max-[767px]:inline-flex max-[767px]:flex-col">
              <Link href="#certification-career" className={transparentButtonClass}>
                Explore Certifications
              </Link>
            </div>
          </div>
          <div className="relative flex-1 opacity-0 scale-[0.8] animate-zoom-in-out [animation-delay:0.5s] max-[1024px]:hidden">
            <Image src="/DMLearning-Right.png" alt="microosft-tools-image" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
