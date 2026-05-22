import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    "Engage in an immersive bootcamp experience that bridges the gap between theory and real-world application.",
    "Participate in advanced industrial training, equipping you with the skills and knowledge needed to excel in today's tech landscape.",
    "Internship opportunity at DigiMantra Labs that allows you to apply your learning in a professional environment, gaining invaluable insights and experience.",
  ];

  return (
    <section
      className="bg-white py-[100px] max-[767px]:py-[60px]"
      aria-label="Portfolio Section"
    >
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex gap-20 max-[1200px]:gap-[30px] max-[1024px]:flex-col">
          <div className="w-full max-w-[40%] max-[1024px]:max-w-full">
            <p className="uppercase">job-ready portfolio</p>
            <h2 className="text-[38px] text-black max-[767px]:text-[28px]">
              Build a portfolio that proves your skills to hiring managers
            </h2>
          </div>
          <div className="w-full max-w-[60%] max-[1024px]:max-w-full">
            <ul className="m-0 list-none p-0">
              {portfolioItems.map((item, index) => (
                <li
                  key={index}
                  className={`list-none py-[15px] ${
                    index === 1 ? "border-y-2 border-[#d9d9f3]" : ""
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
