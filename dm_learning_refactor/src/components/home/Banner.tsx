import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";

const Banner = () => {
  return (
    <section className="home-banner-section relative bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)] max-[500px]:pt-2.5">
      <div className="dml-container relative">
        <div className="hero-banner-content flex flex-col gap-10 text-center min-[992px]:flex-row min-[992px]:gap-0 min-[992px]:text-left">
          <div className="hero-left z-[3] min-w-0 flex-1 !pr-0 min-[992px]:!pt-[94px] min-[992px]:!pr-[50px]">
            <h1 className="!m-0 !text-[50px] !font-medium !leading-[normal] !text-black max-[1024px]:!text-[38px] ![font-family:var(--font-poppins),Poppins,sans-serif]">
              Identify your <span className="text-[#fc8b20]">Goal,</span> and we&apos;ll guide
            </h1>
            <p className="!m-0 !py-[30px] !text-[18px] !leading-[1.7] !text-[#6d6c80] ![font-family:var(--font-poppins),Poppins,sans-serif]">
              From in-demand skills to emerging trends, our courses are designed to help our
              students grow, learn, and thrive in an ever-changing world.
            </p>
            <Link href="/courses" className="dml-button">
              Enroll Now
            </Link>
          </div>
          <div className="hero-right flex min-w-0 flex-1 items-center justify-center min-[992px]:justify-center">
            <Image
              src="/hero-banner-new.png"
              alt="hero-image"
              priority
              width={618}
              height={521}
              className="h-auto max-w-full"
              unoptimized
            />
          </div>
        </div>
<Image
      src="/banner_shape01.svg"
      alt="shape"
      width={257}
      height={231}
      className="pointer-events-none absolute left-0 top-0 z-[1] max-[991px]:hidden"
      unoptimized
    />
      </div>
    </section>
  );
};

export default Banner;
