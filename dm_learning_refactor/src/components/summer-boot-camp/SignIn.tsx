'use client';
import Image from 'next/image';
import React from 'react';
import Link from '@/components/ui/link';
import signIn from '../../../public/apply-online.png';
import onlineIntern from '../../../public/interview.png';
import skillUp from '../../../public/acceptance-notification.png';
import completeEnrollment from '../../../public/complete-enrollment.png';

const stepImageClass =
  'h-[233px] w-full max-w-[356px] rounded-[25px] min-[431px]:h-[343px] min-[431px]:max-w-[500px]';

const SignIn = () => {
  return (
    <section className="bg-white pt-[100px] max-lg:pt-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-row gap-[90px] max-[991px]:flex-col max-[991px]:gap-0">
          <div className="mx-auto w-full max-w-[700px] text-center content-center max-[991px]:w-full">
            <h3 className="text-[36px] text-[#121212] max-lg:text-[28px]">Step 1: Apply Online</h3>
            <p className="my-[30px]">
              Visit our official website and complete the online application form. Be sure to include your resume and a
              brief statement of purpose outlining your interest in the bootcamp.
            </p>
            <div className="pb-10">
              <Link
                href="/student-enrollment"
                className="inline-flex h-[54px] max-w-[173px] cursor-pointer items-center justify-center rounded-[24px] border-0 bg-black px-8 py-4 font-dm-sans text-base font-semibold text-white no-underline transition-colors hover:bg-white hover:text-black"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="w-full text-center max-[991px]:w-full">
            <Image src={signIn} alt="signIn" className={stepImageClass} />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-[90px] py-[100px] max-lg:py-[60px] max-[991px]:flex-col max-[991px]:gap-0">
          <div className="mx-auto w-full max-w-[700px] text-center content-center max-[991px]:w-full">
            <h3 className="text-[36px] text-[#121212] max-lg:text-[28px]">Step 2: Counseling Session at DigiMantra</h3>
            <p className="my-[30px]">
              Once your application has been reviewed, you&apos;ll be invited to a brief counselling session (online or
              offline, based on your availability). This is also an excellent opportunity to discover what DigiMantra
              offers and how we can assist you in your career.
            </p>
          </div>
          <div className="w-full text-center max-[991px]:w-full">
            <Image src={onlineIntern} alt="signIn" className={stepImageClass} />
          </div>
        </div>

        <div className="flex flex-row gap-[90px] max-[991px]:flex-col max-[991px]:gap-0">
          <div className="mx-auto w-full max-w-[700px] text-center content-center max-[991px]:w-full">
            <h3 className="text-[36px] text-[#121212] max-lg:text-[28px]">Step 3: Acceptance Notification</h3>
            <p className="my-[30px]">
              Once the interview is complete, you will receive an acceptance notification via email. If accepted,
              you&apos;ll get further instructions on how to proceed with enrollment.
            </p>
          </div>
          <div className="w-full text-center max-[991px]:w-full">
            <Image src={skillUp} alt="signIn" className={stepImageClass} />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-[90px] py-[100px] max-lg:py-[60px] max-[991px]:flex-col max-[991px]:gap-0">
          <div className="mx-auto w-full max-w-[700px] text-center content-center max-[991px]:w-full">
            <h3 className="text-[36px] text-[#121212] max-lg:text-[28px]">Step 4: Complete Enrollment</h3>
            <p className="my-[30px]">
              Follow the instructions in your acceptance email to finalize your enrollment, including signing any
              necessary agreements and paying required fees. Get ready to join us at DigiMantra Ludhiana!
            </p>
          </div>
          <div className="w-full text-center max-[991px]:w-full">
            <Image src={completeEnrollment} alt="signIn" className={stepImageClass} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
