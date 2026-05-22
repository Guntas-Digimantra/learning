"use client";
import React, { useMemo, useState } from "react";

const StartLearning = () => {
  const [activeProgram, setActiveProgram] = useState(
    "Advanced Industrial Training"
  );

  const advancedTrainingData = useMemo(() => [
    {
      startEnd: "July to December 2026",
      pace: "270 hrs",
      deadline: "Advanced Admissions ends June 2026",
      link: "/advanced-industrial-training-and-internship",
    },
    {
      startEnd: "January to July 2027",
      pace: "270 hrs",
      deadline: "Advanced Admissions ends December 2026",
      link: "/advanced-industrial-training-and-internship",
    },
  ], []);

  const summerBootCampData = useMemo(() => [
    {
      startEnd: "June to July 2026",
      pace: "120 hrs",
      deadline: "Admissions ends May 2026",
      link: "/summer-bootcamp-and-internship",
    },
  ], []);

  const handleClick = (program:string) => () => {
    setActiveProgram(program);
  };

  const programData = useMemo(() => {
    return activeProgram === "Advanced Industrial Training"
      ? advancedTrainingData
      : summerBootCampData;
  }, [activeProgram, advancedTrainingData, summerBootCampData]);
  

  return (
    <section className="start-learning-container">
      <div className="dml-container">
        <h2>Start Learning With DML</h2>
        <div className="start-learning-table">
          <div className="tabs-table">
            <button
              className={`advanced-button ${
                activeProgram === "Advanced Industrial Training"
                  ? "tabs-active"
                  : ""
              }`}
              onClick={handleClick("Advanced Industrial Training")}
            >
              Advanced Industrial <span className="break-bootcamp">Training & Internship</span>
            </button>
            <button
              className={`summer-button ${
                activeProgram === "Summer BootCamp" ? "tabs-active" : ""
              }`}
              onClick={handleClick("Summer BootCamp")}
            >
              Summer <span className="break-bootcamp">Bootcamp</span>
            </button>
          </div>
          <div className="scroll-table">
            <table className="table-start-dates">
              <thead>
                <tr>
                  <th>Starting From</th>
                  <th>Completion Hours</th>
                  <th>Admissions Deadlines</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {programData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.startEnd}</td>
                    <td>{item.pace}</td>
                    <td>{item.deadline}</td>
                    <td>
                      <a href={item.link}>
                        <button className="dml-button">Get Started</button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartLearning;
