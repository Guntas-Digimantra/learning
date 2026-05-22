'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

const statsData = [
  {
    id: 1,
    color: '#6249c5',
    imageSrc: '/upskilling.svg',
    altText: 'perk-icons',
    text: '50+ Certified Trainers',
  },
  {
    id: 2,
    color: '#65b168',
    imageSrc: '/live-project.svg',
    altText: 'perk-icons',
    text: '1000+ Students',
  },
  {
    id: 3,
    color: '#ef6292',
    imageSrc: '/workplace.svg',
    altText: 'perk-icons',
    text: '35+ Courses available',
  },
  {
    id: 4,
    color: '#5780e9',
    imageSrc: '/industry-certification.svg',
    altText: 'perk-icons',
    text: '10+ Years in the industry',
  },
];

const SCALE_UP_CLASSES = ['scale-[1.2]', 'text-[#f8f8f8]'];
const DIVIDER_HIGHLIGHT_CLASSES = ['border-white', 'h-[182px]'];

const StatsMicrosoft = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isMobile = window.innerWidth < 767;

        entries.forEach((entry) => {
          if (isMobile && entry.target.classList?.contains('stats-heading-one')) {
            return;
          }

          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
              if (entry.target.dataset.index !== undefined) {
                const index = parseInt(entry.target.dataset.index || '0', 10);
                entry.target.style.backgroundColor = statsData[index]?.color || 'pink';
              } else if (entry.target.dataset.statsDivider !== undefined) {
                entry.target.classList.add(...DIVIDER_HIGHLIGHT_CLASSES);
              } else {
                entry.target.classList.add(...SCALE_UP_CLASSES);
              }
            }
          } else if (entry.target instanceof HTMLElement) {
            if (entry.target.dataset.index !== undefined) {
              entry.target.style.backgroundColor = '';
            } else if (entry.target.dataset.statsDivider !== undefined) {
              entry.target.classList.remove(...DIVIDER_HIGHLIGHT_CLASSES);
            } else {
              entry.target.classList.remove(...SCALE_UP_CLASSES);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      '.stats-heading-one, [data-stats-content] h2, [data-stats-img], [data-stats-divider]'
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#15181a] bg-[url('/dark-hero-section-only-lines-33050.svg')] bg-[length:auto] bg-[position:bottom_center] bg-no-repeat">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto w-full max-w-[976px] pt-[100px] pb-[60px] text-center max-[767px]:pb-0">
          <div className="stats-heading-one pb-[15px] text-[48px] leading-[76px] font-extrabold text-white transition-[transform,color] duration-700 ease-in-out max-[767px]:text-[40px] max-[767px]:leading-[1.3]">
            8 years of empowering tech careers
          </div>
        </div>
        <div
          data-stats-content
          className="relative mx-auto flex w-full max-w-[976px] flex-col gap-[200px] pt-[100px] pb-[100px] text-center max-[767px]:gap-[130px]"
        >
          <Image
            src="/element1.png"
            alt="element-1"
            className="absolute -left-[49px] bottom-[88%] h-[120px] w-[120px] animate-[moveUpDown_3s_ease-in-out_infinite] max-[1200px]:hidden max-[1280px]:h-[120px] max-[1280px]:w-[120px]"
            width={180}
            height={180}
          />
          <Image
            src="/element2.png"
            alt="element-2"
            className="absolute left-full top-[15%] text-transparent animate-[moveUpDown_3s_ease-in-out_infinite] max-[1200px]:hidden max-[1280px]:left-[84%] max-[1280px]:h-[90px] max-[1280px]:w-[90px]"
            width={120}
            height={120}
          />
          <Image
            src="/element3.png"
            alt="element-3"
            className="absolute right-full bottom-1/2 text-transparent animate-[moveUpDown_3s_ease-in-out_infinite] max-[1200px]:hidden max-[1280px]:right-[87%] max-[1280px]:bottom-[46%]"
            width={110}
            height={110}
          />
          <Image
            src="/element4.png"
            alt="element-4"
            className="absolute -right-[15%] bottom-[14%] text-transparent animate-[moveUpDown_3s_ease-in-out_infinite] max-[1200px]:hidden max-[1280px]:right-0 max-[1280px]:bottom-[13%]"
            width={180}
            height={180}
          />
          {statsData.map((item, index) => (
            <div className="relative flex flex-col items-center gap-14" key={item.id}>
              <div
                data-stats-img
                data-index={index}
                className="h-[94px] w-[101px] content-center rounded-[17px] bg-[#f5f5f5] p-[11px] [&_img]:brightness-[100]"
              >
                <Image src={item.imageSrc} alt={item.altText} width={40} height={40} />
              </div>
              <h2 className="pb-[15px] text-white transition-[transform,color] duration-700 ease-in-out max-[767px]:text-[22px]">
                {item.text}
              </h2>
              {index !== statsData.length - 1 && (
                <div
                  data-stats-divider
                  className="absolute top-full left-1/2 z-0 h-0 w-0 -translate-x-1/2 border border-dashed border-transparent transition-[height,color] duration-1000 ease-linear"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMicrosoft;
