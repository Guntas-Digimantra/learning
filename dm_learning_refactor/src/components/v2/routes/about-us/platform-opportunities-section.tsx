import Image from 'next/image';
import type { PlatformOpportunitiesItem } from '@/services/data/about-page-data';

import { PLATFORM_OPPORTUNITIES_DATA } from '@/services/data/about-page-data';

import ContainerSection from '../../common/container-section';
import SlideInCard from '@/components/gsap/slide-in-card';

const PlatformOpportunitiesCard = ({ data }: { data: PlatformOpportunitiesItem }) => (
  <SlideInCard
    key={data.id}
    className="max-w-111.5 w-full flex flex-col gap-8 max-lg:justify-center max-lg:items-center"
  >
    <Image src={data.image} alt={data.title} width={76} height={76} />
    <div className="flex flex-col gap-4 max-w-77 w-full">
      <h3 className="text-2xl font-semibold">{data.title}</h3>
      <p className="text-lg text-text-tertiary">{data.description}</p>
    </div>
  </SlideInCard>
);

export default function PlatformOpportunitiesSection() {
  return (
    <ContainerSection className="mx-auto">
      <div className="flex flex-col justify-center items-center gap-4 text-center w-full">
        <h2 className="section-heading">
          ONE PLATFORM,<span className="text-primary">UNLIMITED OPPORTUNITIES</span>
        </h2>
        <p className="section-description max-w-173.5">
          Take the first step toward transforming your career with our all practical programs designed to support your
          success
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-12.5 lg:justify-between items-center">
        {PLATFORM_OPPORTUNITIES_DATA.map((cardData) => (
          <PlatformOpportunitiesCard key={cardData.id} data={cardData} />
        ))}
      </div>
    </ContainerSection>
  );
}
