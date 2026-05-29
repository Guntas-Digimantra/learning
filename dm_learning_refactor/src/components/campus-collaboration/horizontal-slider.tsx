'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import GalleryModal from '../modals/gallery-modal';
import SlidingGalleryModal from '../modals/sliding-gallery-modal';

import 'swiper/css';

function Slide({
  slide,
  index,
  onUniversityClick,
}: {
  slide: {
    url: string;
    content: string;
    university?: string;
    subImages: string[];
  };
  index: number;
  onUniversityClick: (name: string, data: string[]) => void;
}) {
  return (
    <div className="logo-slide relative flex h-full w-full min-h-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-[10px] after:absolute after:inset-0 after:z-0 after:h-full after:w-full after:bg-[linear-gradient(180.08deg,rgba(0,0,0,0)_45.97%,rgba(0,0,0,0.6)_99.93%)] [&:after]:content-['']">
      <Image
        src={slide.url}
        alt={`partner-${index}`}
        width={320}
        height={322}
        className="h-full w-full max-w-[var(--slide-image-max-width,100%)] rounded-[10px] object-[var(--image-fit,cover)] hover:opacity-100"
      />
      {slide?.content ? (
        <span className="absolute bottom-0 z-[1] w-full p-4 font-semibold text-white">
          {slide?.content}
        </span>
      ) : null}
      {slide?.university ? (
        <button
          type="button"
          className="trigger content absolute bottom-0 left-0 z-10 h-fit w-[var(--trigger-width,fit-content)] cursor-pointer border-0 bg-transparent !p-4 text-[length:var(--trigger-title-size,inherit)] !font-semibold outline-none [color:var(--trigger-color,#fff)]"
          disabled={!slide.subImages.length}
          onClick={() => {
            onUniversityClick(slide.university ?? '', slide?.subImages ?? []);
          }}
        >
          {slide?.university}
        </button>
      ) : null}
    </div>
  );
}

export default function HorizontalSlider({
  data,
  logos = false,
  type = 'slider',
  universityView,
  metadata = false,
  slideHeight = '322px',
  slideWidth = '320px',
  autoplay = false,
  noMomentum = false,
  allowLeftBlur = true,
}: {
  data: Array<any>;
  type?: 'slider' | 'collage';
  universityView?: 'gallery' | 'sliding';
  logos?: boolean;
  metadata?: boolean;
  slideHeight?: string;
  slideWidth?: string;
  autoplay?: boolean;
  noMomentum?: boolean;
  allowLeftBlur?: boolean;
}) {
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const [openSlidingModal, setOpenSlidingMOdal] = useState(false);
  const handleGalleryModalClose = () => setOpenGalleryModal(false);
  const handleSlidingModalClose = () => setOpenSlidingMOdal(false);

  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null,
  );
  const [selectedImages, setSelectedImages] = useState<Array<string>>([]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!swiperInstance || !autoplay) return;

    if (openGalleryModal || openSlidingModal) {
      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.pause();
      }
    } else {
      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.resume();
      }
    }
  }, [openGalleryModal, openSlidingModal, swiperInstance, autoplay]);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const handleUniversityClick = (name: string, data: string[]) => {
    if (universityView) {
      universityView === 'gallery'
        ? setOpenGalleryModal(true)
        : setOpenSlidingMOdal(true);
    }
    setSelectedUniversity(name);
    setSelectedImages(data);
  };

  const isMax767 = viewportWidth !== null && viewportWidth <= 767;
  const isMax480 = viewportWidth !== null && viewportWidth <= 480;
  const resolvedSlideWidth = isMax480 ? '200px' : slideWidth;
  const resolvedSlideHeight = isMax480
    ? metadata
      ? '400px'
      : '160px'
    : isMax767 && metadata
      ? '340px'
      : slideHeight;

  // const [stopAnimation, setStopAnimation] = useState(false);

  return (
    <>
      {type === 'collage' ? (
        <div
          className="grid grid-cols-2 gap-5 p-5 [grid-auto-rows:120px] max-[767px]:grid-cols-1 max-[767px]:[grid-auto-rows:200px] [&_.item:nth-child(1)]:row-span-4 [&_.item:nth-child(2)]:row-span-4 [&_.item:nth-child(4)]:row-span-3 [&_.item:nth-child(5)]:row-span-3"
          style={{
            // @ts-expect-error custom variable setup
            '--trigger-color': '#fff',
          }}
        >
          {data.map((item, i) => (
            <div
              key={item.id}
              className="item relative overflow-hidden rounded-[20px] bg-[#eee] after:absolute after:inset-0 after:z-0 after:h-full after:w-full after:bg-[linear-gradient(180.08deg,rgba(0,0,0,0)_45.97%,rgba(0,0,0,0.6)_99.93%)] [&:after]:content-['']"
            >
              <Image src={item.url} alt={`gallery-${i}`} fill className="object-cover" />
              {item?.university ? (
                <button
                  type="button"
                  className="content absolute bottom-0 left-0 z-10 h-fit w-full cursor-pointer border-0 bg-transparent font-semibold text-white outline-none"
                  onClick={() => {
                    handleUniversityClick(
                      item.university ?? '',
                      item?.subImages ?? [],
                    );
                  }}
                >
                  {item?.university}
                </button>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        // : autoplay ? (
        //   <div
        //     className="infinite-slider-container"
        //     data-logos={logos}
        //     style={{
        //       // @ts-expect-error custom variable setup
        //       '--slide-width': slideWidth,
        //       '--slide-height': slideHeight,
        //       '--image-fit': logos ? 'contain' : 'cover',
        //       '--overlay': logos ? 'none' : 'block',
        //       '--slide-image-max-width': logos ? '85%' : '100%',
        //       '--trigger-color': logos ? '#121221' : '#fff',
        //       '--trigger-width': logos ? '100%' : 'fit-content',
        //       '--trigger-title-size': logos ? '16px' : 'inherit',
        //     }}
        //   >
        //     <div
        //       className="infinite-slider-track"
        //       style={{ animationPlayState: (openGalleryModal || openSlidingModal || stopAnimation) ? 'paused' : 'running' }}
        //     >
        //       {/* First set of slides */}
        //       <div className="infinite-slider-set">
        //         {data.map((item) => {
        //           return (
        //             <div key={`first-${item.id}`} className={`slide ${metadata ? 'has-metadata' : ''}`} onMouseEnter={() => setStopAnimation(true)} onMouseLeave={() => setStopAnimation(false)}>
        //               <Slide
        //                 slide={item}
        //                 index={item.id}
        //                 onUniversityClick={handleUniversityClick}
        //               />
        //               {metadata ? (
        //                 <div className="slide-metadata">
        //                   <span className="experience">
        //                     {item?.exp ? item.exp + ' of experience' : '4 Years'}
        //                   </span>
        //                   <div className="details">
        //                     <span className="name">{item.name}</span>
        //                     <span className="desg">{item.desg || 'Role'}</span>
        //                   </div>
        //                 </div>
        //               ) : null}
        //             </div>
        //           );
        //         })}
        //       </div>
        //       {/* Duplicate set for seamless looping */}
        //       <div className="infinite-slider-set">
        //         {data.map((item) => (
        //           <div key={`second-${item.id}`} className={`slide ${metadata ? 'has-metadata' : ''}`}>
        //             <Slide
        //               slide={item}
        //               index={item.id}
        //               onUniversityClick={handleUniversityClick}
        //             />
        //             {metadata ? (
        //               <div className="slide-metadata">
        //                 <span className="experience">
        //                   {item?.exp ? item.exp + ' of experience' : '4 Years'}
        //                 </span>
        //                 <div className="details">
        //                   <span className="name">{item.name}</span>
        //                   <span className="desg">{item.desg || 'Role'}</span>
        //                 </div>
        //               </div>
        //             ) : null}
        //           </div>
        //         ))}
        //       </div>
        //     </div>
        //   </div>
        // )
        <div className="relative">
          {allowLeftBlur && (
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-white to-transparent max-[767px]:w-10" />
          )}
          <Swiper
            modules={autoplay ? [Autoplay, FreeMode] : [FreeMode]}
            loop={autoplay}
            freeMode={{
              enabled: true,
              sticky: false,
              momentum: !noMomentum,
            }}
            centeredSlides={false}
            allowTouchMove={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            onSliderMove={() => {
              if (swiperInstance?.autoplay) swiperInstance.autoplay.stop();
            }}
            onTouchEnd={() => {
              if (swiperInstance?.autoplay) {
                swiperInstance.autoplay.start();
              }
            }}
            // Fallback hover logic if you have complex modals
            onMouseEnter={() => {
              if (swiperInstance?.autoplay) swiperInstance.autoplay.stop();
            }}
            onMouseLeave={() => {
              if (
                swiperInstance?.autoplay &&
                !openGalleryModal &&
                !openSlidingModal
              ) {
                swiperInstance.autoplay.start();
              }
            }}
            spaceBetween={24}
            slidesPerView={'auto'}
            slidesOffsetAfter={100}
            slidesOffsetBefore={0}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 'auto' },
            }}
            className="partner-swiper w-full overflow-visible rounded-[10px] pr-[100px] max-[1636px]:overflow-hidden max-[1636px]:pr-0 [&_.swiper-wrapper]:![transition-timing-function:linear] [&::after]:pointer-events-none [&::after]:absolute [&::after]:bottom-0 [&::after]:right-0 [&::after]:top-0 [&::after]:z-10 [&::after]:w-[100px] [&::after]:bg-gradient-to-l [&::after]:from-white [&::after]:to-transparent [&::after]:content-['']"
            onSwiper={setSwiperInstance}
            style={{
              // @ts-expect-error custom variable setup
              '--slide-width': resolvedSlideWidth,
              '--slide-height': resolvedSlideHeight,
              '--image-fit': logos ? 'contain' : 'cover',
              '--overlay': logos ? 'none' : 'block',
              '--slide-image-max-width': logos ? '85%' : '100%',
              '--trigger-color': logos ? '#121221' : '#fff',
              '--trigger-width': logos ? '100%' : 'fit-content',
              '--trigger-title-size': logos ? '16px' : 'inherit',
            }}
          >
            {data.map((item) => (
              <SwiperSlide
                key={item.id}
                className={`slide !flex !h-[var(--slide-height)] !w-[var(--slide-width)] flex-col items-center justify-center rounded-[10px] border border-[#e4e4e7] ${
                  logos ? '[&_.logo-slide]:after:hidden' : ''
                }`}
                onMouseEnter={() => {
                  if (swiperInstance && swiperInstance.autoplay) {
                    // 1. Stop the autoplay engine
                    swiperInstance.autoplay.stop();
                    swiperInstance.setTransition(0);
                  }
                }}
                onMouseLeave={() => {
                  if (swiperInstance && swiperInstance.autoplay) {
                    // 1. Restore the transition speed
                    swiperInstance.autoplay.start();
                  }
                }}
              >
                <Slide
                  slide={item}
                  index={item.id}
                  onUniversityClick={handleUniversityClick}
                />
                {metadata ? (
                  <div className="w-full p-4">
                    <span className="text-xs text-[#2e2e2e]">
                      {item?.exp ? item.exp + ' of Experience' : '4 Years'}
                    </span>
                    <div className="mt-1 flex w-full flex-col items-start gap-2">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-sm text-[#2e2e2e]">{item.desg || 'Role'}</span>
                    </div>
                  </div>
                ) : null}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <GalleryModal
        open={openGalleryModal}
        title={selectedUniversity ?? ''}
        description=""
        handleClose={handleGalleryModalClose}
        images={selectedImages}
      />
      <SlidingGalleryModal
        open={openSlidingModal}
        title={selectedUniversity ?? ''}
        description=""
        handleClose={handleSlidingModalClose}
        images={selectedImages}
      />
    </>
  );
}
