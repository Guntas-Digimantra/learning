"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [activeDiv, setActiveDiv] = useState<string | null>(null);

  const handleClick = (divName: string) => {
    setActiveDiv((prev) => (prev === divName ? null : divName));
  };

  const images = [
    "/mern-stack-1.png",
    "/mern-stack-2.png",
    "/mern-stack-3.png",
    "/mern-stack-4.png",
  ];

  const wrappers = [
    "first-wrapper",
    "second-wrapper",
    "third-wrapper",
    "fourth-wrapper",
  ];

  const currentIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = currentIndexRef.current;
      setActiveDiv(wrappers[index]);
      currentIndexRef.current = (index + 1) % wrappers.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [wrappers]);

  const setting = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <section className="dummy-section">
      <div className="dml-container">
        <div className="dummy-content">
          <div className="dummy-content-text">
            <h1>Full stack Developer</h1>
            <span>MERN</span>
            <p>
              A Digital Product Agency blending Strategy, Digital Branding,
              Research, UI UX Design, Motion Design and Development to transform
              Mobile App, SaaS Products and Websites
            </p>
            <button className="dml-button">Start Learning</button>
          </div>
          <div className="grid-layout-wrapper">
            {[
              "first-wrapper",
              "second-wrapper",
              "third-wrapper",
              "fourth-wrapper",
            ].map((wrapper, index) => (
              <div
                key={index}
                className={`${wrapper} ${
                  activeDiv === wrapper ? "expanded" : "collapsed"
                }`}
                onClick={() => handleClick(wrapper)}
              >
                {
                  <Image
                    src={images[index]}
                    alt={`Image for ${wrapper}`}
                    width={450}
                    height={500}
                    className="grid-image"
                    style={{ height: "500px" }}
                  />
                }
              </div>
            ))}
          </div>

          <div className="mobile-custom-slider">
            <Swiper {...setting} modules={[Navigation, Autoplay, Pagination]}>
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Image for slide ${index + 1}`}
                    width={350}
                    height={400}
                    className="grid-image"
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
