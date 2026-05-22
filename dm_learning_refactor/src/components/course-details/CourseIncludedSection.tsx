import React from 'react';
import Image from 'next/image';
import Link from "@/components/ui/link";

export interface IncludedItem {
  iconUrl?: string;
  iconSvg?: React.ReactNode;
  text: string;
}

export interface CourseIncludedSectionProps {
  title: any;
  description: string;
  buttonText: string;
  includedTitle: string;
  includedItems: IncludedItem[];
  backgroundColor?: string;
}

const CourseIncludedSection: React.FC<CourseIncludedSectionProps> = ({
  title,
  description,
  buttonText,
  includedTitle,
  includedItems,
  backgroundColor = '#FFF6EA',
}) => {
  return (
    <section className="py-16" style={{ background: backgroundColor }}>
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex items-center justify-between gap-[60px] max-[991px]:flex-col max-[991px]:text-center">
          <div className="flex-1 max-[991px]:max-w-full">
            <h2 className="text-left text-[56px] font-semibold leading-[1.2] text-black [font-variant:all-small-caps] max-[1240px]:text-[48px] max-[991px]:text-center max-[991px]:text-[40px] max-[600px]:text-[32px]">
              {title}
            </h2>
            <p className="py-5 pb-[26px] text-2xl font-normal leading-[150%] text-[#2e2e2e] max-[991px]:text-xl max-[600px]:text-lg">
              {description}
            </p>
            <button className="inline-flex cursor-pointer items-center rounded-full border-0 bg-black px-[30px] py-3.5 text-base font-semibold text-white">
              <Link href='/student-enrollment'>
                {buttonText}
              </Link>
            </button>
          </div>

          <div className="flex w-[400px] shrink-0 flex-col items-start gap-6 rounded-2xl border border-white/[0.23] bg-white p-4 max-[991px]:w-full max-[991px]:flex-auto max-[991px]:text-left">
            <h3 className="text-2xl font-semibold leading-normal text-black">
              {includedTitle}
            </h3>
            <ul className="m-0 list-none p-0">
              {includedItems.map((item, index) => (
                <li
                  key={index}
                  className="mb-5 flex items-center gap-2.5 last:mb-0"
                >
                  <span className="flex w-6 items-center justify-center [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-[#f7a01a]">
                    {item.iconSvg ? (
                      item.iconSvg
                    ) : item.iconUrl ? (
                      <Image
                        src={item.iconUrl}
                        alt="icon"
                        width={16}
                        height={16}
                      />
                    ) : null}
                  </span>
                  <span className="text-base font-normal leading-normal text-[#2e2e2e]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIncludedSection;
