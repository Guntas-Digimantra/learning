import Link from "@/components/ui/link";
import React from "react";
import StudentDetailForm from "./StudentDetailForm";
import Image from "next/image";
import BreadcrumbOne from "../common/BreadcrumbOne";

const StudentEnrollment = () => {
  return (
    <main className="main-area fix">
      <BreadcrumbOne title="Student Detail Form" sub_title="Detail form" />
      <section className="contact-area-section">
      <div className="dml-container">
        <div className="contact-us-container">
            <div className="contact-info-wrap">
              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <Image src="/map.svg" alt="img"  width={30} height={30}/>        
                  </div>
                  <div className="content">
                    <h4 className="title">Address</h4>
                    <p>
                      <Link
                        href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        #2, Knowledge Park, Science Technology
                        Entrepreneur&apos;s park, Gill Road, Ludhiana , Punjab -
                        144006
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                  <Image src="/contact_phone.svg" alt="img"  width={30} height={30}/>
                   </div>
                  <div className="content">
                    <h4 className="title">Phone</h4>
                    <Link href="tel:+91-172-613-1700">+91-172-613-1700</Link>
                  </div>
                </li>
                <li>
                  <div className="icon">
                  <Image src="/emial.svg" alt="img" width={30} height={30}/>
                   
                  </div>
                  <div className="content">
                    <h4 className="title">E-mail Address</h4>
                    <Link href="mailto:learning@digimantra.com ">
                      learning@digimantra.com{" "}
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

          <div className="contact-form-container">
            <div className="contact-form-wrap">
              <StudentDetailForm />
              <p className="ajax-response mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default StudentEnrollment;
