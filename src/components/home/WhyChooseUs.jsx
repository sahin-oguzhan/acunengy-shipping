import React from 'react';
import { getHomePageData } from '@/lib/api';
import FadeIn from '@/components/ui/FadeIn';

export default async function WhyChooseUs({ dict, locale }) {
  const wpData = await getHomePageData(locale);

  const displayBadge =
    wpData?.advBadge || dict?.badge || 'THE ACUNENGY ADVANTAGE';
  const displayTitle1 =
    wpData?.advTitle1 || dict?.title1 || 'Engineering Precision';
  const displayTitle2 =
    wpData?.advTitle2 || dict?.title2 || 'Global Maritime Strength';
  const displayDesc =
    wpData?.whyDesc ||
    dict?.description ||
    'Built on uncompromised safety protocols and high-specification maritime infrastructure.';

  const wpAdvantages = (wpData?.advantagesList || []).filter(
    (item) => item.title && item.title.trim() !== '',
  );

  const fallbackAdvantages = [
    {
      icon: 'schedule',
      title: dict?.adv1Title || '24/7 Operational Desk',
      description:
        dict?.adv1Desc ||
        'Round-the-clock live operational support backing your fleet across major trade corridors.',
    },
    {
      icon: 'speed',
      title: dict?.adv2Title || 'Zero-Demurrage Target',
      description:
        dict?.adv2Desc ||
        'Marine engineering precision in cargo handling and route optimization for maximum efficiency.',
    },
    {
      icon: 'verified_user',
      title: dict?.adv3Title || '100% HSE Compliance',
      description:
        dict?.adv3Desc ||
        'Zero-incident target strictly aligned with international maritime safety codes and ISO standards.',
    },
  ];

  const finalAdvantages =
    wpAdvantages.length > 0
      ? wpAdvantages.map((item) => ({
          icon: item.icon || 'verified_user',
          title: item.title,
          description: item.desc || item.description,
        }))
      : fallbackAdvantages;

  return (
    <section className="py-28 px-6 md:px-16 bg-customBg border-t border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-customSurface/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* SOL TARAF: Modernize Edilmiş Asimetrik Görsel Izgarası */}
          <FadeIn direction="up" className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-customCard overflow-hidden rounded-3xl border border-customBorder/80 shadow-lg group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="High-tech maritime navigation system"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPSmiiDYXulwX8QLYzLAbhMgd4CQ0WlYbpH3-RCssLqlzRIgvkDG_z9rma-ZMU9C2Io7b7HvA3qCIIYOMvlayNl4ni4r7JSBvYTnKOJfMLVLjk5Kd6c51asoGtGO_Uyi2bUHMm3S99ug22Sd2O6dI0PZhEzXHu6STXMAQ_L44KPbA0-Ak2S5zC6LGJkqZKzbGt_UJMGIKnBwrVTgiI4aNVI-vKrQzioSQ2kuSKFz-CYWToMLRmBqfT"
                  />
                </div>
                <div className="aspect-[4/5] bg-customCard overflow-hidden rounded-3xl border border-customBorder/80 shadow-lg group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Specialized heavy-lift vessel"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6U5iAk0DbOz9TtE6PiJGH50AaQZV33EQCzowviTGCtX53r6H3VsDcqIljLh9FU-Lgj5_is1QIpGKQgTCTobNEJRV4vA26cwaamZp6gNHvThprwdGeTgsd2HHxAE9SyOmTn2TrswC-m9cM9dRviI_7OMrNoOpDugSswfVxXBuiXCBkf6sIKNgP_h69873yJx6qzlyolqMEbKWIRWOd4Qdr0ksHo3PUD45NtABucyo5ADqpy4ErnfnP"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div className="aspect-[4/5] bg-customCard overflow-hidden rounded-3xl border border-customBorder/80 shadow-lg group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Logistics professionals"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLafVVUMdFGwjfFQGQdMw3U5dvj0yFtUUNE6cBh5FjP-reznBCh8Iuiq55f3gjZJaqoGWnGIy6skBxCMyvNOS5rxgZM5eFqfnIxHE0jXsklvGcL6mH5yo-bE8l0iZ7YL7VzW-DC-Sdq9AlDSDNGqC6n63A8Gg4IJglWgD6NLX3ENo44bSe-skAOk02ydmuQCx7PksNVRfFbh4E-RpNJ21wUFEbzvYyxJjthWNgTxqTV4ZA0m3ShNph"
                  />
                </div>
                <div className="aspect-square bg-customCard overflow-hidden rounded-3xl border border-customBorder/80 shadow-lg group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Ship engine detail"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFfDpDIh5KTSun_wPrsjpSU6M_dBz3NaqgQwTEbqgm-V-3y8uL773kP_b6GNt_Tj1ph5YwTvmMuZjaMvWh2-ElgcU8E8sZvHbp13Pc-Qmiirck8xX8N9cnLZBDBNhz6zDhIOrQMs9bx85pbAQK1LKmP5k-ov2lKjUC_ix3nagoA6qt8_QDf-eWo0dYIHhVd2VwO-AA1UuWuk7tMLeWEOzkhk50V0IZdbux0XI2Gf4gWLD3_RelTyEG"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SAĞ TARAF: Metin, Açıklama ve Avantajlar */}
          <FadeIn direction="up" className="order-1 lg:order-2">
            <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
              {displayBadge}
            </span>
            <h2 className="text-3xl md:text-5xl text-customText font-black mb-6 leading-tight font-heading tracking-tight">
              {displayTitle1} <br className="hidden md:block" /> {displayTitle2}
            </h2>
            <p className="text-customMuted text-base md:text-lg leading-relaxed mb-10 font-normal">
              {displayDesc}
            </p>

            <div className="space-y-6">
              {finalAdvantages.map((adv, index) => (
                <div
                  key={index}
                  className="flex gap-5 group p-4 rounded-2xl transition-all duration-300 hover:bg-customSurface/50 border border-transparent hover:border-customBorder/80"
                >
                  <div className="w-14 h-14 flex-shrink-0 bg-customSurface border border-customBorder flex items-center justify-center group-hover:bg-customAccent group-hover:border-customAccent transition-all rounded-2xl shadow-sm">
                    <span className="material-symbols-outlined text-customAccent group-hover:text-slate-950 transition-colors text-2xl">
                      {adv.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-customText text-lg font-bold font-heading mb-1.5 group-hover:text-customAccent transition-colors tracking-tight">
                      {adv.title}
                    </h4>
                    <p className="text-customMuted text-sm leading-relaxed font-normal">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
