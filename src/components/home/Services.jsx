'use client';

import React, { useMemo } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Services({ wpData }) {
  const headerData = wpData?.pageFields?.servicesHeaderGroup;
  const displayBadge = headerData?.badge || '';
  const displayTitle = headerData?.title || '';
  const displayDesc = headerData?.description || '';
  const displayBtnLearnMore = headerData?.btnText || 'LEARN MORE';

  const finalServices = useMemo(() => {
    const rawWpServices = wpData?.servicesList || [];
    return rawWpServices
      .filter((item) => item.title && item.title.trim() !== '')
      .map((item) => ({
        id: item.id,
        icon: item.serviceFields?.iconName || 'anchor',
        title: item.title,
        description: item.serviceFields?.shortDesc || '',
      }));
  }, [wpData?.servicesList]);

  const handleCardClick = (e) => {
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

  if (!displayTitle && !displayBadge && finalServices.length === 0) {
    return null;
  }

  return (
    <section
      id="services"
      className="py-24 md:py-28 bg-customBg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-customSurface/20 pointer-events-none" />

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

        {finalServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {finalServices.map((service, index) => (
              <FadeIn
                key={service.id || index}
                delay={index * 0.15}
                direction="up"
                className="h-full"
              >
                <div className="h-full bg-customSurface/60 backdrop-blur-xl p-8 md:p-10 border border-customBorder/80 hover:border-customAccent/60 transition-all duration-300 group/card shadow-lg hover:shadow-2xl hover:shadow-customAccent/5 rounded-3xl flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="p-4 bg-customBg/80 border border-customBorder w-fit rounded-2xl mb-6 group-hover/card:border-customAccent/40 group-hover/card:bg-customAccent/15 transition-all duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-3xl md:text-4xl text-customAccent block group-hover/card:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-customText mb-4 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-customMuted mb-8 text-sm md:text-base leading-relaxed font-normal whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    onClick={handleCardClick}
                    className="font-mono text-xs text-customText font-extrabold flex items-center gap-2 group-hover/card:gap-3.5 group-hover/card:text-customAccent transition-all uppercase tracking-wider w-fit cursor-pointer mt-auto"
                  >
                    {displayBtnLearnMore}{' '}
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/card:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-customBg to-transparent pointer-events-none z-10" />
    </section>
  );
}
