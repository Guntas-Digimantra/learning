'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from '@/components/ui/link';
import applyNow from '../../../public/applynow.png';
import laptop from '../../../public/laptopIcon.webp';
import book from '../../../public/books.svg';
import ai from '../../../public/ai.svg';
import dollar from '../../../public/dollar.webp';

interface ProgramList {
  heading: string;
  listItem: string[];
}

interface CardList {
  logo: StaticImageData;
  title: string;
}

interface ProgramData {
  title: string;
  description: string;
  list: ProgramList[];
  cardList: CardList[];
}

const data: ProgramData = {
  title: 'Land a High-Paying Job with our Advanced Industrial Training and Internship Program',
  description: `Are you ready to kickstart your career in IT? Our internship program is designed to equip you with the skills you need in today's rapidly evolving landscape. With 10+ years of experience and over 5,000 graduates placed in top tech companies, we know what it takes to get you there.`,
  list: [
    {
      heading: `Who is this program for?`,
      listItem: [
        'Students who are 18-25 years old.',
        'Those with a high school degree or equivalent.',
        'Individuals who prefer practical learning, live instruction, and hands-on experience.',
      ],
    },
    {
      heading: "Here's what you'll learn",
      listItem: [
        'Programming Fundamentals',
        'Back-End Engineering',
        'Front-End Engineering',
        'Web Development Fundamentals',
        'Artificial Intelligence',
      ],
    },
    {
      heading: "By the end of the program, you'll have",
      listItem: [
        'Proficiency in Web Development, UX/UI Design and more.',
        'Hands on experience with industry specific technologies.',
        'A distinguished portfolio that demonstrates your new coding skills.',
        'Access to our Alumni network and the job search resources needed to launch a new career.',
      ],
    },
    {
      heading: 'Why choose our program?',
      listItem: [
        `Experienced and dedicated team`,
        `In-house training at DigiMantra, Ludhiana`,
        `Industry Specific Expertise`,
        `By the end of this program, you'll gain valuable skills that will elevate your CV`,
      ],
    },
  ],
  cardList: [
    { logo: laptop, title: 'Practical experience' },
    { logo: book, title: 'Live instruction & support' },
    { logo: ai, title: 'Hands on training with multiple technologies' },
    { logo: dollar, title: 'Internship plans starting at minimal cost' },
  ],
};

const ProgramDetails: React.FC = () => {
  const { title = '', description = '', list = [], cardList = [] } = data || {};
  return (
    <section className="program-section">
      <div className="program-inner-section dml-container">
        <div className="program-details-banner">
          <div className="program-details-content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="program-second-section">
          {list.map((item, i) => (
            <div key={i} className="list-sections">
              <p>{item.heading}</p>
              <ul>
                {item.listItem.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="program-image-wrapper">
          <div className="inner-image-program">
            <Image src={applyNow} alt="program" />
            <div className="program-btn">
              <Link href="/student-enrollment" className="program-dml-btn">
                APPLY NOW
              </Link>
            </div>
            <div className="third-program-content">
              <h3>Recommended Experience Level:</h3>
              <p className="third-program-content-basic">Basic & above</p>
              <h3>Ideal for students who prefer:</h3>
              <div className="list-wrapper">
                {cardList.map((listItem, i) => (
                  <div key={i} className="card-list-data">
                    <Image src={listItem.logo} alt="cardLogo" style={{ height: '25px', width: '25px' }} />
                    <p>{listItem.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
