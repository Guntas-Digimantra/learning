'use client';
import { useState } from 'react';

const Modules = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      title: 'HTML & CSS',
      description: ['HTML & CSS', 'Responsive Design', 'Bootstrap', 'Sass', 'Flexbox', 'Grid'],
    },
    {
      id: 2,
      title: 'HTML & CSS',
      description: ['HTML & CSS', 'Responsive Design', 'Bootstrap', 'Sass', 'Flexbox', 'Grid'],
    },
    {
      id: 3,
      title: 'HTML & CSS',
      description: ['HTML & CSS', 'Responsive Design', 'Bootstrap', 'Sass', 'Flexbox', 'Grid'],
    },
    {
      id: 4,
      title: 'HTML & CSS',
      description: ['HTML & CSS', 'Responsive Design', 'Bootstrap', 'Sass', 'Flexbox', 'Grid'],
    },
  ];

  const handleModuleOpen = (id: number) => {
    setActiveModule((prevId) => {
      return prevId === id ? null : id;
    });
  };

  return (
    <section className="bg-[#f7f4ff] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex flex-col gap-3">
          {data?.map((item) => (
            <div key={item?.id}>
              <div
                className="flex cursor-pointer justify-between border-2 border-[#e2daff] bg-[#f7f4ff] p-5"
                onClick={() => handleModuleOpen(item?.id)}
              >
                <h3 className="text-xl">{item?.title}</h3>
                <span className={activeModule === item?.id ? '[&_svg]:-rotate-90' : '[&_svg]:rotate-90'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 298 511.93">
                    <path d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z" />
                  </svg>
                </span>
              </div>
              {activeModule === item?.id && (
                <ul className="border-x border-b border-[#e2daff] px-8 py-4">
                  {item?.description?.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
