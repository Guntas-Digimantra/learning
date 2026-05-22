'use client';
import React from 'react';
import upskilling from '../../../public/upskilling.svg';
import liveProjects from '../../../public/live-project.svg';
import workplaceSkills from '../../../public/workplace.svg';
import industryCertification from '../../../public/industry-certification.svg';

import Image, { StaticImageData } from 'next/image';

interface Perk {
  title: string;
  description: string;
  icon: StaticImageData;
}

const perksContent: Perk[] = [
  {
    title: 'Upskilling',
    description: '8 Weeks of intensive training & certifications through structured, industry vetted curriculum.',
    icon: upskilling,
  },
  {
    title: 'Live Projects',
    description: 'Build real, ready-to-ship products with team members & professionals for 4 weeks.',
    icon: liveProjects,
  },
  {
    title: 'Workplace Skills',
    description: 'Build your resume, enhance your profile & get noticed by recruiters from top companies.',
    icon: workplaceSkills,
  },
  {
    title: 'Industry Certification',
    description: 'Get live project & training certificates and gain a point of differentiation on your CV.',
    icon: industryCertification,
  },
];

const Perks = () => {
  return (
    <section className="px-[15px] py-[100px] max-[1260px]:pb-0 max-[1260px]:pt-[100px] lg:py-[150px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="grid grid-cols-1 gap-4 min-[991px]:grid-cols-2">
          {perksContent.map((perk, i) => (
            <div key={i} className="flex">
              <div className="mr-6 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full bg-[#fc8b20] max-md:mr-[1.2rem] max-md:h-[3.5rem] max-md:w-[3.5rem]">
                <Image src={perk.icon} alt="perk-icons" className="h-[30px] w-[30px] brightness-100 max-md:h-[25px] max-md:w-[25px]" />
              </div>
              <div>
                <h3 className="text-[28px] text-[#121212] max-md:text-xl">{perk.title}</h3>
                <p>{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
