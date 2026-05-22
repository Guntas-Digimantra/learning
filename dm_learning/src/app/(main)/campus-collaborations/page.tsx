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
} from '../../data/collaborations/data';

import CollaborationsSection from '@/components/dummy/collaborators-section';
import HorizontalSlider from '@/components/campus-collaboration/horizontal-slider';
import BannerCarousel from '@/components/campus-collaboration/banner-carousel';

import '/public/css/collaborations.css';
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
    className={`collaborations-section ${splitHeader ? 'split-section' : ''}`}
    {...props}
  >
    <div className={`section-header ${splitHeader ? 'split-header' : ''}`}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{description}</p>
      {splitHeader && statsChildren ? (
        <div className="stats-section">{statsChildren}</div>
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

      <div className="" style={{ padding: '0 20px' }}>
        <div className="collaborations-container">
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
              <div key={item.id} className="stats">
                <span className="count">{item.count}</span>
                <span className="title">{item.title}</span>
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
            <div className="industry-visit">
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
