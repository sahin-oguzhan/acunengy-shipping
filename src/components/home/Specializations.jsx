'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import FadeIn from '@/components/ui/FadeIn';

export default function Specializations({ dict, locale, wpData }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/en') ? 'en' : 'tr';

  // 1. ACF Başlık Bilgileri
  const headerData = wpData?.pageFields?.specializationsHeaderGroup;
  const displayBadge = headerData?.badge || '';
  const displayTitle = headerData?.title || '';
  const displayDesc = headerData?.description || '';

  // 2. Doğrudan WordPress CPT Verisi (Gerçek ACF Şemana Göre Eşlendi)
  const rawWpSpecs = wpData?.specializationsList || [];
  const sectors = rawWpSpecs.map((item, index) => ({
    id: item.id || `spec-${index}`,
    title: item.title,
    category: item.specFields?.category || '',
    code: item.specFields?.code || '',
    desc: item.specFields?.description || '',
    statsValue: item.specFields?.statsValue || '',
    statsLabel: item.specFields?.statsLabel || '',
    image: item.featuredImage?.node?.sourceUrl || '',
    icon: item.specFields?.iconName || 'precision_manufacturing',
  }));

  // Smooth Scroll Kaydırma Fonksiyonu
  const handleBriefClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Eğer WordPress'ten ne başlık ne de kart verisi geldiyse bileşeni tamamen gizle
  if (!displayTitle && !displayBadge && sectors.length === 0) {
    return null;
  }

  // Buton Metni Dil Tanımı (TR: BİLGİ AL / EN: BRIEF)
  const briefBtnLabel = currentLocale === 'tr' ? 'BİLGİ AL' : 'BRIEF';

  return (
    <section className="py-28 px-6 md:px-16 bg-customBg border-t border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-customSurface/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* BAŞLIK ALANI */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {displayBadge && (
              <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
                {displayBadge}
              </span>
            )}
            {displayTitle && (
              <h2 className="text-3xl md:text-5xl text-customText font-black mb-6 font-heading tracking-tight">
                {displayTitle}
              </h2>
            )}
            {displayDesc && (
              <p className="text-customMuted text-base md:text-lg leading-relaxed font-normal">
                {displayDesc}
              </p>
            )}
          </div>
        </FadeIn>

        {/* SİNEMATİK GENİŞLEYEN AKORDİYON GRID */}
        {sectors.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[560px]">
            {sectors.map((sector, index) => {
              const isExpanded = hoveredIndex === index;

              // Dinamik Sektör Kodu (Paneldeki 'code' basılır, boşsa '01 / SECTOR' basılır)
              const formattedIndex = String(index + 1).padStart(2, '0');
              const displayCode = sector.code || `${formattedIndex} / SECTOR`;

              return (
                <div
                  key={sector.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setHoveredIndex(index)}
                  className={`relative rounded-3xl overflow-hidden border border-customBorder/80 bg-slate-950 shadow-2xl transition-all duration-700 ease-in-out cursor-pointer flex flex-col justify-end p-8 md:p-10 ${
                    isExpanded ? 'lg:flex-[2.5]' : 'lg:flex-[1]'
                  } h-[420px] lg:h-full`}
                >
                  {/* ARKA PLAN GÖRSELİ */}
                  {sector.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
                      style={{ backgroundImage: `url(${sector.image})` }}
                    />
                  )}

                  {/* GRADYAN MASKESİ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />

                  {/* ÜST BUTONLAR VE KATEGORİ ROZETİ */}
                  <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
                    {sector.category && (
                      <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                        {sector.category}
                      </span>
                    )}
                    <div className="w-10 h-10 rounded-2xl bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg ml-auto">
                      <span className="material-symbols-outlined text-xl">
                        {sector.icon}
                      </span>
                    </div>
                  </div>

                  {/* İÇERİK */}
                  <div className="relative z-10 text-white">
                    {/* SEKTÖR KODU / NUMARATÖR (code alanından çekilir) */}
                    <span className="font-mono text-xs text-[#38bdf8] block mb-2 font-bold tracking-widest uppercase drop-shadow-sm">
                      {displayCode}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-black text-white font-heading mb-3 tracking-tight drop-shadow-md">
                      {sector.title}
                    </h3>

                    {/* AÇIKLAMA METNİ */}
                    {sector.desc && (
                      <p
                        className={`text-gray-200 text-sm md:text-base leading-relaxed mb-6 drop-shadow font-normal transition-all duration-500 ${
                          isExpanded
                            ? 'opacity-100 max-h-40'
                            : 'opacity-0 lg:opacity-70 max-h-0 lg:max-h-12 overflow-hidden'
                        }`}
                      >
                        {sector.desc}
                      </p>
                    )}

                    {/* ALT KISIM (STATS & BUTTON) */}
                    <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                      <div>
                        {sector.statsValue && (
                          <span className="font-mono text-2xl md:text-3xl font-black text-[#38bdf8] block tracking-tighter drop-shadow-sm">
                            {sector.statsValue}
                          </span>
                        )}
                        {sector.statsLabel && (
                          <span className="font-mono text-xs text-white/90 uppercase tracking-wider font-bold">
                            {sector.statsLabel}
                          </span>
                        )}
                      </div>

                      <a
                        href="#contact"
                        onClick={handleBriefClick}
                        className="inline-flex items-center gap-2 font-mono text-xs text-white bg-white/10 hover:bg-white hover:text-slate-950 border border-white/30 px-4 py-2.5 rounded-xl transition-all font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg"
                      >
                        {briefBtnLabel}
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
