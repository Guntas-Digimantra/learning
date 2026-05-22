import React, { useCallback } from "react";

const data = {
  headers: ["", "Advanced Industrial Training and Internship", "Summer Bootcamp"],
  rows: [
    ["Completion Hours", "270 hours", "120 hours"],
    ["Course Duration", "6 months", "45 days"],
    ["Criteria", "For Final Year Students", "For 1st, 2nd and 3rd Year Students"],
  ],
};

const FullTimePartTime = () => {
  const renderHeader = useCallback((header: string, index: number) => {
    return (
      <th
        key={index}
        className={`w-1/4 border-r border-[#d9d9f3] p-5 text-left align-top text-[#6d6c80] [&:first-child]:bg-[#fc8b20] [&:first-child]:font-bold [&:first-child]:text-white ${
          index === 0
            ? "rounded-tl-[50px] max-[767px]:rounded-tl-[26px]"
            : index === data.headers.length - 1
              ? "rounded-tr-[50px] border-r-0 max-[767px]:rounded-tr-[26px]"
              : ""
        } ${index === 2 ? "border-r-0" : ""}`}
      >
        {header}
      </th>
    );
  }, []);

  const renderRow = useCallback((row: string[], rowIndex: number) => {
    return (
      <tr key={rowIndex} className="border-t border-[#e7e7e7]">
        {row.map((cellText, cellIndex) => (
          <td
            key={cellIndex}
            className={`w-1/4 border-r border-[#d9d9f3] bg-[#f4f3f9] p-5 text-left align-top text-[#6d6c80] [&:first-child]:bg-[#fc8b20] [&:first-child]:font-bold [&:first-child]:text-white ${
              rowIndex === data.rows.length - 1
                ? cellIndex === 0
                  ? "rounded-bl-[50px] max-[767px]:rounded-bl-[26px]"
                  : cellIndex === row.length - 1
                    ? "rounded-br-[50px] border-r-0 max-[767px]:rounded-br-[26px]"
                    : ""
                : ""
            } ${cellIndex === 2 ? "border-r-0" : ""}`}
          >
            {cellText}
          </td>
        ))}
      </tr>
    );
  }, []);

  return (
    <section className="bg-white py-[100px] max-[767px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto mt-[30px] max-w-[1100px] max-[991px]:text-center">
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
