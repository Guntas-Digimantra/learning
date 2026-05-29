"use client";
import React, { useMemo, useState } from "react";

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

  return (
    <section
      className="start-learning-container max-[767px]:!pt-[60px] max-[767px]:!pb-[63px]"
      style={{
        backgroundImage: "url('/start-learning-with-DML.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
      }}
    >
      <div className="dml-container">
        <h2
          className="max-[767px]:!text-[28px]"
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 36,
            marginBottom: 30,
            fontWeight: 600,
          }}
        >
          Start Learning With DML
        </h2>
        <div
          className="start-learning-table min-h-[420px] max-[1024px]:!min-h-0 max-[575px]:!w-full max-[575px]:!max-w-full max-[575px]:!rounded-[28px] max-[575px]:!p-[30px_14px_28px] min-[576px]:max-[1024px]:!px-5 min-[576px]:max-[1024px]:!py-9"
          style={{
            maxWidth: 1100,
            borderRadius: 36,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            background: "#fff",
            padding: "60px 30px",
            margin: "auto",
          }}
        >
          <div
            className="tabs-table flex items-stretch justify-center max-[1024px]:w-full max-[1024px]:flex-col max-[1024px]:!pb-6 max-[575px]:!pb-7"
            style={{ paddingBottom: 30 }}
          >
            <button
              type="button"
              className={`advanced-button min-h-[82px] max-[1024px]:!min-h-[56px] max-[1024px]:!w-full max-[1024px]:!max-w-full max-[1024px]:!text-[17px] max-[1024px]:rounded-t-[10px] max-[1024px]:rounded-bl-none max-[1024px]:rounded-br-none max-[575px]:!min-h-[66px] max-[575px]:!py-[9px] max-[575px]:!text-base ${
                activeProgram === "Advanced Industrial Training" ? "tabs-active" : ""
              }`}
              style={{
                border: "none",
                width: "50%",
                maxWidth: 395,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                padding: 12,
                cursor: "pointer",
                color:
                  activeProgram === "Advanced Industrial Training" ? "#fff" : "#000",
                fontSize: 19,
                backgroundColor:
                  activeProgram === "Advanced Industrial Training"
                    ? "#fc8b20"
                    : "#f2f2f2",
                lineHeight: 1.4,
                textAlign: "center",
              }}
              onClick={handleClick("Advanced Industrial Training")}
            >
              Advanced Industrial{" "}
              <span className="break-bootcamp">Training & Internship</span>
            </button>
            <button
              type="button"
              className={`summer-button flex min-h-[82px] items-center justify-center max-[1024px]:!min-h-[56px] max-[1024px]:!w-full max-[1024px]:!max-w-full max-[1024px]:rounded-b-[10px] max-[1024px]:rounded-t-none max-[575px]:!text-base ${
                activeProgram === "Summer BootCamp" ? "tabs-active" : ""
              }`}
              style={{
                border: "none",
                width: "50%",
                maxWidth: 395,
                cursor: "pointer",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                padding: 12,
                color: activeProgram === "Summer BootCamp" ? "#fff" : "#000",
                backgroundColor:
                  activeProgram === "Summer BootCamp" ? "#fc8b20" : "#f2f2f2",
                fontSize: 18,
                lineHeight: 1.4,
                textAlign: "center",
              }}
              onClick={handleClick("Summer BootCamp")}
            >
              Summer &nbsp; <span className="break-bootcamp">Bootcamp</span>
            </button>
          </div>
          <div
            className="scroll-table"
            style={{
              width: "100%",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              paddingBottom: 15,
            }}
          >
            <table
              className="table-start-dates max-[1024px]:!min-w-[600px] max-[575px]:!min-w-[600px]"
              style={{
                width: "100%",
                minWidth: 700,
                borderCollapse: "collapse",
                color: "#6d6c80",
              }}
            >
              <thead>
                <tr>
                  <th
                    className="max-[991px]:!p-[9px] max-[991px]:!text-base"
                    style={{ textAlign: "left", fontSize: 18, padding: 12, width: "25%" }}
                  >
                    Starting From
                  </th>
                  <th
                    className="max-[991px]:!p-[9px] max-[991px]:!text-base"
                    style={{ textAlign: "left", fontSize: 18, padding: 12, width: "25%" }}
                  >
                    Completion Hours
                  </th>
                  <th
                    className="max-[991px]:!p-[9px] max-[991px]:!text-base"
                    style={{ textAlign: "left", fontSize: 18, padding: 12, width: "25%" }}
                  >
                    Admissions Deadlines
                  </th>
                  <th className="max-[991px]:!p-[9px]" style={{ padding: 12, width: "25%" }} />
                </tr>
              </thead>
              <tbody>
                {programData.map((item, index) => (
                  <tr key={index} style={{ borderTop: "1px solid #e7e7e7" }}>
                    <td className="max-[991px]:!p-[9px]" style={{ padding: 12, width: "25%" }}>
                      {item.startEnd}
                    </td>
                    <td className="max-[991px]:!p-[9px]" style={{ padding: 12, width: "25%" }}>
                      {item.pace}
                    </td>
                    <td className="max-[991px]:!p-[9px]" style={{ padding: 12, width: "25%" }}>
                      {item.deadline}
                    </td>
                    <td
                      className="max-[991px]:!p-[9px]"
                      style={{ padding: 12, width: "25%", textAlign: "right" }}
                    >
                      <a href={item.link}>
                        <button type="button" className="dml-button">
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
