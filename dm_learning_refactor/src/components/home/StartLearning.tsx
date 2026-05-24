"use client";
import React, { useMemo, useState } from "react";

const tabBase =
  "w-1/2 max-w-[395px] cursor-pointer border-0 bg-[#f2f2f2] px-3 py-3 text-center leading-snug text-fg transition-colors min-h-[82px] max-[1200px]:p-1.5 max-[1200px]:leading-snug max-[1024px]:w-full max-[1024px]:max-w-full max-[1024px]:min-h-14 max-[1024px]:text-[17px] max-[575px]:min-h-14 max-[575px]:w-full max-[575px]:max-w-full max-[575px]:px-2.5 max-[575px]:text-base max-[575px]:leading-snug";
const tabActive = "bg-primary text-white hover:bg-primary hover:text-white";
const tabHover = "hover:bg-primary hover:text-white";

const StartLearning = () => {
  const [activeProgram, setActiveProgram] = useState(
    "Advanced Industrial Training"
  );

  const advancedTrainingData = useMemo(
    () => [
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
    ],
    []
  );

  const summerBootCampData = useMemo(
    () => [
      {
        startEnd: "June to July 2026",
        pace: "120 hrs",
        deadline: "Admissions ends May 2026",
        link: "/summer-bootcamp-and-internship",
      },
    ],
    []
  );

  const handleClick = (program: string) => () => setActiveProgram(program);

  const programData =
    activeProgram === "Advanced Industrial Training"
      ? advancedTrainingData
      : summerBootCampData;

  const isAdvanced = activeProgram === "Advanced Industrial Training";

  return (
    <section className="bg-[url('/start-learning-with-DML.webp')] bg-cover bg-center py-25 max-[991px]:py-15">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="text-center text-section-title font-semibold text-white max-[991px]:text-section-title-sm">
          Start Learning With DML
        </h2>
        <div className="mx-auto mt-0 max-w-[1100px] min-h-[420px] rounded-[36px] bg-white px-[30px] py-15 shadow-[0_4px_15px_rgba(0,0,0,0.2)] max-[575px]:w-full max-[575px]:max-w-full max-[575px]:min-h-0 max-[575px]:rounded-[28px] max-[575px]:px-3.5 max-[575px]:py-7.5 max-[1024px]:min-h-0 max-[1024px]:px-5 max-[1024px]:py-10">
          <div className="flex justify-center pb-7.5 max-[1024px]:w-full max-[1024px]:flex-col max-[1024px]:pb-6 max-[575px]:flex-col max-[575px]:pb-7">
            <button
              type="button"
              className={`${tabBase} rounded-tl-[10px] rounded-bl-[10px] text-[19px] max-[1024px]:rounded-t-[10px] max-[1024px]:rounded-br-none max-[1024px]:rounded-bl-none max-[575px]:rounded-t-[10px] max-[575px]:rounded-b-none ${isAdvanced ? tabActive : tabHover}`}
              onClick={handleClick("Advanced Industrial Training")}
            >
              Advanced Industrial{" "}
              <span className="max-[1200px]:block">Training & Internship</span>
            </button>
            <button
              type="button"
              className={`${tabBase} flex items-center justify-center rounded-tr-[10px] rounded-br-[10px] text-lg max-[1024px]:rounded-none max-[1024px]:rounded-b-[10px] max-[575px]:rounded-none max-[575px]:rounded-b-[10px] ${!isAdvanced ? tabActive : tabHover}`}
              onClick={handleClick("Summer BootCamp")}
            >
              Summer <span className="max-[1200px]:block">Bootcamp</span>
            </button>
          </div>
          <div className="w-full overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] max-[575px]:pb-4">
            <table className="w-full min-w-[700px] border-collapse text-fg-muted max-[575px]:min-w-[600px]">
              <thead>
                <tr>
                  <th className="w-1/4 p-3 text-left text-lg">Starting From</th>
                  <th className="w-1/4 p-3 text-left text-lg">
                    Completion Hours
                  </th>
                  <th className="w-1/4 p-3 text-left text-lg">
                    Admissions Deadlines
                  </th>
                  <th className="w-1/4 p-3 text-right" />
                </tr>
              </thead>
              <tbody>
                {programData.map((item, index) => (
                  <tr key={index} className="border-t border-[#e7e7e7]">
                    <td className="w-1/4 p-3 max-[575px]:min-w-[130px] max-[575px]:whitespace-normal">
                      {item.startEnd}
                    </td>
                    <td className="w-1/4 p-3 max-[575px]:min-w-[130px] max-[575px]:whitespace-normal">
                      {item.pace}
                    </td>
                    <td className="w-1/4 p-3 max-[575px]:min-w-[130px] max-[575px]:whitespace-normal">
                      {item.deadline}
                    </td>
                    <td className="w-1/4 p-3 text-right max-[575px]:min-w-[130px]">
                      <a href={item.link}>
                        <button
                          type="button"
                          className="inline-block cursor-pointer rounded-full border-0 bg-black px-[34px] py-4 text-base font-semibold leading-6 text-white"
                        >
                          Get Started
                        </button>
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
