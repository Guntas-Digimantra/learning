import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Steps from './Steps';
import TopSellinCourse from './TopSellingCourse';
import CtaComponent from './Cta';
import Modules from './Modules';
import Features from './Features';
import WebDevelopmentForm from './WebDevelopmentForm';
import Adavantages from './Advantages';
import Logos from './Logos';
import WebCounter from './WebCounter';
import CourseForYou from './CourseForYou';

const WebDevelopmentPage = () => {
  return (
    <div className="web-development-page">
      <Banner />
      <WebCounter />
      <WebDevelopmentForm />
      <Adavantages />
      <Features />
      <Logos />
      <CourseForYou />
      <Cards />
      <Steps />
      <Modules />
      <TopSellinCourse />
      <CtaComponent />
    </div>
  );
};

export default WebDevelopmentPage;
