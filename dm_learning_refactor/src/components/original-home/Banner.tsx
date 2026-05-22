import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";


const Banner = () => {
  return (
    <section className="relative bg-[radial-gradient(circle,var(--color-home-glow),var(--color-card)_40%,var(--color-home-glow))]">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="relative flex flex-col items-center gap-8 py-8 md:flex-row md:gap-6 md:py-12 lg:gap-10 lg:py-16">
          <div className="w-full flex-1 text-center md:text-left">
            <h1 className="font-montserrat text-4xl font-bold leading-tight text-home-title md:text-5xl lg:text-home-hero">
              Identify your <span className="text-primary">Goal,</span> and we&apos;ll guide
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-dm-sans text-base leading-normal text-home-body md:mx-0">
              From in-demand skills to emerging trends, our courses are designed
              to help our students grow, learn, and thrive in an ever-changing
              world.
            </p>
            <Link
              href="/courses"
              className="mt-7 inline-flex h-13 max-w-[10.813rem] items-center justify-center rounded-full border-2 border-black bg-black px-8 font-dm-sans text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black">
              Enroll Now
            </Link>
          </div>
          <div className="w-full flex-1">
            <Image
              src="/hero-banner-new.png"
              alt="hero-image"
              priority
              width={618}
              height={521}
              className="mx-auto"
            />
          </div>
        </div>
        <Image
          src="/banner_shape01.svg"
          alt="shape"
          width={257}
          height={231}
          className="pointer-events-none absolute left-4 top-8 hidden lg:block"
        />
      </div>

    </section>
    // <div style={{ width: '100%', margin: 0, padding: 0 }}>
    //   <Link href="/leveraging-ai-with-solo-preneurship">
    //     <Image
    //       src="/web-banner.svg"
    //       alt="hero-image"
    //       priority
    //       width={1920}
    //       height={480}
    //       style={{ width: '100%', height: 'auto', display: 'block' }}
    //     />
    //   </Link>
    // </div>
  );
};

export default Banner;
