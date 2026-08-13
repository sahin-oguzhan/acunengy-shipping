'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Approach({ wpData }) {
  const approachData = wpData?.pageFields?.approachGroup;

  const displayBadge = approachData?.badge;
  const displayTitle = approachData?.title;
  const displayDesc = approachData?.description;

  const rawItems = [
    {
      title: approachData?.item1Title,
      desc: approachData?.item1Desc,
    },
    {
      title: approachData?.item2Title,
      desc: approachData?.item2Desc,
    },
    {
      title: approachData?.item3Title,
      desc: approachData?.item3Desc,
    },
  ];

  const items = rawItems.filter(
    (item) =>
      item.title &&
      item.title.trim() !== '' &&
      item.desc &&
      item.desc.trim() !== '',
  );

  if (!displayTitle && !displayBadge && items.length === 0) {
    return null;
  }

  return (
    <section
      id="approach"
      className="py-24 md:py-28 bg-customBg relative overflow-hidden border-t border-customBorder/60"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
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

        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((item, index) => (
              <FadeIn
                key={index}
                delay={index * 0.15}
                direction="up"
                className="h-full"
              >
                <div className="h-full bg-customSurface/50 backdrop-blur-xl p-8 md:p-10 border border-customBorder/80 hover:border-customAccent/50 transition-all duration-300 group rounded-3xl flex flex-col items-start shadow-lg hover:shadow-2xl hover:shadow-customAccent/5">
                  <h3 className="text-xl font-bold font-heading text-customText mb-3 tracking-tight group-hover:text-customAccent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-customMuted text-sm md:text-base leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
