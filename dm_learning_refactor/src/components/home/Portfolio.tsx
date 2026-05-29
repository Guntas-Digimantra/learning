import React from "react";

const portfolioItems = [
  "Engage in an immersive bootcamp experience that bridges the gap between theory and real-world application.",
  "Participate in advanced industrial training, equipping you with the skills and knowledge needed to excel in today's tech landscape.",
  "Internship opportunity at DigiMantra Labs that allows you to apply your learning in a professional environment, gaining invaluable insights and experience.",
];

const Portfolio = () => (
  <section
    className="portfolio-section bg-white"
    style={{ padding: "100px 0" }}
    aria-label="Portfolio Section"
  >
    <div className="dml-container">
      <div className="portfolio-content flex max-[1024px]:flex-col max-[1024px]:gap-5 max-[1200px]:gap-[30px]" style={{ gap: 80 }}>
        <div className="portfolio-left w-full max-w-[40%] max-[1024px]:max-w-full">
          <p
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              textTransform: "uppercase",
            }}
          >
            job-ready portfolio
          </p>
          <h2>Build a portfolio that proves your skills to hiring managers</h2>
        </div>
        <div className="portfolio-right w-full max-w-[60%] max-[1024px]:max-w-full">
          <ul className="portfolio-list m-0 p-0">
            {portfolioItems.map((item, index) => (
              <li
                key={index}
                className={index === 1 ? "border-y-2 border-y-[#d9d9f3]" : ""}
                style={{ padding: "15px 0" }}
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

export default Portfolio;
