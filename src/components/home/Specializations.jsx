'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Specializations({ dict, locale, wpData }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

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

  return (
    <section className="py-28 px-6 md:px-16 bg-customBg border-t border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-customSurface/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık Alanı */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
              {displayBadge}
            </span>
            <h2 className="text-3xl md:text-5xl text-customText font-black mb-6 font-heading tracking-tight">
              {displayTitle}
            </h2>
            <p className="text-customMuted text-base md:text-lg leading-relaxed font-normal">
              {displayDesc}
            </p>
          </div>
        </FadeIn>

        {/* Sinematik Genişleyen Akordiyon Grid */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[560px]">
          {sectors.map((sector, index) => {
            const isExpanded = hoveredIndex === index;
            return (
              <div
                key={sector.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative rounded-3xl overflow-hidden border border-customBorder/80 bg-slate-950 shadow-2xl transition-all duration-700 ease-in-out cursor-pointer flex flex-col justify-end p-8 md:p-10 ${
                  isExpanded ? 'lg:flex-[2.5]' : 'lg:flex-[1]'
                } h-[420px] lg:h-full`}
              >
                {/* Arka Plan Görseli */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
                  style={{ backgroundImage: `url(${sector.image})` }}
                />

                {/* Gradyan Maskesi (Koyu Arka Plan) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />

                {/* Üst Kısım (Sol Üst ve Sağ Üst Butonlar - Her zaman beyaz/kontrastlı) */}
                <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                    {sector.category}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-xl">
                      {sector.icon}
                    </span>
                  </div>
                </div>

                {/* İçerik */}
                <div className="relative z-10 text-white">
                  <span className="font-mono text-xs text-gray-300 block mb-2 font-semibold tracking-wider">
                    {sector.code}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white font-heading mb-3 tracking-tight drop-shadow-md">
                    {sector.title}
                  </h3>

                  {/* Açıklama Metni */}
                  <p
                    className={`text-gray-200 text-sm md:text-base leading-relaxed mb-6 drop-shadow font-normal transition-all duration-500 ${
                      isExpanded
                        ? 'opacity-100 max-h-40'
                        : 'opacity-0 lg:opacity-70 max-h-0 lg:max-h-12 overflow-hidden'
                    }`}
                  >
                    {sector.desc}
                  </p>

                  {/* Alt Kısım (Sayısal Veriler ve Brief Butonu - Beyaz ve Canlı Tonlar) */}
                  <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-2xl md:text-3xl font-black text-[#38bdf8] block tracking-tighter drop-shadow-sm">
                        {sector.statsValue}
                      </span>
                      <span className="font-mono text-xs text-white/90 uppercase tracking-wider font-bold">
                        {sector.statsLabel}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-mono text-xs text-white bg-white/10 hover:bg-white hover:text-slate-950 border border-white/30 px-4 py-2.5 rounded-xl transition-all font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg"
                    >
                      Brief
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
      </div>
    </section>
  );
}
