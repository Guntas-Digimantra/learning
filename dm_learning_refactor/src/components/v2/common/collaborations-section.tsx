import ContainerSection from './container-section';
import MouPartnersSlider from '../sliders/mou-partners-slider';
import SplitText from '@/components/gsap/split-text';

export default function CollaborationsSection() {
  return (
    <ContainerSection className="mx-auto">
      <div className="flex items-center justify-center gap-6 relative overflow-hidden">
        <span className="h-1 w-57 bg-linear-to-l from-primary to-transparent" />
        <SplitText animation="jitter-typewriter" stagger={0.6}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            OUR <span className="text-primary">COLLABORATIONS</span>
          </h2>
        </SplitText>
        <span className="h-1 w-57 bg-linear-to-r from-primary to-transparent" />
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 md:w-2xs sm:w-3xs w-30 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 md:w-2xs sm:w-3xs w-30 bg-linear-to-l from-background to-transparent z-10" />
        <MouPartnersSlider />
      </div>
    </ContainerSection>
  );
}
