'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Industries({ dict, locale, wpData }) {
  const [activeCard, setActiveCard] = useState(0);

  // 1. ACF Başlık Bilgileri
  const headerData = wpData?.pageFields?.industriesHeaderGroup;
  const displayBadge = headerData?.badge || '';
  const displayTitle = headerData?.title || '';
  const displayDesc = headerData?.description || '';
  const displayBtnViewAll = 'VIEW ALL SECTORS';

  // 2. Doğrudan WordPress CPT Verisi
  const rawWpIndustries = wpData?.industriesList || [];

  const finalIndustries = rawWpIndustries
    .filter((item) => item.title && item.title.trim() !== '')
    .map((item, index) => ({
      id: item.id || `ind-${index}`,
      title: item.title,
      image: item.featuredImage?.node?.sourceUrl || '',
      description: item.industryFields?.description || '',
      tag: item.industryFields?.tag || `0${index + 1} / SECTOR`,
    }));

  if (!displayTitle && !displayBadge && finalIndustries.length === 0) {
    return null;
  }

  return (
    <section className="py-28 px-6 md:px-16 bg-customSurface/60 border-t border-customBorder/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-customBg/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Üst Başlık ve Buton Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <FadeIn direction="up" className="max-w-2xl">
            {displayBadge && (
              <span className="inline-block font-mono text-xs text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
                {displayBadge}
              </span>
            )}
            {displayTitle && (
              <h2 className="text-3xl md:text-5xl text-customText font-black leading-tight font-heading tracking-tight">
                {displayTitle}
              </h2>
            )}
            {displayDesc && (
              <p className="text-customMuted text-base md:text-lg leading-relaxed font-normal mt-4">
                {displayDesc}
              </p>
            )}
          </FadeIn>

          <FadeIn direction="up">
            <a
              href="#contact"
              className="font-mono text-xs text-customText border border-customBorder bg-customBg/80 px-6 py-3 rounded-2xl hover:text-customAccent hover:border-customAccent/50 transition-all font-extrabold uppercase tracking-widest shadow-sm inline-flex items-center gap-2"
            >
              {displayBtnViewAll}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </FadeIn>
        </div>

        {/* Grid Yapısı */}
        {finalIndustries.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finalIndustries.map((ind, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveCard(index)}
                  onClick={() => setActiveCard(index)}
                  className={`relative h-[500px] rounded-3xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end p-8 shadow-2xl bg-slate-950 ${
                    isActive
                      ? 'border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.3)] lg:-translate-y-3'
                      : 'border-customBorder/80 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Arka Plan Görseli */}
                  {ind.image && (
                    <div
                      className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}
                      style={{ backgroundImage: `url('${ind.image}')` }}
                    />
                  )}

                  {/* Gradyan Maskesi */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />

                  {/* Üst Tag */}
                  {ind.tag && (
                    <div className="absolute top-6 left-6 z-20">
                      <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                        {ind.tag}
                      </span>
                    </div>
                  )}

                  {/* İçerik */}
                  <div className="relative z-10 text-white">
                    <h4 className="text-white text-2xl font-black font-heading mb-3 tracking-tight drop-shadow-md">
                      {ind.title}
                    </h4>
                    {ind.description && (
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed font-normal drop-shadow">
                        {ind.description}
                      </p>
                    )}
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
