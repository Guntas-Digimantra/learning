import React from 'react';

import {
  BANNER_SLIDES,
  CERTIFICATIONS_DATA,
  HACKTHONS_DATA,
  MENTORSHIP_GUIDANCE_DATA,
  MOU_DATA,
  STARTUP_INNOVATION_DATA,
  TECH_TALK_SKILL_DATA,
  VISITS_DATA,
} from '@/app/data/collaborations/data';

import HorizontalSlider from '@/components/campus-collaboration/horizontal-slider';
import BannerCarousel from '@/components/campus-collaboration/banner-carousel';
import VerticalImageSlider from '@/components/campus-collaboration/vertical-slider';

const CampusCollabSection = ({
  title,
  description,
  splitHeader = false,
  mobileFullWidthDescription = true,
  children,
  statsChildren,
  ...props
}: React.ComponentProps<'section'> & {
  title: string;
  description: string;
  splitHeader?: boolean;
  mobileFullWidthDescription?: boolean;
  statsChildren?: React.ReactNode;
}) => (
  <section
    className={
      splitHeader
        ? 'collaborations-section split-section !flex !gap-[40px] overflow-hidden !pt-[64px] max-[1023px]:!flex-col min-[1637px]:[&_.partner-swiper]:!-mr-[100px] min-[1637px]:[&_.partner-swiper]:[clip-path:inset(0_-200px_0_0)] min-[1637px]:[&_.partner-swiper]:!overflow-hidden'
        : 'collaborations-section !pt-[64px]'
    }
    {...props}
  >
    <div
      className={
        splitHeader
          ? 'section-header split-header !mb-0 !flex !flex-col !items-start !border-0 !pb-[20px] max-[1023px]:!border-b max-[1023px]:!border-[var(--primary)]'
          : 'section-header !mb-[40px] !flex !flex-col !items-start !border-b !border-[var(--primary)] !pb-[20px]'
      }
    >
      <h2
        className="[&_span]:text-[var(--primary)]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className={`!block !text-[20px] !leading-[1.7] ![font-family:var(--font-poppins),sans-serif] ${
          mobileFullWidthDescription ? 'max-[1023px]:!w-full' : ''
        }`}
      >
        {description}
      </p>
      {splitHeader && statsChildren ? (
        <div className="stats-section !mt-[48px] !flex !gap-[48px] max-[1023px]:!mt-[45px]">
          {statsChildren}
        </div>
      ) : null}
    </div>

    {children}
  </section>
);

export default function CampusCollaborationsPage() {
  return (
    <div className="[&_p]:![font-family:var(--font-poppins),sans-serif] [&_span]:![font-family:var(--font-poppins),sans-serif] [&_a]:![font-family:var(--font-poppins),sans-serif] [&_button]:![font-family:var(--font-poppins),sans-serif]">
      <BannerCarousel slides={BANNER_SLIDES} autoplayInterval={3500} />

      <div className="!px-[20px]">
        <div className="collaborations-container !ml-auto !mr-auto !flex !max-w-[1440px] !flex-col overflow-hidden !pb-[60px] max-[1439px]:!py-[60px]">
          <CampusCollabSection
            title={MOU_DATA.title}
            description={MOU_DATA.description}
          >
            <HorizontalSlider
              data={MOU_DATA.data}
              slideWidth="316px"
              slideHeight="351px"
              logos
              universityView="gallery"
              autoplay
            />
          </CampusCollabSection>

          <CampusCollabSection
            title={STARTUP_INNOVATION_DATA.title}
            description={STARTUP_INNOVATION_DATA.description}
          >
            <HorizontalSlider
              data={STARTUP_INNOVATION_DATA.data}
              slideWidth="316px"
              slideHeight="351px"
              logos
              universityView="gallery"
              allowLeftBlur={false}
            />
          </CampusCollabSection>

          <CampusCollabSection
            title={MENTORSHIP_GUIDANCE_DATA.title}
            description={MENTORSHIP_GUIDANCE_DATA.description}
            splitHeader
            statsChildren={MENTORSHIP_GUIDANCE_DATA.stats.map((item) => (
              <div key={item.id} className="stats !flex !flex-col !gap-4">
                <span className="text-[28px] font-semibold text-[var(--primary)]">{item.count}</span>
                <span className="title !text-[#2e2e2e]">{item.title}</span>
              </div>
            ))}
          >
            <HorizontalSlider
              data={MENTORSHIP_GUIDANCE_DATA.data}
              metadata
              slideHeight="450px"
              allowLeftBlur={false}
            />
          </CampusCollabSection>

          <CampusCollabSection
            title={TECH_TALK_SKILL_DATA.title}
            description={TECH_TALK_SKILL_DATA.description}
          >
            <HorizontalSlider
              data={TECH_TALK_SKILL_DATA.data}
              universityView="sliding"
              autoplay
            />
          </CampusCollabSection>

          <CampusCollabSection
            title={HACKTHONS_DATA.title}
            description={HACKTHONS_DATA.description}
            splitHeader
            style={{
              alignItems: 'center',
            }}
          >
            <HorizontalSlider
              data={HACKTHONS_DATA.data}
              universityView="sliding"
              logos
            />
          </CampusCollabSection>

          <CampusCollabSection
            title={CERTIFICATIONS_DATA.title}
            description={CERTIFICATIONS_DATA.description}
          >
            <HorizontalSlider
              data={CERTIFICATIONS_DATA.data}
              slideWidth="300px"
              slideHeight="400px"
              autoplay
            />
          </CampusCollabSection>

          <CampusCollabSection
            title={VISITS_DATA.title}
            description={VISITS_DATA.description}
            mobileFullWidthDescription={false}
          >
            <div className="industry-visit !flex !gap-[20px] max-[767px]:!flex-col">
              <VerticalImageSlider
                data={VISITS_DATA.data.slice(0, 11)?.map((item) => item.url)}
              />
              <VerticalImageSlider
                data={VISITS_DATA.data.slice(11, 19)?.map((item) => item.url)}
                reverseDirection
              />
            </div>
          </CampusCollabSection>
        </div>
      </div>
    </div>
  );
}
