import Image from 'next/image';
import Link from '@/components/ui/link';

const DML_BUTTON_CLASS =
  'inline-flex h-[54px] max-w-[173px] cursor-pointer items-center justify-center rounded-[24px] border-0 bg-black px-8 py-4 font-sans text-base font-semibold text-white transition-[linear_0.3s] hover:bg-white hover:text-black';

const CtaComponent = () => {
  return (
    <section className="bg-[#ffedda] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex max-lg:flex-col lg:items-center">
          <div className="w-full max-lg:w-full lg:w-1/2">
            <h2 className="text-[#111]">Your tech career starts here</h2>
            <p className="my-[30px] text-[#111]">
              Sign up for the course and go through all the admission stages to embark on a new career journey in less
              than half a year.
            </p>
            <Link href="/courses" className={DML_BUTTON_CLASS}>
              Get Started
            </Link>
          </div>
          <div className="mt-5 w-full text-center max-lg:mt-5 max-lg:text-center lg:mt-0 lg:w-1/2 lg:text-right">
            <Image src="/cta.svg" height={300} width={300} alt="cta" className="inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaComponent;
