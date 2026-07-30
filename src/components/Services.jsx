import React from 'react';

const servicesData = [
  {
    icon: 'anchor',
    title: 'Ship Agency',
    description:
      'Comprehensive husbandry services, vessel clearance, and berth management with zero-delay protocols.',
  },
  {
    icon: 'directions_boat',
    title: 'Port Operations',
    description:
      'Advanced stevedoring, terminal management, and real-time cargo tracking for optimal throughput efficiency.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Project Cargo',
    description:
      'Expertise in over-dimensional cargo movements, engineering route surveys, and specialized lifting solutions.',
  },
  {
    icon: 'architecture',
    title: 'Heavy Lift Logistics',
    description:
      "Specialized vessel chartering and engineering oversight for the world's heaviest industrial components.",
  },
  {
    icon: 'wind_power',
    title: 'Wind Energy',
    description:
      'Dedicated offshore wind farm supply chain management, from component storage to marshalling and assembly.',
  },
  {
    icon: 'support_agent',
    title: 'Hub Agency',
    description:
      'Single-point financial management and coordination for global fleets operating across multiple regions.',
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-16 bg-customBg">
      {/* Başlık Alanı */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <span className="font-mono text-xs md:text-sm text-customMuted tracking-widest uppercase mb-4 block font-medium">
          Our Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl text-customText font-bold mb-6 font-heading tracking-tight">
          Integrated Maritime Services
        </h2>
        <p className="text-customMuted text-base md:text-lg">
          End-to-end solutions managed with technical mastery and local
          expertise in every major global territory.
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
              LEARN MORE{' '}
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
