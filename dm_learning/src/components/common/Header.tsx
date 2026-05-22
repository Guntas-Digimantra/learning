"use client";
import React, { useEffect, useState } from "react";
import Link from "@/components/ui/link";
import Image from "next/image";
import close from "../../../public/cross.svg";
import "/public/css/header.css";

import logoImg from "@/assets/dm-learning-logo.svg";

export const FacebookIcon = () => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 8 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5.65773V3.60037C5 3.03254 5.448 2.5717 6 2.5717H7V0H5C3.343 0 2 1.38152 2 3.08603V5.65773H0V8.22943H2V16.4589H5V8.22943H7L8 5.65773H5Z"
      fill="currentcolor"
    />
  </svg>
);

export const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="15"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.47 0 54.22a54.24 54.24 0 01107.58 0c0 29.25-24.08 53.88-53.79 53.88zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.27-79.2-48.28 0-55.7 37.7-55.7 76.7V448h-92.69V148.9h88.94v40.8h1.3c12.4-23.3 42.6-48 87.7-48 93.8 0 111 61.8 111 142.3V448z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3125 0H4.6875C2.09906 0 0 2.09906 0 4.6875V10.3125C0 12.9009 2.09906 15 4.6875 15H10.3125C12.9009 15 15 12.9009 15 10.3125V4.6875C15 2.09906 12.9009 0 10.3125 0ZM13.5938 10.3125C13.5938 12.1219 12.1219 13.5938 10.3125 13.5938H4.6875C2.87813 13.5938 1.40625 12.1219 1.40625 10.3125V4.6875C1.40625 2.87813 2.87813 1.40625 4.6875 1.40625H10.3125C12.1219 1.40625 13.5938 2.87813 13.5938 4.6875V10.3125Z"
      fill="currentcolor"
    />
    <path
      d="M7.5 3.75C5.42906 3.75 3.75 5.42906 3.75 7.5C3.75 9.57094 5.42906 11.25 7.5 11.25C9.57094 11.25 11.25 9.57094 11.25 7.5C11.25 5.42906 9.57094 3.75 7.5 3.75ZM7.5 9.84375C6.20813 9.84375 5.15625 8.79187 5.15625 7.5C5.15625 6.20719 6.20813 5.15625 7.5 5.15625C8.79187 5.15625 9.84375 6.20719 9.84375 7.5C9.84375 8.79187 8.79187 9.84375 7.5 9.84375Z"
      fill="currentcolor"
    />
    <path
      d="M11.5313 3.96844C11.8072 3.96844 12.031 3.74472 12.031 3.46875C12.031 3.19278 11.8072 2.96906 11.5313 2.96906C11.2553 2.96906 11.0316 3.19278 11.0316 3.46875C11.0316 3.74472 11.2553 3.96844 11.5313 3.96844Z"
      fill="currentcolor"
    />
  </svg>
);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 49) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  return (
    <header>
      <div className="header-top">
        <div className="dml-container">
          <div className="header-left">
            <span className="mailIcon">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.833 0.333252H2.16634C1.42997 0.333252 0.833008 0.970007 0.833008 1.75547V12.2444C0.833008 13.0298 1.42997 13.6666 2.16634 13.6666H17.833C18.5694 13.6666 19.1663 13.0298 19.1663 12.2444V1.75547C19.1663 0.970007 18.5694 0.333252 17.833 0.333252V0.333252ZM9.99967 8.19441L2.30967 1.22214H17.6897L9.99967 8.19441ZM1.66634 1.80547L6.68684 6.35738L1.66634 12.1245V1.80547ZM7.32242 6.93365L9.7298 9.11632C9.80759 9.18685 9.90363 9.22214 9.99967 9.22214C10.0957 9.22214 10.1917 9.18685 10.2695 9.11632L12.6769 6.93365L17.7644 12.7777H2.23497L7.32242 6.93365ZM13.3125 6.35738L18.333 1.80547V12.1245L13.3125 6.35738Z"
                  fill="white"
                />
              </svg>
            </span>
            <Link href="mailto:learning@digimantra.com">
              learning@digimantra.com
            </Link>
          </div>
          <div className="header-right">
            <div className="phone">
              Call us:
              <span className="">
                <Link href="tel:+91-172-613-1700 ">+91-172-613-1700 </Link>
              </span>
            </div>
            <ul className="social-icon-list">
              <li className="follow-us-styles">Follow Us On:</li>
              <li>
                <Link
                  href="https://www.facebook.com/1dmlearning"
                  className="Link"
                >
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/digimantra-learning/"
                  className="Link"
                >
                  <LinkedinIcon />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/_dmlearning/"
                  className="Link"
                >
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`sticky-header ${isSticky ? "fixed-header" : ""}`}>
        <div className="dml-container">
          <nav>
            <div className="logo-container">
              <Link href="/">
                <Image src={logoImg} alt="dmlearning-logo" className="logo" />
              </Link>
            </div>
            <div className="navbar">
              <ul className="menu">
                <li>
                  <Link href="/about-us" className="navLink">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="navLink">
                    Courses
                  </Link>
                </li>
                <li className="dropdown">
                  <span className="navLink droplink">Our Programs</span>
                  <ul className="dropdown-content">
                    <li>
                      <Link
                        href="/amit-tiwari/digital-marketing-professional"
                        className="sublink"
                      >
                        Digital Marketing with Amit Tiwari
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/microsoft-certifications"
                        className="sublink"
                      >
                        Microsoft Certifications
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/advanced-industrial-training-and-internship"
                        className="sublink"
                      >
                        Advanced Industrial Training & Internship
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/summer-bootcamp-and-internship"
                        className="sublink"
                      >
                        Summer Bootcamp
                      </Link>
                    </li>
                    <li>
                      <Link href="/summercamps" className="sublink">
                        Summer Camp 2026
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/campus-collaborations" className="navLink">
                    Campus Collaborations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contactus">
              <Link href="/contact" className="contact-btn">
                Contact Us
              </Link>
              <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                <Image src="/menu-icon.svg" width={30} height={30} alt="logo" />
              </div>
            </div>
          </nav>

          {/* TOGGLE MOBILE MENU */}
          <div className={`mobile-menu`}>
            <div className={`side-menu ${menuOpen ? "show-side-menu" : ""}`}>
              <div className="mobile-logo">
                <Link href="/">
                  <Image src={logoImg} alt="logo" />
                </Link>
                <button
                  className="close-sidebar"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image
                    src={close}
                    alt="dmlearning-logo"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
              <ul className="mobile-navbar">
                <li>
                  <Link
                    href="/about-us"
                    className="navLink-mobile"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="navLink-mobile"
                    onClick={() => setMenuOpen(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="navLink-mobile"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    className="navLink-mobile toggle-button"
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  >
                    Our Program {isSubmenuOpen ? "▲" : "▼"}
                  </button>
                  {isSubmenuOpen && (
                    <ul className="submenu">
                      <li>
                        <Link
                          href="/amit-tiwari/digital-marketing-professional"
                          className="navLink-mobile"
                          onClick={() => setMenuOpen(false)}
                        >
                          Digital Marketing with Amit Tiwari
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/advanced-industrial-training-and-internship"
                          className="navLink-mobile"
                          onClick={() => setMenuOpen(false)}
                        >
                          Advanced Industrial Training & Internship
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/summer-bootcamp-and-internship"
                          className="navLink-mobile"
                          onClick={() => setMenuOpen(false)}
                        >
                          Summer Bootcamp
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/summercamps"
                          className="navLink-mobile"
                          onClick={() => setMenuOpen(false)}
                        >
                          Summer Camp 2026
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/microsoft-certifications"
                          className="navLink-mobile"
                          onClick={() => setMenuOpen(false)}
                        >
                          Microsoft Certifications
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/campus-collaborations"
                    className="navLink-mobile"
                    onClick={() => setMenuOpen(false)}
                  >
                    Campus Collaborations
                  </Link>
                </li>
              </ul>
              <div className="mobile-social-icons">
                <ul>
                  <li>
                    <Link
                      href="https://www.facebook.com/1dmlearning"
                      className="social-icon-mobile"
                      aria-label="Visit our Facebook page"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/digimantra-learning/"
                      className="social-icon-mobile"
                      aria-label="Visit our LinkedIn page"
                      onClick={() => setMenuOpen(false)}
                    >
                      <LinkedinIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/_dmlearning/"
                      className="social-icon-mobile"
                      aria-label="Visit our Instagram page"
                      onClick={() => setMenuOpen(false)}
                    >
                      <InstagramIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {menuOpen && (
              <div
                className="backdrop show"
                onClick={() => setMenuOpen(false)}
              ></div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
