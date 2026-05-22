"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

const FAQSection = ({ faqData }: { faqData: FAQCategory[] }) => {
  const [activeTab, setActiveTab] = useState('career');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory = faqData.find(cat => cat.id === activeTab);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="pb-5 text-center font-[Montserrat] text-[56px] font-semibold uppercase leading-[120%] tracking-[-1px] text-[#242b42] [font-feature-settings:'smcp','c2sc'] [font-variant:all-small-caps] max-[1240px]:text-[48px] max-[991px]:text-[40px] max-[600px]:text-[32px]">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="mb-12 flex justify-center">
          <div className="flex max-w-full gap-6 overflow-x-auto border-b border-[#d9d9d9] px-[15px] pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {faqData.map(cat => (
              <button
                key={cat.id}
                className={`cursor-pointer whitespace-nowrap border-none bg-transparent px-[25px] py-3 text-sm font-medium uppercase leading-normal text-[#2e2e2e] transition-all duration-300 max-[600px]:px-[15px] max-[600px]:py-2.5 max-[600px]:text-[13px] ${
                  activeTab === cat.id
                    ? 'border-b border-[#fc8b20] font-semibold text-[#fc8b20]'
                    : ''
                }`}
                onClick={() => {
                  setActiveTab(cat.id);
                  setOpenIndex(0);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1000px]">
          {activeCategory?.items.map((item, index) => (
            <div
              key={index}
              className={`border-b border-[#eee] py-8 last:border-b-0 ${openIndex === index ? 'open' : ''}`}
            >
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium leading-7 text-[#101828] max-[768px]:text-base">
                  {item.question}
                </h3>
                <span className="shrink-0 transition-transform duration-300 [&_svg]:block">
                  {openIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="#FC8B20" strokeWidth="2"/>
                      <path d="M7 12H17" stroke="#FC8B20" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="#FC8B20" strokeWidth="2"/>
                      <path d="M12 7V17M7 12H17" stroke="#FC8B20" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div className="pt-5">
                  <p className="text-base font-normal leading-6 text-[#2e2e2e] max-[768px]:text-sm">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
