import React from "react";
import Link from "@/components/ui/link";

const KickOff = () => {
  return (
    <section className="kick-off-section">
      <div className="dml-container">
        <div className="kick-off-container">
          <div className="next-kickoff-content">
            <div className="svg-kickoff">
              <svg
                height="16px"
                color="#000"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M7.75 3.75A.74.74 0 0 1 8.5 3a.76.76 0 0 1 .75.75v3.875l2.656 1.75c.344.25.438.719.188 1.063a.718.718 0 0 1-1.031.187l-3-2A.77.77 0 0 1 7.75 8V3.75zM8.5 0c4.406 0 8 3.594 8 8 0 4.438-3.594 8-8 8-4.438 0-8-3.563-8-8 0-4.406 3.563-8 8-8zM2 8c0 3.594 2.906 6.5 6.5 6.5 3.563 0 6.5-2.906 6.5-6.5 0-3.563-2.938-6.5-6.5-6.5C4.906 1.5 2 4.438 2 8z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Next Kickoff:</p>
            </div>
            <h3>June 2026</h3>
            <p>Limited seats available</p>
          </div>
          <div className="">
            <span>
              <Link href="/student-enrollment">
              <button className="apply-kickoff-button">Apply Now</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KickOff;
