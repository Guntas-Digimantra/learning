import React from "react";

const portfolioItems = [
  "Engage in an immersive bootcamp experience that bridges the gap between theory and real-world application.",
  "Participate in advanced industrial training, equipping you with the skills and knowledge needed to excel in today's tech landscape.",
  "Internship opportunity at DigiMantra Labs that allows you to apply your learning in a professional environment, gaining invaluable insights and experience.",
];

const Portfolio = () => {
  return (
    <section
      className="bg-surface py-25 max-[991px]:py-15"
      aria-label="Portfolio Section"
    >
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex gap-20 max-[1200px]:gap-7.5 max-[1024px]:flex-col max-[1024px]:gap-5">
          <div className="w-full max-w-[40%] max-[1024px]:max-w-full">
            <p className="uppercase text-fg-muted">job-ready portfolio</p>
            <h2 className="text-portfolio-title font-semibold leading-snug text-fg max-[991px]:text-section-title-sm">
              Build a portfolio that proves your skills to hiring managers
            </h2>
          </div>
          <div className="w-full max-w-[60%] max-[1024px]:max-w-full">
            <ul className="m-0 list-none p-0">
              {portfolioItems.map((item, index) => (
                <li
                  key={index}
                  className={`py-3.75 text-fg-muted ${
                    index === 1
                      ? "border-y-2 border-border-soft"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
