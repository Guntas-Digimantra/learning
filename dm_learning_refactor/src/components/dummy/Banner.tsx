'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';

const WRAPPER_BG = ['#dc62e3', '#a265e2', '#ef7f24', '#ff6f61'] as const;

const Banner = () => {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveDiv((prev) => (prev === index ? null : index));
  };

  const images = ['/mern-stack-1.png', '/mern-stack-2.png', '/mern-stack-3.png', '/mern-stack-4.png'];

  const currentIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = currentIndexRef.current;
      setActiveDiv(index);
      currentIndexRef.current = (index + 1) % images.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const setting = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.testimonial-button-next',
      prevEl: '.testimonial-button-prev',
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <section className="bg-[url('/bg.svg')] bg-cover bg-center">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto w-full max-w-[70.5rem] py-[100px] text-center max-md:py-[60px]">
          <div className="pb-[50px]">
            <h1 className="text-[4.5rem] font-bold leading-[1.3] max-md:text-[2.5rem]">Full stack Developer</h1>
            <span className="mb-[15px] inline-block bg-gradient-to-r from-[#ffbd12] via-[#e03d3d] to-[#cd21e9] bg-clip-text text-[72px] font-bold text-transparent max-md:text-[40px]">
              MERN
            </span>
            <p className="pb-[30px]">
              A Digital Product Agency blending Strategy, Digital Branding, Research, UI UX Design, Motion Design and
              Development to transform Mobile App, SaaS Products and Websites
            </p>
            <button
              type="button"
              className="mx-auto h-[54px] max-w-[173px] rounded-3xl bg-black px-8 py-4 font-dm-sans text-base font-semibold text-white hover:bg-white hover:text-black"
            >
              Start Learning
            </button>
          </div>
          <div className="mx-auto mt-5 flex min-h-[530px] w-full max-w-[900px] flex-row gap-5 max-md:hidden">
            {images.map((image, index) => (
              <div
                key={index}
                style={{ backgroundColor: WRAPPER_BG[index] }}
                className={`w-full cursor-pointer rounded-md transition-all duration-[400ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] content-center ${
                  activeDiv === index ? 'flex-[0_0_50%]' : 'flex-1'
                }`}
                onClick={() => handleClick(index)}
              >
                <Image
                  src={image}
                  alt={`Image for slide ${index + 1}`}
                  width={450}
                  height={500}
                  className="h-full w-full object-cover object-center"
                  style={{ height: '500px' }}
                />
              </div>
            ))}
          </div>

          <div className="hidden max-md:block max-md:flex max-md:flex-row max-md:gap-10 max-md:rounded-[4rem] max-md:bg-[#f7f8f9] [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-black [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination]:pb-[30px] [&_.swiper-slide]:content-center [&_.swiper-slide]:pb-5 [&_.swiper-wrapper]:pb-[60px]">
            <Swiper {...setting} modules={[Navigation, Autoplay, Pagination]}>
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Image for slide ${index + 1}`}
                    width={350}
                    height={400}
                    className="h-full w-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
