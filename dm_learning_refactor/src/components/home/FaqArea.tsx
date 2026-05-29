"use client";
import Image from "next/image";
import React, { useState } from "react";

interface DataType {
  id: number;
  question: string;
  answer: string;
  class_name?: string;
}

const faq_data: DataType[] = [
  {
    id: 1,
    question: "How can I select a course on DMLearning?",
    answer:
      "You can browse our diverse course catalogue and select a course that suits your career goals and interests, and a list will appear. Having a search category or keyword will narrow down your options and help you choose the perfect course for your professional development.",
  },
  {
    id: 2,
    question: "Are DMLearning courses Accredited/Recognized? ",
    class_name: "collapsed",
    answer:
      "Yes, DMLearning offers accredited courses. With a solid commitment to excellence, we are dedicated to meeting the learning and certification needs of over 50+ companies in the Microsoft technology domain. Our partnership with Microsoft ensures that the certifications you earn are recognized globally, enhancing your professional credentials. As a proud member of the International Association of Microsoft Channel Partners (IAMCP), DMLearning upholds the highest standards of quality and expertise, providing certifications widely accepted in the tech industry.",
  },
  {
    id: 3,
    question: "How can I reach out to DMLearning's team for queries?",
    class_name: "collapsed",
    answer:
      "On the Contact Us page, you can fill out the Contact Us form, where you can either submit a query form or access our live chat support for immediate assistance. For more detailed enquiries, Call Us or Email us at <a href='mailto:learning@digimantra.com'>learning@digimantra.com</a>",
  },
  {
    id: 4,
    question:
      "What are the eligibility criteria for joining DMLearning's Online Course?",
    class_name: "collapsed",
    answer:
      "There is no strict eligibility requirement for most of our courses. Our courses are designed to cater to learners at various levels, from beginners to experts. Specific eligibility details, if any, are provided in the course description. Anyone can join our online certification course and register on our website.",
  },
  {
    id: 5,
    question:
      "I forgot my login password. Is there any provision to reset the password?",
    class_name: "collapsed",
    answer:
      'Yes, resetting your username or password is easy. Just visit the login page and click on "forget password". A link will be sent to your registered Email ID. Click on the link and follow the instructions to reset your password.',
  },
  {
    id: 6,
    question: "Can I also download my content for offline access?",
    class_name: "collapsed",
    answer:
      "Yes. Once enrolled, you'll find the option to download available materials from your dashboard.",
  },
];

const FAQAccordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      className="faq-section max-[767px]:!pt-[234px] max-[767px]:!pb-[60px]"
      style={{
        background: "#f7f7f9",
        padding: "260px 0 120px",
        marginTop: -140,
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div className="dml-container">
        <div
          className="faq-content flex flex-col max-[991px]:gap-[30px] min-[992px]:flex-row"
          style={{ display: "flex" }}
        >
          <div
            className="faq-image-section max-[991px]:!w-full"
            style={{ width: "50%", textAlign: "center" }}
          >
            <Image
              src="/faq-image.png"
              alt="faq"
              width={500}
              height={553}
              priority
              unoptimized
              className="h-auto max-w-full max-[1200px]:!pr-[45px] max-[767px]:!h-[420px] max-[767px]:!w-full max-[767px]:object-cover max-[767px]:!pr-0"
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>
          <div
            className="faq-accordion max-[991px]:!w-full"
            style={{ width: "50%", maxWidth: 800, margin: "0 auto" }}
          >
            <span
              className="sub-title"
              style={{
                display: "inline-block",
                lineHeight: 1.62,
                background: "#efeefe",
                borderRadius: 30,
                fontSize: 30,
                padding: "3px 16px",
                fontWeight: 500,
                color: "#5751e1",
                margin: "0 0 14px",
              }}
            >
              FAQ&apos;s
            </span>
            {faq_data.map((item) => (
              <div
                key={item.id}
                className="faq-item"
                style={{
                  margin: "10px 0",
                  borderBottom: "1px solid #ddd",
                  overflow: "hidden",
                }}
                onClick={() => handleAccordionClick(item.id)}
              >
                <div
                  className={`faq-question ${activeId === item.id ? "active" : ""}`}
                  style={{
                    padding: 15,
                    fontSize: 20,
                    fontWeight: 500,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    color: activeId === item.id ? "#5751e1" : "#000",
                  }}
                >
                  {item.question}
                  <span className={activeId === item.id ? "rotate-upper" : "rotate-faq"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 298 511.93"
                      style={{
                        transform: activeId === item.id ? "rotate(-90deg)" : "rotate(90deg)",
                        fill: activeId === item.id ? "#5751e1" : "currentColor",
                      }}
                    >
                      <path d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z" />
                    </svg>
                  </span>
                </div>
                {activeId === item.id && (
                  <div
                    className="faq-answer"
                    style={{
                      padding: 15,
                      fontSize: 16,
                      lineHeight: 1.7,
                      borderTop: "1px solid #ddd",
                      color: "#171717",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
