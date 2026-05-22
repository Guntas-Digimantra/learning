import React from "react";
import "../../../public/css/microsoft.css"
import Banner from "./Banner";
import StudentCertification from "./StudentCertification";
import Benefits from "./Benefits";
import StatsMicrosoft from "./StatsMicrosoft";
import StudentCertificationFundamentals from "./StudentCertificateFundamentals";
import StillHaveQuestions from "./StillHaveQuestions";
import Testimonials from "./Testimonials";
import Certifications from "./Certifications";

const MicrosoftCertification = () => {
  return (
    <>
      <Banner />
      <StudentCertification />
      <Benefits />
      <Certifications />
      <StatsMicrosoft />
      <StillHaveQuestions />
      <StudentCertificationFundamentals />
      <Testimonials />
    </>
  );
};

export default MicrosoftCertification;
