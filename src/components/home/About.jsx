import React from 'react';

export default async function About({ dict, locale, wpData }) {
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
    <section className="py-28 px-6 md:px-16 bg-customSurface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Sol Taraf: Yazılar ve Modern Özellik Kartları */}
        <div>
          <span className="inline-block font-mono text-xs text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
            {displayBadge}
          </span>
          <h2 className="text-3xl md:text-5xl text-customText font-black mb-6 leading-tight tracking-tight">
            {displayTitle1} <br />
            <span className="text-customAccent">{displayTitle2}</span>
          </h2>

          <div className="space-y-4 text-customMuted text-base md:text-lg mb-10 leading-relaxed font-normal">
            <p>{displayDesc1}</p>
            <p>{displayDesc2}</p>
          </div>

          {/* Modernize Edilmiş 24/7 & Global Kartları (Yuvarlak hatlı ve cam efektli) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-2xl border border-customBorder/80 bg-customBg/60 backdrop-blur-xl flex items-start gap-4 shadow-sm hover:border-customAccent/40 transition-all duration-300">
              <div className="p-2.5 bg-customAccent/10 text-customAccent rounded-xl">
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
                <p className="text-xs text-customMuted mt-1 leading-relaxed">
                  Non-stop husbandry and emergency response team.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-customBorder/80 bg-customBg/60 backdrop-blur-xl flex items-start gap-4 shadow-sm hover:border-customAccent/40 transition-all duration-300">
              <div className="p-2.5 bg-customAccent/10 text-customAccent rounded-xl">
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
                <p className="text-xs text-customMuted mt-1 leading-relaxed">
                  Seamless logistics across strategic shipping hubs.
                </p>
              </div>
            </div>
          </div>

          {/* Alt Metrikler */}
          <div className="grid grid-cols-2 gap-8 border-t border-customBorder/80 pt-6">
            <div>
              <span className="font-mono text-customAccent text-4xl font-black tracking-tight">
                {displayMetric1Value}
              </span>
              <p className="font-mono text-xs text-customMuted mt-1 uppercase font-semibold tracking-wider">
                {displayMetric1Label}
              </p>
            </div>
            <div>
              <span className="font-mono text-customAccent text-4xl font-black tracking-tight">
                {displayMetric2Value}
              </span>
              <p className="font-mono text-xs text-customMuted mt-1 uppercase font-semibold tracking-wider">
                {displayMetric2Label}
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Canlı AIS Haritası (Daha pürüzsüz çerçeve ve şık rozet) */}
        <div className="relative h-[480px] lg:h-[540px] bg-customCard rounded-3xl overflow-hidden border border-customBorder shadow-2xl group">
          {/* Sol Üst Canlı Rozet */}
          <div className="absolute top-5 left-5 z-20 bg-customBg/90 backdrop-blur-md border border-customBorder px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-xl pointer-events-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-customText font-bold">
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
            className="absolute inset-0 z-10 filter contrast-110"
            src="https://www.vesselfinder.com/aismap?zoom=6&lat=38.42&lon=27.14&width=100%25&height=100%25&names=false&track=true&fleet=false&fleet_name=false&fleet_hide_old_positions=false&clicktoact=false&default_maptype=1&cursor=hidden"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
