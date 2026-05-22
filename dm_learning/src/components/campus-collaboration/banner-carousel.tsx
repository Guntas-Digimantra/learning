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
  autoplayInterval = 4000 
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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="collaborations-banner">
      <div className="banner-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${slide.heroImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="banner-content">
              {/* <span className="live-tag">{slide.liveTag}</span> */}
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              {/* <Link href={slide.link} className="article-link">
                {slide.linkText} {'->'}
              </Link> */}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      {/* <button 
        className="carousel-nav prev" 
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button 
        className="carousel-nav next" 
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button> */}

      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;