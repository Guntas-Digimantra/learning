import Image from 'next/image';
import React from 'react';
import bootCamp from '../../../public/summer-dml-bootcamp.png';

const SummerCamp = () => {
  return (
    <section className="bg-white px-[15px] py-[100px] max-lg:py-[60px]">
      <div className="mx-auto flex max-w-[1440px] flex-row gap-[90px] px-[15px] max-lg:flex-col max-lg:gap-[50px]">
        <div className="relative w-1/2 p-[15px] text-center content-center max-lg:w-full">
          <Image src={bootCamp} alt="boot-camp" />
        </div>
        <div className="w-1/2 max-lg:w-full">
          <div className="mb-[15px] inline-block rounded-full bg-[#ffe0cc] px-3 py-[7px]">
            <span className="m-0 text-xs font-extrabold uppercase tracking-[1.5px] text-[#ff6400]">
              about DML&apos;s bootcamp
            </span>
          </div>
          <h2 className="mb-[15px] text-[#121212]">
            Summer DML Bootcamp: Your Path to a <span className="text-[#fc8b20]">New Career</span>
          </h2>
          <p className="mb-[15px]">Upskill your career with our Summer DML Bootcamp, featuring an in-house DigiMantra internship!</p>
          <p className="mb-[15px]">
            Our immersive tech curriculum is designed to help you build professional skills through hands-on practice,
            collaborative projects, and real-world experience right in DigiMantra&apos;s Ludhiana office.
          </p>
          <p className="mb-[15px]">
            You&apos;ll be matched with an industry mentor who will guide your growth through regular in-person
            meetings, providing valuable insights and feedback throughout the program.
          </p>
          <p className="mb-[15px]">Our career services team will also help you develop essential networking and interviewing skills.</p>
          <p className="mb-[15px]">
            Join us this summer and take the first step towards a successful career in tech, all while gaining practical
            experience at DigiMantra Labs!
          </p>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center text-[#121212]">
              <div className="mr-2.5 flex w-[50px] justify-center rounded-full bg-[#ffe4c3] p-[15px]">
                <svg
                  aria-hidden="true"
                  style={{ fill: '#F7941E', width: '20px' }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              </div>
              45 Days Bootcamp
            </div>

            <div className="ml-3.5 flex items-center rounded-full border-0 border-solid bg-[#f7941e] p-2.5 text-[#121212]">
              <div className="mr-2.5 flex w-[50px] justify-center rounded-full bg-white p-[15px]">
                <svg
                  aria-hidden="true"
                  style={{ fill: '#F7941E', width: '20px' }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              </div>
              <div className="text-white">Recognized by LinkedIn</div>
            </div>

            <div className="flex items-center text-[#121212]">
              <div className="mr-2.5 flex w-[50px] justify-center rounded-full bg-[#ffe4c3] p-[15px]">
                <svg
                  aria-hidden="true"
                  style={{ fill: '#F7941E', width: '20px' }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              </div>
              <div>DMLearning an initiative of DigiMantra Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCamp;
