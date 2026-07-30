import React from 'react';

export default function EliteAdvantage({ dict }) {
  const advantages = [
    {
      icon: 'schedule',
      title: dict?.adv1Title,
      description: dict?.adv1Desc,
    },
    {
      icon: 'speed',
      title: dict?.adv2Title,
      description: dict?.adv2Desc,
    },
    {
      icon: 'verified_user',
      title: dict?.adv3Title,
      description: dict?.adv3Desc,
    },
  ];

  return (
    <section className="py-24 overflow-hidden bg-customBg border-t border-customBorder">
      <div className="px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Sol Taraf: Asimetrik Görsel Izgarası */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-customCard overflow-hidden rounded-sm border border-customBorder">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="High-tech maritime navigation system"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPSmiiDYXulwX8QLYzLAbhMgd4CQ0WlYbpH3-RCssLqlzRIgvkDG_z9rma-ZMU9C2Io7b7HvA3qCIIYOMvlayNl4ni4r7JSBvYTnKOJfMLVLjk5Kd6c51asoGtGO_Uyi2bUHMm3S99ug22Sd2O6dI0PZhEzXHu6STXMAQ_L44KPbA0-Ak2S5zC6LGJkqZKzbGt_UJMGIKnBwrVTgiI4aNVI-vKrQzioSQ2kuSKFz-CYWToMLRmBqfT"
                />
              </div>
              <div className="aspect-[4/5] bg-customCard overflow-hidden rounded-sm border border-customBorder">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Specialized heavy-lift vessel"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6U5iAk0DbOz9TtE6PiJGH50AaQZV33EQCzowviTGCtX53r6H3VsDcqIljLh9FU-Lgj5_is1QIpGKQgTCTobNEJRV4vA26cwaamZp6gNHvThprwdGeTgsd2HHxAE9SyOmTn2TrswC-m9cM9dRviI_7OMrNoOpDugSswfVxXBuiXCBkf6sIKNgP_h69873yJx6qzlyolqMEbKWIRWOd4Qdr0ksHo3PUD45NtABucyo5ADqpy4ErnfnP"
                />
              </div>
            </div>

            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] bg-customCard overflow-hidden rounded-sm border border-customBorder">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Logistics professionals"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLafVVUMdFGwjfFQGQdMw3U5dvj0yFtUUNE6cBh5FjP-reznBCh8Iuiq55f3gjZJaqoGWnGIy6skBxCMyvNOS5rxgZM5eFqfnIxHE0jXsklvGcL6mH5yo-bE8l0iZ7YL7VzW-DC-Sdq9AlDSDNGqC6n63A8Gg4IJglWgD6NLX3ENo44bSe-skAOk02ydmuQCx7PksNVRfFbh4E-RpNJ21wUFEbzvYyxJjthWNgTxqTV4ZA0m3ShNph"
                />
              </div>
              <div className="aspect-square bg-customCard overflow-hidden rounded-sm border border-customBorder">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Ship engine detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFfDpDIh5KTSun_wPrsjpSU6M_dBz3NaqgQwTEbqgm-V-3y8uL773kP_b6GNt_Tj1ph5YwTvmMuZjaMvWh2-ElgcU8E8sZvHbp13Pc-Qmiirck8xX8N9cnLZBDBNhz6zDhIOrQMs9bx85pbAQK1LKmP5k-ov2lKjUC_ix3nagoA6qt8_QDf-eWo0dYIHhVd2VwO-AA1UuWuk7tMLeWEOzkhk50V0IZdbux0XI2Gf4gWLD3_RelTyEG"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Metin ve Avantajlar */}
        <div className="order-1 lg:order-2">
          <span className="font-mono text-sm text-customAccent tracking-widest uppercase mb-4 block font-bold">
            {dict?.badge}
          </span>
          <h2 className="text-4xl md:text-5xl text-customText font-bold mb-12 leading-tight font-heading">
            {dict?.title1} <br className="hidden md:block" /> {dict?.title2}
          </h2>

          <div className="space-y-10">
            {advantages.map((adv, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="w-16 h-16 flex-shrink-0 bg-customCard border border-customBorder flex items-center justify-center group-hover:bg-customAccent group-hover:border-customAccent transition-all rounded-sm shadow-sm">
                  <span className="material-symbols-outlined text-customText group-hover:text-customBg transition-colors text-3xl">
                    {adv.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-customText text-xl font-bold font-heading mb-2">
                    {adv.title}
                  </h4>
                  <p className="text-customMuted leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
