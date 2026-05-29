'use client';
import Image from 'next/image';
import Link from '@/components/ui/link';
import React from 'react';
import signIn from '../../../public/apply-online.png';
import onlineIntern from '../../../public/interview.png';
import skillUp from '../../../public/acceptance-notification.png';
import completeEnrollment from '../../../public/complete-enrollment.png';

const SignIn = () => {
  return (
    <section className="sign-in-summer-section">
      <div className="dml-container">
        <div className="sign-in-bootcamp">
          <div className="sign-in-left">
            <h3>Step 1: Apply Online</h3>
            <p>
              Visit our official website and complete the online application form. Be sure to include your resume and a
              brief statement of purpose outlining your interest in the bootcamp.
            </p>
            <div className="btn-wrapper">
              <Link href="/student-enrollment" className="dml-button">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="sign-in-img">
            <Image src={signIn} alt="signIn" />
          </div>
        </div>

        <div className="online-internship-bootcamp">
          <div className="online-internship-left">
            <h3>Step 2: Counseling Session at DigiMantra</h3>
            <p>
              Once your application has been reviewed, you&apos;ll be invited to a brief counselling session (online or
              offline, based on your availability). This is also an excellent opportunity to discover what DigiMantra
              offers and how we can assist you in your career.
            </p>
          </div>
          <div className="online-internship-img">
            <Image src={onlineIntern} alt="signIn" />
          </div>
        </div>

        <div className="skill-up-bootcamp">
          <div className="skill-up-left">
            <h3>Step 3: Acceptance Notification</h3>
            <p>
              Once the interview is complete, you will receive an acceptance notification via email. If accepted,
              you&apos;ll get further instructions on how to proceed with enrollment.
            </p>
          </div>
          <div className="skill-up-img">
            <Image src={skillUp} alt="signIn" />
          </div>
        </div>

        <div className="online-internship-bootcamp">
          <div className="online-internship-left">
            <h3>Step 4: Complete Enrollment</h3>
            <p>
              Follow the instructions in your acceptance email to finalize your enrollment, including signing any
              necessary agreements and paying required fees. Get ready to join us at DigiMantra Ludhiana!
            </p>
          </div>
          <div className="online-internship-img">
            <Image src={completeEnrollment} alt="signIn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
