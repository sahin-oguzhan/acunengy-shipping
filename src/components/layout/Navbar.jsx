'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/layout/ThemeToggle';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname?.startsWith('/en') ? 'en' : 'tr';

  const navItems = useMemo(
    () => [
      { id: 'hero', label: currentLocale === 'tr' ? 'ANASAYFA' : 'HOME' },
      { id: 'about', label: currentLocale === 'tr' ? 'HAKKIMIZDA' : 'ABOUT' },
      {
        id: 'services',
        label: currentLocale === 'tr' ? 'HİZMETLER' : 'SERVICES',
      },
      { id: 'fleet', label: currentLocale === 'tr' ? 'FİLO' : 'FLEET' },
      { id: 'news', label: currentLocale === 'tr' ? 'BÜLTEN' : 'INSIGHTS' },
      { id: 'contact', label: currentLocale === 'tr' ? 'İLETİŞİM' : 'CONTACT' },
    ],
    [currentLocale],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = useCallback((e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Soft Navigation: scroll: false ile sayfa pozisyonunu koruyarak dil değiştirme
  const toggleLanguage = useCallback(() => {
    const nextLocale = currentLocale === 'tr' ? 'en' : 'tr';
    const cleanPath = pathname.replace(/^\/(tr|en)/, '');
    const newPath = `/${nextLocale}${cleanPath || ''}`;

    router.push(newPath, { scroll: false });
  }, [currentLocale, pathname, router]);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 md:px-8 transition-all duration-300">
      <nav
        lang={currentLocale}
        className={`w-full max-w-7xl rounded-full border backdrop-blur-2xl transition-all duration-300 flex items-center justify-between px-6 md:px-8 py-3.5 shadow-2xl ${
          isScrolled
            ? 'bg-customBg/95 border-customAccent/40 shadow-black/30'
            : 'bg-customBg/85 border-customBorder/80 shadow-black/20'
        }`}
      >
        <div className="hidden lg:flex items-center gap-1 relative bg-customSurface/40 p-1.5 rounded-full border border-customBorder/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-4 py-2 text-[13px] font-mono tracking-wider transition-colors duration-200 z-10 ${
                  isActive
                    ? 'text-customBg dark:text-slate-950 font-extrabold'
                    : 'text-customText/80 font-semibold hover:text-customText'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBubble"
                    className="absolute inset-0 bg-customAccent rounded-full -z-10 shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex gap-1 items-center justify-center font-heading font-black tracking-tight leading-none hover:opacity-90 transition-opacity drop-shadow-md py-1 px-2"
        >
          <span className="text-lg md:text-xl text-customText">ACUNENGY</span>
          <span className="text-lg md:text-xl text-customAccent">SHIPPING</span>
        </a>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-customSurface/90 border border-customBorder text-customText shadow-md">
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-customAccent text-customBg dark:bg-white dark:text-slate-950 font-mono text-sm font-extrabold tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg border border-white/25 dark:border-white/50 cursor-pointer"
          >
            <span className="text-slate-900 dark:text-slate-950">🌐</span>
            <span>{currentLocale === 'tr' ? 'EN' : 'TR'}</span>
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-customSurface/90 border border-customBorder text-customText shadow-md">
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 rounded-full bg-customAccent text-customBg dark:bg-white dark:text-slate-950 font-mono text-xs font-bold shadow-md flex items-center gap-1 cursor-pointer"
          >
            <span>🌐</span>
            <span>{currentLocale === 'tr' ? 'EN' : 'TR'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-customText p-1 text-2xl cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 inset-x-4 bg-customBg/95 border border-customBorder backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-3 z-50">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`px-4 py-3 rounded-xl text-sm font-mono tracking-wider font-semibold transition-all ${
                activeSection === item.id
                  ? 'text-customBg dark:text-slate-950 font-extrabold bg-customAccent shadow-sm'
                  : 'text-customText hover:bg-customSurface'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
