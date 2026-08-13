'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Stats({ wpData }) {
  const statsData = wpData?.pageFields?.statsGroup;

  const rawStats = [
    { value: statsData?.stat1Val, label: statsData?.stat1Lbl },
    { value: statsData?.stat2Val, label: statsData?.stat2Lbl },
    { value: statsData?.stat3Val, label: statsData?.stat3Lbl },
    { value: statsData?.stat4Val, label: statsData?.stat4Lbl },
  ];

  const finalStats = rawStats.filter(
    (item) =>
      item.value &&
      item.value.trim() !== '' &&
      item.label &&
      item.label.trim() !== '',
  );

  if (finalStats.length === 0) {
    return null;
  }

  const gridColsClass =
    finalStats.length === 2
      ? 'md:grid-cols-2'
      : finalStats.length === 3
        ? 'md:grid-cols-3'
        : 'md:grid-cols-4';

  return (
    <section className="py-16 md:py-24 bg-customBg text-customText border-y border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-customSurface/20 via-customSurface/40 to-customSurface/20 pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-6 md:gap-8 lg:gap-10 w-full`}
        >
          {finalStats.map((stat, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              direction="up"
              className="w-full"
            >
              <div className="w-full p-8 md:p-10 rounded-3xl border border-customBorder/80 bg-customSurface/50 backdrop-blur-2xl text-center shadow-lg hover:border-customAccent/60 hover:bg-customSurface/80 hover:shadow-2xl hover:shadow-customAccent/5 transition-all duration-300 group flex flex-col justify-center items-center h-full min-h-[160px]">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-customAccent mb-3 font-black tracking-tight group-hover:scale-105 transition-transform duration-300 font-heading">
                  {stat.value}
                </div>

                <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-customMuted font-bold group-hover:text-customText transition-colors">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
