import SplitText from '@/components/gsap/split-text';
import ContainerSection from '../../common/container-section';

import TestimonialSlider from '../../sliders/testimonial-slider';
import { TESTIMONIALS_DATA } from '@/services/data/home-page-data';

export default function WhatStudentsSaySection() {
  return (
    <ContainerSection className="mx-auto">
      {/* header */}
      <div className="text-center mb-14">
        <SplitText animation="jitter-typewriter">
          <h2 className="section-heading uppercase">
            Students share their <span className="text-primary">experiences</span>
          </h2>
        </SplitText>
        <p className="mt-3 section-description">See the difference DMLearning made in aspiring careers.</p>
      </div>
      <TestimonialSlider
        data={TESTIMONIALS_DATA.map((item) => {
          // @ts-expect-error delete operation not allowed
          delete item.title;
          return item;
        })}
        showRating={false}
      />
    </ContainerSection>
  );
}
