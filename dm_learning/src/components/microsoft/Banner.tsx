import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";

const Banner = () => {
  return (
    <section className="microsoft-banner-section">
      <div className="dml-container-microsoft-banner">
        <div className="microsoft-content">
          <div className="microsoft-content-one">
            <Image
              src="/DMLearning-left.png"
              alt="microosft-tools-image"
              width={500}
              height={500}
            />
          </div>
          <div className="microsoft-center">
            <h1>Microsoft Certifications</h1>
            <p>
              Welcome to DMLearning, the leading platform for certified
              Microsoft courses and professional development with a focus on
              delivering high-quality, industry-recognized certifications, we
              empower learners to unlock their full potential and stay ahead of
              the curve in their careers.
            </p>
            <div className="microsoft-banner-btns">
              <Link href="#certification-career" className="microsoft-button-transparent">
                Explore Certifications
              </Link>
            </div>
          </div>
          <div className="microsoft-content-two">
            <Image
              src="/DMLearning-Right.png"
              alt="microosft-tools-image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
