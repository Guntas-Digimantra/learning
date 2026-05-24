import React from 'react';

/** @deprecated Not mounted on v2 /about-us; use about-us/About.tsx */
const Banner = () => {
  return (
    <section className="dml-container banner-about">
      <div className="banner-about-content">
        <div className="banner-head">
          <h1>
            ABOUT <span className="orange-letter">DMLEARNING</span>
          </h1>
          <p>
            Welcome to our platform, where we are passionate about empowering individuals to master the world of design
            and development. We offer a wide range of online courses designed to equip learners with the skills and
            knowledge needed to succeed in the ever-evolving digital landscape.
          </p>
        </div>

        <div className="banner-image">
          <img src="/banner.png"></img>
        </div>
      </div>
      <img src="/ban.svg" className="image-ban"></img>
    </section>
  );
};

export default Banner;
