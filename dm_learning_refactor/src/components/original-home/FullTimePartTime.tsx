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
  // Memoize the header rendering callback
  const renderHeader = useCallback((header:any, index:any) => {
    let classes = "w-1/3 text-left p-5 align-top border-r border-[#d9d9f3] text-[#6d6c80] bg-[#f4f3f9] ";
    
    if (index === 0) {
      classes += "bg-orange-500 text-white font-bold rounded-tl-[26px] md:rounded-tl-[50px] ";
    }
    if (index === data.headers.length - 1) {
      classes += "border-r-0 rounded-tr-[26px] md:rounded-tr-[50px] ";
    }

    return (
      <th key={index} className={classes.trim()}>
        {header}
      </th>
    );
  }, []);

  // Memoize the row rendering callback
  const renderRow = useCallback((row:any, rowIndex:any) => {
    return (
      <tr key={rowIndex} className="border-t border-[#e7e7e7]">
        {row.map((cell:any, cellIndex:any) => {
          let classes = "w-1/3 text-left p-5 align-top border-r border-[#d9d9f3] text-[#6d6c80] bg-[#f4f3f9] ";
          
          if (cellIndex === 0) {
            classes += "bg-orange-500 text-white font-bold ";
            if (rowIndex === data.rows.length - 1) {
              classes += "rounded-bl-[26px] md:rounded-bl-[50px] ";
            }
          }
          if (cellIndex === row.length - 1) {
            classes += "border-r-0 ";
            if (rowIndex === data.rows.length - 1) {
              classes += "rounded-br-[26px] md:rounded-br-[50px] ";
            }
          }

          return (
            <td key={cellIndex} className={classes.trim()}>
              {cell}
            </td>
          );
        })}
      </tr>
    );
  }, []);

  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="max-w-[1100px] p-0 mt-[30px] mx-auto max-lg:my-auto max-lg:text-center w-full overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
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
