import Image from 'next/image';
import Link from '@/components/ui/link';
import { ChevronRightIcon } from '../common/common';
import girlPicture from '../../../public/stading-girl.jpg';

const Banner = () => {
  return (
    <section className="about-area-three bg-white" style={{ padding: '100px 0' }}>
      <div className="dml-container">
        <div className="hero-aboutus flex max-[991px]:flex-col">
          <div className="get-more-about-us w-1/2 max-[991px]:mb-[50px] max-[991px]:w-full max-[991px]:text-center">
            <div className="about__images-three">
              <Image
                src={girlPicture}
                alt="img"
                width={530}
                height={795}
                className="rounded-[400px]"
              />
            </div>
          </div>

          <div
            className="about-right w-1/2 px-[15px] max-[991px]:w-full"
            style={{ alignContent: 'center' }}
          >
            <div className="about__content-three">
              <div className="section__title mb-5">
                <span
                  className="sub-title inline-block rounded-[30px] bg-[#efeefe] font-medium leading-[1.62] text-[#5751e1]"
                  style={{ marginBottom: 14, padding: '3px 16px' }}
                >
                  What Sets Us Apart
                </span>
                <h2 className="title !text-[40px] !font-semibold !leading-[52px] text-black max-[767px]:!text-[28px] max-[767px]:!leading-[36px]">
                  Empowering Learners in the Digital Age
                </h2>
              </div>
              <p
                className="description-about text-base leading-[1.7] text-[#6d6c80]"
                style={{ padding: '15px 0', fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                At DMLearning, we empower you to succeed in an ever-changing career landscape. With a
                vast library of online courses, we support your growth and help you achieve your goals,
                whether that means advancing, exploring, or starting anew.
              </p>
              <ul className="about__info-list list-none p-0">
                <li className="about__info-list-item mb-[15px] flex gap-[15px]">
                  <span className="chevron-circle flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                    <ChevronRightIcon />
                  </span>
                  <div>
                    <h3
                      className="text-black max-[767px]:text-[20px]"
                      style={{ fontSize: '28px', lineHeight: '28px' }}
                    >
                      Expert-Led Courses
                    </h3>
                    <p
                      className="description-about text-base leading-[1.7] text-[#6d6c80]"
                      style={{ padding: '15px 0', fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      Learn from elite university faculty and industry experts in a range of topics like
                      cloud computing, AI, data analytics, and more.
                    </p>
                  </div>
                </li>
                <li className="about__info-list-item mb-[15px] flex gap-[15px]">
                  <span className="chevron-circle flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                    <ChevronRightIcon />
                  </span>
                  <div>
                    <h3
                      className="text-black max-[767px]:text-[20px]"
                      style={{ fontSize: '28px', lineHeight: '28px' }}
                    >
                      Career Support and Planning
                    </h3>
                    <p
                      className="description-about text-base leading-[1.7] text-[#6d6c80]"
                      style={{ padding: '15px 0', fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      Tap into our resources to help you plan and achieve your career goals.{' '}
                    </p>
                  </div>
                </li>
                <li className="about__info-list-item mb-[15px] flex gap-[15px]">
                  <span className="chevron-circle flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#282568] bg-[#fc8b20] text-white shadow-[4px_3px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-none">
                    <ChevronRightIcon />
                  </span>
                  <div>
                    <h3
                      className="text-black max-[767px]:text-[20px]"
                      style={{ fontSize: '28px', lineHeight: '28px' }}
                    >
                      Flexible Learning Options
                    </h3>
                    <p
                      className="description-about text-base leading-[1.7] text-[#6d6c80]"
                      style={{ padding: '15px 0', fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      Upskill at your own pace with flexible or hybrid online options that fit your
                      lifestyle.{' '}
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="dml-blue-button inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-[#5751e1] px-[34px] py-4 text-base font-semibold leading-6 text-white no-underline shadow-[4px_6px_0_0_#050071] transition-[linear_0.3s] hover:shadow-none"
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
