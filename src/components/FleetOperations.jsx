'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function FleetOperations({ dict, locale, wpData }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const displayBadge = wpData?.fleetBadge || dict?.badge || 'CAPACITY & ASSETS';
  const displayTitle =
    wpData?.fleetTitle || dict?.title || 'Fleet & Terminal Operations';
  const displayDesc =
    wpData?.fleetDesc ||
    dict?.description ||
    'High-specification heavy-lift vessels and strategic port terminal infrastructure engineered for extreme logistics.';

  const filters = [
    { id: 'all', label: 'ALL ASSETS' },
    { id: 'vessels', label: 'HEAVY-LIFT FLEET' },
    { id: 'terminals', label: 'PORT TERMINALS' },
    { id: 'offshore', label: 'OFFSHORE SUPPORT' },
  ];

  const assets = [
    {
      id: 'asset-1',
      category: 'vessels',
      title: 'Acunengy Titan (Heavy Lift Vessel)',
      tag: '800T CRANE CAPACITY',
      spec1: 'LOA: 148.5m',
      spec2: 'Max Draft: 7.2m',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'asset-2',
      category: 'terminals',
      title: 'Deep-Water Terminal Hub',
      tag: '14.5M DRAFT DEPTH',
      spec1: 'Area: 120,000 m²',
      spec2: '24/7 Heavy Load Berth',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'asset-3',
      category: 'offshore',
      title: 'Offshore Supply Vessel (OSV-04)',
      tag: 'DP-2 POSITIONING',
      spec1: 'Deck Space: 680 m²',
      spec2: 'BHP: 8,000 HP',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'asset-4',
      category: 'vessels',
      title: 'Acunengy Pioneer (Project Cargo)',
      tag: '2x 250T TANDEM LIFT',
      spec1: 'DWT: 12,500 MT',
      spec2: 'Hold Capacity: 18,200 m³',
      image:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'asset-5',
      category: 'terminals',
      title: 'Wind Turbine Assembly Yard',
      tag: 'HEAVY-PAD STORAGE',
      spec1: 'Bearing Cap: 25T/m²',
      spec2: 'Quayside Crane: 1,000T',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'asset-6',
      category: 'offshore',
      title: 'Subsea Support Vessel',
      tag: '100T AHC CRANE',
      spec1: 'Moonpool Integrated',
      spec2: 'Accommodation: 90 PAX',
      image:
        'https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const filteredAssets =
    activeFilter === 'all'
      ? assets
      : assets.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface border-t border-customBorder transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-customAccent tracking-widest uppercase mb-3 block font-semibold">
                {displayBadge}
              </span>
              <h2 className="text-3xl md:text-5xl text-customText font-bold font-heading tracking-tight">
                {displayTitle}
              </h2>
            </div>
            <p className="text-customMuted text-sm md:text-base max-w-md leading-relaxed">
              {displayDesc}
            </p>
          </div>
        </FadeIn>

        {/* Filtre Düğmeleri */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-mono text-xs px-5 py-2.5 rounded transition-all duration-300 tracking-wider font-bold border ${
                activeFilter === filter.id
                  ? 'bg-customAccent text-[#0B2341] border-customAccent shadow-md'
                  : 'bg-customBg/50 text-customMuted border-customBorder hover:border-customAccent/50 hover:text-customText'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.map((asset, index) => (
            <FadeIn key={asset.id} delay={index * 0.08} direction="up">
              <div className="group relative h-[380px] rounded-lg overflow-hidden border border-customBorder bg-customCard shadow-lg flex flex-col justify-end p-6 cursor-pointer">
                {/* Arka Plan Görseli */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${asset.image})` }}
                />

                {/* Siyah Gradyan Maskesi (Okunabilirlik Güvencesi) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300" />

                {/* İçerik */}
                <div className="relative z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Teknik Etiket */}
                  <span className="font-mono text-[10px] text-customAccent font-bold uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded border border-customAccent/30 inline-block mb-3 backdrop-blur-md">
                    {asset.tag}
                  </span>

                  {/* Başlık */}
                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-customAccent transition-colors">
                    {asset.title}
                  </h3>

                  {/* Teknik Detay Çizgisi */}
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between font-mono text-xs text-gray-300">
                    <span>{asset.spec1}</span>
                    <span className="text-customMuted">•</span>
                    <span>{asset.spec2}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
