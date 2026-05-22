"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/8ucate-logo.png";

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
      <nav
        className={`fixed top-0 right-0 left-0 z-[999] py-[18px] transition-all duration-300 max-[380px]:py-3 ${
          scrolled
            ? "border-b border-[#D8D3C8] bg-[rgba(245,242,235,0.92)] py-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-[20px]"
            : ""
        }`}
      >
        <div className="mx-auto max-w-[1420px] px-7 max-[480px]:px-4 max-[380px]:px-3.5">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              width={220}
              height={100}
              alt="Logo"
              className="h-auto max-w-[220px] max-[768px]:max-w-[160px] max-[480px]:max-w-[140px] max-[380px]:max-w-[120px] max-[320px]:max-w-[100px]"
            />
            <button
              onClick={openRegisterModal}
              className="hidden cursor-pointer rounded-full border-none bg-[#111111] px-6 py-2.5 text-[0.85rem] font-bold text-white transition-all duration-200 hover:scale-[1.04] hover:bg-[#a8d418] hover:text-[#111111] md:inline-flex"
            >
              Register Now →
            </button>
            <button
              className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="block h-0.5 w-6 bg-[#111111] transition-all duration-300" />
              <span className="block h-0.5 w-6 bg-[#111111] transition-all duration-300" />
              <span className="block h-0.5 w-6 bg-[#111111] transition-all duration-300" />
            </button>
          </div>
        </div>

        <div
          className={`${menuOpen ? "flex" : "hidden"} flex-col gap-0 border-b border-[#D8D3C8] bg-[rgba(245,242,235,0.97)] backdrop-blur-[20px] md:hidden`}
        >
          <button
            onClick={(e) => {
              openRegisterModal(e);
              setMenuOpen(false);
            }}
            className="w-full cursor-pointer border-none border-b border-[#D8D3C8] bg-transparent px-7 py-3.5 text-left text-[0.95rem] font-extrabold text-[#a8d418] last:border-b-0"
          >
            Register Now →
          </button>
        </div>
      </nav>
    </>
  );
}
