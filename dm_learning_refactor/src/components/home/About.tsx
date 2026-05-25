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
    <section className="about-section">
      <div className="dml-container">
        <div className="about-content">
          <div className="aboutus-image">
            <Image
              src="/two-colleagues-working.png"
              alt="laptop"
              width={519}
              height={519}
              unoptimized
            />
            <div className="about-enrolled">
              <p>
                <span>5K+</span> Enrolled Students
              </p>
              <Image src="/student_grp.webp" alt="img" width={155} height={40} unoptimized />
            </div>
          </div>
          <div className="right-aboutus-content">
            <div className="about__content">
              <h2>One Platform, Unlimited Opportunities</h2>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="chevron-circle">
                      <ChevronRightIcon />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/about-us" className="dml-button">
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
