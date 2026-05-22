import React from 'react';
import Link from "@/components/ui/link";

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

import CollaborationsSection from '@/components/dummy/collaborators-section';
import HorizontalSlider from '@/components/campus-collaboration/horizontal-slider';
import BannerCarousel from '@/components/campus-collaboration/banner-carousel';

import VerticalImageSlider from '@/components/campus-collaboration/vertical-slider';

const CampusCollabSection = ({
  title,
  description,
  splitHeader = false,
  children,
  statsChildren,
  ...props
}: React.ComponentProps<'section'> & {
  title: string;
  description: string;
  splitHeader?: boolean;
  statsChildren?: React.ReactNode;
}) => (
  <section
    className={`pt-16 ${splitHeader ? 'flex gap-10 overflow-hidden max-[1023px]:flex-col' : ''}`}
    {...props}
  >
    <div
      className={`mb-10 flex flex-col items-start border-b border-[var(--primary)] pb-5 ${
        splitHeader ? 'mb-0 border-0 max-[1023px]:border-b max-[1023px]:!border-[var(--primary)]' : ''
      }`}
    >
      <h2
        className="[&_span]:text-[var(--primary)]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-xl">{description}</p>
      {splitHeader && statsChildren ? (
        <div className="mt-12 flex gap-12 max-[1023px]:mt-[45px]">{statsChildren}</div>
      ) : null}
    </div>

    {children}
  </section>
);

export default function CampusCollaborationsPage() {
  return (
    <>
      {/* hero banner carousel */}
      <BannerCarousel slides={BANNER_SLIDES} autoplayInterval={3500} />

      <div className="px-5">
        <div className="mx-auto flex max-w-[1440px] flex-col overflow-hidden pb-[60px] max-[1439px]:py-[60px]">
          {/* our collaborations */}
          {/* <div>
          <CollaborationsSection />
        </div> */}

          {/* Strategic Academic Partnerships (MoUs) */}

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

          {/* Startup & Innovation Ecosystem section*/}

          {/* <CampusCollabSection
          title={STARTUP_INNOVATION_DATA.title}
          description={STARTUP_INNOVATION_DATA.description}
        >
          <FeatureGallery
            items={STARTUP_INNOVATION_DATA.data.map((item) => ({
              src: item.url,
              title: item.title,
              subtitle: item.description,
            }))}
          />
        </CampusCollabSection> */}

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

          {/* Mentorship & Guidance Network*/}
          <CampusCollabSection
            title={MENTORSHIP_GUIDANCE_DATA.title}
            description={MENTORSHIP_GUIDANCE_DATA.description}
            splitHeader
            statsChildren={MENTORSHIP_GUIDANCE_DATA.stats.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <span className="text-[28px] font-semibold text-[var(--primary)]">{item.count}</span>
                <span className="text-[#2e2e2e]">{item.title}</span>
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

          {/* Tech Talks & Skill Workshops */}

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

          {/* Hackthons</span> & Innovation Challenges */}

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

          {/* Industry-Recognized Certifications */}

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

          {/* Industry Exposure Visits */}

          <CampusCollabSection
            title={VISITS_DATA.title}
            description={VISITS_DATA.description}
          >
            <div className="flex gap-5 max-[767px]:flex-col">
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
    </>
  );
}
