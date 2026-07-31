'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function Navbar({ dict }) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLocale = pathname?.split('/')[1] || 'en';
  const targetLocale = currentLocale === 'en' ? 'tr' : 'en';

  const switchLanguage = () => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    router.push(segments.join('/'));
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-customBg/85 backdrop-blur-md border-b border-customBorder transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-customText font-bold tracking-tighter">
          ACUNENGY
        </div>

        {/* Menü Linkleri */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-customMuted hover:text-customAccent font-inter text-sm font-bold uppercase tracking-widest transition-colors"
          >
            {dict?.about || 'About'}
          </a>
          <a
            href="#"
            className="text-customMuted hover:text-customAccent font-inter text-sm font-bold uppercase tracking-widest transition-colors"
          >
            {dict?.services || 'Services'}
          </a>
          <a
            href="#"
            className="text-customMuted hover:text-customAccent font-inter text-sm font-bold uppercase tracking-widest transition-colors"
          >
            {dict?.industries || 'Industries'}
          </a>
          <a
            href="#"
            className="hover:border-b-2 text-customMuted hover:text-customAccent font-inter text-sm font-bold uppercase tracking-widest transition-colors"
          >
            {dict?.contact || 'Contact'}
          </a>
        </div>

        {/* Sağ Taraf: Tema Değiştirici ve Dil Değiştirici */}
        <div className="flex items-center gap-4">
          {/* Light/Dark Mode Butonu */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-sm border border-customBorder bg-customSurface text-customText hover:border-customAccent transition-all flex items-center justify-center group"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-lg group-hover:rotate-45 transition-transform duration-300">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          {/* Çeviri İkonlu ve Hover'da Açılan Dil Değiştirici */}
          <button
            onClick={switchLanguage}
            className="hidden md:flex items-center p-2.5 rounded-sm border border-customBorder bg-customSurface text-customText hover:border-customAccent transition-all duration-300 group overflow-hidden"
            title="Switch Language"
          >
            <span className=" px-2 material-symbols-outlined text-lg text-customAccent group-hover:text-customText transition-colors">
              translate
            </span>
            <span className="font-inter text-xs uppercase tracking-widest font-bold max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap">
              {currentLocale === 'en' ? 'TÜRKÇE' : 'ENGLISH'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
