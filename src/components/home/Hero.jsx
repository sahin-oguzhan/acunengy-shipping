'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import HeroQuoteButton from '@/components/ui/HeroQuoteButton';

export default function Hero({ dict, locale, wpData }) {
  const displaySubtitle =
    wpData?.heroBadge ||
    dict?.subtitle ||
    'Global Maritime & Intelligence Logistics';
  const displayTitle1 =
    wpData?.heroTitle || dict?.title1 || 'Delivering Efficiency.';
  const displayTitle2 = wpData?.heroTitle2 || dict?.title2 || 'Driving Growth.';
  const displayDescription =
    wpData?.heroSubtitle ||
    dict?.description ||
    'Harnessing cutting-edge technology and global intelligence to create seamless maritime logistics systems.';
  const displayBtnQuote =
    wpData?.heroBtnQuote || dict?.btnQuote || 'Get a Quote';
  const displayBtnServices =
    wpData?.heroBtnServices || dict?.btnServices || 'Our Services';

  const scrollToServices = (e) => {
    e.preventDefault();
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="hero"
      className="relative h-screen min-h-[750px] w-full flex items-center overflow-hidden bg-slate-950"
    >
      {/* 1. ARKA PLAN VIDEO KATMANI */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg" /* Video yüklenene kadar görünecek hafif kapak resmi */
          className="w-full h-full object-cover object-center scale-105"
        >
          {/* Modern tarayıcılar önce hafif olan WebM'i yükler */}
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10 pointer-events-none" />
      </div>

      {/* 2. METİN KATMANI */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-16 pt-20 flex flex-col items-start">
        <div className="max-w-2xl flex flex-col items-start text-left">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              {displayTitle1} <br />
              {displayTitle2 && (
                <span className="text-[#67e8f9] drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
                  {displayTitle2}
                </span>
              )}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-base md:text-xl text-slate-100 font-normal max-w-xl mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {displayDescription}
            </p>
          </FadeIn>

          {/* Butonlar */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4">
              {/* Request Quote Butonu (İç yazısı BEYAZ) */}
              <div className="[&_button]:!bg-customAccent [&_button]:!text-white [&_button]:!rounded-full [&_button]:!px-9 [&_button]:!py-4 [&_button]:!font-bold [&_button]:!text-sm [&_button]:!shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:[&_button]:!brightness-110 transition-all">
                <HeroQuoteButton label={displayBtnQuote} />
              </div>

              {/* Our Services Butonu (Smooth Scroll Çalışır) */}
              <button
                type="button"
                onClick={scrollToServices}
                className="border-2 border-white/40 bg-black/50 text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white/30 active:scale-95 transition-all font-bold backdrop-blur-md shadow-2xl cursor-pointer inline-flex items-center justify-center"
              >
                {displayBtnServices}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </header>
  );
}
