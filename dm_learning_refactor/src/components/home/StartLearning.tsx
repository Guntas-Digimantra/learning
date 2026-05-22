"use client";
import React, { useMemo, useState } from "react";
import Link from "@/components/ui/link";

const StartLearning = () => {
  const [activeProgram, setActiveProgram] = useState("Advanced Industrial Training");

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

  const programData = useMemo(
    () =>
      activeProgram === "Advanced Industrial Training"
        ? advancedTrainingData
        : summerBootCampData,
    [activeProgram, advancedTrainingData, summerBootCampData]
  );

  const tabBase =
    "w-1/2 max-w-[395px] cursor-pointer border-0 bg-[#f2f2f2] text-black transition-colors hover:bg-[#fc8b20] hover:text-white max-[1200px]:p-1.5 min-[576px]:max-[1024px]:w-full min-[576px]:max-[1024px]:max-w-full min-[576px]:max-[1024px]:min-h-14 max-[575px]:min-h-14 max-[575px]:w-full max-[575px]:max-w-full max-[575px]:px-2.5 max-[575px]:py-3 max-[575px]:text-base";

  return (
    <section className="bg-[url('/start-learning-with-DML.webp')] bg-cover bg-center py-[100px] max-[767px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="mb-[30px] text-center text-[36px] text-white max-[767px]:text-[28px]">
          Start Learning With DML
        </h2>
        <div className="mx-auto min-h-[420px] max-w-[1100px] rounded-[36px] bg-white px-[30px] py-[60px] shadow-[0_4px_15px_rgba(0,0,0,0.2)] min-[576px]:max-[1024px]:min-h-0 min-[576px]:max-[1024px]:px-5 min-[576px]:max-[1024px]:pb-9 min-[576px]:max-[1024px]:pt-10 max-[575px]:w-full max-[575px]:px-4 max-[575px]:py-8">
          <div className="flex items-stretch justify-center pb-[30px] min-[576px]:max-[1024px]:w-full min-[576px]:max-[1024px]:flex-col min-[576px]:max-[1024px]:pb-6">
            <button
              type="button"
              className={`${tabBase} rounded-tl-[10px] rounded-bl-[10px] text-[19px] leading-[1.4] min-[576px]:max-[1024px]:rounded-bl-none min-[576px]:max-[1024px]:rounded-tr-[10px] max-[575px]:rounded-bl-none max-[575px]:rounded-br-none max-[575px]:rounded-tl-[10px] max-[575px]:rounded-tr-[10px] ${
                activeProgram === "Advanced Industrial Training"
                  ? "bg-[#fc8b20] text-white"
                  : ""
              }`}
              onClick={handleClick("Advanced Industrial Training")}
            >
              Advanced Industrial{" "}
              <span className="max-[1200px]:block">Training & Internship</span>
            </button>
            <button
              type="button"
              className={`${tabBase} flex items-center justify-center rounded-tr-[10px] rounded-br-[10px] text-lg leading-[1.4] min-[576px]:max-[1024px]:rounded-bl-[10px] min-[576px]:max-[1024px]:rounded-tr-none max-[575px]:rounded-bl-[10px] max-[575px]:rounded-br-[10px] max-[575px]:rounded-tl-none max-[575px]:rounded-tr-none ${
                activeProgram === "Summer BootCamp" ? "bg-[#fc8b20] text-white" : ""
              }`}
              onClick={handleClick("Summer BootCamp")}
            >
              Summer <span className="max-[1200px]:block">Bootcamp</span>
            </button>
          </div>
          <div className="w-full overflow-x-auto pb-[15px] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:h-[3px] [&::-webkit-scrollbar]:w-full [&::-webkit-scrollbar]:bg-[#efefef] [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-[#fc8b20] min-[576px]:max-[1024px]:pb-4">
            <table className="w-full min-w-[700px] border-collapse text-[#6d6c80] min-[576px]:max-[1024px]:min-w-[600px]">
              <thead>
                <tr>
                  <th className="w-1/4 p-3 text-left text-lg">Starting From</th>
                  <th className="w-1/4 p-3 text-left text-lg">Completion Hours</th>
                  <th className="w-1/4 p-3 text-left text-lg">Admissions Deadlines</th>
                  <th className="w-1/4 p-3 text-right text-lg max-[991px]:p-[9px] max-[991px]:text-base" />
                </tr>
              </thead>
              <tbody>
                {programData.map((item, index) => (
                  <tr key={index} className="border-t border-[#e7e7e7]">
                    <td className="w-1/4 p-3 max-[991px]:p-[9px]">{item.startEnd}</td>
                    <td className="w-1/4 p-3 max-[991px]:p-[9px]">{item.pace}</td>
                    <td className="w-1/4 p-3 max-[991px]:p-[9px]">{item.deadline}</td>
                    <td className="w-1/4 p-3 text-right max-[991px]:p-[9px]">
                      <Link href={item.link}>
                        <button
                          type="button"
                          className="inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-black px-[34px] py-4 text-base font-semibold leading-6 text-white no-underline transition-[linear_0.3s] hover:bg-black hover:text-white"
                        >
                          Get Started
                        </button>
                      </Link>
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
