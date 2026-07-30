import React from 'react';

export default function Services({ dict }) {
  const servicesData = [
    {
      icon: 'anchor',
      title: dict?.srv1Title,
      description: dict?.srv1Desc,
    },
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
    {
      icon: 'wind_power',
      title: dict?.srv5Title,
      description: dict?.srv5Desc,
    },
    {
      icon: 'support_agent',
      title: dict?.srv6Title,
      description: dict?.srv6Desc,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg">
      {/* Başlık Alanı */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <span className="font-mono text-xs md:text-sm text-customMuted tracking-widest uppercase mb-4 block font-medium">
          {dict?.badge}
        </span>
        <h2 className="text-3xl md:text-5xl text-customText font-bold mb-6 font-heading tracking-tight">
          {dict?.title}
        </h2>
        <p className="text-customMuted text-base md:text-lg">
          {dict?.description}
        </p>
      </div>

      {/* 6'lı Kart Gridi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-customSurface p-8 md:p-10 border border-customBorder hover:border-customAccent transition-all duration-300 group shadow-sm hover:shadow-xl rounded-sm flex flex-col justify-between"
          >
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
              {dict?.btnLearnMore || 'LEARN MORE'}{' '}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
