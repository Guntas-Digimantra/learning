import React from "react";

const portfolioItems = [
  "Engage in an immersive bootcamp experience that bridges the gap between theory and real-world application.",
  "Participate in advanced industrial training, equipping you with the skills and knowledge needed to excel in today's tech landscape.",
  "Internship opportunity at DigiMantra Labs that allows you to apply your learning in a professional environment, gaining invaluable insights and experience.",
];

const Portfolio = () => (
  <section className="portfolio-section" aria-label="Portfolio Section">
    <div className="dml-container">
      <div className="portfolio-content">
        <div className="portfolio-left">
          <p>job-ready portfolio</p>
          <h2>Build a portfolio that proves your skills to hiring managers</h2>
        </div>
        <div className="portfolio-right">
          <ul className="portfolio-list">
            {portfolioItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
