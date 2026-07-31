import React from 'react';
import FadeIn from '@/components/FadeIn';

export default function Specializations() {
  const industries = [
    {
      id: 'wind',
      tag: 'Renewables & Green Tech',
      title: 'Wind Energy Logistics',
      desc: 'End-to-end transportation and heavy-lift operations for offshore and onshore wind turbine components, blades, and tower sections.',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200',
      specs: ['Offshore Turbines', 'Blade Transport', 'Port Marshalling'],
    },
    {
      id: 'oil-gas',
      tag: 'Energy Infrastructure',
      title: 'Oil & Gas Operations',
      desc: 'Specialized marine supply chain solutions, offshore rig support, and heavy equipment transport for global energy giants.',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
      specs: ['Rig Husbandry', 'Hazardous Cargo', '24/7 Supply Vessels'],
    },
    {
      id: 'infrastructure',
      tag: 'Heavy Engineering',
      title: 'Infrastructure & Mining',
      desc: 'Customized Project Cargo solutions for bridges, mining machinery, power plants, and large-scale industrial machinery.',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
      specs: ['Super Heavy Lift', 'Ro-Ro Operations', 'Route Surveys'],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg border-t border-customBorder relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Bölüm Başlığı */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs md:text-sm text-customAccent tracking-[0.2em] uppercase mb-4 block font-semibold">
                Industry Focus
              </span>
              <h2 className="text-3xl md:text-5xl text-customText font-bold font-heading tracking-tight">
                Sector Specializations
              </h2>
            </div>
            <p className="text-customMuted text-sm md:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
              Engineering-led maritime logistics tailored for the most demanding
              industrial sectors worldwide.
            </p>
          </div>
        </FadeIn>

        {/* Uzmanlık Kartları Gridi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.15} direction="up">
              <div className="group relative h-[480px] rounded-sm overflow-hidden border border-customBorder bg-customSurface flex flex-col justify-end p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Arka Plan Görseli & Gradient Maske */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061324] via-[#061324]/80 to-transparent z-10" />
                </div>

                {/* Kart İçeriği */}
                <div className="relative z-20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-customAccent font-bold mb-2 block">
                    {item.tag}
                  </span>

                  <h3 className="text-2xl font-bold font-heading text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Spesifikasyon Etiketleri */}
                  <div className="flex flex-wrap gap-2 mb-6 border-t border-white/10 pt-4">
                    {item.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-customAccent group-hover:text-white transition-colors font-bold"
                  >
                    Explore Sector Solutions
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
