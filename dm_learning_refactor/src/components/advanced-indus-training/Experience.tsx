import React from 'react';
import Link from '@/components/ui/link';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="experience-dml">
        <div className="experience-container">
          <h3>Skills and experiences get you the job. Not just your degree.</h3>
          <Link href="/student-enrollment" className="experience-btn">
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
