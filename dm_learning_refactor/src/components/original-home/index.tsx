import dynamic from "next/dynamic";

import CollaborationsSection from "../dummy/collaborators-section";
const Banner = dynamic(() => import("./Banner"));
const About = dynamic(() => import("./About"));
const StartLearning = dynamic(() => import("./StartLearning"))
const FullTimePartTime = dynamic(() => import("./FullTimePartTime"))
const CourseArea = dynamic(() => import("./CourseArea"))
const Portfolio = dynamic(() => import("./Portfolio"))
const DiscoverOffer = dynamic(() => import("./DiscoverOffer"))
const Counter = dynamic(() => import("./Counter"))
const Features = dynamic(() => import("./Features"))
const Testimonial = dynamic(() => import("./Testimonial"))
const Contact = dynamic(() => import("./Contact"))
const FAQAccordion = dynamic(() => import("./FaqArea"))

const HomeOne = () => {
  return (
    <>
      <Banner />
      <About />
      <CollaborationsSection />
      <StartLearning />
      <FullTimePartTime />
      <CourseArea />
      <Portfolio />
      <DiscoverOffer />
      <Counter />
      <FAQAccordion />
      <Features />
      <Testimonial />
      <Contact />
    </>
  );
};

export default HomeOne;
