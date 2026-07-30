import React from 'react';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      {/* Sol Taraf: Yazılar */}
      <div>
        <span className="font-mono text-sm text-customMuted tracking-widest uppercase mb-4 block">
          About the Group
        </span>
        <h2 className="text-4xl md:text-5xl text-customText font-bold mb-8 leading-tight font-heading">
          Operational Precision <br /> Across Seven Seas
        </h2>

        <div className="space-y-6 text-customMuted text-lg mb-12">
          <p>
            ACUNENGY SHIPPING stands at the pinnacle of maritime excellence,
            providing bespoke engineering solutions and logistics management for
            the world's most complex industrial projects.
          </p>
          <p>
            With a global infrastructure spanning over 200 ports, we ensure your
            cargo moves with the discipline of architectural design and the
            fluidity of deep-water currents.
          </p>
        </div>

        {/* Alt Metrikler */}
        <div className="grid grid-cols-2 gap-8">
          <div className="border-t border-customBorder pt-6">
            <span className="font-mono text-customAccent text-3xl font-bold">
              24/7
            </span>
            <p className="font-mono text-sm text-customMuted mt-2 uppercase font-medium">
              Operational Readiness
            </p>
          </div>
          <div className="border-t border-customBorder pt-6">
            <span className="font-mono text-customAccent text-3xl font-bold">
              A++
            </span>
            <p className="font-mono text-sm text-customMuted mt-2 uppercase font-medium">
              Safety Rating
            </p>
          </div>
        </div>
      </div>

      {/* Sağ Taraf: Harita / Görsel Alanı */}
      <div className="relative h-[500px] bg-customCard rounded-lg overflow-hidden group border border-customBorder shadow-lg">
        <div className="w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-105">
          {/* Üstteki Karartma ve İkon */}
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 group-hover:bg-black/10 transition-colors duration-500">
            <div className="text-center">
              <span className="material-symbols-outlined text-customAccent text-6xl mb-4 drop-shadow-lg">
                public
              </span>
              <p className="font-mono text-sm text-white tracking-widest uppercase bg-black/60 px-4 py-2 rounded-md backdrop-blur-md border border-white/10">
                Interactive Network Map
              </p>
            </div>
          </div>
          {/* Arka Plan Görseli */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2Ku1L3VUQHoelL2fKUdURADfffHymeTpVfNujcQP9yNaLyAFhzuwA8xvUizMfdoBqJX5-tmgzmpOqHIVvi5EJ09O1Ys9aJ8VzmUzBpJhYRAB69OqCyvyfCsjeqvwo81kNRNDvFBD32MJCcdXnd5NOMC6Xk_eYUtv064S8NvnzDiDXDbxplPxFlNZ68J97_yK9JmTe2K8p7NeYdQw6vb3gZ_TshhE4VSBE9Tio4DLkWNIw7mYzgXsz')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
