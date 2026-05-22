import React from "react";

const Portfolio = () => {
  
  const portfolioItems = [
    "Engage in an immersive bootcamp experience that bridges the gap between theory and real-world application.",
    "Participate in advanced industrial training, equipping you with the skills and knowledge needed to excel in today's tech landscape.",
    "Internship opportunity at DigiMantra Labs that allows you to apply your learning in a professional environment, gaining invaluable insights and experience."
  ];

  return (
    <section className="py-[100px] bg-white" aria-label="Portfolio Section">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex gap-20 max-xl:gap-[30px] max-lg:flex-col max-lg:gap-5">
          <div className="w-full max-w-[40%] max-lg:max-w-full">
            <p className="uppercase text-black font-semibold mb-2">job-ready portfolio</p>
            <h2 className="text-4xl max-md:text-[28px] text-black font-bold">Build a portfolio that proves your skills to hiring managers</h2>
          </div>
          <div className="w-full max-w-[60%] max-lg:max-w-full">
            <ul className="pl-0 m-0">
              {portfolioItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`py-[15px] list-none text-lg text-neutral-600 ${index === 1 ? 'border-y-2' : ''}`}
                  style={index === 1 ? { borderColor: '#d9d9f3' } : undefined}
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
