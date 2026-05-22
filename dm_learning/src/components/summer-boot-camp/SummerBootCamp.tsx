import Image from "next/image";
import React from "react";
import bootCamp from "../../../public/summer-dml-bootcamp.png";

const SummerCamp = () => {
  return (
    <section className="summer-bootcamp">
      <div className="dml-container summer-content">
        <div className="bootcamp-img-wrap">
          <Image src={bootCamp} alt="boot-camp" />
        </div>
        <div className="bootcamp-content">
          <div className="desc-box">
            <span className="sync-text">about DML&apos;s bootcamp</span>
          </div>
          <h2>Summer DML Bootcamp: Your Path to a <span className="courses-orange">New Career</span></h2>
          <p>
            Upskill your career with our Summer DML Bootcamp, featuring an
            in-house DigiMantra internship!
          </p>
          <p>
            Our immersive tech curriculum is designed to help you build
            professional skills through hands-on practice, collaborative
            projects, and real-world experience right in DigiMantra&apos;s Ludhiana
            office.
          </p>
          <p>
            You&apos;ll be matched with an industry mentor who will guide your
            growth through regular in-person meetings, providing valuable
            insights and feedback throughout the program.
          </p>
          <p>
            Our career services team will also help you develop essential
            networking and interviewing skills.
          </p>
          <p>
            Join us this summer and take the first step towards a successful
            career in tech, all while gaining practical experience at
            DigiMantra Labs!
          </p>
          <div className="list-wrapper-bootcamp">
            <div className="icon-list-camp">
              <div className="rounded-circle-camp">
                <svg
                  aria-hidden="true"
                  style={{ fill: "#F7941E", width: "20px" }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              </div>
              45 Days Bootcamp
            </div>

            <div className="list-second-bg">
              <div className="rounded-circle-camp-second">
                <svg
                  aria-hidden="true"
                  style={{ fill: "#F7941E", width: "20px" }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              </div>
              <div className="recognized-style">Recognized by LinkedIn</div>
            </div>

            <div className="icon-list-camp">
              <div className="rounded-circle-camp">
                <svg
                  aria-hidden="true"
                  style={{ fill: "#F7941E", width: "20px" }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              </div>
              <div>DMLearning an initiative of DigiMantra Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCamp;
