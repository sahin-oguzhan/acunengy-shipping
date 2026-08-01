import React from 'react';
import FadeIn from '@/components/FadeIn';

export default async function Services({ dict, locale, wpData }) {
  // Başlıklar: WP'de varsa onu kullan, yoksa dict'e dön
  const displayBadge =
    wpData?.servicesBadge || dict?.badge || 'CORE COMPETENCIES';
  const displayTitle = wpData?.servicesTitle || dict?.title || 'Core Services';
  const displayDesc =
    wpData?.servicesDesc ||
    dict?.description ||
    'Providing specialized maritime and logistics solutions across global trade corridors.';
  const displayBtnLearnMore =
    wpData?.servicesBtn || dict?.btnLearnMore || 'LEARN MORE';

  // 1. DİNAMİK LİSTE (WordPress)
  const wpServices = (wpData?.servicesList || []).filter(
    (item) => item.title && item.title.trim() !== '',
  );

  // 2. YEDEK LİSTE (Brief ile %100 Birebir Uyumlu Fallback)
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

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg border-t border-customBorder/50">
      {/* Başlık Alanı */}
      <FadeIn direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 block font-semibold">
            {displayBadge}
          </span>
          <h2 className="text-3xl md:text-5xl text-customText font-bold mb-6 font-heading tracking-tight">
            {displayTitle}
          </h2>
          <p className="text-customMuted text-base md:text-lg leading-relaxed">
            {displayDesc}
          </p>
        </div>
      </FadeIn>

      {/* Dinamik Kart Gridi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {finalServices.map((service, index) => (
          <FadeIn key={index} delay={index * 0.08} direction="up">
            <div className="bg-customSurface p-8 md:p-10 border border-customBorder hover:border-customAccent/50 transition-all duration-300 group shadow-sm hover:shadow-2xl rounded-sm flex flex-col justify-between h-full hover:-translate-y-1.5">
              <div>
                {/* İkon Kutusu */}
                <div className="p-3 bg-customBg border border-customBorder w-fit rounded mb-6 group-hover:border-customAccent/30 group-hover:bg-customAccent/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-customAccent block">
                    {service.icon}
                  </span>
                </div>

                {/* Başlık */}
                <h3 className="text-xl font-bold font-heading text-customText mb-4">
                  {service.title}
                </h3>

                {/* Açıklama */}
                <p className="text-customMuted mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Link / Buton */}
              <a
                href="#contact"
                className="font-mono text-xs text-customText font-bold flex items-center gap-2 group-hover:gap-3 group-hover:text-customAccent transition-all uppercase tracking-wider"
              >
                {displayBtnLearnMore}{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
