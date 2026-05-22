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
    <>
      <Banner />
      <SummerCamp />
      <Courses />
      <SignIn />
      <Stats />
      <JourneyWithSkills />
    </>
  );
};

export default SummerBootCamp;
