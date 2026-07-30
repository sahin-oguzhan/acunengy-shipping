import React from 'react';

export default function Stats({ dict }) {
  return (
    <section className="py-16 md:py-20 bg-[#000d21] text-white border-y border-customBorder">
      <div className="px-4 md:px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center md:divide-x md:divide-white/10">
        <div className="px-2 md:px-4 lg:px-8">
          <div className="text-4xl lg:text-5xl text-customAccent mb-2 font-heading font-bold">
            50+
          </div>
          <div className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-white/60">
            {dict?.stat1Label || 'Countries Served'}
          </div>
        </div>

        <div className="px-2 md:px-4 lg:px-8">
          <div className="text-4xl lg:text-5xl text-customAccent mb-2 font-heading font-bold">
            200+
          </div>
          <div className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-white/60">
            {dict?.stat2Label || 'Ports Covered'}
          </div>
        </div>

        <div className="px-2 md:px-4 lg:px-8">
          <div className="text-4xl lg:text-5xl text-customAccent mb-2 font-heading font-bold">
            1500+
          </div>
          <div className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-white/60">
            {dict?.stat3Label || 'Projects Done'}
          </div>
        </div>

        <div className="px-2 md:px-4 lg:px-8">
          <div className="text-4xl lg:text-5xl text-customAccent mb-2 font-heading font-bold">
            24/7
          </div>
          <div className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-white/60">
            {dict?.stat4Label || 'Global Presence'}
          </div>
        </div>
      </div>
    </section>
  );
}
