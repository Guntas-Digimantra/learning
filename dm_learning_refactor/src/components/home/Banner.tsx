import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)] max-[500px]:pt-2.5">
      <div className="relative mx-auto max-w-[1440px] px-[15px]">
        <div className="flex max-[991px]:flex-col max-[991px]:gap-10 max-[991px]:text-center">
          <div className="z-[3] flex-1 [align-content:center] pr-[50px] max-[991px]:pr-0">
            <h1 className="font-medium text-black max-[1024px]:text-[38px]">
              Identify your <span className="text-[#fc8b20]">Goal,</span> and we&apos;ll guide
            </h1>
            <p className="py-[30px] text-lg">From in-demand skills to emerging trends, our courses are designed to help our students grow, learn, and thrive in an ever-changing world.</p>
            <Link
              href="/courses"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-black px-[34px] py-4 text-base font-semibold leading-6 text-white no-underline transition-[linear_0.3s] hover:bg-black hover:text-white"
            >
              Enroll Now
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center text-right max-[991px]:justify-center">
            <Image src="/hero-banner-new.png" alt="hero-image" priority width={618} height={521} />
          </div>
        </div>
        <Image
          src="/banner_shape01.svg"
          alt="shape"
          width={257}
          height={231}
          className="pointer-events-none absolute left-0 top-0 z-0 max-[767px]:hidden"
        />
      </div>
    </section>
  );
};

export default Banner;
