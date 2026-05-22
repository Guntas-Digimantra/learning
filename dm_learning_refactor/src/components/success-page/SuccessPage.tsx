'use client';

import Link from '@/components/ui/link';

const SuccessPage = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto max-w-[527px] border-b-4 border-[#28a745] py-[100px] text-center shadow-[0_15px_25px_#00000019] max-[768px]:my-[60px] max-[768px]:py-[60px]">
          <span className="inline-block [&_svg]:fill-[#28a745]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
              <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z" />
            </svg>
          </span>
          <h1 className="leading-[1.3]">Your payment was successful</h1>
          <p className="py-3">Thank you for your payment. we will be in contact with more details shortly</p>
          <Link
            href="/"
            className="mt-4 inline-flex h-[54px] max-w-[173px] items-center justify-center rounded-[24px] bg-black px-8 py-4 text-base font-semibold text-white"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
