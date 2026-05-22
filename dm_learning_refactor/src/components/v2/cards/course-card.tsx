import Link from 'next/link';
import Image from 'next/image';

import { ChevronRight, MoveRight } from 'lucide-react';

import type { CourseCardData } from '@/services/data/home-page-data';

import { cn } from '@/libs/utils';
import { Button } from '../ui/button';
import SlideInCard from '@/components/gsap/slide-in-card';

export default function CourseCard({
  data,
  rootClassName = '',
  enrollFooter = false,
}: {
  data: CourseCardData;
  rootClassName?: string;
  enrollFooter?: boolean;
}) {
  return (
    <SlideInCard key={data.id}>
      <div
        className={cn(
          'rounded-2xl shadow-sm overflow-hidden',
          'flex flex-col h-full w-full',
          'hover:scale-102 hover:shadow-md transition-all duration-300 group',
          rootClassName
        )}
        style={{
          border: data.border_color ? '8px solid transparent' : '1px solid #f3f4f6',
          backgroundImage: data.border_color
            ? `linear-gradient(${data.color || 'white'}, ${data.color || 'white'}), ${data.border_color}`
            : 'none',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          backgroundColor: data.color || 'white',
        }}
      >
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={250}
          className="w-full h-56 object-cover shrink-0"
        />

        {/* content */}
        <div className="flex flex-col flex-1" style={{ background: data.footer_bg_color || 'transparent' }}>
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-semibold text-xl mb-2 line-clamp-2">{data.title}</h3>

            <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{data.description}</p>

            {!enrollFooter && (
              <Link href="/courses" className="mt-auto flex items-center font-medium text-primary hover:underline gap-1">
                View courses <MoveRight className="size-4.5" />
              </Link>
            )}
          </div>

          {/* button sticks bottom */}
          {enrollFooter && (
            <div className="mt-auto flex items-center justify-between text-sm p-5">
              <Link href="contact" className="text-primary flex items-center font-semibold">
                <span>Start Learning</span> <ChevronRight size={16} />
              </Link>
              <Link href="/v2/student-enrollment">
                <Button shape="default" variant="black" className="py-2.5 px-4 rounded-full">
                  Enroll Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </SlideInCard>
  );
}
