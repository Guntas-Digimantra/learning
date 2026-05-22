import Image from 'next/image';
import Link from '@/components/ui/link';

const transparentButtonClass =
  'rounded-[36px] border-2 border-white px-[34px] py-4 text-base font-semibold leading-6 text-white transition-colors hover:bg-white hover:text-black max-[767px]:px-3 max-[767px]:py-2 max-[767px]:text-[15px]';

const GetConnected = () => {
  return (
    <section className="bg-[#171717]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex py-[100px] max-[1024px]:flex-col max-[1024px]:py-[60px]">
          <div className="flex-1 max-[1024px]:text-center">
            <Image src="/get-connected.png" width={700} height={514} alt="get-connected" />
          </div>
          <div className="flex-1 content-center max-[1024px]:text-center">
            <h2 className="text-[32px] text-[#e6e6e6]">Get Certified</h2>
            <p className="pt-2.5 pb-[30px] text-[#e6e6e6]">
              Are you interested in professional networking with other AI engineers?
            </p>
            <Link href="/contact" className={transparentButtonClass}>
              Join Tech Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetConnected;
