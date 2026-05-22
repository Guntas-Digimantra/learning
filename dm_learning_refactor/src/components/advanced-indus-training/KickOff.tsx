import React from 'react';
import Link from '@/components/ui/link';

const KickOff = () => {
  return (
    <section className="-mt-20">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto flex max-w-[600px] flex-col items-center justify-between gap-[15px] rounded-[45px] bg-white px-[30px] py-[30px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] min-[1200px]:max-w-none min-[1200px]:flex-row min-[1200px]:rounded-[80px] min-[1200px]:px-[70px] min-[1200px]:py-9 max-[480px]:flex-col">
          <div>
            <div className="flex items-center gap-1.5">
              <svg height="16px" color="#000" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path
                  d="M7.75 3.75A.74.74 0 0 1 8.5 3a.76.76 0 0 1 .75.75v3.875l2.656 1.75c.344.25.438.719.188 1.063a.718.718 0 0 1-1.031.187l-3-2A.77.77 0 0 1 7.75 8V3.75zM8.5 0c4.406 0 8 3.594 8 8 0 4.438-3.594 8-8 8-4.438 0-8-3.563-8-8 0-4.406 3.563-8 8-8zM2 8c0 3.594 2.906 6.5 6.5 6.5 3.563 0 6.5-2.906 6.5-6.5 0-3.563-2.938-6.5-6.5-6.5C4.906 1.5 2 4.438 2 8z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="text-[#121212]">Next Kickoff:</p>
            </div>
            <h3 className="text-[28px] text-[#121212]">June 2025</h3>
            <p className="text-[#121212]">Limited seats available</p>
          </div>
          <div>
            <Link
              href="/student-enrollment"
              className="inline-block cursor-pointer rounded-full border-2 border-[#fc8b20] bg-transparent px-[34px] py-4 text-base text-[#fc8b20] no-underline transition-all duration-300 ease-out hover:bg-[#fc8b20] hover:text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KickOff;
