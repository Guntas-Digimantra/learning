"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/8ucate-logo.png";
import styles from "./Nav.module.css";
import Link from "@/components/ui/link";

function openRegisterModal(e) {
  e.preventDefault();
  if (typeof window !== "undefined" && window.__openRegisterModal) {
    window.__openRegisterModal();
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`fsc-nav${scrolled ? " scrolled" : ""} ${styles.nav}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Image src={Logo} width={220} height={100} alt="Logo" />
            <button
              onClick={openRegisterModal}
              className={`nav-btn ${styles.btn}`}
            >
              Register Now →
            </button>
            <button
              className={`nav-hamburger ${styles.hamburger}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu${menuOpen ? " open" : ""} ${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        >
          <button
            onClick={(e) => {
              openRegisterModal(e);
              setMenuOpen(false);
            }}
            className={styles.mobileBtn}
          >
            Register Now →
          </button>
        </div>
      </nav>
    </>
  );
}
