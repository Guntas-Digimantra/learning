import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../ui/button';
import ContainerSection from '../../common/container-section';
import SplitText from '@/components/gsap/split-text';

export default function HeroSection() {
  return (
    <ContainerSection className="mx-auto flex flex-col-reverse gap-10 lg:flex-row justify-between items-center">
      <div className="max-w-209 flex flex-col gap-6">
        <SplitText>
          <h1 className="section-heading text-start!">
            EXPLORE OUR <span className="text-primary">COURSES</span>
          </h1>
        </SplitText>
        <SplitText animation="lines" className="section-description">
          Discover career-ready programs designed to build your skills from the ground up. Whether you&apos;re a
          beginner or looking to upgrade, our expert-led courses cover today&apos;s most in-demand technologies and
          tools, helping you stay competitive in an ever-evolving digital landscape.
        </SplitText>

        <div className="flex flex-col sm:flex-row gap-6">
          <input
            className="border px-5 rounded-full py-3 text-lg min-w-88.5"
            placeholder="1000 learners already enrolled"
          />
          <Link href="/v2/student-enrollment">
            <Button shape="pill" variant="black" className="py-3.75">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src="/courses/courses-banner.png"
        height={403}
        width={490}
        alt="courses"
        className="rounded-lg w-auto h-auto"
      />
    </ContainerSection>
  );
}
