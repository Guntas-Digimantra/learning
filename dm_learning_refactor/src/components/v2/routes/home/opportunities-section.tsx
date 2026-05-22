import Image from 'next/image';
import ContainerSection from '../../common/container-section';

import { OPPORTUNITIES_DATA, OpportunityItem } from '@/services/data/home-page-data';
import SplitText from '@/components/gsap/split-text';
import SlideInCard from '@/components/gsap/slide-in-card';

const OpportunitiesCard = ({ data }: { data: OpportunityItem }) => (
  <SlideInCard duration={1.2} x={-100}>
    <div className="p-4 border border-gray-300 rounded-lg min-w-xs w-full bg-linear-to-tr from-[#ffe9d4] to-white relative overflow-visible after:content-[''] after:block after:size-[calc(100%+0.5rem)] after:absolute after:top-0 after:left-0 after:rounded-xl after:bg-primary/70 after:-z-10">
      <div className="flex items-center gap-4 mb-4">
        <Image src={data.image} alt={data.title} width={76} height={76} />
        <h3 className="text-2xl font-semibold">{data.title}</h3>
      </div>
      <p className="text-text-tertiary text-lg">{data.description}</p>
    </div>
  </SlideInCard>
);

export default function OpportunitiesSection() {
  return (
    <ContainerSection className="mx-auto">
      <div className="text-center">
        <SplitText animation="jitter-typewriter">
          <h2 className="font-semibold lg:text-56 text-3xl">
            ONE PLATFORM,<span className="text-primary">UNLIMITED OPPORTUNITIES</span>
          </h2>
        </SplitText>
        <SplitText
          animation="fade-in"
          duration={1.2}
          className="lg:text-xl text-text-tertiary lg:max-w-3xl sm:max-w-lg max-w-sm mx-auto mt-4"
        >
          Take the first step toward transforming your career with our all practical programs designed to support your
          success
        </SplitText>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:gap-20 gap-10 mt-14">
        {OPPORTUNITIES_DATA.map((item) => (
          <OpportunitiesCard key={item.title.toLowerCase().replaceAll(' ', '-')} data={item} />
        ))}
      </div>
    </ContainerSection>
  );
}
