import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";


const Banner = () => {
  return (
    <section className="home-banner-section">
      <div className="dml-container banner-content-style">
        <div className="hero-banner-content">
          <div className="w-50 hero-left">
            <h1>Identify your <span className="orange-letter">Goal,</span> and we&apos;ll guide</h1>
            <p>
              From in-demand skills to emerging trends, our courses are designed
              to help our students grow, learn, and thrive in an ever-changing
              world.
            </p>
            <Link
              href="/courses"
              className="dml-button">
              Enroll Now
            </Link>
          </div>
          <div className="w-50 hero-right">
            <Image src="/hero-banner-new.png" alt="hero-image" priority width={618} height={521} unoptimized />
          </div>
        </div>
        <Image
          src="/banner_shape01.svg"
          alt="shape"
          width={257}
          height={231}
          className="line-shape"
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
