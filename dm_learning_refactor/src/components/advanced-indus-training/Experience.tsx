import React from 'react';
import Link from '@/components/ui/link';

const Experience: React.FC = () => {
  return (
    <section>
      <div className="mx-auto bg-[linear-gradient(127.03deg,#fb8b25_0.81%,#f99942_61.9%,#ffc896_95.24%)] px-[15px] py-20">
        <div className="mx-auto max-w-[58rem] text-center">
          <h3 className="mb-12 text-white">Skills and experiences get you the job. Not just your degree.</h3>
          <Link
            href="/student-enrollment"
            className="inline-block rounded-full border-0 bg-gray-800 px-[34px] py-4 text-lg font-semibold leading-6 text-white no-underline transition-all duration-300 ease-out hover:text-[#fc8b20]"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
