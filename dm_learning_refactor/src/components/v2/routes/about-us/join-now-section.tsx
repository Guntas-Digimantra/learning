import Image from 'next/image';

import { cn } from '@/libs/utils';

import { Button } from '../../ui/button';
import ContainerSection from '../../common/container-section';

const tags = [
  { label: 'Cybersecurity', pos: '-top-5 -left-5' },
  { label: 'Web Development', pos: '-bottom-5 -left-5' },
  { label: 'AI & Machine Learning', pos: '-top-5 -right-15' },
  { label: 'UI/UX Design', pos: 'bottom-0 -right-10' },
];

export default function JoinNowSection() {
  return (
    <ContainerSection className="mx-auto bg-linear-to-br from-primary/30 to-[#FFF9F4] rounded-3xl mb-18 relative">
      <div className="relative max-sm:hidden mx-auto max-w-md h-28 mb-15 py-8 px-8">
        {/* floating tags */}
        {tags.map((tag) => (
          <div
            key={tag.label}
            className={cn(
              'absolute px-6 py-2 rounded-lg bg-white/80 backdrop-blur-md text-primary font-medium shadow-sm text-sm',
              tag.pos
            )}
          >
            {tag.label}
            <div
              className={cn(
                'absolute size-4 rotate-45 bg-white/60 -top-5 ',
                tag.pos.includes('left') ? 'left-full' : 'right-full'
              )}
            />
          </div>
        ))}

        <div
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
          "
        >
          <Image src={'/join-now-banner/boxes.png'} width={144} height={77} alt="boxes" />
        </div>
      </div>

      <div className="flex flex-col max-w-139 items-center text-center gap-3 mx-auto relative">
        <div className="absolute top-0 right-0 -translate-y-10 translate-x-5">
          <Image src={'/join-now-banner/idea.png'} alt="idea" width={60} height={60} />
        </div>
        <h3 className="text-5xl font-medium">Together, let&apos;s shape the future of digital innovation</h3>
        <p className="text-text-tertiary">
          Join us on this exciting learning journey and unlock your potential in design and development.
        </p>
        <Button shape="pill" variant="primary" className="px-14 py-4 text-foreground max-w-fit mt-5">
          Join Now
        </Button>
      </div>
      <div className="absolute bottom-0 z-10 w-1/3 h-full left-0">
        <Image src="/join-now-banner/left.png" fill className="object-cover" alt="left" />
      </div>
      <div className="absolute bottom-0 z-10 w-1/3 h-full right-0">
        <Image src="/join-now-banner/right.png" fill className="object-cover" alt="right" />
      </div>
    </ContainerSection>
  );
}
