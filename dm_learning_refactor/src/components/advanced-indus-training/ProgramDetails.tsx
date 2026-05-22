'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from '@/components/ui/link';
import applyNow from '../../../public/applynow.png';
import laptop from '../../../public/laptopIcon.webp';
import book from '../../../public/books.svg';
import ai from '../../../public/ai.svg';
import dollar from '../../../public/dollar.webp';

interface ProgramList {
  heading: string;
  listItem: string[];
}

interface CardList {
  logo: StaticImageData;
  title: string;
}

interface ProgramData {
  title: string;
  description: string;
  list: ProgramList[];
  cardList: CardList[];
}

const data: ProgramData = {
  title: 'Land a High-Paying Job with our Advanced Industrial Training and Internship Program',
  description: `Are you ready to kickstart your career in IT? Our internship program is designed to equip you with the skills you need in today's rapidly evolving landscape. With 10+ years of experience and over 5,000 graduates placed in top tech companies, we know what it takes to get you there.`,
  list: [
    {
      heading: `Who is this program for?`,
      listItem: [
        'Students who are 18-25 years old.',
        'Those with a high school degree or equivalent.',
        'Individuals who prefer practical learning, live instruction, and hands-on experience.',
      ],
    },
    {
      heading: "Here's what you'll learn",
      listItem: [
        'Programming Fundamentals',
        'Back-End Engineering',
        'Front-End Engineering',
        'Web Development Fundamentals',
        'Artificial Intelligence',
      ],
    },
    {
      heading: "By the end of the program, you'll have",
      listItem: [
        'Proficiency in Web Development, UX/UI Design and more.',
        'Hands on experience with industry specific technologies.',
        'A distinguished portfolio that demonstrates your new coding skills.',
        'Access to our Alumni network and the job search resources needed to launch a new career.',
      ],
    },
    {
      heading: 'Why choose our program?',
      listItem: [
        `Experienced and dedicated team`,
        `In-house training at DigiMantra, Ludhiana`,
        `Industry Specific Expertise`,
        `By the end of this program, you'll gain valuable skills that will elevate your CV`,
      ],
    },
  ],
  cardList: [
    { logo: laptop, title: 'Practical experience' },
    { logo: book, title: 'Live instruction & support' },
    { logo: ai, title: 'Hands on training with multiple technologies' },
    { logo: dollar, title: 'Internship plans starting at minimal cost' },
  ],
};

const ProgramDetails: React.FC = () => {
  const { title = '', description = '', list = [], cardList = [] } = data || {};
  return (
    <section className="bg-white py-[100px]">
      <div className="relative mx-auto max-w-[1440px] px-[15px] pb-[60px] max-lg:pb-0">
        <div className="flex flex-wrap">
          <div className="w-full min-[991px]:w-1/2">
            <div className="rounded-lg bg-[#fff6f0] p-[30px]">
              <div className="w-full min-[991px]:w-1/2">
                <h2 className="mb-[15px] text-[36px] text-[#302c41] max-md:text-[28px]">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="w-full py-[30px] pl-0 min-[991px]:w-1/2 min-[991px]:pl-[30px]">
            {list.map((item, i) => (
              <div key={i} className="pb-4">
                <p className="inline-block border-b-[3px] border-[#fc8b20] text-xl font-semibold text-black">
                  {item.heading}
                </p>
                <ul className="list-disc pt-5 pl-[30px] font-normal [&>li]:list-item">
                  {item.listItem.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-[2rem_2rem_auto_auto] h-full w-[40%] max-lg:static max-lg:mt-8 max-lg:h-auto max-lg:w-full">
          <div className="sticky top-[100px] mx-auto w-full rounded bg-white p-8 pb-10 shadow-[0_2px_15px_#0003]">
            <Image src={applyNow} alt="program" />
            <div className="flex pt-[30px] text-center">
              <Link
                href="/student-enrollment"
                className="w-full rounded-md border-0 bg-[#fc8b20] px-[34px] py-4 text-center text-base font-semibold leading-6 text-white no-underline"
              >
                APPLY NOW
              </Link>
            </div>
            <div className="pt-[18px]">
              <h3 className="pb-2.5 text-lg font-medium leading-[26px] tracking-[-0.03em] text-black">
                Recommended Experience Level:
              </h3>
              <p className="pb-2.5">Basic & above</p>
              <h3 className="pb-2.5 text-lg font-medium leading-[26px] tracking-[-0.03em] text-black">
                Ideal for students who prefer:
              </h3>
              <div>
                {cardList.map((list, i) => (
                  <div key={i} className="flex items-center gap-3 pb-3">
                    <Image src={list.logo} alt="cardLogo" style={{ height: '25px', width: '25px' }} />
                    <p>{list.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
