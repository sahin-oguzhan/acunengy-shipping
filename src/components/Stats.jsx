import React from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import FadeIn from '@/components/FadeIn';

export default async function Stats({ dict, locale, wpData }) {
  // 1. WP'den gelen metriklerden hem SAYI hem de ETİKETİ dolu olanları süzüyoruz
  const wpStats = (wpData?.statsList || []).filter(
    (item) =>
      item.value &&
      item.value.trim() !== '' &&
      item.label &&
      item.label.trim() !== '',
  );

  // 2. YEDEK LİSTE (Brief 4.8 ile Birebir Eşleşen Fallback)
  const fallbackStats = [
    { value: '200+', label: dict?.stat1Label || 'Ports Covered' },
    { value: '1500+', label: dict?.stat2Label || 'Projects Completed' },
    { value: '99.9%', label: dict?.stat3Label || 'Fleet Availability' },
    { value: '24/7', label: dict?.stat4Label || 'Global Presence' },
  ];

  const finalStats = wpStats.length > 0 ? wpStats : fallbackStats;

  const gridColsClass =
    finalStats.length === 2
      ? 'md:grid-cols-2'
      : finalStats.length === 3
        ? 'md:grid-cols-3'
        : 'md:grid-cols-4';

  return (
    <section className="py-16 md:py-20 bg-customBg text-customText border-y border-customBorder transition-colors duration-300">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 ${gridColsClass} gap-y-10 text-center md:divide-x md:divide-customBorder`}
      >
        {finalStats.map((stat, index) => (
          <FadeIn key={index} delay={index * 0.15} direction="up">
            <div className="px-2 md:px-4 lg:px-8">
              {/* Metrik Sayı */}
              <div className="text-4xl lg:text-5xl text-customAccent mb-2 font-heading font-bold tracking-tight">
                <AnimatedCounter value={stat.value} />
              </div>
              {/* Metrik Etiket */}
              <div className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-customMuted font-medium">
                {stat.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
