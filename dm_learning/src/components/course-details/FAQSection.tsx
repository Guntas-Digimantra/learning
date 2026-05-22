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
    <section className="faq-section-details">
      <div className="dml-container">
        <h2 className="faq-main-title">FREQUENTLY ASKED QUESTIONS</h2>
        
        {/* Tabs */}
        <div className="faq-tabs-container">
          <div className="faq-tabs">
            {faqData.map(cat => (
              <button
                key={cat.id}
                className={`faq-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(cat.id);
                  setOpenIndex(0); // Reset accordion when switching tabs
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {activeCategory?.items.map((item, index) => (
            <div 
              key={index} 
              className={`faq-accordion-item ${openIndex === index ? 'open' : ''}`}
            >
              <div 
                className="faq-accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="faq-question-text">{item.question}</h3>
                <span className="faq-toggle-icon">
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
                <div className="faq-accordion-body">
                  <p className="faq-answer-text">{item.answer}</p>
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
