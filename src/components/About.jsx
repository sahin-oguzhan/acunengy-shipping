import React from 'react';

export default async function About({ dict, locale, wpData }) {
  // Eşleştirmeler: WP'de varsa onu kullan, yoksa JSON (dict) yedeğine dön
  const displayBadge = wpData?.aboutBadge || dict?.badge || 'ACUNENGY MARITIME';
  const displayTitle1 =
    wpData?.aboutTitle1 || dict?.title1 || 'Engineering Precision in';
  const displayTitle2 =
    wpData?.aboutTitle2 || dict?.title2 || 'Global Logistics & Shipping';
  const displayDesc1 =
    wpData?.aboutDesc1 ||
    dict?.desc1 ||
    'Delivering high-end port agency, vessel husbandry, and heavy-lift logistics solutions worldwide.';
  const displayDesc2 =
    wpData?.aboutDesc2 ||
    dict?.desc2 ||
    'With round-the-clock operational oversight, we bridge international trade corridors with marine engineering excellence.';

  // Metrikler ve Harita yazısı
  const displayMetric1Value =
    wpData?.aboutMetric1Value || dict?.metric1Value || '24/7';
  const displayMetric1Label =
    wpData?.aboutMetric1Label || dict?.metric1Label || 'Live Operations';
  const displayMetric2Value =
    wpData?.aboutMetric2Value || dict?.metric2Value || '100%';
  const displayMetric2Label =
    wpData?.aboutMetric2Label || dict?.metric2Label || 'Port Compliance';
  const displayLiveMap =
    wpData?.aboutLiveMap || dict?.liveMap || 'LIVE AIS TRAFFIC';

  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Sol Taraf: Yazılar ve 24/7 + Global Vurguları */}
      <div>
        <span className="font-mono text-xs text-customAccent tracking-widest uppercase mb-4 block font-semibold">
          {displayBadge}
        </span>
        <h2 className="text-3xl md:text-5xl text-customText font-bold mb-6 leading-tight font-heading">
          {displayTitle1} <br />
          <span className="text-customAccent">{displayTitle2}</span>
        </h2>

        <div className="space-y-4 text-customMuted text-base md:text-lg mb-8 leading-relaxed">
          <p>{displayDesc1}</p>
          <p>{displayDesc2}</p>
        </div>

        {/* BRIEF 4.2 ÖZEL DOKUNUŞU: 24/7 Support & Global Scale Kutuları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="p-4 rounded border border-customBorder bg-customBg/50 flex items-start gap-3">
            <div className="p-2 bg-customAccent/10 text-customAccent rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-customText uppercase tracking-wider">
                24/7 Operational Support
              </h4>
              <p className="text-xs text-customMuted mt-1">
                Non-stop husbandry and emergency response team.
              </p>
            </div>
          </div>

          <div className="p-4 rounded border border-customBorder bg-customBg/50 flex items-start gap-3">
            <div className="p-2 bg-customAccent/10 text-customAccent rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.372m-2.5 0a2.5 2.5 0 00-2.5-2.5H14a2 2 0 01-2-2V4.372"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-customText uppercase tracking-wider">
                Global Reach
              </h4>
              <p className="text-xs text-customMuted mt-1">
                Seamless logistics across strategic shipping hubs.
              </p>
            </div>
          </div>
        </div>

        {/* Alt Metrikler */}
        <div className="grid grid-cols-2 gap-8 border-t border-customBorder pt-6">
          <div>
            <span className="font-mono text-customAccent text-3xl font-bold">
              {displayMetric1Value}
            </span>
            <p className="font-mono text-xs text-customMuted mt-1 uppercase font-medium tracking-wider">
              {displayMetric1Label}
            </p>
          </div>
          <div>
            <span className="font-mono text-customAccent text-3xl font-bold">
              {displayMetric2Value}
            </span>
            <p className="font-mono text-xs text-customMuted mt-1 uppercase font-medium tracking-wider">
              {displayMetric2Label}
            </p>
          </div>
        </div>
      </div>

      {/* Sağ Taraf: Canlı AIS Haritası */}
      <div className="relative h-[480px] lg:h-[540px] bg-customCard rounded-lg overflow-hidden border border-customBorder shadow-2xl">
        {/* Sol Üst "Canlı" Rozeti */}
        <div className="absolute top-4 left-4 z-20 bg-[#0B2341]/90 backdrop-blur-md border border-customBorder/80 px-3.5 py-1.5 rounded-md flex items-center gap-2.5 shadow-lg pointer-events-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
            {displayLiveMap}
          </span>
        </div>

        {/* VesselFinder Canlı Harita İframe'i */}
        <iframe
          name="vesselfinder"
          id="vesselfinder"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Live Vessel Tracking"
          className="absolute inset-0 z-10 filter opacity-90 contrast-125"
          src="https://www.vesselfinder.com/aismap?zoom=6&lat=38.42&lon=27.14&width=100%25&height=100%25&names=false&track=true&fleet=false&fleet_name=false&fleet_hide_old_positions=false&clicktoact=false&default_maptype=1&cursor=hidden"
        ></iframe>
      </div>
    </section>
  );
}
