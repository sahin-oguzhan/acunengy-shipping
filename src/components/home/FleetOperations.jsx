'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function FleetOperations({ dict, locale, wpData }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const headerData = wpData?.pageFields?.fleetHeaderGroup;
  const displayBadge = headerData?.badge || '';
  const displayTitle = headerData?.title || '';
  const displayDesc = headerData?.description || '';

  const filters = [
    { id: 'all', label: 'ALL ASSETS' },
    { id: 'vessels', label: 'HEAVY-LIFT FLEET' },
    { id: 'terminals', label: 'PORT TERMINALS' },
    { id: 'offshore', label: 'OFFSHORE SUPPORT' },
  ];

  const rawWpFleet = wpData?.fleetList || [];
  const assets = rawWpFleet
    .filter((item) => item.title && item.title.trim() !== '')
    .map((item, index) => {
      const rawCategory = item.fleetFields?.category;
      const cleanCategory = rawCategory
        ? String(rawCategory).toLowerCase().trim()
        : 'vessels';

      return {
        id: item.id || `fleet-${index}`,
        category: cleanCategory,
        title: item.title,
        tag: item.fleetFields?.vesselStatus || 'ACTIVE',
        spec1: item.fleetFields?.vesselType || '',
        image: item.featuredImage?.node?.sourceUrl || '',
      };
    });

  const filteredAssets =
    activeFilter === 'all'
      ? assets
      : assets.filter((item) => {
          return (
            item.category === activeFilter ||
            item.category.includes(activeFilter)
          );
        });

  if (!displayTitle && !displayBadge && assets.length === 0) {
    return null;
  }

  return (
    <section className="py-28 px-6 md:px-16 bg-customSurface/60 border-t border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-customBg/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              {displayBadge && (
                <span className="inline-block font-mono text-xs text-customAccent tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
                  {displayBadge}
                </span>
              )}
              {displayTitle && (
                <h2 className="text-3xl md:text-5xl text-customText font-black font-heading tracking-tight">
                  {displayTitle}
                </h2>
              )}
            </div>
            {displayDesc && (
              <p className="text-customMuted text-sm md:text-base max-w-md leading-relaxed font-normal">
                {displayDesc}
              </p>
            )}
          </div>
        </FadeIn>

        {assets.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-14">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`font-mono text-xs px-6 py-3 rounded-2xl transition-all duration-300 tracking-wider font-extrabold border cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-customAccent text-white border-customAccent shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105'
                    : 'bg-customBg/80 backdrop-blur-md text-customText border-customBorder/80 hover:border-customAccent/60 hover:text-customAccent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        {filteredAssets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssets.map((asset, index) => (
              <FadeIn key={asset.id} delay={index * 0.08} direction="up">
                <div className="group relative h-[420px] rounded-3xl overflow-hidden border border-customBorder/80 bg-slate-950 shadow-2xl flex flex-col justify-end p-8 cursor-pointer hover:border-customAccent/60 transition-all duration-300 hover:-translate-y-2">
                  {asset.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${asset.image})` }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/20 transition-all duration-300" />

                  <div className="relative z-10 text-white">
                    {asset.tag && (
                      <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-4 py-1.5 rounded-full border border-white/20 inline-block mb-4 backdrop-blur-md shadow-md">
                        {asset.tag}
                      </span>
                    )}

                    <h3 className="text-xl md:text-2xl font-black font-heading text-white mb-4 group-hover:text-[#38bdf8] transition-colors tracking-tight drop-shadow-md">
                      {asset.title}
                    </h3>

                    {asset.spec1 && (
                      <div className="pt-4 border-t border-white/20 flex items-center justify-between font-mono text-xs text-gray-200 font-semibold">
                        <span>{asset.spec1}</span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-customBorder/60 rounded-3xl">
            <p className="font-mono text-sm text-customMuted">
              No assets found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
