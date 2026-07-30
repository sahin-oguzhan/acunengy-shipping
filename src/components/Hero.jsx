import React from 'react';

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden mt-[-96px]">
      {/* Arka Plan Görseli ve Gradient Maskesi */}
      <div className="absolute inset-0 z-0">
        {/* Light/Dark moda göre değişen renk geçişi (Görselin üzerine binen gölge) */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBg via-customBg/60 to-transparent z-10"></div>
        <img
          alt="Elite Maritime Vessel"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5N5ADsClhyAQqL9MWEVlS2XqwuRw3IXuiRZoJ6thpkbgC1LrO2ARgsMtiZuUGrbheJBShttkXUKSnPsUWlVlr7yso4r9OdO_gte48xCk4n3H2x3O8cmQp98fHKJXqrI1C04iCsCgD1oCjlI1Y3TFxQw5HsvQhZNyaXYVIrEhWxa-SS3B882H2WfacLQlsF9TKPSO9WzSGSOoJuHjnU-VVDjWM3BR6bH-pYpiGArFsbfTjkLc7Q-Gd"
        />
      </div>

      {/* İçerik Kutusu (Glass Panel) */}
      <div className="relative z-20 px-6 md:px-16 max-w-5xl mt-24">
        <div className="bg-customBg/70 backdrop-blur-md p-10 md:p-16 border-l-4 border-l-customAccent border border-customBorder shadow-xl">
          <p className="font-mono text-xs md:text-sm text-customAccent mb-4 tracking-[0.3em] uppercase">
            Premier Logistics Hub
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-customText mb-6 leading-tight font-bold tracking-tighter">
            Global Maritime Solutions <br />
            <span className="text-customAccent">Beyond Expectations</span>
          </h1>

          <p className="text-base md:text-lg text-customMuted mb-10 max-w-2xl border-l border-customBorder pl-6">
            Ship Agency • Project Cargo • Heavy Lift Logistics • Port
            Operations. Engineering the future of global commerce with precision
            and unwavering dedication.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-customAccent text-customBg px-10 py-4 font-mono text-sm uppercase tracking-widest hover:opacity-80 transition-all font-bold">
              Request a Quote
            </button>
            <button className="border border-customBorder text-customText px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-customSurface transition-all font-bold backdrop-blur-md">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
