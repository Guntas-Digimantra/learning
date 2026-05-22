import Image from 'next/image';

import type { CoreValuesItem } from '@/services/data/about-page-data';

import { CORE_VALUES_DATA } from '@/services/data/about-page-data';

import ContainerSection from '../../common/container-section';
import SlideInCard from '@/components/gsap/slide-in-card';
import ImageReveal from '@/components/gsap/section-reveal';

const ValueCard = ({ data }: { data: CoreValuesItem }) => (
  <SlideInCard fadeDirection="rtl" className="w-full max-w-66.5 p-2 mx-auto">
    <div className="flex items-center gap-2.5 md:text-2xl text-lg font-medium mb-1">
      <Image src={data.image} alt="Core Value" width={24} height={24} />
      <h4>{data.title}</h4>
    </div>
    <p className="md:text-lg text-text-tertiary">{data.description}</p>
  </SlideInCard>
);

export default function CoreValueSection() {
  return (
    <ContainerSection className="mx-auto flex lg:flex-row flex-col gap-10 justify-between items-center bg-white">
      <ImageReveal>
        <Image src="/core.svg" width={492} height={495} alt="core-values" />
      </ImageReveal>
      <div className="flex flex-col gap-8 md:w-full max-w-214">
        <h2 className="section-heading max-xl:text-4xl!">
          OUR <span className="text-primary">CORE VALUES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {CORE_VALUES_DATA.map((value) => (
            <ValueCard key={value.id} data={value} />
          ))}
        </div>
      </div>
    </ContainerSection>
  );
}
