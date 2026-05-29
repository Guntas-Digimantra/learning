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
        // Option to reset or stop. User said "finish", usually implies stopping or looping.
        // If we want to loop:
        // stepsRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
        // But if we disable at finish, we stop.
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
      className="roadmap-section"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="dml-container">
        <h2 className="roadmap-title">
          Your Complete Learning <span>{titleHighlight}</span>
        </h2>

        <div className="roadmap-container">
          <div 
            className="roadmap-steps" 
            ref={stepsRef}
            onScroll={checkScroll}
          >
            {steps.map((step, index) => (
              <div key={index} className="roadmap-step-wrapper">
                <div className="roadmap-card">
                  <div className="roadmap-step-number">{step?.week ?? step?.month}</div>
                  <h3 className="roadmap-card-title">{step.title}</h3>
                  <ul className="roadmap-card-list">
                    {step.topics.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="roadmap-navigation">
            <button 
              className={`nav-btn prev ${!canScrollPrev ? 'disabled' : ''}`} 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className={`nav-btn next ${!canScrollNext ? 'disabled' : ''}`} 
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

