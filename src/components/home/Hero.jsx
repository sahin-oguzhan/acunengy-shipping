'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import HeroQuoteButton from '@/components/ui/HeroQuoteButton';

export default function Hero({ wpData }) {
  // 1. Sadece WordPress ACF Hero Grubu Verileri
  const heroData = wpData?.pageFields?.heroGroup;

  const displayBadge = heroData?.heroBadge || '';
  const rawTitle = heroData?.heroTitle || '';
  const displaySubtitle = heroData?.heroSubtitle || '';
  const displayBtnQuote = heroData?.heroBtnText || '';
  const videoUrl = heroData?.heroVideoUrl || '';

  // Başlığı '&' karakterine göre ikiye bölme mantığı
  const titleWords =
    typeof rawTitle === 'string' && rawTitle ? rawTitle.split('&') : [rawTitle];
  const displayTitle1 = titleWords[0] ? titleWords[0].trim() : rawTitle;
  const displayTitle2 = titleWords[1] ? `& ${titleWords[1].trim()}` : '';

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
          className="w-full h-full object-cover object-center scale-105"
        >
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10 pointer-events-none" />
      </div>

      {/* 2. METİN KATMANI */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-16 pt-20 flex flex-col items-start">
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* BADGE */}
          {displayBadge && (
            <FadeIn direction="up" delay={0.1}>
              <span className="inline-block font-mono text-xs md:text-sm text-[#38bdf8] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 font-semibold backdrop-blur-md">
                {displayBadge}
              </span>
            </FadeIn>
          )}

          {/* BAŞLIK */}
          {displayTitle1 && (
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] font-heading">
                {displayTitle1} <br />
                {displayTitle2 && (
                  <span className="text-[#67e8f9] drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
                    {displayTitle2}
                  </span>
                )}
              </h1>
            </FadeIn>
          )}

          {/* ALT BAŞLIK / AÇIKLAMA */}
          {displaySubtitle && (
            <FadeIn direction="up" delay={0.3}>
              <p className="text-base md:text-xl text-slate-100 font-normal max-w-xl mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {displaySubtitle}
              </p>
            </FadeIn>
          )}

          {/* BUTONLAR */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4">
              {displayBtnQuote && (
                <div className="[&_button]:!bg-customAccent [&_button]:!text-white [&_button]:!rounded-full [&_button]:!px-9 [&_button]:!py-4 [&_button]:!font-bold [&_button]:!text-sm [&_button]:!shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:[&_button]:!brightness-110 transition-all">
                  <HeroQuoteButton label={displayBtnQuote} />
                </div>
              )}

              <button
                type="button"
                onClick={scrollToServices}
                className="border-2 border-white/40 bg-black/50 text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white/30 active:scale-95 transition-all font-bold backdrop-blur-md shadow-2xl cursor-pointer inline-flex items-center justify-center"
              >
                OUR SERVICES
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </header>
  );
}
