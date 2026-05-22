import Image from 'next/image';
import React from 'react';

type Card = {
  imageSrc: string;
  title: string;
  description: string[];
};

const cardContent = [
  {
    imageSrc: '/mern-month-1.png',
    title: 'Month 1',
    description: [
      'Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)',
      'Read about CSS3 selectors, properties, flexbox, grid layout etc.',
    ],
  },
  {
    imageSrc: '/mern-month-1.png',
    title: 'Month 2',
    description: [
      'Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)',
      'Read about CSS3 selectors, properties, flexbox, grid layout etc.',
    ],
  },
  {
    imageSrc: '/mern-month-1.png',
    title: 'Month 3',
    description: [
      'Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)',
      'Read about CSS3 selectors, properties, flexbox, grid layout etc.',
    ],
  },
  {
    imageSrc: '/mern-month-1.png',
    title: 'Month 4',
    description: [
      'Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)',
      'Read about CSS3 selectors, properties, flexbox, grid layout etc.',
    ],
  },
  {
    imageSrc: '/mern-month-1.png',
    title: 'Month 5',
    description: [
      'Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)',
      'Read about CSS3 selectors, properties, flexbox, grid layout etc.',
    ],
  },
  {
    imageSrc: '/mern-month-1.png',
    title: 'Month 6',
    description: [
      'Read HTML/HTML5 tags and their default properties (eg. Body has padding by default)',
      'Read about CSS3 selectors, properties, flexbox, grid layout etc.',
    ],
  },
];

const CARD_STYLES = [
  'w-full max-w-[60%] rounded-[96px_32px] bg-[radial-gradient(circle,#ff9a9e,#fad0c4)] max-lg:max-w-full',
  'w-full max-w-[40%] rounded-[32px] bg-[radial-gradient(circle,#fbc2eb,#a6c1ee)] max-lg:max-w-full',
  'w-full max-w-[40%] rounded-[24px_65px_8px_21px] bg-[radial-gradient(circle,#84fab0,#8fd3f4)] max-lg:max-w-full',
  'w-full max-w-[60%] flex-row-reverse rounded-[72px_27px_39px_13px] bg-[radial-gradient(circle,#a18cd1,#fbc2eb)] max-lg:max-w-full max-lg:flex-row',
  'w-full max-w-[55%] flex-row-reverse rounded-[96px_35px_8px_23px] bg-[radial-gradient(circle,#de7bc2,#ecaa47)] max-lg:max-w-full max-lg:flex-row',
  'w-full max-w-[45%] rounded-[6px_19px_96px_45px] bg-[radial-gradient(circle,#75acb6,#575e99)] max-lg:max-w-full',
];

const groupedCards: Card[][] = [];
for (let i = 0; i < cardContent.length; i += 2) {
  groupedCards.push(cardContent.slice(i, i + 2));
}

const TrainingPhase: React.FC = () => {
  return (
    <section className="pb-[180px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <h2 className="pb-[50px] text-center">Training Phase</h2>
        <div>
          {groupedCards.map((group, index) => (
            <div key={index} className="mb-[18px] flex gap-[18px] max-lg:flex-col">
              {group.map((card, cardIndex) => {
                const styleIndex = index * 2 + cardIndex;
                return (
                  <div
                    key={cardIndex}
                    className={`flex items-center gap-[15px] rounded-[10px] p-10 shadow-[0_4px_6px_rgba(0,0,0,0.1)] ${CARD_STYLES[styleIndex]}`}
                  >
                    <div>
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        width={400}
                        height={500}
                        priority
                        className="max-lg:h-[166px] max-lg:w-[236px]"
                      />
                    </div>
                    <div>
                      <h3 className="mb-[15px]">{card.title}</h3>
                      <ul>
                        {card.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-sm text-[#363030]">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPhase;
