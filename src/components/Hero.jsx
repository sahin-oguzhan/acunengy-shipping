import React from 'react';
import { getHomePageData } from '@/lib/api';
import FadeIn from '@/components/FadeIn';
import HeroQuoteButton from '@/components/HeroQuoteButton';

export default async function Hero({ dict, locale }) {
  const wpData = await getHomePageData(locale);

  // WordPress Verisi yoksa fallback olarak i18n Dictionary kullanır
  const displaySubtitle = wpData?.heroBadge || dict?.subtitle;
  const displayTitle1 = wpData?.heroTitle || dict?.title1;
  const displayTitle2 = wpData?.heroTitle2 || dict?.title2;
  const displayDescription = wpData?.heroSubtitle || dict?.description;
  const displayBtnQuote = wpData?.heroBtnQuote || dict?.btnQuote;
  const displayBtnServices = wpData?.heroBtnServices || dict?.btnServices;

  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden mt-[-96px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-customBg via-customBg/60 to-transparent z-10"></div>
        <img
          alt="Elite Maritime Vessel"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5N5ADsClhyAQqL9MWEVlS2XqwuRw3IXuiRZoJ6thpkbgC1LrO2ARgsMtiZuUGrbheJBShttkXUKSnPsUWlVlr7yso4r9OdO_gte48xCk4n3H2x3O8cmQp98fHKJXqrI1C04iCsCgD1oCjlI1Y3TFxQw5HsvQhZNyaXYVIrEhWxa-SS3B882H2WfacLQlsF9TKPSO9WzSGSOoJuHjnU-VVDjWM3BR6bH-pYpiGArFsbfTjkLc7Q-Gd"
        />
      </div>

      <div className="relative z-20 px-6 md:px-16 max-w-5xl mt-24">
        <FadeIn direction="up" delay={0.1}>
          <div className="bg-customBg/70 backdrop-blur-md p-10 md:p-16 border-l-4 border-l-customAccent border border-customBorder shadow-2xl rounded-sm">
            <FadeIn direction="up" delay={0.2}>
              <p className="font-mono text-xs md:text-sm text-customAccent mb-4 tracking-[0.3em] uppercase">
                {displaySubtitle}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-customText mb-6 leading-tight font-bold tracking-tighter">
                {displayTitle1} <br />
                {displayTitle2 && (
                  <span className="text-customAccent">{displayTitle2}</span>
                )}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-base md:text-lg text-customMuted mb-10 max-w-2xl border-l border-customBorder pl-6">
                {displayDescription}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Modal Tetikleyici İnteraktif Teklif Butonu */}
                <HeroQuoteButton label={displayBtnQuote} />

                <button className="border border-customBorder text-customText px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-customSurface active:scale-95 transition-all font-bold backdrop-blur-md">
                  {displayBtnServices}
                </button>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
