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
    <section className="bg-white py-25">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-7.5">
          <div className="relative flex-1 text-right">
            <Image
              src="/two-colleagues-working.png"
              alt="laptop"
              width={519}
              height={519}
              loading="lazy"
              className="ml-auto"
            />
            <div className="absolute bottom-[2.188rem] left-[5.938rem] rounded-[0.625rem] border border-home-border-muted bg-white px-5 py-3 text-center shadow-home-enrolled">
              <p className="font-dm-sans text-base text-text-primary">
                <span className="font-semibold">5K+</span> Enrolled Students
              </p>
              <Image
                src="/student_grp.webp"
                alt="img"
                width={155}
                height={40}
                loading="lazy"
                className="mx-auto mt-2"
              />
            </div>
          </div>
          <div className="flex-1 px-4">
            <div className="mx-auto max-w-[34rem] lg:ml-16 lg:mr-28">
              <h2 className="font-montserrat text-4xl font-semibold leading-tight text-home-title">
                One Platform, Unlimited Opportunities
              </h2>
              <ul className="py-7.5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="mb-4 flex gap-3 font-dm-sans text-lg text-home-list">
                    <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border border-home-border-deep bg-primary text-white shadow-home-chevron transition-shadow duration-300 hover:shadow-none">
                      <ChevronRightIcon />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="inline-flex h-13 max-w-[10.813rem] items-center justify-center rounded-full border-2 border-black bg-black px-8 font-dm-sans text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
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
