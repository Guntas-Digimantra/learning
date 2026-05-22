import Image from 'next/image';

import type { PurposeDataItem } from '@/services/data/about-page-data';

import { PURPOSE_DATA } from '@/services/data/about-page-data';

import ContainerSection from '../../common/container-section';
import SplitText from '@/components/gsap/split-text';
import SlideInCard from '@/components/gsap/slide-in-card';

const PurposeCard = ({ data }: { data: PurposeDataItem }) => (
  <SlideInCard
    key={data.id}
    className="flex flex-col gap-10 items-center w-full max-w-110 bg-white rounded-2xl px-5 py-8 border border-primary/10"
  >
    <Image src={data.image} alt={data.title} width={74} height={74} />
    <div className="text-center">
      <h3 className="mb-4 lg:text-2xl text-lg font-semibold">{data.title}</h3>
      <p className="lg:text-lg text-text-tertiary">{data.description}</p>
    </div>
  </SlideInCard>
);

export default function DriveByPurposeSection() {
  return (
    <ContainerSection className="mx-auto flex flex-col gap-15 bg-[#FFF8F2]">
      <SplitText animation="jitter-typewriter">
        <h2 className="section-heading">
          DRIVEN BY <span className="text-primary">PURPOSE</span>
        </h2>
      </SplitText>
      <div className="flex items-center gap-11 max-lg:flex-wrap max-lg:justify-center">
        {PURPOSE_DATA.map((cardData) => (
          <PurposeCard key={cardData.id} data={cardData} />
        ))}
      </div>
    </ContainerSection>
  );
}
