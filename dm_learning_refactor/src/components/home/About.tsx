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
    <section className="bg-white py-[100px] max-[767px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex gap-[30px] max-[1024px]:flex-col">
          <div className="relative flex-1 text-right max-[1024px]:text-center">
            <Image
              src="/two-colleagues-working.png"
              alt="laptop"
              width={519}
              height={519}
              loading="lazy"
            />
            <div className="absolute bottom-[35px] left-[95px] rounded-[10px] border border-[#b2bbcc] bg-white px-5 py-3 text-center shadow-[-8px_8px_0_0_rgba(0,0,0,0.15)]">
              <p>
                <span>5K+</span> Enrolled Students
              </p>
              <Image
                src="/student_grp.webp"
                alt="img"
                width={155}
                height={40}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 px-[15px] max-[767px]:p-0">
            <div className="ml-[65px] mr-[110px] max-[767px]:m-0">
              <h2 className="text-[36px] text-black max-[767px]:text-[28px]">
                One Platform, Unlimited Opportunities
              </h2>
              <ul className="py-[30px]">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="mb-[15px] flex list-none gap-3 text-lg text-[#161439]"
                  >
                    <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                      <ChevronRightIcon />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-black px-[34px] py-4 text-base font-semibold leading-6 text-white no-underline transition-[linear_0.3s] hover:bg-black hover:text-white"
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
