'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Services({ dict, locale, wpData }) {
  const [isPaused, setIsPaused] = useState(false);

  const displayBadge =
    wpData?.servicesBadge || dict?.badge || 'CORE COMPETENCIES';
  const displayTitle = wpData?.servicesTitle || dict?.title || 'Core Services';
  const displayDesc =
    wpData?.servicesDesc ||
    dict?.description ||
    'Providing specialized maritime and logistics solutions across global trade corridors.';
  const displayBtnLearnMore =
    wpData?.servicesBtn || dict?.btnLearnMore || 'LEARN MORE';

  const wpServices = (wpData?.servicesList || []).filter(
    (item) => item.title && item.title.trim() !== '',
  );

  const fallbackServices = [
    {
      icon: 'anchor',
      title: dict?.srv1Title || 'Ship Agency & Husbandry',
      description:
        dict?.srv1Desc ||
        'Full port agency, crew changes, bunkering, and round-the-clock husbandry services.',
    },
    {
      icon: 'directions_boat',
      title: dict?.srv2Title || 'Project Cargo Logistics',
      description:
        dict?.srv2Desc ||
        'End-to-end management for complex infrastructure, energy, and heavy cargo worldwide.',
    },
    {
      icon: 'precision_manufacturing',
      title: dict?.srv3Title || 'Heavy Lift Engineering',
      description:
        dict?.srv3Desc ||
        'Specialized marine engineering and transport for out-of-gauge ultra-heavy loads.',
    },
    {
      icon: 'wind_power',
      title: dict?.srv4Title || 'Offshore Marine Support',
      description:
        dict?.srv4Desc ||
        'Supply vessel chartering, offshore platform logistics, and subsea equipment support.',
    },
    {
      icon: 'architecture',
      title: dict?.srv5Title || 'Chartering & Broking',
      description:
        dict?.srv5Desc ||
        'Custom vessel chartering solutions for dry bulk, breakbulk, and specialized project shipments.',
    },
    {
      icon: 'support_agent',
      title: dict?.srv6Title || '24/7 Operations Desk',
      description:
        dict?.srv6Desc ||
        'Dedicated emergency and operational support team active across global time zones.',
    },
  ];

  const finalServices =
    wpServices.length > 0
      ? wpServices.map((item) => ({
          icon: item.icon || 'anchor',
          title: item.title,
          description: item.desc || item.description,
        }))
      : fallbackServices;

  const duplicatedServices = [
    ...finalServices,
    ...finalServices,
    ...finalServices,
  ];

  return (
    <section className="py-28 bg-customBg border-t border-customBorder/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-customSurface/20 pointer-events-none" />

      <FadeIn direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-6 relative z-10">
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

      {/* Yatay Kayan Döngü Alanı */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-4">
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-customBg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-customBg to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-8 animate-services-scroll px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="w-[340px] md:w-[380px] bg-customSurface/60 backdrop-blur-xl p-8 md:p-10 border border-customBorder/80 hover:border-customAccent/50 transition-all duration-300 group/card shadow-lg hover:shadow-2xl rounded-3xl flex flex-col justify-between shrink-0 whitespace-normal"
            >
              <div>
                <div className="p-3.5 bg-customBg/80 border border-customBorder w-fit rounded-2xl mb-6 group-hover/card:border-customAccent/40 group-hover/card:bg-customAccent/15 transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-customAccent block group-hover/card:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-customText mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-customMuted mb-8 text-sm md:text-base leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                className="font-mono text-xs text-customText font-extrabold flex items-center gap-2 group-hover/card:gap-3.5 group-hover/card:text-customAccent transition-all uppercase tracking-wider w-fit"
              >
                {displayBtnLearnMore}{' '}
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/card:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
