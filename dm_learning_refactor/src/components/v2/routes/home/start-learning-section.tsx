import Image from 'next/image';
import ContainerSection from '../../common/container-section';
import { Tabs } from '../../ui/tabs';
import Link from 'next/link';
import { Button } from '../../ui/button';
import { HOMEPAGE_PROGRAMS_DATA } from '@/services/constants';
import SplitText from '@/components/gsap/split-text';

type ProgramItem = {
  startEnd: string;
  pace: string;
  deadline: string;
};

type Program = {
  title?: string;
  content: string;
  image: string;
  btnLink: string;
} & ProgramItem;

const programTimelines = 'text-primary font-semibold';
const cardHeadingClassName = 'font-medium text-lg';

const TabContent = ({ program }: { program: Program }) => (
  <div className="flex lg:flex-row flex-col items-center xl:gap-32 sm:gap-16 gap-6">
    <Image src="/summer.svg" alt="advance-image" className="xl:size-85 size-60" width={340} height={340} />
    <div className="flex flex-col gap-6">
      <h3>{program.title}</h3>
      <SplitText animation="fade-in" duration={1} className="text-text-tertiary text-xl">
        {program.content}
      </SplitText>

      <div className="flex sm:flex-row flex-col p-4 gap-6 border border-gray-300 rounded-lg sm:max-w-fit">
        <div className="card-content">
          <span className={cardHeadingClassName}>Admissions in Process</span>{' '}
          <p className={programTimelines}>{program.deadline}</p>
        </div>
        <div className="card-content">
          <span className={cardHeadingClassName}>Total Learning Hours</span>{' '}
          <p className={programTimelines}>{program.pace}</p>
        </div>
        <div>
          <span className={cardHeadingClassName}>Course Duration</span>{' '}
          <p className={programTimelines}>{program.startEnd}</p>
        </div>
      </div>
      <Link href={program.btnLink} className="dml-black-button">
        <Button variant="black" shape="pill">
          Enquire Now
        </Button>
      </Link>
    </div>
  </div>
);

const tabs = [
  {
    label: 'Advanced Industrial Training ',
    value: 'advanced-industrial-training',
    content: <TabContent program={HOMEPAGE_PROGRAMS_DATA.ADVANCED_INDUSTRIAL_TRAINING} />,
  },
  {
    label: 'Summer Bootcamp',
    value: 'summer-bootcamp',
    content: <TabContent program={HOMEPAGE_PROGRAMS_DATA.SUMMER_BOOTCAMP} />,
  },
];

export default function StartLearningSection() {
  return (
    <ContainerSection className="flex flex-col items-center sm:gap-14 gap-6 mx-auto">
      <div>
        <SplitText animation="words">
          <h2 className="text-center text-56 font-semibold tracking-[0]">
            START LEARNING WITH
            <span className="text-primary"> DML</span>
          </h2>
        </SplitText>
        <SplitText animation="mask" className="max-w-217 mx-auto text-center mt-2 text-xl text-[#2e2e2e]">
          Everyone has something to offer. Whether you are skilled or starting out, we help you master the skills that
          get you hired.
        </SplitText>
      </div>
      <div className="w-full">
        <Tabs
          className="flex flex-col gap-12"
          defaultValue="advanced-industrial-training"
          tabButtonClassName="font-semibold sm:text-2xl text-lg"
          tabHeaderClassName="items-center w-full justify-center"
          items={tabs}
        />
      </div>
    </ContainerSection>
  );
}
