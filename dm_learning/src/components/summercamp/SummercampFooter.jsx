"use client";
import React from "react";
import Link from "@/components/ui/link";
import footerLogo from "../../../public/footer.png";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../common/Header";
import WhiteLogo from "../../../public/whitebglogo.svg";

import "/public/css/8ucate-footer.css";

function SummerCampFooter() {
  return (
    <footer className="footer-section">
      <div className="prefooter">
        <div className="dml-container footer-row">
          <div className="footer-cols">
            <div className="footer-logo-container">
              <Image
                src={WhiteLogo}
                alt="footer-img"
                width={330}
                height={26}
                className="footer-logo"
              />
            </div>
            <div className="footer__link">
              <ul className="list-wrap">
                <li>DigiMantra Innovations Private Limited</li>
                <li>Transform, Transpire and Thrive with DMLearning.</li>
              </ul>
            </div>
          </div>
          <div className="footer-cols">
            <h3 className="footer-col-title">Our Company</h3>
            <div className="footer__link">
              <ul className="list-wrap">
                <li>
                  <Link href="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/become-an-instructor" className="footer-link">
                    Become an Instructor
                  </Link>
                </li>
                {/* <li className="footer-disabled-btns">Become Teacher</li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li className="footer-disabled-btns">Instructor</li>
                <li className="footer-disabled-btns">Events</li> */}
              </ul>
            </div>
          </div>
          <div className="footer-cols get-in-touch">
            <h3 className="footer-col-title">Get In Touch</h3>
            <div className="footer__link">
              <ul className="list-wrap">
                <li>
                  <Link
                    href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    #2, Knowledge Park, Science & Technology Entrepreneurs&apos;
                    Park Guru Nanak Dev Engineering College, Gill Rd, Ludhiana,
                    Punjab 141006
                  </Link>
                </li>
                <li>
                  <Link href="tel:+91-172-613-1700" className="footer-link">
                    +91-172-613-1700
                  </Link>
                </li>
                <li>
                  <ul className="social-icons-prefooter">
                    <li>
                      <Link
                        href="https://www.facebook.com/1dmlearning"
                        className="footer-social-link"
                        aria-label="Visit our Facebook page"
                      >
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/digimantra-learning/"
                        className="footer-social-link"
                        aria-label="Visit our LinkedIn page"
                      >
                        <LinkedinIcon />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/_dmlearning/"
                        className="footer-social-link"
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
      <div className="footer">
        <div className="dml-container">
          <div className="copyright">
            <p className="copyright-text">
              {`Copyright © ${new Date().getFullYear()} DMLearning -An Initiative by`}{" "}
              <Link
                className="digi-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://digimantralabs.com/"
              >
                DigiMantra Innovations Private Limited
              </Link>
            </p>
            <ul className="terms-and-policy">
              <li>
                <button
                  className="termPolicy-link"
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
                  className="termPolicy-link"
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
