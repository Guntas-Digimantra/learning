import Link from 'next/link';

import { Button } from '../../ui/button';

import ContainerSection from '../../common/container-section';
import ExploreCoursesSlider from '../../sliders/explore-courses-slider';

import { COURSE_DATA } from '@/services/data/home-page-data';
import SplitText from '@/components/gsap/split-text';

export default function ExploreCoursesSection() {
  return (
    <ContainerSection className="max-w-full">
      {/* Header */}
      <div className="max-w-360 mx-auto ">
        <div className="flex justify-between items-center mb-2">
          <SplitText animation="jitter-typewriter">
            <h2 className="text-2xl md:text-3xl xl:text-56 font-semibold">
              EXPLORE <span className="text-primary">OUR COURSE</span> CATALOGUE
            </h2>
          </SplitText>

          <Link href="/courses">
            <Button variant="black" shape="pill" type="button">
              View All
            </Button>
          </Link>
        </div>
        <p className="text-gray-600 text-xl mb-8">Pick from a library of courses and learning paths.</p>
      </div>
      <ExploreCoursesSlider data={COURSE_DATA} />
    </ContainerSection>
  );
}
