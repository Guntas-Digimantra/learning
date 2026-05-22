"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const statsData = [
  {
    id: 1,
    color: "#6249c5",
    imageSrc: "/upskilling.svg",
    altText: "perk-icons",
    text: "50+ Certified Trainers",
  },
  {
    id: 2,
    color: "#65b168",
    imageSrc: "/live-project.svg",
    altText: "perk-icons",
    text: "1000+ Students",
  },
  {
    id: 3,
    color: "#ef6292",
    imageSrc: "/workplace.svg",
    altText: "perk-icons",
    text: "35+ Courses available",
  },
  {
    id: 4,
    color: "#5780e9",
    imageSrc: "/industry-certification.svg",
    altText: "perk-icons",
    text: "10+ Years in the industry",
  },
];

const StatsMicrosoft = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isMobile = window.innerWidth < 767;

        entries.forEach((entry) => {
          if (
            isMobile &&
            entry.target.classList?.contains("stats-heading-one")
          ) {
            return;
          }

          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
              if (entry.target.classList?.contains("stats-content-img")) {
                const index = parseInt(entry.target.dataset.index || "0", 10);
                entry.target.style.backgroundColor =
                  statsData[index]?.color || "pink";
              } else if (entry.target.classList?.contains("stats-divider")) {
                entry.target.classList?.add("highlight");
              } else {
                entry.target.classList?.add("scale-up");
              }
            }
          } else {
            if (entry.target instanceof HTMLElement) {
              if (entry.target.classList?.contains("stats-content-img")) {
                entry.target.style.backgroundColor = "";
              } else if (entry.target.classList?.contains("stats-divider")) {
                entry.target.classList?.remove("highlight");
              } else {
                entry.target.classList?.remove("scale-up");
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      ".stats-heading div, .stats-content h2, .stats-content-img, .stats-divider"
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-microsoft-section">
      <div className="dml-container">
        <div className="stats-heading">
          <div className="stats-heading-one">
            8 years of empowering tech careers
          </div>
        </div>
        <div className="stats-content">
          <Image
            src="/element1.png"
            alt="element-1"
            className="element-one"
            width={180}
            height={180}
          />
          <Image
            src="/element2.png"
            alt="element-2"
            className="element-two"
            width={120}
            height={120}
          />
          <Image
            src="/element3.png"
            alt="element-3"
            className="element-three"
            width={110}
            height={110}
          />
          <Image
            src="/element4.png"
            alt="element-4"
            className="element-four"
            width={180}
            height={180}
          />
          {statsData.map((item, index) => (
            <div className="stats-content-wrapper" key={item.id}>
              <div
                className={`stats-content-img stats-content-img-${index + 1}`}
                data-index={index}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  width={40}
                  height={40}
                />
              </div>
              <h2>{item.text}</h2>
              {index !== statsData.length - 1 && (
                <div className="stats-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMicrosoft;
