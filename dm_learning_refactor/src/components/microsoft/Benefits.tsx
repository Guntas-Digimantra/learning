import Image from 'next/image';
import React from 'react';

const Benefits = () => {
  const benefitsData = [
    {
      imgSrc: '/money-dollar-one.svg',
      imgAlt: 'money',
      title: 'Enhanced Employability',
      description:
        'Earning a Microsoft certification demonstrates technical proficiency and knowledge in specific areas, making students more attractive to potential employers. It helps them stand out in a competitive job market.',
    },
    {
      imgSrc: '/chart-bar-up-arrow-one.svg',
      imgAlt: 'chart',
      title: 'Career Advancement Opportunities',
      description:
        'Microsoft certifications can open doors to various career paths and advancement opportunities. Students with certifications are often considered for promotions and higher-level positions, as they possess validated skills that align with industry needs.',
    },
    {
      imgSrc: '/chart-two-two.svg',
      imgAlt: 'chart',
      title: 'Practical Experience and Skills Development',
      description:
        'The certification process emphasizes hands-on, experience-based learning. Students gain practical skills that are directly applicable to real-world scenarios their readiness for the workforce.',
    },
    {
      imgSrc: '/hand-thumbs-up-one.svg',
      imgAlt: 'thumbs up',
      title: 'Networking and Community Access',
      description:
        'Obtaining a Microsoft certification connects students to a global community of professionals and peers. This network can provide valuable resources, mentorship opportunities, and insights into industry trends, further supporting their career growth.',
    },
  ];

  return (
    <section className="bg-black py-[100px] max-[1024px]:pt-[60px] max-[1024px]:pb-0">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex justify-between max-[1024px]:flex-col">
          <div className="w-[70%] max-[1024px]:w-full">
            <h2 className="mb-[50px] text-white">Transformative Benefits of Microsoft Certification</h2>
            <ul className="grid grid-cols-2 gap-x-14 gap-y-8 pr-5 max-[1024px]:pr-0 max-[767px]:grid-cols-1">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="bg-gradient-to-b from-black to-[#242424] p-5">
                  <Image src={benefit.imgSrc} width={64} height={64} alt={benefit.imgAlt} />
                  <p className="font-semibold text-white">{benefit.title}</p>
                  <p className="text-[#898895]">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="content-center max-[1024px]:text-center [&_img]:max-[1024px]:hidden">
            <Image src="/featured-microsoft.webp" width={352} height={461} alt="featured-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
