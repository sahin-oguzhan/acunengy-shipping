'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function Specializations({ dict, locale, wpData }) {
  const [activeTab, setActiveTab] = useState(0);

  const displayBadge = wpData?.specsBadge || dict?.badge || 'SECTOR EXPERTISE';
  const displayTitle =
    wpData?.specsTitle || dict?.title || 'Industry Specializations';
  const displayDesc =
    wpData?.specsDesc ||
    dict?.description ||
    'Tailored marine engineering and logistics frameworks engineered for high-stakes industrial sectors.';

  const sectors = [
    {
      id: 'wind-energy',
      title: 'Wind Energy Logistics',
      category: 'RENEWABLE ENERGY',
      code: '01 / RENEWABLES',
      desc: 'Precision transport for onshore & offshore turbine components. We manage oversized blades, tower sections, and heavy nacelles across international maritime corridors with specialized vessels.',
      statsValue: '120+',
      statsLabel: 'Blade Arrays Shipped',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
      icon: 'wind_power',
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas Operations',
      category: 'ENERGY & OFFSHORE',
      code: '02 / OFFSHORE',
      desc: 'Offshore supply vessel chartering, rig mobilization support, and strict HSE-compliant hazardous materials logistics designed for extreme marine environments.',
      statsValue: '0.0',
      statsLabel: 'HSE Incident Rate',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      icon: 'oil_barrel',
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Heavy Plant',
      category: 'HEAVY INDUSTRY',
      code: '03 / INFRASTRUCTURE',
      desc: 'Turnkey marine logistics for civil construction mega-projects, power plant turbines, mining machinery, and port crane systems up to 800-ton single-lift operations.',
      statsValue: '800T',
      statsLabel: 'Single-Lift Capacity',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
      icon: 'precision_manufacturing',
    },
  ];

  const currentSector = sectors[activeTab];

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg border-t border-customBorder transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <FadeIn direction="up">
          <div className="mb-16">
            <span className="font-mono text-xs text-customAccent tracking-widest uppercase mb-3 block font-semibold">
              {displayBadge}
            </span>
            <h2 className="text-3xl md:text-5xl text-customText font-bold font-heading tracking-tight">
              {displayTitle}
            </h2>
          </div>
        </FadeIn>

        {/* Dynamic Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SOL TARAFA SEÇİM SEKMELERİ (5 Kolon) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {sectors.map((sector, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-6 md:p-8 rounded transition-all duration-300 border flex flex-col justify-between relative overflow-hidden group ${
                    isActive
                      ? 'bg-customSurface border-customAccent shadow-lg'
                      : 'bg-customSurface/40 border-customBorder hover:border-customAccent/40 hover:bg-customSurface/80'
                  }`}
                >
                  {/* Aktif İndikatör Çizgisi */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-customAccent shadow-[0_0_10px_#38bdf8]" />
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs tracking-wider ${isActive ? 'text-customAccent font-bold' : 'text-customMuted'}`}
                    >
                      {sector.code}
                    </span>
                    <span
                      className={`material-symbols-outlined text-xl ${isActive ? 'text-customAccent' : 'text-customMuted'}`}
                    >
                      {sector.icon}
                    </span>
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-bold font-heading transition-colors ${isActive ? 'text-customText' : 'text-customMuted group-hover:text-customText'}`}
                  >
                    {sector.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* SAĞ TARAFA DEV SİNEMATİK SAHNE (7 Kolon) */}
          <div className="lg:col-span-7">
            <div className="relative h-[480px] lg:h-[560px] rounded-lg overflow-hidden border border-customBorder bg-customCard shadow-2xl flex flex-col justify-end p-8 md:p-12 group">
              {/* Dinamik Arka Plan Görseli */}
              <div
                key={currentSector.id}
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 animate-fadeIn"
                style={{ backgroundImage: `url(${currentSector.image})` }}
              />

              {/* Akıllı Gradyan Maskesi (Light Mode'da Beyaz-Koyu Geçişi, Dark Mode'da Lacivert Geçişi) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

              {/* İçerik (Görsel üstündeki metinler her iki temada da yüksek kontrast için crisp beyaz tutulur) */}
              <div className="relative z-10 text-white">
                <span className="font-mono text-xs text-customAccent font-bold uppercase tracking-widest bg-black/60 px-3 py-1 rounded border border-customAccent/40 inline-block mb-4 backdrop-blur-md">
                  {currentSector.category}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4 drop-shadow-md">
                  {currentSector.title}
                </h3>

                <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mb-8 drop-shadow">
                  {currentSector.desc}
                </p>

                {/* Büyük Metrik Kutusu */}
                <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-3xl md:text-4xl font-bold text-customAccent block drop-shadow">
                      {currentSector.statsValue}
                    </span>
                    <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">
                      {currentSector.statsLabel}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs text-white bg-customAccent/20 hover:bg-customAccent hover:text-[#0B2341] border border-customAccent/60 px-5 py-3 rounded transition-all font-bold uppercase tracking-wider backdrop-blur-md"
                  >
                    Request Specialization Brief
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
