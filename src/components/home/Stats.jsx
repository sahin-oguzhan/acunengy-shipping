import React from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import FadeIn from '@/components/ui/FadeIn';

export default async function Stats({ dict, locale, wpData }) {
  const wpStats = (wpData?.statsList || []).filter(
    (item) =>
      item.value &&
      item.value.trim() !== '' &&
      item.label &&
      item.label.trim() !== '',
  );

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
    <section className="py-16 md:py-24 bg-customBg text-customText border-y border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      {/* Hafif yumuşak arka plan efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-customSurface/20 via-customSurface/40 to-customSurface/20 pointer-events-none" />

      {/* Ekran genişliği max-w-[1400px] yapılarak kartların kapsayıcı içinde tam yayılması sağlandı */}
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
                {/* Sayısal Değer */}
                <div className="text-4xl md:text-5xl lg:text-6xl text-customAccent mb-3 font-black tracking-tight group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} />
                </div>

                {/* Etiket */}
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
