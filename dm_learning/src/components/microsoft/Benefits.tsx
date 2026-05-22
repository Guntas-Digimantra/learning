import Image from "next/image";
import React from "react";

const Benefits = () => {
  const benefitsData = [
    {
      imgSrc: "/money-dollar-one.svg",
      imgAlt: "money",
      title: "Enhanced Employability",
      description:
        "Earning a Microsoft certification demonstrates technical proficiency and knowledge in specific areas, making students more attractive to potential employers. It helps them stand out in a competitive job market.",
    },
    {
      imgSrc: "/chart-bar-up-arrow-one.svg",
      imgAlt: "chart",
      title: "Career Advancement Opportunities",
      description:
        "Microsoft certifications can open doors to various career paths and advancement opportunities. Students with certifications are often considered for promotions and higher-level positions, as they possess validated skills that align with industry needs.",
    },
    {
      imgSrc: "/chart-two-two.svg",
      imgAlt: "chart",
      title: "Practical Experience and Skills Development",
      description:
        "The certification process emphasizes hands-on, experience-based learning. Students gain practical skills that are directly applicable to real-world scenarios their readiness for the workforce.",
    },
    {
      imgSrc: "/hand-thumbs-up-one.svg",
      imgAlt: "thumbs up",
      title: "Networking and Community Access",
      description:
        "Obtaining a Microsoft certification connects students to a global community of professionals and peers. This network can provide valuable resources, mentorship opportunities, and insights into industry trends, further supporting their career growth.",
    },
  ];

  return (
    <section className="microsoft-benefits-section">
      <div className="dml-container">
        <div className="featured-content">
          <div className="features-left">
            <h2>Transformative Benefits of Microsoft Certification</h2>
            <ul>
              {benefitsData.map((benefit, index) => (
                <li key={index}>
                  <Image
                    src={benefit.imgSrc}
                    width={64}
                    height={64}
                    alt={benefit.imgAlt}
                  />
                  <p className="featured-title">{benefit.title}</p>
                  <p className="feature-para">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="features-right">
            <Image
              src="/featured-microsoft.webp"
              width={352}
              height={461}
              alt="featured-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
