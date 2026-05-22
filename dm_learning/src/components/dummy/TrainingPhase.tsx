import Image from "next/image";
import React from "react";

type Card = {
  imageSrc: string;
  title: string;
  description: string[];
};

const cardContent = [
  {
    imageSrc: "/mern-month-1.png",
    title: "Month 1",
    description: [
      "Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)",
      "Read about CSS3 selectors, properties, flexbox, grid layout etc.",
    ],
  },
  {
    imageSrc: "/mern-month-1.png",
    title: "Month 2",
    description: [
      "Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)",
      "Read about CSS3 selectors, properties, flexbox, grid layout etc.",
    ],
  },
  {
    imageSrc: "/mern-month-1.png",
    title: "Month 3",
    description: [
      "Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)",
      "Read about CSS3 selectors, properties, flexbox, grid layout etc.",
     
    ],
  },
  {
    imageSrc: "/mern-month-1.png",
    title: "Month 4",
    description: [
      "Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)",
      "Read about CSS3 selectors, properties, flexbox, grid layout etc.",
      
    ],
  },
  {
    imageSrc: "/mern-month-1.png",
    title: "Month 5",
    description: [
      "Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)",
      "Read about CSS3 selectors, properties, flexbox, grid layout etc.",
     
    ],
  },
  {
    imageSrc: "/mern-month-1.png",
    title: "Month 6",
    description: [
      "Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)",
      "Read about CSS3 selectors, properties, flexbox, grid layout etc.",
  
    ],
  },
];

const groupedCards: Card[][] = [];
for (let i = 0; i < cardContent.length; i += 2) {
  groupedCards.push(cardContent.slice(i, i + 2));
}

const TrainingPhase: React.FC = () => {
  return (
    <section className="training-phase-section">
      <div className="dml-container">
        <h2>Training Phase</h2>
        <div className="training-phase-wrapper">
          {groupedCards.map((group, index) => (
            <div key={index} className="training-phase-group">
              {group.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className={`training-phase-card training-phase-card-${index * 2 + cardIndex + 1}`}
                >
                  <div className="training-img-wrapper">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={400}
                      height={500}
                      priority
                      className="training-card-image"
                    />
                  </div>
                  <div className="training-card-content">
                    <h3>{card.title}</h3>
                    <ul>
                      {card.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPhase;
