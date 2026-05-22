'use client';

import React, { useState, useEffect } from 'react';

interface BannerSlide {
  id: number;
  liveTag: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  heroImage: string;
}

interface BannerCarouselProps {
  slides: BannerSlide[];
  autoplayInterval?: number;
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  slides,
  autoplayInterval = 4000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[65dvh] overflow-hidden after:absolute after:inset-0 after:z-0 after:block after:h-full after:w-full after:bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.42)_100%)]">
      <div className="relative h-full min-h-[65dvh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-[1] h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-[800ms] ease-in-out after:absolute after:inset-0 after:z-0 after:block after:h-full after:w-full after:bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.42)_100%)] ${
              index === currentSlide ? 'opacity-100 z-[2]' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.heroImage}')`,
            }}
          >
            <div className="absolute left-1/2 top-0 z-[1] flex h-full w-full max-w-[1440px] -translate-x-1/2 flex-col items-start justify-center gap-4 px-[15px] text-white max-[1023px]:px-5 [&>h1]:max-w-[767px] [&>h1]:animate-slide-in-left [&>h1]:font-bold [&>h1]:leading-none [&>h1]:[animation-delay:0.2s] [&>h1]:[animation-fill-mode:both] [&>p]:max-w-[767px] [&>p]:animate-slide-in-left [&>p]:[animation-delay:0.4s] [&>p]:[animation-fill-mode:both]">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[30px] right-0 z-10 flex translate-x-[-50%] gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-2 cursor-pointer rounded-[20px] border-0 transition-all duration-300 ${
              index === currentSlide
                ? 'w-[50px] bg-[var(--primary)]'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;
