import Link from 'next/link';
import ContainerSection from '../../common/container-section';
import { Button } from '../../ui/button';
import Image from 'next/image';
import { CONSULTATION_MEETING_LINK } from '@/services/config';
import SplitText from '@/components/gsap/split-text';

const DATA_ITEMS = [
  {
    title: '1:1 Guidance',
    img: '/book.svg',
  },
  {
    title: '4.9★ Rating',
    img: '/people.svg',
  },
  {
    title: '500+ Alumni',
    img: '/teach.svg',
  },
];

export default function BookConsultationSection() {
  return (
    <ContainerSection className="flex md:flex-row flex-col-reverse xl:gap-34 lg:gap-24 gap-6 mx-auto">
      <div className="flex flex-col gap-4">
        <SplitText animation="typewriter">
          <h2 className="xl:text-56 text-4xl font-semibold leading-[120%]">
            Book a Consultation with Our Tech Mentors
          </h2>
        </SplitText>
        <SplitText animation="lines" className="text-lg text-text-tertiary">
          Book a free, no obligation session with one of our expert learning advisors today. Let us know your goals
          whether you&apos;re breaking into tech or levelling up your skills. Our team will guide you step by step,
          helping you choose the right courses and build a personalized learning path. Your growth is our priority, and
          we&apos;re here to help you succeed.
        </SplitText>
        <ul className="flex sm:flex-row flex-col sm:items-center items-start gap-9">
          {DATA_ITEMS?.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <Image alt="arrow tick" height={56} width={55} src={item?.img} />{' '}
              <span className="text-lg font-medium text-text-tertiary">{item?.title}</span>
            </li>
          ))}
        </ul>
        <Link href={CONSULTATION_MEETING_LINK} className="mt-6.5">
          <Button type="button" variant="black" shape="pill">
            Schedule a Meeting
          </Button>
        </Link>
      </div>
      <Image src="/meetings.svg" alt="meeting" height={386} width={384} className="max-xl:size-80" />
    </ContainerSection>
  );
}
