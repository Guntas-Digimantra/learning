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
    return (
      <th
        key={index}
        className={
          index === 0
            ? "border-top-left-radius"
            : index === data.headers.length - 1
            ? "border-top-right-radius"
            : ""
        }
      >
        {header}
      </th>
    );
  }, []);

  // Memoize the row rendering callback
  const renderRow = useCallback((row:any, rowIndex:any) => {
    return (
      <tr key={rowIndex}>
        {row.map((cell:any, cellIndex:any) => (
          <td
            key={cellIndex}
            className={
              rowIndex === data.rows.length - 1
                ? cellIndex === 0
                  ? "border-bottom-left-radius"
                  : cellIndex === row.length - 1
                  ? "border-bottom-right-radius"
                  : ""
                : ""
            }
          >
            {cell}
          </td>
        ))}
      </tr>
    );
  }, []);

  return (
    <section className="part-time-section">
      <div className="dml-container">
        <div className="part-time-table">
          <table>
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
