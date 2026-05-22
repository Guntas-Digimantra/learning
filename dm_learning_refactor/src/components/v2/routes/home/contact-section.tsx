import SplitText from '@/components/gsap/split-text';
import ContainerSection from '../../common/container-section';
import { Button } from '../../ui/button';

export default function ContactSection() {
  return (
    <ContainerSection className="max-w-full flex flex-col items-center gap-4 bg-[#FAFAFA] overflow-hidden relative min-h-136 z-0">
      <div className="bg-[url('/discover.svg')] w-full h-full absolute bg-no-repeat md:translate-x-3/5 translate-y-8 -z-10" />
      <SplitText animation="jitter-typewriter">
        <h2 className="xl:text-56 text-3xl font-semibold uppercase">
          Explore <span className="text-primary">Courses</span> & Teaching{' '}
          <span className="text-primary">Resources</span>
        </h2>
      </SplitText>
      <SplitText animation="fade-in">
        Get instant updates on course & curriculum details along with the program roadmap.
      </SplitText>
      <div className="flex sm:flex-row flex-col gap-3 sm:items-center sm:justify-center w-full mt-9">
        <input
          className="py-3.25 px-7 border rounded-full border-foreground sm:w-sm w-full"
          placeholder="Type your email"
        />
        <Button variant="black" shape="pill" type="button">
          Start Learning
        </Button>
      </div>
    </ContainerSection>
  );
}
