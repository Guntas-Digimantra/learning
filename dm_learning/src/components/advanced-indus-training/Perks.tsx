"use client";
import React from "react";
import upskilling from "../../../public/upskilling.svg";
import liveProjects from "../../../public/live-project.svg";
import workplaceSkills from "../../../public/workplace.svg";
import industryCertification from "../../../public/industry-certification.svg";

import Image, { StaticImageData } from "next/image";

interface Perk {
  title: string;
  description: string;
  icon: StaticImageData;
}

const perksContent: Perk[] = [
  {
    title: "Upskilling",
    description:
      "8 Weeks of intensive training & certifications through structured, industry vetted curriculum.",
    icon: upskilling,
  },
  {
    title: "Live Projects",
    description:
      "Build real, ready-to-ship products with team members & professionals for 4 weeks.",
    icon: liveProjects,
  },
  {
    title: "Workplace Skills",
    description:
      "Build your resume, enhance your profile & get noticed by recruiters from top companies.",
    icon: workplaceSkills,
  },
  {
    title: "Industry Certification",
    description:
      "Get live project & training certificates and gain a point of differentiation on your CV.",
    icon: industryCertification,
  },
];

const Perks = () => {
  return (
    <section className="perks-section">
      <div className="dml-container">
        <div className="perks-container">
          {perksContent.map((perk, i) => (
            <div key={i} className="perks-content">
              <div className="rounded-bg">
                <Image
                  src={perk.icon}
                  alt="perk-icons"
                />
              </div>
              <div>
                <h3>{perk.title}</h3>
                <p>{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
