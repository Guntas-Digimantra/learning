'use client';

import Link from '@/components/ui/link';

const PaymentFailedPage = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="mx-auto max-w-[527px] border-b-4 border-red-500 py-[100px] text-center shadow-[0_15px_25px_#00000019] max-[768px]:my-[60px] max-[768px]:py-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 122.879 122.879"
            className="mx-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#FF4141"
              d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
            />
          </svg>
          <h1 className="leading-[1.3]">Payment Failed</h1>
          <p className="py-3">
            Don&apos;t worry your money is safe! If money was debited from your account, it will be refunded
            automatically in 5-7 working days.
          </p>
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

export default PaymentFailedPage;
