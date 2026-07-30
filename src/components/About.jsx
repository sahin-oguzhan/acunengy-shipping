import React from 'react';

export default function About({ dict }) {
  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      {/* Sol Taraf: Yazılar */}
      <div>
        <span className="font-mono text-sm text-customMuted tracking-widest uppercase mb-4 block">
          {dict.badge}
        </span>
        <h2 className="text-4xl md:text-5xl text-customText font-bold mb-8 leading-tight font-heading">
          {dict.title1} <br /> {dict.title2}
        </h2>

        <div className="space-y-6 text-customMuted text-lg mb-12">
          <p>{dict.desc1}</p>
          <p>{dict.desc2}</p>
        </div>

        {/* Alt Metrikler */}
        <div className="grid grid-cols-2 gap-8">
          <div className="border-t border-customBorder pt-6">
            <span className="font-mono text-customAccent text-3xl font-bold">
              {dict.metric1Value}
            </span>
            <p className="font-mono text-sm text-customMuted mt-2 uppercase font-medium">
              {dict.metric1Label}
            </p>
          </div>
          <div className="border-t border-customBorder pt-6">
            <span className="font-mono text-customAccent text-3xl font-bold">
              {dict.metric2Value}
            </span>
            <p className="font-mono text-sm text-customMuted mt-2 uppercase font-medium">
              {dict.metric2Label}
            </p>
          </div>
        </div>
      </div>

      {/* Sağ Taraf: Canlı AIS Haritası */}
      <div className="relative h-[500px] bg-customCard rounded-lg overflow-hidden border border-customBorder shadow-lg">
        {/* Sol Üst "Canlı" Rozeti */}
        <div className="absolute top-4 left-4 z-20 bg-customBg/80 backdrop-blur-md border border-customBorder px-3 py-1.5 rounded-md flex items-center gap-2 shadow-md pointer-events-none">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-customText font-bold">
            {dict.liveMap}
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
          className="absolute inset-0 z-10"
          src="https://www.vesselfinder.com/aismap?zoom=6&lat=38.42&lon=27.14&width=100%25&height=100%25&names=false&track=true&fleet=false&fleet_name=false&fleet_hide_old_positions=false&clicktoact=false&default_maptype=1&cursor=hidden"
        ></iframe>
      </div>
    </section>
  );
}
