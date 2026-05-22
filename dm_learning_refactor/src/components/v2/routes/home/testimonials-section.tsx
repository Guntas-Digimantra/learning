import ContainerSection from '../../common/container-section';

import 'swiper/css/pagination';
import TestimonialSlider from '../../sliders/testimonial-slider';
import { TESTIMONIALS_DATA } from '@/services/data/home-page-data';
import SplitText from '@/components/gsap/split-text';

export default function TestimonialSection() {
  return (
    <ContainerSection className="mx-auto">
      {/* header */}
      <SplitText animation="jitter-typewriter" stagger={0.6} duration={1000} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">
          WHAT OUR <span className="text-primary">STUDENTS SAY</span>
        </h2>
        <p className="mt-3 text-text-tertiary">Discover how our programs have helped others achieve their goals.</p>
      </SplitText>
      <TestimonialSlider data={TESTIMONIALS_DATA} />
    </ContainerSection>
  );
}
