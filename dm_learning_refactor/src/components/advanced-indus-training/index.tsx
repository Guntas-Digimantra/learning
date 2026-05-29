import React from 'react';
import Banner from './Banner';
import ProgramDetails from './ProgramDetails';
import InternshipProgram from './InternshipProgram';
import OurInterns from './OurInterns';
import Perks from './Perks';
import Experience from './Experience';
import Courses from './Courses';
import KickOff from './KickOff';

const AdvanceIndusTraining = () => {
  return (
    <div className="advanced-industrial-page">
      <Banner />
      <ProgramDetails />
      <Courses />
      <KickOff />
      <Perks />
      <InternshipProgram />
      <OurInterns />
      <Experience />
    </div>
  );
};

export default AdvanceIndusTraining;
