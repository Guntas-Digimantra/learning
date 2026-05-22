'use client';
import React from 'react';
import course1 from '../../../public/stat-icon1.png';
import course2 from '../../../public/stat-icon2.png';
import course3 from '../../../public/stat-icon3.png';
import course4 from '../../../public/stat-icon4.png';

import Image from 'next/image';
import Link from '@/components/ui/link';
import Count from '../common/Count';

const stats = [
  {
    id: 1,
    icon: course1,
    count: 50,
    title: 'Certified Teachers',
  },
  {
    id: 2,
    icon: course2,
    count: 1000,
    title: 'Students',
  },
  {
    id: 3,
    icon: course3,
    count: 25,
    title: 'College Associate',
  },
  {
    id: 4,
    icon: course4,
    count: 10,
    title: 'Years In the Industry',
  },
];

const Stats = () => {
  const firstGroup = stats.slice(0, 2);
  const secondGroup = stats.slice(2);

  return (
    <section className="relative z-[1] bg-[#fff6ed] px-[15px] py-[100px] max-lg:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-row max-lg:flex-col">
          <div className="flex-1 max-lg:pb-[50px]">
            <div className="mb-5 inline-block rounded-full bg-[#ffe0cc] px-3 py-[7px]">
              <span className="m-0 text-xs font-extrabold uppercase tracking-[1.5px] text-[#ff6400]">achievement</span>
            </div>
            <h2 className="text-[#121212]">The DML Impact</h2>
            <p className="mb-[30px] mt-5">
              Embark on a journey through some of our achievements— DML intern&apos;s takes pride in numerous successes,
              showcasing diverse projects and milestones that highlight our commitment to excellence and innovation.
            </p>
            <Link
              href="/student-enrollment"
              className="inline-flex h-[54px] max-w-[173px] cursor-pointer items-center justify-center rounded-[24px] border-0 bg-black px-8 py-4 font-dm-sans text-base font-semibold text-white no-underline transition-colors hover:bg-white hover:text-black"
            >
              Join Now
            </Link>
          </div>

          <div className="relative flex-1 pl-[100px] max-lg:pl-0 after:absolute after:bottom-[70px] after:left-[187px] after:right-[100px] after:top-[43px] after:z-[-1] after:rounded-full after:border after:border-dashed after:border-[#ada4df00] after:p-[59px_32px_12px_52px] after:content-[''] max-md:after:hidden">
            <div className="flex flex-row">
              <div className="flex w-full flex-col">
                <div className="flex gap-[30px] pb-[30px]">
                  {firstGroup.map((stat) => (
                    <div key={stat.id} className="w-1/2 rounded-3xl bg-white py-5 text-center">
                      <Image src={stat.icon} alt={stat.title} width={52} height={48} />
                      <h3 className="text-[30px] font-medium text-[#121212] max-lg:text-2xl">
                        <Count number={stat.count} />+
                      </h3>
                      <p>{stat.title}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-[30px] pb-[30px]">
                  {secondGroup.map((stat) => (
                    <div key={stat.id} className="w-1/2 rounded-3xl bg-white py-5 text-center">
                      <Image src={stat.icon} alt={stat.title} width={52} height={48} />
                      <h3 className="text-[30px] font-medium text-[#121212] max-lg:text-2xl">
                        <Count number={stat.count} />+
                      </h3>
                      <p>{stat.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
