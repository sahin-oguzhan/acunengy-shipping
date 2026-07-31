import React from 'react';
import { getHomePageData } from '@/lib/api';
import FadeIn from '@/components/FadeIn';

export default async function Services({ dict, locale }) {
  const wpData = await getHomePageData(locale);

  // Başlıklar
  const displayBadge = wpData?.servicesBadge || dict?.badge;
  const displayTitle = wpData?.servicesTitle || dict?.title;
  const displayDesc = wpData?.servicesDesc || dict?.description;
  const displayBtnLearnMore =
    wpData?.servicesBtn || dict?.btnLearnMore || 'LEARN MORE';

  // 1. DİNAMİK LİSTE
  const wpServices = (wpData?.servicesList || []).filter(
    (item) => item.title && item.title.trim() !== '',
  );

  // 2. YEDEK LİSTE
  const fallbackServices = [
    { icon: 'anchor', title: dict?.srv1Title, description: dict?.srv1Desc },
    {
      icon: 'directions_boat',
      title: dict?.srv2Title,
      description: dict?.srv2Desc,
    },
    {
      icon: 'precision_manufacturing',
      title: dict?.srv3Title,
      description: dict?.srv3Desc,
    },
    {
      icon: 'architecture',
      title: dict?.srv4Title,
      description: dict?.srv4Desc,
    },
    { icon: 'wind_power', title: dict?.srv5Title, description: dict?.srv5Desc },
    {
      icon: 'support_agent',
      title: dict?.srv6Title,
      description: dict?.srv6Desc,
    },
  ];

  const finalServices =
    wpServices.length > 0
      ? wpServices.map((item) => ({
          icon: item.icon,
          title: item.title,
          description: item.desc,
        }))
      : fallbackServices;

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg">
      {/* Başlık Alanı */}
      <FadeIn direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 block font-semibold">
            {displayBadge}
          </span>
          <h2 className="text-3xl md:text-5xl text-customText font-bold mb-6 font-heading tracking-tight">
            {displayTitle}
          </h2>
          <p className="text-customMuted text-base md:text-lg">{displayDesc}</p>
        </div>
      </FadeIn>

      {/* Dinamik Kart Gridi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {finalServices.map((service, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="up">
            <div className="bg-customSurface p-8 md:p-10 border border-customBorder hover:border-customAccent/50 transition-all duration-300 group shadow-sm hover:shadow-2xl rounded-sm flex flex-col justify-between h-full hover:-translate-y-1">
              <div>
                {/* İkon */}
                <span className="material-symbols-outlined text-4xl text-customText group-hover:text-customAccent transition-colors mb-6 block">
                  {service.icon}
                </span>

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
                href="#"
                className="font-mono text-xs text-customText font-bold flex items-center gap-2 group-hover:gap-4 group-hover:text-customAccent transition-all uppercase tracking-wider"
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
