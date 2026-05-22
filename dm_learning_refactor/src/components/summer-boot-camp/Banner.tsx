'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import Link from '@/components/ui/link';
import bootCamp from '../../../public/summer-herobanner.png';

interface BannerProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Banner: FC<BannerProps> = ({
  description = "Join our Summer Bootcamp to gain hands-on experience in crucial engineering skills relevant to the IT sector. Connect with industry professionals, engage in practical projects, and equip yourself with the insights needed to launch a successful tech career. Don't just learn—experience the future of technology!",
  buttonText = 'Make your summer count!',
  onButtonClick,
}) => (
  <section className="bg-[#fff9f2] pt-[100px] max-lg:pb-[60px]">
    <div className="mx-auto max-w-[1440px] px-[15px]">
      <div className="flex flex-row max-lg:flex-col max-lg:p-0">
        <div className="w-full max-w-[50%] pr-[35px] max-lg:max-w-full max-lg:pr-0">
          <div className="mb-5 inline-block rounded-full bg-[#ffe0cc] px-3 py-[7px]">
            <span className="m-0 text-xs font-extrabold uppercase tracking-[1.5px] text-[#ff6400]">
              Welcome to Bootcamp
            </span>
          </div>

          <h1 className="text-[2.5rem] font-semibold leading-[1.2] text-[#121212] max-lg:text-[40px]">
            DML Summer <span className="text-[#fc8b20]">Bootcamp!</span>
          </h1>
          <p className="mb-10 mt-5">{description}</p>
          <div>
            <Link
              href="/student-enrollment"
              onClick={onButtonClick}
              className="inline-flex h-[54px] max-w-[173px] cursor-pointer items-center justify-center rounded-[24px] border-0 bg-black px-8 py-4 font-dm-sans text-base font-semibold text-white no-underline transition-colors hover:bg-white hover:text-black"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        <div className="flex w-full max-w-[50%] justify-end max-lg:max-w-full max-lg:justify-center">
          <Image
            src={bootCamp}
            alt="Summer Bootcamp"
            priority
            className="h-[383px] w-[286px] max-lg:pt-9 min-[576px]:h-[562px] min-[576px]:w-[485px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
