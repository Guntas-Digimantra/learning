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
    <section className="bg-[url('/start-learning-with-DML.webp')] bg-cover bg-center py-[100px]">
      <div className="mx-auto max-w-[1440px] px-4">
        <h2 className="text-white text-center text-[28px] md:text-4xl mb-[30px]">Start Learning With DML</h2>
        <div className="max-w-[1100px] min-h-[420px] rounded-[36px] shadow-xl bg-white py-[60px] px-[30px] mx-auto">
          <div className="pb-[30px] flex justify-center items-stretch">
            <button
              className={`border-none w-1/2 max-w-[395px] rounded-tl-[10px] rounded-bl-[10px] p-3 cursor-pointer text-[19px] min-h-[82px] flex items-center justify-center gap-1 leading-[1.4] text-center transition-colors ${
                activeProgram === "Advanced Industrial Training"
                  ? "text-white bg-orange-500"
                  : "text-black bg-neutral-100 hover:text-white hover:bg-orange-500"
              }`}
              onClick={handleClick("Advanced Industrial Training")}
            >
              Advanced Industrial <span className="max-md:block">Training & Internship</span>
            </button>
            <button
              className={`border-none w-1/2 max-w-[395px] rounded-tr-[10px] rounded-br-[10px] p-3 cursor-pointer text-[18px] min-h-[82px] flex items-center justify-center gap-1 leading-[1.4] text-center transition-colors ${
                activeProgram === "Summer BootCamp" 
                  ? "text-white bg-orange-500" 
                  : "text-black bg-neutral-100 hover:text-white hover:bg-orange-500"
              }`}
              onClick={handleClick("Summer BootCamp")}
            >
              Summer <span className="max-md:block">Bootcamp</span>
            </button>
          </div>
          <div className="w-full overflow-x-auto pb-[15px]">
            <table className="w-full min-w-[700px] border-collapse text-neutral-500">
              <thead>
                <tr>
                  <th className="text-left text-lg p-3 w-1/4">Starting From</th>
                  <th className="text-left text-lg p-3 w-1/4">Completion Hours</th>
                  <th className="text-left text-lg p-3 w-1/4">Admissions Deadlines</th>
                  <th className="p-3 w-1/4"></th>
                </tr>
              </thead>
              <tbody>
                {programData.map((item, index) => (
                  <tr key={index} className="border-t border-neutral-200">
                    <td className="p-3 w-1/4 align-top">{item.startEnd}</td>
                    <td className="p-3 w-1/4 align-top">{item.pace}</td>
                    <td className="p-3 w-1/4 align-top">{item.deadline}</td>
                    <td className="p-3 w-1/4 align-top text-right">
                      <a href={item.link}>
                        <button className="cursor-pointer border-none rounded-full text-white px-[34px] py-4 text-base font-semibold transition-all duration-300 bg-black hover:shadow-none hover:text-white">Get Started</button>
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
