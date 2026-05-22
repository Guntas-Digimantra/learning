'use client';
import React from 'react';
import Image from 'next/image';
import Link from '@/components/ui/link';
import heroImage from '../../../public/advanced-banner.png';

const Banner: React.FC = () => {
  return (
    <section className="bg-[#302c41] px-5 py-[50px] max-lg:pt-[100px] lg:py-[100px]">
      <div className="relative z-[1] mx-auto box-border flex w-full max-w-[1410px] items-center justify-center gap-10 px-4 py-20 pl-12 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-[40px_200px] before:bg-[#fff6f0] before:content-[''] max-lg:flex-col-reverse max-lg:px-4 max-lg:py-10 max-lg:before:rounded-[40px_104px_104px_40px] lg:px-[104px] lg:py-20 lg:pl-12">
        <div className="flex-1">
          <h1 className="text-[2rem] font-semibold text-[#302c41] lg:text-[3.5rem]">
            Advanced Industrial Training & <span className="text-[#fc8b20]">Internship</span>
          </h1>
          <p className="mb-10 text-lg">
            Build your dream career by mastering essential soft skills and technical topics through flexible learning,
            hands-on practice, and personalized support.
          </p>
          <div>
            <Link
              href="/courses"
              className="inline-flex h-[54px] max-w-[173px] items-center justify-center rounded-[24px] bg-black px-8 py-4 font-dm-sans text-base font-semibold text-white no-underline transition-colors hover:bg-white hover:text-black"
            >
              Explore programs
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image src={heroImage} alt="bannerimage" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
