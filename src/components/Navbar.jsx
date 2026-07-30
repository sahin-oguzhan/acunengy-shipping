'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-4 transition-all duration-300 border-b border-customBorder ${
        isScrolled
          ? 'bg-customBg shadow-md py-3'
          : 'bg-customBg/70 backdrop-blur-md'
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-xl md:text-2xl text-customText tracking-tighter font-bold"
      >
        ACUNENGY SHIPPING
      </Link>

      {/* Menü Linkleri*/}
      <div className="hidden md:flex gap-8 items-center">
        <Link
          href="#"
          className="text-sm uppercase tracking-wider text-customAccent border-b-2 border-customAccent pb-1 font-medium"
        >
          Hizmetler
        </Link>
        <Link
          href="#"
          className="text-sm uppercase tracking-wider text-customText hover:text-customAccent transition-colors"
        >
          Sektörler
        </Link>
        <Link
          href="#"
          className="text-sm uppercase tracking-wider text-customText hover:text-customAccent transition-colors"
        >
          Ağımız
        </Link>
        <Link
          href="#"
          className="text-sm uppercase tracking-wider text-customText hover:text-customAccent transition-colors"
        >
          Filo
        </Link>
      </div>

      {/* Sağ Taraf: Tema Butonu ve İletişim */}
      <div className="flex items-center gap-4 md:gap-6">
        <ThemeToggle />
        <button className="hidden md:block bg-customAccent text-customBg text-sm font-bold px-6 py-2 uppercase tracking-widest hover:opacity-80 transition-all scale-95 active:scale-90 rounded-sm">
          İletişim
        </button>
      </div>
    </nav>
  );
}
