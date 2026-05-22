'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const data = [
  {
    title: 'Learn',
    description: 'Experience seamless learning with problem-solving modules, leaderboard, and awards.',
    image: '/learn.png',
  },
  {
    title: 'Excel',
    description: 'Track your skill level and make meaningful progress for you to grow.',
    image: '/excel.png',
  },
  {
    title: 'Standout',
    description: 'Standout to recruiters, showcase ratings, get feedback, and interview insights.',
    image: '/standard.png',
  },
];

const Pathway = () => {
  const currentIndexRef = useRef(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data.length;
      currentIndexRef.current = nextIndex;
      setSelectedIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[100px] max-md:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div>
          <h2>A 3-stage learning model to turn you into a Coding Ninja</h2>

          <div className="flex flex-row gap-5 py-[150px] max-md:p-0">
            <div className="w-[40%] pl-[134px] max-[1200px]:pl-0 max-md:w-full">
              <ul>
                {data.map((item, index) => {
                  const isActive = selectedIndex === index;
                  return (
                    <li
                      key={index}
                      className="relative mb-0 cursor-pointer max-md:mb-14"
                      onClick={() => setSelectedIndex(index)}
                    >
                      <div
                        className={`relative mb-[30px] border-l-2 border-[#999] pl-5 max-md:m-0 max-md:border-l-0 max-md:p-0 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gray-500 before:content-[''] max-md:before:hidden ${
                          isActive ? 'before:animate-grow-height' : ''
                        }`}
                      >
                        <h3 className={isActive ? 'text-[rgb(4,4,4)] max-md:text-black' : 'max-md:text-black'}>
                          {item.title}
                        </h3>
                        <p className={isActive ? 'text-[rgb(4,4,4)] max-md:text-black' : 'max-md:text-black'}>
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-[30px] hidden text-center max-md:block">
                        <Image src={item.image} alt={item.title} width={400} height={400} priority={true} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex w-[60%] items-center justify-center max-md:hidden">
              <Image src={data[selectedIndex].image} alt={data[selectedIndex].title} width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathway;
