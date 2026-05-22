"use client";

import React, { useRef, useEffect } from 'react';

export interface RoadmapStep {
  week?: any;
  month?: any;
  title: string;
  topics: string[];
}

export interface RoadmapSectionProps {
  titleStart: string;
  titleHighlight: string;
  steps: RoadmapStep[];
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  titleStart,
  titleHighlight,
  steps,
}) => {
  const stepsRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const checkScroll = () => {
    if (stepsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = stepsRef.current;
      setCanScrollPrev(scrollLeft > 10);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollNext = () => {
    if (stepsRef.current) {
      const { clientWidth } = stepsRef.current;
      const scrollAmount = clientWidth > 768 ? 480 : clientWidth;
      stepsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (stepsRef.current) {
      const { clientWidth } = stepsRef.current;
      const scrollAmount = clientWidth > 768 ? 480 : clientWidth;
      stepsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (canScrollNext) {
        scrollNext();
      } else {
        stopAutoPlay();
      }
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <section
      className="overflow-hidden bg-white py-16"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="mb-6 text-left text-[56px] font-semibold leading-[1.2] text-black [font-variant:all-small-caps] max-[1240px]:text-[48px] max-[991px]:text-[40px] max-[768px]:text-[32px]">
          Your Complete Learning <span className="text-[#fc8b20]">{titleHighlight}</span>
        </h2>

        <div className="relative">
          <div
            className="flex gap-[30px] overflow-x-auto pb-10 [scrollbar-width:none] max-[768px]:snap-x max-[768px]:snap-mandatory max-[768px]:gap-0 max-[768px]:p-0 [&::-webkit-scrollbar]:hidden"
            ref={stepsRef}
            onScroll={checkScroll}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-[2] w-[450px] shrink-0 max-[768px]:w-full max-[768px]:snap-start max-[768px]:p-0"
              >
                <div className="flex h-full min-h-fit w-full flex-col items-start gap-4 rounded-[20px] border border-[#f0f0f0] bg-white p-8 shadow-[0_10px_40px_0_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-[5px] max-[768px]:h-auto max-[768px]:min-h-0 max-[768px]:rounded-lg max-[768px]:p-6 max-[768px]:shadow-none">
                  <div className="mb-1 inline-block rounded-[20px] bg-[#FC8B20] px-3.5 py-1 text-[13px] font-semibold text-white">
                    {step?.week ?? step?.month}
                  </div>
                  <h3 className="mb-2.5 text-[22px] font-semibold leading-[140%] text-black">
                    {step.title}
                  </h3>
                  <ul className="m-0 list-none p-0">
                    {step.topics.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative mb-2.5 pl-5 text-[15px] font-normal leading-[1.6] text-[#444] before:absolute before:left-0 before:font-bold before:text-[#fc8b20] before:content-['•'] max-[768px]:text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-5">
            <button
              className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none text-white transition-all duration-300 ${
                !canScrollPrev
                  ? 'pointer-events-none cursor-not-allowed bg-[#e0e0e0] text-[#888]'
                  : 'bg-black hover:bg-[#2e2e2e]'
              }`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none text-white transition-all duration-300 ${
                !canScrollNext
                  ? 'pointer-events-none cursor-not-allowed bg-[#e0e0e0] text-[#888]'
                  : 'bg-black hover:bg-[#2e2e2e]'
              }`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
