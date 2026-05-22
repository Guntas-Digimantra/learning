"use client";

import React, { useEffect, useState } from "react";
import Link from "@/components/ui/link";
import Image from "next/image";
import close from "../../../public/cross.svg";
import logoImg from "@/assets/dm-learning-logo.svg";
import { cn } from "@/libs/utils";

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

const containerClass = "mx-auto max-w-[1440px] px-[15px]";

const navLinkClass =
  "flex items-center px-7 py-[25px] text-xl font-medium leading-[25px] text-[#161439] no-underline transition-colors duration-[400ms] hover:text-[#FC8B20] xl:px-2.5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 49);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateBodyPadding = () => {
      if (window.matchMedia("(max-width: 990px)").matches) {
        document.body.style.paddingTop =
          window.innerWidth <= 768 ? "50px" : "74px";
      } else {
        document.body.style.paddingTop = "";
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    const mq = window.matchMedia("(max-width: 990px)");
    mq.addEventListener("change", updateBodyPadding);

    return () => {
      document.body.style.paddingTop = "";
      window.removeEventListener("resize", updateBodyPadding);
      mq.removeEventListener("change", updateBodyPadding);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden", "h-full");
    } else {
      document.body.classList.remove("overflow-hidden", "h-full");
    }
    return () =>
      document.body.classList.remove("overflow-hidden", "h-full");
  }, [menuOpen]);

  return (
    <header className="relative z-[99] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <div className="bg-[#161439] py-[11px] text-sm font-medium max-[990px]:hidden">
        <div className={cn(containerClass, "flex justify-between text-white")}>
          <div className="flex items-center gap-[7px]">
            <span className="inline-flex">
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
          <div className="flex items-center justify-end gap-x-[27px] gap-y-2.5">
            <div className="flex items-center gap-2.5">
              Call us:
              <span>
                <Link href="tel:+91-172-613-1700 ">+91-172-613-1700 </Link>
              </span>
            </div>
            <ul className="flex items-center justify-end gap-x-3 gap-y-2.5 text-white">
              <li className="text-sm text-white">Follow Us On:</li>
              <li>
                <Link
                  href="https://www.facebook.com/1dmlearning"
                  className="text-white"
                >
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/digimantra-learning/"
                  className="text-white"
                >
                  <LinkedinIcon />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/_dmlearning/"
                  className="text-white"
                >
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "bg-white",
          isSticky &&
            "fixed top-0 right-0 left-0 z-[99] shadow-[0_10px_15px_rgba(25,25,25,0.1)]",
          "max-[990px]:fixed max-[990px]:top-0 max-[990px]:right-0 max-[990px]:left-0 max-[990px]:z-[99] max-[990px]:shadow-[0_10px_15px_rgba(25,25,25,0.1)]"
        )}
      >
        <div className={containerClass}>
          <nav className="flex items-center justify-between py-2.5 max-[380px]:py-2">
            <div className="w-full max-w-[200px] max-[600px]:max-w-[140px] max-[425px]:max-w-[120px] max-[380px]:max-w-[110px] max-[320px]:max-w-[100px]">
              <Link href="/">
                <Image
                  src={logoImg}
                  alt="dmlearning-logo"
                  className="h-auto w-full"
                />
              </Link>
            </div>
            <div className="max-lg:hidden">
              <ul className="mx-auto flex gap-[30px]">
                <li>
                  <Link href="/about-us" className={navLinkClass}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className={navLinkClass}>
                    Courses
                  </Link>
                </li>
                <li className="group relative">
                  <span
                    className={cn(
                      navLinkClass,
                      "cursor-pointer border-0 bg-transparent"
                    )}
                  >
                    Our Programs
                  </span>
                  <ul className="absolute left-2.5 z-[1] hidden min-w-[160px] bg-white group-hover:block">
                    <li className="block px-4 py-3 hover:cursor-pointer">
                      <Link
                        href="/amit-tiwari/digital-marketing-professional"
                        className="text-base font-medium leading-6 text-black no-underline transition-colors duration-[400ms] hover:text-[#FC8B20]"
                      >
                        Digital Marketing with Amit Tiwari
                      </Link>
                    </li>
                    <li className="block px-4 py-3 hover:cursor-pointer">
                      <Link
                        href="/microsoft-certifications"
                        className="text-base font-medium leading-6 text-black no-underline transition-colors duration-[400ms] hover:text-[#FC8B20]"
                      >
                        Microsoft Certifications
                      </Link>
                    </li>
                    <li className="block px-4 py-3 hover:cursor-pointer">
                      <Link
                        href="/advanced-industrial-training-and-internship"
                        className="text-base font-medium leading-6 text-black no-underline transition-colors duration-[400ms] hover:text-[#FC8B20]"
                      >
                        Advanced Industrial Training & Internship
                      </Link>
                    </li>
                    <li className="block px-4 py-3 hover:cursor-pointer">
                      <Link
                        href="/summer-bootcamp-and-internship"
                        className="text-base font-medium leading-6 text-black no-underline transition-colors duration-[400ms] hover:text-[#FC8B20]"
                      >
                        Summer Bootcamp
                      </Link>
                    </li>
                    <li className="block px-4 py-3 hover:cursor-pointer">
                      <Link
                        href="/summercamps"
                        className="text-base font-medium leading-6 text-black no-underline transition-colors duration-[400ms] hover:text-[#FC8B20]"
                      >
                        Summer Camp 2026
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/campus-collaborations" className={navLinkClass}>
                    Campus Collaborations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 max-lg:gap-2">
              <Link
                href="/contact"
                className="rounded-full border border-[rgba(6,35,91,0.19)] bg-[#FC8B20] px-[26px] py-3 text-[15px] font-semibold leading-[18px] text-white transition-all duration-[400ms] hover:border-[#FC8B20] hover:bg-white hover:text-[#FC8B20] max-[600px]:px-3 max-[600px]:py-1.5 max-[600px]:text-xs max-[425px]:px-2.5 max-[425px]:py-1.5 max-[425px]:text-[11px] max-[380px]:hidden"
              >
                Contact Us
              </Link>
              <button
                type="button"
                className="hidden max-h-[30px] cursor-pointer text-[30px] max-lg:block"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Image
                  src="/menu-icon.svg"
                  width={30}
                  height={30}
                  alt="Open menu"
                />
              </button>
            </div>
          </nav>

          <div className="hidden max-lg:block">
            <div
              className={cn(
                "fixed top-0 right-[-500px] z-[101] h-full w-[40vw] bg-white transition-[right] duration-300 ease-in-out md:w-[50vw] max-[425px]:w-[85vw] max-[380px]:w-[92vw] max-[320px]:w-full",
                menuOpen && "right-0"
              )}
            >
              <div className="flex justify-between px-4 py-[30px]">
                <Link href="/">
                  <Image src={logoImg} alt="logo" className="h-auto" />
                </Link>
                <button
                  type="button"
                  className="-mt-2.5 border-0 bg-transparent"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <Image
                    src={close}
                    alt="Close menu"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
              <ul className="list-none p-0">
                <li className="px-[25px] py-2.5">
                  <Link
                    href="/about-us"
                    className="block text-base font-medium text-[#161439] no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li className="px-[25px] py-2.5">
                  <Link
                    href="/courses"
                    className="block text-base font-medium text-[#161439] no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li className="px-[25px] py-2.5">
                  <Link
                    href="/contact"
                    className="block text-base font-medium text-[#161439] no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="px-[25px] py-2.5">
                  <button
                    type="button"
                    className="block w-full border-0 bg-transparent text-left font-['Poppins',sans-serif] text-base font-medium text-[#161439]"
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  >
                    Our Program {isSubmenuOpen ? "▲" : "▼"}
                  </button>
                  {isSubmenuOpen && (
                    <ul>
                      <li className="px-2 py-2.5">
                        <Link
                          href="/amit-tiwari/digital-marketing-professional"
                          className="block text-base font-medium text-[#161439] no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          Digital Marketing with Amit Tiwari
                        </Link>
                      </li>
                      <li className="px-2 py-2.5">
                        <Link
                          href="/advanced-industrial-training-and-internship"
                          className="block text-base font-medium text-[#161439] no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          Advanced Industrial Training & Internship
                        </Link>
                      </li>
                      <li className="px-2 py-2.5">
                        <Link
                          href="/summer-bootcamp-and-internship"
                          className="block text-base font-medium text-[#161439] no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          Summer Bootcamp
                        </Link>
                      </li>
                      <li className="px-2 py-2.5">
                        <Link
                          href="/summercamps"
                          className="block text-base font-medium text-[#161439] no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          Summer Camp 2026
                        </Link>
                      </li>
                      <li className="px-2 py-2.5">
                        <Link
                          href="/microsoft-certifications"
                          className="block text-base font-medium text-[#161439] no-underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          Microsoft Certifications
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="px-[25px] py-2.5">
                  <Link
                    href="/campus-collaborations"
                    className="block text-base font-medium text-[#161439] no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Campus Collaborations
                  </Link>
                </li>
              </ul>
              <div className="px-[25px] py-[30px]">
                <ul className="flex justify-center gap-2.5">
                  <li>
                    <Link
                      href="https://www.facebook.com/1dmlearning"
                      className="relative flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#efefef] text-base leading-8 text-[#6d6c80] no-underline transition-all duration-[800ms] hover:bg-[#5751e1] hover:text-white"
                      aria-label="Visit our Facebook page"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/digimantra-learning/"
                      className="relative flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#efefef] text-base leading-8 text-[#6d6c80] no-underline transition-all duration-[800ms] hover:bg-[#5751e1] hover:text-white"
                      aria-label="Visit our LinkedIn page"
                      onClick={() => setMenuOpen(false)}
                    >
                      <LinkedinIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/_dmlearning/"
                      className="relative flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#efefef] text-base leading-8 text-[#6d6c80] no-underline transition-all duration-[800ms] hover:bg-[#5751e1] hover:text-white"
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
                className="fixed inset-0 z-[99] block bg-black/70"
                onClick={() => setMenuOpen(false)}
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
