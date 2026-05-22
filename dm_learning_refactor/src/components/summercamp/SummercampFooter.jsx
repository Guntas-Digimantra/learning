"use client";
import React from "react";
import Link from "@/components/ui/link";
import footerLogo from "../../../public/footer.png";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../common/Header";
import WhiteLogo from "../../../public/whitebglogo.svg";

function SummerCampFooter() {
  return (
    <footer className="footer-section text-[#b2bbcc] [&_.digi-link:hover]:!text-[#C8F135] [&_.footer-link:hover]:!text-[#C8F135] [&_.footer-social-link:hover]:!text-[#C8F135] [&_.termPolicy-link:hover]:!text-[#C8F135]">
      <div className="bg-[#06042e] pt-[100px] pb-[60px] max-md:pt-[60px]">
        <div className="dml-container grid grid-cols-4 gap-[50px] max-[1024px]:grid-cols-3 max-md:flex max-md:flex-col max-md:gap-5">
          <div className="px-[15px]">
            <div className="mb-[45px] w-full">
              <Image
                src={WhiteLogo}
                alt="footer-img"
                width={330}
                height={26}
                className="h-auto pt-1.5"
              />
            </div>
            <div>
              <ul className="flex flex-col gap-2.5 font-medium">
                <li>DigiMantra Innovations Private Limited</li>
                <li>Transform, Transpire and Thrive with DMLearning.</li>
              </ul>
            </div>
          </div>
          <div className="px-[15px]">
            <h3 className="mb-5 border-b-2 border-[#5751e1] pb-5 text-[22px] font-semibold text-white">
              Our Company
            </h3>
            <div>
              <ul className="flex flex-col gap-2.5 font-medium">
                <li>
                  <Link
                    href="/contact"
                    className="footer-link leading-[25px] text-[#b2bbcc] no-underline transition-all duration-[400ms] hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/become-an-instructor"
                    className="footer-link leading-[25px] text-[#b2bbcc] no-underline transition-all duration-[400ms] hover:underline"
                  >
                    Become an Instructor
                  </Link>
                </li>
                {/* <li className="text-[#b2bbcc]">Become Teacher</li>
                <li>
                  <Link href="/blog" className="footer-link leading-[25px] text-[#b2bbcc] no-underline transition-all duration-[400ms] hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="text-[#b2bbcc]">Instructor</li>
                <li className="text-[#b2bbcc]">Events</li> */}
              </ul>
            </div>
          </div>
          <div className="col-span-2 px-[15px]">
            <h3 className="mb-5 border-b-2 border-[#5751e1] pb-5 text-[22px] font-semibold text-white">
              Get In Touch
            </h3>
            <div>
              <ul className="flex flex-col gap-4 font-medium">
                <li>
                  <Link
                    href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link leading-[25px] text-[#b2bbcc] no-underline transition-all duration-[400ms] hover:underline"
                  >
                    #2, Knowledge Park, Science & Technology Entrepreneurs&apos;
                    Park Guru Nanak Dev Engineering College, Gill Rd, Ludhiana,
                    Punjab 141006
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+91-172-613-1700"
                    className="footer-link leading-[25px] text-[#b2bbcc] no-underline transition-all duration-[400ms] hover:underline"
                  >
                    +91-172-613-1700
                  </Link>
                </li>
                <li>
                  <ul className="flex flex-row gap-3">
                    <li>
                      <Link
                        href="https://www.facebook.com/1dmlearning"
                        className="footer-social-link text-[#b2bbcc] no-underline transition-all duration-[400ms]"
                        aria-label="Visit our Facebook page"
                      >
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/digimantra-learning/"
                        className="footer-social-link text-[#b2bbcc] no-underline transition-all duration-[400ms]"
                        aria-label="Visit our LinkedIn page"
                      >
                        <LinkedinIcon />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/_dmlearning/"
                        className="footer-social-link text-[#b2bbcc] no-underline transition-all duration-[400ms]"
                        aria-label="Visit our Instagram page"
                      >
                        <InstagramIcon />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1c1a4a]">
        <div className="dml-container">
          <div className="grid grid-cols-2 gap-4 py-[35px] text-base max-md:block max-md:text-center">
            <p className="leading-[25px]">
              {`Copyright © ${new Date().getFullYear()} DMLearning -An Initiative by`}{" "}
              <Link
                className="digi-link text-white no-underline transition-all duration-[800ms] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://digimantralabs.com/"
              >
                DigiMantra Innovations Private Limited
              </Link>
            </p>
            <ul className="terms-and-policy ml-auto flex items-center gap-2.5 max-md:mt-2 max-md:justify-center">
              <li>
                <button
                  className="termPolicy-link text-[#b2bbcc] no-underline transition-all duration-500 hover:underline"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                  }}
                  onClick={() => window.__openLegalModal?.("privacy")}
                >
                  Privacy Policy
                </button>
              </li>
              <li>|</li>
              <li>
                <button
                  className="termPolicy-link text-[#b2bbcc] no-underline transition-all duration-500 hover:underline"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                  }}
                  onClick={() => window.__openLegalModal?.("terms")}
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SummerCampFooter;
