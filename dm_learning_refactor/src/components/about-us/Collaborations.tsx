'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';

import 'swiper/css';

const Collaborations = () => {
  const images = ['/ct.png', '/cgc.png', '/pcte.png', '/shoolini.png', '/chitkara.png', '/dbu.png', '/cgc-landran.png'];

  return (
    <section className="collaborations-section">
      <div className="mou-partners-section">
        <div className="mou-heading-wrapper">
          <span>
            <Image src="/rectangle-frame.png" alt="rectangle frame" height={3} width={150} />
          </span>
          <h2>Our Collaborations</h2>
          <span>
            <Image src="/rectangle-frame.png" alt="rectangle frame" height={3} width={150} />
          </span>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={4000} // slower speed means smoother scrolling
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          // autoplay={false}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          // pagination={{ clickable: true }}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mou-partners-item">
                <Image src={item} alt={`partner-${index}`} width={200} height={100} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Collaborations;
