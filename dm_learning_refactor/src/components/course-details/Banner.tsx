import React from 'react';
import Image from 'next/image';
import Link from "@/components/ui/link";

export interface BannerProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  bgImage?: string;
  rightImage?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  buttonText = "Enroll Now",
  bgImage,
  rightImage
}) => {
  return (
    <section
      className="relative flex min-h-[610px] items-center text-white max-[991px]:min-h-0 max-[991px]:py-[60px]"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex items-center justify-between gap-10 max-[991px]:flex-col max-[991px]:p-0 max-[991px]:text-center">
          <div className="flex-1 max-[991px]:flex max-[991px]:flex-col max-[991px]:items-center">
            <h1 className="text-white text-[80px] font-semibold leading-[84px] [font-variant:all-small-caps] max-[991px]:mb-5 max-[991px]:text-[36px] max-[991px]:leading-[1.2]">
              {title}
            </h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p className="my-6 mb-12 max-w-[610px] text-2xl font-normal leading-[140%] text-white max-[991px]:my-5 max-[991px]:mb-[30px] max-[991px]:text-lg max-[991px]:leading-normal">
              {description}
            </p>
            <button className="inline-flex h-[54px] w-[160px] shrink-0 items-center justify-center gap-2 rounded-full bg-black px-[18px] py-2">
              <Link href='/student-enrollment'>{buttonText}</Link>
            </button>
          </div>
          <div className="flex flex-1 justify-end max-[991px]:mt-[30px] max-[991px]:justify-center">
            {rightImage && (
              <Image
                src={rightImage}
                alt="Course Graphic"
                width={500}
                height={500}
                className="h-auto max-w-full object-contain"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
