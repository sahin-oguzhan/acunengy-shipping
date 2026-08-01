import React from 'react';
import FadeIn from '@/components/FadeIn';

export default function WhyChooseUs({ dict, locale, wpData }) {
  const displayBadge =
    wpData?.whyBadge || dict?.badge || 'THE ACUNENGY ADVANTAGE';
  const displayTitle =
    wpData?.whyTitle || dict?.title || 'Why Industry Leaders Choose Us';
  const displayDesc =
    wpData?.whyDesc ||
    dict?.description ||
    'Built on engineering precision, uncompromised safety protocols, and a global maritime footprint.';

  const pillars = [
    {
      id: 'safety',
      code: 'PILLAR-01',
      title: 'Safety First (HSE Standard)',
      icon: 'verified_user',
      desc: 'Zero-incident target across all heavy-lift, offshore, and port operations. Strictly aligned with international maritime safety codes and ISO standards.',
      metric: '100% HSE Compliance',
    },
    {
      id: 'excellence',
      code: 'PILLAR-02',
      title: 'Operational Excellence',
      icon: 'precision_manufacturing',
      desc: 'Marine engineering precision in cargo handling, route optimization, and quayside logistics. Zero demurrage delay philosophy.',
      metric: 'Zero-Demurrage Target',
    },
    {
      id: 'network',
      code: 'PILLAR-03',
      title: 'Global Network & 24/7 Access',
      icon: 'public',
      desc: 'Round-the-clock live operational desk backing your fleet across major trade corridors, strategic straits, and deep-water ports.',
      metric: '24/7 Live Support',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg border-t border-customBorder transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
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

        {/* 3 Değer Önerisi Sütunu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.id} delay={index * 0.1} direction="up">
              <div className="bg-customSurface p-8 md:p-10 rounded-lg border border-customBorder hover:border-customAccent/50 transition-all duration-300 group shadow-sm hover:shadow-xl flex flex-col justify-between h-full hover:-translate-y-1.5">
                <div>
                  {/* Kod & İkon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-customMuted font-semibold tracking-wider">
                      {pillar.code}
                    </span>
                    <div className="p-3 bg-customBg border border-customBorder rounded-md group-hover:border-customAccent/30 group-hover:bg-customAccent/10 transition-colors">
                      <span className="material-symbols-outlined text-2xl text-customAccent block">
                        {pillar.icon}
                      </span>
                    </div>
                  </div>

                  {/* Başlık */}
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customText mb-4 group-hover:text-customAccent transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="text-customMuted text-sm leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                </div>

                {/* Alt Metrik Çizgisi */}
                <div className="pt-4 border-t border-customBorder flex items-center justify-between">
                  <span className="font-mono text-xs text-customAccent font-bold uppercase tracking-wider">
                    {pillar.metric}
                  </span>
                  <span className="material-symbols-outlined text-sm text-customMuted group-hover:text-customAccent group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
