'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTypewriterOnScroll } from '../lib/Typewriter';

const Meeting = () => {
  const fullText = 'Book 1:1 Meeting with our Tech Learning Experts';
  const { sectionRef, displayedText } = useTypewriterOnScroll(fullText);

  const listItems = [
    {
      title: '54K + Courses',
      img: '/book.svg',
    },
    {
      title: '80K + Members',
      img: '/people.svg',
    },
    {
      title: '120 + Instructors',
      img: '/teach.svg',
    },
  ];

  return (
    <section className="meeting-section" ref={sectionRef}>
      <div className="dml-container">
        <div className="meeting-wrapper">
          <h2 className="meeting-heading">
            {displayedText.endsWith('Tech Learning Experts') ? (
              <>
                {displayedText.slice(0, -21)}
                <br />
                <span className="orange-letter">Tech Learning Experts</span>
              </>
            ) : (
              displayedText
            )}
          </h2>
          <p>
            Book a free, no-obligation session with one of our advisors today and share your career aspirations whether
            you are breaking into tech or levelling up your skills. Our team will guide you step by step.
          </p>
          <ul className="meeting-list-wrapper">
            {listItems?.map((item, index) => (
              <li className="meeting-list" key={index}>
                <span>
                  <Image alt="arrow tick" height={56} width={55} src={item?.img} />{' '}
                </span>{' '}
                {item?.title}
              </li>
            ))}
          </ul>
          <Link
            href="https://outlook.office.com/bookwithme/user/42315f10eee24fb0b2ad3f104579a6c3@digimantra.com/meetingtype/f2wGxThPTkiquaCk-B9vsQ2?bookingcode=b8b7bec6-f837-490e-a955-84e11f0b4263&anonymous&ismsaljsauthenabled&ep=mcard"
            className="dml-black-button"
          >
            Schedule a Meeting
          </Link>
        </div>
        <div className="meeting-wrapper-image">
          <img src="/meetings.svg"></img>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
