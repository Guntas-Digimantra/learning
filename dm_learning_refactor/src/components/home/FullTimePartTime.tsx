import React, { useCallback } from "react";

const data = {
  headers: [
    "",
    "Advanced Industrial Training and Internship",
    "Summer Bootcamp",
  ],
  rows: [
    ["Completion Hours", "270 hours", "120 hours"],
    ["Course Duration", "6 months", "45 days"],
    [
      "Criteria",
      "For Final Year Students",
      "For 1st, 2nd and 3rd Year Students",
    ],
  ],
};

const cellBase =
  "w-1/4 border-r border-border-soft p-5 text-left align-top text-fg-muted max-[767px]:p-2.5 max-[767px]:text-sm";
const cellFirstCol = "bg-primary font-bold text-white";
const cellLastRowFirst = "rounded-bl-[50px] max-[767px]:rounded-bl-[26px]";
const cellLastRowLast = "rounded-br-[50px] max-[767px]:rounded-br-[26px]";

const FullTimePartTime = () => {
  const renderHeader = useCallback((header: string, index: number) => {
    const isFirst = index === 0;
    const isLast = index === data.headers.length - 1;
    return (
      <th
        key={index}
        className={`${cellBase} ${isFirst ? `${cellFirstCol} rounded-tl-[50px] max-[767px]:rounded-tl-[26px]` : "bg-table-cell"} ${isLast ? "rounded-tr-[50px] border-r-0 max-[767px]:rounded-tr-[26px]" : ""} ${index === 2 ? "border-r-0" : ""}`}
      >
        {header}
      </th>
    );
  }, []);

  const renderRow = useCallback((row: string[], rowIndex: number) => {
    const isLastRow = rowIndex === data.rows.length - 1;
    return (
      <tr key={rowIndex} className="border-t border-[#e7e7e7]">
        {row.map((cell, cellIndex) => {
          const isFirst = cellIndex === 0;
          const isLast = cellIndex === row.length - 1;
          return (
            <td
              key={cellIndex}
              className={`${cellBase} ${isFirst ? cellFirstCol : "bg-table-cell"} ${cellIndex === 2 ? "border-r-0" : ""} ${
                isLastRow && isFirst ? cellLastRowFirst : ""
              } ${isLastRow && isLast ? cellLastRowLast : ""}`}
            >
              {cell}
            </td>
          );
        })}
      </tr>
    );
  }, []);

  return (
    <section className="bg-surface py-25 max-[991px]:py-15">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto mt-7.5 max-w-[1100px] p-0 max-[991px]:mx-auto max-[991px]:text-center">
          <table className="w-full border-collapse">
            <thead>
              <tr>{data.headers.map(renderHeader)}</tr>
            </thead>
            <tbody>{data.rows.map(renderRow)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FullTimePartTime;
