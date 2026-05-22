'use client';
import React from 'react';
import Link from '@/components/ui/link';

const skillsContent = [
  {
    subHeading: 'for learners',
    title: 'Advanced Industrial Training and Internship',
    description:
      'Build your dream career by mastering essential soft skills and technical topics through flexible learning, hands-on practice, and personalized support.',
    button: {
      text: 'Get started',
      link: '/advanced-industrial-training-and-internship',
    },
  },
  {
    subHeading: 'interested institution partners',
    title: 'Microsoft Certification and Training',
    description:
      'Welcome to DMLearning, the leading platform for certified Microsoft courses and professional development With a focus on delivering high-quality, industry-recognized certifications, we empower learners to unlock their full potential and stay ahead of the curve in their careers.',
    button: {
      text: 'Get started',
      link: '/microsoft-certifications',
    },
  },
];

const JourneyWithSkills = () => {
  return (
    <section className="bg-white px-[15px] py-[100px] max-lg:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-row max-lg:flex-col">
          <h2 className="w-[35%] self-center pb-[30px] text-[64px] font-semibold text-[#121212] max-[1200px]:text-[50px] max-lg:w-full max-lg:text-[28px]">
            Start your journey with <span className="text-[#fc8b20]">DMLearning</span>
          </h2>
          <div className="flex w-[65%] flex-col gap-[30px] max-lg:w-full">
            {skillsContent?.map((skill, i) => (
              <div
                className="flex flex-col gap-2 rounded-3xl border border-[rgba(48,44,65,0.05)] bg-white p-12 shadow-[0_7px_5px_rgba(0,0,0,0.1)] max-lg:p-5"
                key={i}
              >
                <p className="text-[17px] font-bold uppercase leading-[26px] text-[#eb7100] max-lg:text-xs">
                  {skill.subHeading}
                </p>
                <h3 className="text-[1.75rem] text-[#121212] max-lg:text-2xl">{skill.title}</h3>
                <p>{skill.description}</p>
                <div>
                  {skill.button && (
                    <Link
                      href={skill.button.link}
                      className="text-xl font-normal text-[#eb7100] underline"
                    >
                      {skill.button.text}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyWithSkills;
