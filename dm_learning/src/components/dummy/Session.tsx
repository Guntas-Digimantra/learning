"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SessionComponent: React.FC = () => {
  const sessionImage = [
    {
      image: "/week-1.png",
    },
    {
      image: "/week-2.png",
    },
    {
      image: "/week-3.png",
    },
  ];

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const resolveDoubtsH2Ref1 = useRef<HTMLHeadingElement>(null);
  const resolveDoubtsH2Ref2 = useRef<HTMLHeadingElement>(null);
  const resolveDoubtsH2Ref3 = useRef<HTMLHeadingElement>(null);

  const [isScaled1, setIsScaled1] = useState(false);
  const [isScaled2, setIsScaled2] = useState(false);
  const [isScaled3, setIsScaled3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef?.current) {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const windowHeight = window?.innerHeight;

        const startFillingPoint = windowHeight / 2;

        const visibleHeight = windowHeight - rect.top / 1.4;
        const fillableHeight = sectionHeight - startFillingPoint;

        if (visibleHeight > startFillingPoint && rect.bottom > 0) {
          const scrolled = Math.min(
            Math.max(visibleHeight - startFillingPoint, 0),
            fillableHeight
          );
          const scrollPercent = (scrolled / fillableHeight) * 100;
          setScrollPercentage(scrollPercent);
        } else {
          setScrollPercentage(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === resolveDoubtsH2Ref1.current) {
            setIsScaled1(entry.isIntersecting);
          } else if (entry.target === resolveDoubtsH2Ref2.current) {
            setIsScaled2(entry.isIntersecting);
          } else if (entry.target === resolveDoubtsH2Ref3.current) {
            setIsScaled3(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (resolveDoubtsH2Ref1.current)
      observer.observe(resolveDoubtsH2Ref1.current);
    if (resolveDoubtsH2Ref2.current)
      observer.observe(resolveDoubtsH2Ref2.current);
    if (resolveDoubtsH2Ref3.current)
      observer.observe(resolveDoubtsH2Ref3.current);

    return () => {
      if (resolveDoubtsH2Ref1.current)
        observer.unobserve(resolveDoubtsH2Ref1.current);
      if (resolveDoubtsH2Ref2.current)
        observer.unobserve(resolveDoubtsH2Ref2.current);
      if (resolveDoubtsH2Ref3.current)
        observer.unobserve(resolveDoubtsH2Ref3.current);
    };
  }, []);
  return (
    <section ref={sectionRef} className="session-section">
      <div className="dml-container">
        {/* Sidebar with dynamic fill */}
        <div
          className="sidebar-div"
          style={{
            background: `linear-gradient(to bottom, black ${scrollPercentage}%, transparent ${scrollPercentage}%)`,
          }}
        ></div>

        {/* Main content */}
        <div className="session-content">
          <h2>Month 1</h2>
          <div className="">
            <div className="session-cards-comoponent">
              {sessionImage.map((session, index) => (
                <div key={index} className="session-card">
                  <Image
                    src={session.image}
                    alt={`session-${index}`}
                    width={200}
                    height={280}
                    className="session-image"
                  />
                </div>
              ))}
            </div>
            <p>
              The first two weeks focus on building web pages using HTML, CSS,
              and either Bootstrap or Tailwind, including design work based on a
              provided Figma template. Week three and four delve into the
              fundamentals of JavaScript and TypeScript, covering concepts like
              variables, functions, DOM manipulation, and object-oriented
              programming principles.
            </p>
          </div>

          <div className="learning-section">
            <div className="learning-content">
              <h2>Learn by doing</h2>
              <p>
                Interesting projects to help you standout to recruiters Poster
                image
              </p>
            </div>
            <div className="">
              <Image
                src="/complete-enrollment.png"
                alt="learning-image"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="resolve-doubts-section">
            <h2
              ref={resolveDoubtsH2Ref1}
              className={`${isScaled1 ? "scale-effect" : ""}`}
            >
              Resolve doubts any time through chat, voice notes or calling.
            </h2>
            <h2
              ref={resolveDoubtsH2Ref2}
              className={`${isScaled2 ? "scale-effect" : ""}`}
            >
              500+ dedicated Teaching Assistants to resolve your doubts quickly
            </h2>
            <h2
              ref={resolveDoubtsH2Ref3}
              className={`${isScaled3 ? "scale-effect" : ""}`}
            >
              5/5 rating for 90% doubt resolutions
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionComponent;
