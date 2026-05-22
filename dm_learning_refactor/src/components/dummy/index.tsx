import Banner from './Banner';
import Pathway from './Pathway';
// import SessionComponent from './Session';
import TrainingPhase from './TrainingPhase';
import SkillsDevelopment from './SkillsDevelopment';
import Certification from './Certification';
import Features from './Features';
import CourseOverview from './CourseOverview';

const MernStackComponent = () => {
  return (
    <>
      <Banner />
      <Pathway />
      <TrainingPhase />
      {/* <SessionComponent /> */}
      <SkillsDevelopment />
      <Certification />
      <Features />
      <CourseOverview />
    </>
  );
};

export default MernStackComponent;
