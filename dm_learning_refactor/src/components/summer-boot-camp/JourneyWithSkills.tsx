'use client';
import React from 'react';
import Link from '@/components/ui/link';

const skillsContent = [
  {
    subHeading: 'for learners',
    title: 'Advanced Industrial Training and Internship',
    description:
      'Build your dream career by mastering essential soft skills and technical topics through flexible learning, hands-on practice, and personalized support.',
    button: {
      text: 'Get started',
      link: '/advanced-industrial-training-and-internship',
    },
  },
  {
    subHeading: 'interested institution partners',
    title: 'Microsoft Certification and Training',
    description:
      'Welcome to DMLearning, the leading platform for certified Microsoft courses and professional development With a focus on delivering high-quality, industry-recognized certifications, we empower learners to unlock their full potential and stay ahead of the curve in their careers.',
    button: {
      text: 'Get started',
      link: '/microsoft-certifications',
    },
  },
];

const JourneyWithSkills = () => {
  return (
    <section className="journey-section">
      <div className="dml-container">
        <div className="journey-skill-container">
          <h2>
            Start your journey with <span className="courses-orange">DMLearning</span>
          </h2>
          <div className="journey-cards">
            {skillsContent?.map((skill, i) => (
              <div className="skill-journey-card" key={i}>
                <p className="subhead-journey">{skill.subHeading}</p>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div>
                  {skill.button && (
                    <Link className="link-text-journey" href={skill.button.link}>
                      {skill.button.text}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyWithSkills;
