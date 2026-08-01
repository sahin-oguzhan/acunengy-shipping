'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Industries({ dict, locale, wpData }) {
  const [activeCard, setActiveCard] = useState(0);

  const displayBadge =
    wpData?.industriesBadge || dict?.badge || 'GLOBAL SECTORS';
  const displayTitle =
    wpData?.industriesTitle || dict?.title || 'Industries We Serve';
  const displayBtnViewAll =
    wpData?.industriesBtn || dict?.btnViewAll || 'VIEW ALL SECTORS';

  const defaultImages = [
    "url('https://images.unsplash.com/photo-1541888946425-d0fbb18f258a?q=80&w=1200&auto=format&fit=crop')",
    "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop')",
    "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop')",
    "url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop')",
  ];

  const fallbackIndustries = [
    {
      title: dict?.ind1Title || 'Maritime & Shipping',
      description:
        dict?.ind1Desc ||
        'Comprehensive port agency, vessel husbandry, and global route management across strategic trade corridors.',
      image: defaultImages[0],
      tag: '01 / FLEET',
    },
    {
      title: dict?.ind2Title || 'Energy & Power',
      description:
        dict?.ind2Desc ||
        'Offshore rig logistics, turbine component transport, and round-the-clock power plant supplies.',
      image: defaultImages[1],
      tag: '02 / ENERGY',
    },
    {
      title: dict?.ind3Title || 'Heavy Industry & Mining',
      description:
        dict?.ind3Desc ||
        'Specialized heavy-lift engineering and secure transport frameworks for out-of-gauge industrial machinery.',
      image: defaultImages[2],
      tag: '03 / HEAVY',
    },
    {
      title: dict?.ind4Title || 'Defense & Infrastructure',
      description:
        dict?.ind4Desc ||
        'Turnkey logistics frameworks for critical civil construction, state mega-projects, and defense assets.',
      image: defaultImages[3],
      tag: '04 / STRATEGIC',
    },
  ];

  // WordPress'ten gelen liste varsa onu kullan, yoksa fallback listesine dön
  const wpIndustries = (wpData?.industriesList || []).filter(
    (item) => item.title && item.title.trim() !== '',
  );

  const finalIndustries =
    wpIndustries.length > 0
      ? wpIndustries.map((item, index) => ({
          title: item.title,
          description: item.desc || item.description,
          image: `url('${item.image || defaultImages[index % defaultImages.length].replace(/url\('(.*)'\)/, '$1')}')`,
          tag: `0${index + 1} / SECTOR`,
        }))
      : fallbackIndustries;

  return (
    <section className="py-28 px-6 md:px-16 bg-customSurface/60 border-t border-customBorder/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-customBg/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Üst Başlık ve Buton Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <FadeIn direction="up" className="max-w-2xl">
            <span className="inline-block font-mono text-xs text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
              {displayBadge}
            </span>
            <h2 className="text-3xl md:text-5xl text-customText font-black leading-tight font-heading tracking-tight">
              {displayTitle}
            </h2>
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

        {/* Katmanlı Stacked Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalIndustries.map((ind, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                className={`relative h-[500px] rounded-3xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end p-8 shadow-2xl bg-slate-950 ${
                  isActive
                    ? 'border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.3)] lg:-translate-y-3'
                    : 'border-customBorder/80 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Arka Plan Görseli */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}
                  style={{ backgroundImage: ind.image }}
                />

                {/* Gradyan Maskesi (Koyu Kapsayıcı) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />

                {/* Üst Tag (Her iki modda da net BEYAZ metin) */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                    {ind.tag}
                  </span>
                </div>

                {/* İçerik (Her iki modda da BEYAZ) */}
                <div className="relative z-10 text-white">
                  <h4 className="text-white text-2xl font-black font-heading mb-3 tracking-tight drop-shadow-md">
                    {ind.title}
                  </h4>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed font-normal drop-shadow">
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
