'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import GalleryModal from '../modals/gallery-modal';
import SlidingGalleryModal from '../modals/sliding-gallery-modal';

import 'swiper/css';
import './horizontal-slider.css';

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
    <div className="logo-slide">
      <Image
        src={slide.url}
        alt={`partner-${index}`}
        width={320}
        height={322}
        className="slider-image"
      />
      {slide?.content ? (
        <span className="content">{slide?.content}</span>
      ) : null}
      {slide?.university ? (
        <button
          className="trigger content"
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

  const handleUniversityClick = (name: string, data: string[]) => {
    if (universityView) {
      universityView === 'gallery'
        ? setOpenGalleryModal(true)
        : setOpenSlidingMOdal(true);
    }
    setSelectedUniversity(name);
    setSelectedImages(data);
  };

  // const [stopAnimation, setStopAnimation] = useState(false);

  return (
    <>
      {type === 'collage' ? (
        <div
          className="collage"
          style={{
            // @ts-expect-error custom variable setup
            '--trigger-color': '#fff',
          }}
        >
          {data.map((item, i) => (
            <div key={item.id} className={`item span-${i % 6}`}>
              <Image src={item.url} alt={`gallery-${i}`} fill className="img" />
              {item?.university ? (
                <button
                  className="trigger content"
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
        <div style={{ position: 'relative' }}>
          {allowLeftBlur && <div className="left-blur" />}
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
            className="partner-swiper"
            onSwiper={setSwiperInstance}
            style={{
              // @ts-expect-error custom variable setup
              '--slide-width': slideWidth,
              '--slide-height': slideHeight,
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
                className={`slide ${metadata ? 'has-metadata' : ''}`}
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
                  <div className="slide-metadata">
                    <span className="experience">
                      {item?.exp ? item.exp + ' of Experience' : '4 Years'}
                    </span>
                    <div className="details">
                      <span className="name">{item.name}</span>
                      <span className="desg">{item.desg || 'Role'}</span>
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
