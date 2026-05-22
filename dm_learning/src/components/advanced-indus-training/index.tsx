import React from "react";
import "/public/css/advanced.css"
import Banner from "./Banner";
import ProgramDetails from "./ProgramDetails";
import InternshipProgram from "./InternshipProgram";
import OurInterns from "./OurInterns";
import Perks from "./Perks";
import Experience from "./Experience";
import Courses from "./Courses";
import KickOff from "./KickOff";

const AdvanceIndusTraining = () => {
  return (
    <>
       <Banner />
       <ProgramDetails />
       <Courses />
       <KickOff />
       <Perks />
       <InternshipProgram />
       <OurInterns />
       <Experience />
     </>
  );
};

export default AdvanceIndusTraining;
