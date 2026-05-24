import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";

const Banner = () => {
  return (
    <section className="home-banner-section">
      <div className="dml-container banner-content-style">
        <div className="hero-banner-content">
          <div className="w-50 hero-left">
            <h1>
              Identify your <span className="orange-letter">Goal,</span> and we&apos;ll guide
            </h1>
            <p>
              From in-demand skills to emerging trends, our courses are designed to help our
              students grow, learn, and thrive in an ever-changing world.
            </p>
            <Link href="/courses" className="dml-button">
              Enroll Now
            </Link>
          </div>
          <div className="w-50 hero-right">
            <Image
              src="/hero-banner-new.png"
              alt="hero-image"
              priority
              width={618}
              height={521}
              unoptimized
            />
          </div>
        </div>
        <Image
          src="/banner_shape01.svg"
          alt=""
          width={257}
          height={231}
          className="line-shape"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Banner;
