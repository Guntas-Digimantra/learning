'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

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
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.082 7L18.082 14L11.082 21" strokeWidth="1.5" strokeLinecap="round" className="stroke-white" />
  </svg>
);

const LeftIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rotate-180"
  >
    <path d="M11.082 7L18.082 14L11.082 21" strokeWidth="1.5" strokeLinecap="round" className="stroke-white" />
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
        setIsBeginning(true);
      }}
    >
      <div className="grid grid-cols-1 items-center gap-10 max-[900px]:grid-cols-1">
        <div className="relative flex h-[608px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#f8f9fa] max-[900px]:h-[300px]">
          <Swiper
            modules={[Pagination]}
            freeMode
            allowTouchMove
            pagination={{
              el: '.swiper-pagination',
              type: 'fraction',
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            onSlideChange={(s) => {
              setIsBeginning(s.isBeginning);
              setIsLast(s.isEnd);
            }}
            className="h-full w-full"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="flex h-full w-full items-center justify-center [&_img]:object-contain">
                  <Image src={src} alt="" fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-2.5 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-3">
            <button
              type="button"
              disabled={isBeginning}
              className="cursor-pointer border-0 bg-transparent text-[28px] disabled:cursor-not-allowed [&_svg]:stroke-white disabled:[&_svg]:stroke-[#bebebe]"
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <LeftIcon />
            </button>
            <button
              type="button"
              disabled={isLast}
              className="cursor-pointer border-0 bg-transparent text-[28px] disabled:cursor-not-allowed [&_svg]:stroke-white disabled:[&_svg]:stroke-[#bebebe]"
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <RightIcon />
            </button>
          </div>
          <div className="swiper-pagination pr-4 text-right text-lg text-white" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180.08deg,rgba(0,0,0,0)_45.97%,rgba(0,0,0,0.5)_99.93%)]" />
        </div>
      </div>
    </Modal>
  );
}
