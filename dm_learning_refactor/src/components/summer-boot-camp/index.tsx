'use client';
import React from 'react';
import Banner from './Banner';
import SummerCamp from './SummerBootCamp';
import SignIn from './SignIn';
import Stats from './Stats';
import JourneyWithSkills from './JourneyWithSkills';
import Courses from '../advanced-indus-training/Courses';

const SummerBootCamp = () => {
  return (
    <div className="summer-bootcamp-page">
      <Banner />
      <SummerCamp />
      <Courses />
      <SignIn />
      <Stats />
      <JourneyWithSkills />
    </div>
  );
};

export default SummerBootCamp;
