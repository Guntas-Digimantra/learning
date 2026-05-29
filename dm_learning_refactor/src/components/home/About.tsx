import Image from "next/image";
import Link from "@/components/ui/link";
import React, { useMemo } from "react";
import { ChevronRightIcon } from "../common/common";

const About = () => {
  const benefits = useMemo(
    () => [
      "Learn from elite industry experts renowned for their expertise and passion for teaching.",
      "Upskill at your own pace with flexible or hybrid options.",
      "Recognized Certificates of Achievement.",
    ],
    []
  );

  return (
    <section className="about-section bg-white py-[100px] max-[767px]:!py-[60px]">
      <div className="dml-container">
        <div className="about-content flex gap-[30px] max-[1024px]:flex-col">
          <div className="aboutus-image relative flex-1 text-right max-[1024px]:text-center">
            <Image
              src="/two-colleagues-working.png"
              alt="laptop"
              width={519}
              height={519}
              unoptimized
              className="inline-block max-w-full"
            />
            <div className="about-enrolled absolute bottom-[35px] left-[95px] rounded-[10px] border border-[#b2bbcc] bg-white px-5 py-3 text-center shadow-[-8px_8px_0_0_rgba(0,0,0,0.15)] max-[1024px]:left-1/2 max-[1024px]:-translate-x-1/2">
              <p style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                <span>5K+</span> Enrolled Students
              </p>
              <Image src="/student_grp.webp" alt="img" width={155} height={40} unoptimized />
            </div>
          </div>
          <div className="right-aboutus-content flex-1 !px-[15px] max-[767px]:!px-0">
            <div className="about__content !ml-[65px] !mr-[110px] max-[767px]:!mx-0">
              <h2 className="!mb-0 !text-[36px] !font-semibold !leading-[46.8px] max-[767px]:!text-[28px] max-[767px]:!leading-[36px]">
                One Platform, Unlimited Opportunities
              </h2>
              <ul className="m-0 list-none p-0">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="mb-[15px] flex items-start gap-3 text-[18px] font-medium leading-[1.7] text-black"
                  >
                    <span className="chevron-circle mt-[2px] inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)]">
                      <ChevronRightIcon />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="dml-button"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
