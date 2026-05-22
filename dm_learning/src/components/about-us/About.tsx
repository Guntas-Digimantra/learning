"use client"
import Image from "next/image"
import Link from "@/components/ui/link";
import "/public/css/about-us.css"
import girlPicture from "/public/stading-girl.jpg";
import { ChevronRightIcon } from "../common/common";


const Banner = () => {

   return (
         <section className="about-area-three">
            <div className="dml-container">
               <div className="hero-aboutus">
                  <div className="get-more-about-us">
                     <div className="about__images-three" >
                        <Image src={girlPicture} alt="img" width={530} height={795} />
                        <span className="svg-icon" id="about-svg"></span>
                     </div>
                  </div>

                  <div className="about-right">
                     <div className="about__content-three">
                        <div className="section__title">
                           <span className="sub-title">What Sets Us Apart</span>
                           <h2 className="title">
                              Empowering Learners in the Digital Age
                           </h2>
                        </div>
                        <p className="description-about">At DMLearning, we empower you to succeed in an ever-changing career landscape. With a vast library of online courses, we support your growth and help you achieve your goals, whether that means advancing, exploring, or starting anew.</p>
                        <ul className="about__info-list">
                           <li className="about__info-list-item">
                              <span className="chevron-circle">
                                 <ChevronRightIcon />
                              </span>
                              <div><h3 className="">Expert-Led Courses</h3>
                                 <p className="description-about">Learn from elite university faculty and industry experts in a range of topics like cloud computing, AI, data analytics, and more.</p>
                              </div>
                           </li>
                           <li className="about__info-list-item">
                              <span className="chevron-circle">
                                 <ChevronRightIcon />
                              </span>
                              <div>
                                 <h3>Career Support and Planning</h3>
                                 <p className="description-about">Tap into our resources to help you plan and achieve your career goals. </p>
                              </div>
                           </li>
                           <li className="about__info-list-item">
                              <span className="chevron-circle">
                                 <ChevronRightIcon />
                              </span>
                              <div>
                                 <h3>Flexible Learning Options</h3>
                                 <p className="description-about">Upskill at your own pace with flexible or hybrid online options that fit your lifestyle. </p>
                              </div>
                           </li>
                        </ul>
                           <Link href="/contact" className="dml-blue-button">Get Started</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
   )
}

export default Banner
