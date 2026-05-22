'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './sliding-gallery-modal.module.css';
import Modal from '../ui/modal';

type Props = {
  open: boolean;
  width?: number;
  title: string;
  description: string;
  images: string[];
  handleClose: () => void;
};

const RightIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.082 7L18.082 14L11.082 21"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LeftIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'rotate(180deg)' }}
  >
    <path
      d="M11.082 7L18.082 14L11.082 21"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function SlidingGalleryModal({
  open,
  width = 1330,
  title,
  description,
  images,
  handleClose,
}: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  // const [active, setActive] = useState(0);

  const [isLast, setIsLast] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <Modal
      open={open}
      width={width}
      title={title}
      description={description}
      onClose={() => {
        handleClose();
        setIsLast(false);
        setIsBeginning(true)
      }}
    >
      <div className={styles.wrapper}>
        {/* LEFT → BIG SLIDER */}
        <div className={styles.left}>
          <Swiper
            modules={[Pagination]}
            freeMode
            allowTouchMove
            pagination={{
              el: '.swiper-pagination',
              type: 'fraction', // Swiper can handle fraction pagination automatically
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            onSlideChange={(s) => {
              // setActive(s.activeIndex);
              setIsBeginning(s.isBeginning);
              setIsLast(s.isEnd);
            }}
            className={styles.main}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className={styles.mainImage}>
                  <Image src={src} alt="" fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.navigation}>
            <button
              disabled={isBeginning}
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <LeftIcon />
            </button>
            <button
              disabled={isLast}
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <RightIcon />
            </button>
          </div>
          <div className={`swiper-pagination ${styles.pagination}`} />
          <div className={styles.overlay} />
        </div>

        {/* RIGHT → TEXT + THUMBNAILS */}
        {/* <div className={styles.right}>
          <div className={styles.content}>
            <h2>Empowering Learners</h2>
            <p>
              We&apos;re passionate about empowering learners to master design,
              development, and AI-driven technologies with practical skills.
            </p>
          </div>

          <div className={styles.thumbs}>
            {images.map((src, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${
                  active === i ? styles.active : ''
                }`}
                onClick={() => swiperRef.current?.slideTo(i)}
              >
                <Image src={src} alt="" fill />
              </button>
            ))}
          </div>
        </div> */}
      </div>
    </Modal>
  );
}
