'use client';
import React from 'react';
import Link from '@/components/ui/link';
import course1 from '../../../public/stat-icon1.png';
import course2 from '../../../public/stat-icon2.png';
import course3 from '../../../public/stat-icon3.png';
import course4 from '../../../public/stat-icon4.png';
import Image from 'next/image';
import Count from '../common/Count';

const stats = [
  { id: 1, icon: course1, count: 50, title: 'Certified Teachers' },
  { id: 2, icon: course2, count: 1000, title: 'Students' },
  { id: 3, icon: course3, count: 25, title: 'College Associate' },
  { id: 4, icon: course4, count: 10, title: 'Years In the Industry' },
];

const Stats = () => {
  const firstGroup = stats.slice(0, 2);
  const secondGroup = stats.slice(2);

  return (
    <section className="stats-section">
      <div className="dml-container">
        <div className="stats-content">
          <div className="stats-left">
            <div className="desc-box">
              <span className="sync-text">achievement</span>
            </div>
            <h2>The DML Impact</h2>
            <p className="stats-left-para">
              Embark on a journey through some of our achievements— DML intern&apos;s takes pride in numerous successes,
              showcasing diverse projects and milestones that highlight our commitment to excellence and innovation.
            </p>
            <Link href="/student-enrollment" className="dml-button">
              Join Now
            </Link>
          </div>
          <div className="stats-right">
            <div className="stat-numbers-group">
              <div className="stat-group">
                {firstGroup.map((stat) => (
                  <div key={stat.id} className="stat-item">
                    <Image src={stat.icon} alt={stat.title} width={52} height={48} />
                    <h3>
                      <Count number={stat.count} />+
                    </h3>
                    <p>{stat.title}</p>
                  </div>
                ))}
              </div>
              <div className="stat-group">
                {secondGroup.map((stat) => (
                  <div key={stat.id} className="stat-item">
                    <Image src={stat.icon} alt={stat.title} width={52} height={48} />
                    <h3>
                      <Count number={stat.count} />+
                    </h3>
                    <p>{stat.title}</p>
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

export default Stats;
