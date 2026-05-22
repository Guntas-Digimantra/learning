import Image from 'next/image';

import ContainerSection from '../../common/container-section';
import SplitText from '@/components/gsap/split-text';
import ImageReveal from '@/components/gsap/section-reveal';

export default function BannerSection() {
  return (
    <div className="py-21 relative overflow-hidden">
      <ContainerSection className="flex lg:flex-row flex-col-reverse items-center justify-between py-0 mx-auto gap-10">
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <SplitText>
            <h1 className="text-56 font-semibold leading-[100%]">
              ABOUT <span className="text-primary">DMLEARNING</span>
            </h1>
          </SplitText>
          <SplitText animation="lines" className="text-lg text-text-tertiary">
            Welcome to our platform, where we are passionate about empowering individuals to master the world of design
            and development. We offer a wide range of online courses designed to equip learners with the skills and
            knowledge needed to succeed in the ever-evolving digital landscape.
          </SplitText>
        </div>

        <div className="relative">
          <ImageReveal>
            <Image src="/banner.png" alt="banner" width={492} height={477} />
          </ImageReveal>
          <div className="size-61 bg-primary rounded-full blur-[12rem] absolute left-0 top-1/2 bottom-1/2 -translate-y-1/2" />
        </div>
      </ContainerSection>
      <Image
        src="/ban.svg"
        alt="banner"
        width={394}
        height={108}
        className="absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2 translate-y-2"
      />
      <div className="size-41 bg-primary rounded-full blur-[10rem] absolute left-0 top-1/2 bottom-1/2 -translate-y-1/2" />
    </div>
  );
}
