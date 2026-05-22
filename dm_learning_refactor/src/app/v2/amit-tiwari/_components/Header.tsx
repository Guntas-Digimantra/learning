"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "@/components/ui/link";
import { Menu, X } from "lucide-react";

import logoImg from "@/assets/dm-learning-logo.svg";

const navLinks = [
  { label: "Our Programs", href: "#programs" },
  { label: "Resources", href: "#resources" },
  { label: "About Us", href: "#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 bg-white/95 backdrop-blur-[17px] border-b border-black/8">
      <div className="container-page flex items-center justify-between py-3.75">
        <Link
          href="/"
          aria-label="DMLearning Home"
          className="shrink-0 flex items-center"
        >
          <Image
            src={logoImg}
            alt="DMLearning"
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex flex-1 justify-end"
        >
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-lg leading-normal no-underline whitespace-nowrap font-bold text-at-nav-text transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 bg-transparent border-none cursor-pointer text-black p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-white border-t border-black/8 px-5 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium no-underline py-3.5 border-b border-at-divider transition-colors duration-200 hover:text-accent text-at-nav-text"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
