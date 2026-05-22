import Image from 'next/image';
import Link from '@/components/ui/link';
import girlPicture from '/public/stading-girl.jpg';
import { ChevronRightIcon } from '../common/common';

const Banner = () => {
  return (
    <section className="bg-white py-[100px] max-[767px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex max-[991px]:flex-col">
          <div className="w-1/2 max-[991px]:w-full max-[991px]:text-center">
            <div className="max-[991px]:mb-[50px]">
              <Image
                src={girlPicture}
                alt="img"
                width={530}
                height={795}
                className="rounded-[400px]"
              />
            </div>
          </div>

          <div className="w-1/2 content-center px-[15px] max-[991px]:w-full">
            <div>
              <div className="mb-5">
                <span className="mb-[14px] inline-block rounded-[30px] bg-[#efeefe] px-4 py-[3px] text-[#5751e1] font-medium leading-[1.62]">
                  What Sets Us Apart
                </span>
                <h2 className="text-[40px] font-semibold max-[767px]:text-[28px]">
                  Empowering Learners in the Digital Age
                </h2>
              </div>
              <p className="py-[15px] text-base">
                At DMLearning, we empower you to succeed in an ever-changing career landscape. With a vast library of
                online courses, we support your growth and help you achieve your goals, whether that means advancing,
                exploring, or starting anew.
              </p>
              <ul>
                <li className="mb-[15px] flex gap-[15px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                    <ChevronRightIcon />
                  </span>
                  <div>
                    <h3 className="text-[1.75rem] leading-none text-black max-[767px]:text-[20px]">
                      Expert-Led Courses
                    </h3>
                    <p className="py-[15px] text-base">
                      Learn from elite university faculty and industry experts in a range of topics like cloud
                      computing, AI, data analytics, and more.
                    </p>
                  </div>
                </li>
                <li className="mb-[15px] flex gap-[15px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                    <ChevronRightIcon />
                  </span>
                  <div>
                    <h3 className="text-[1.75rem] leading-none text-black max-[767px]:text-[20px]">
                      Career Support and Planning
                    </h3>
                    <p className="py-[15px] text-base">
                      Tap into our resources to help you plan and achieve your career goals.{' '}
                    </p>
                  </div>
                </li>
                <li className="mb-[15px] flex gap-[15px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                    <ChevronRightIcon />
                  </span>
                  <div>
                    <h3 className="text-[1.75rem] leading-none text-black max-[767px]:text-[20px]">
                      Flexible Learning Options
                    </h3>
                    <p className="py-[15px] text-base">
                      Upskill at your own pace with flexible or hybrid online options that fit your lifestyle.{' '}
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-[#5751e1] px-[34px] py-4 text-base font-semibold leading-6 text-white no-underline shadow-[4px_6px_0_0_#050071] transition-[linear_0.3s] hover:shadow-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
