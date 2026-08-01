import React from 'react';

export default function Footer({ dict, locale, wpData }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-24 pb-12 transition-colors duration-300 relative overflow-hidden">
      {/* Arka plan derinlik efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-customSurface/10 to-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* ÜST BÖLÜM: Minimalist & Şık Acil Durum Barı */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 mb-20 flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping shrink-0" />
            <div>
              <span className="font-mono text-[11px] text-[#38bdf8] tracking-widest uppercase font-extrabold block mb-1">
                24/7 EMERGENCY DESK
              </span>
              <h4 className="text-lg font-bold font-heading text-white tracking-tight">
                Immediate Vessel & Port Agency Support
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+902320000000"
              className="font-mono text-xs text-white bg-rose-600/90 hover:bg-rose-600 px-5 py-3.5 rounded-2xl font-bold transition-all flex items-center gap-2 uppercase tracking-wider shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">
                phone_in_talk
              </span>
              +90 (232) 000 00 00
            </a>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-white bg-emerald-600/90 hover:bg-emerald-600 px-5 py-3.5 rounded-2xl font-bold transition-all flex items-center gap-2 uppercase tracking-wider shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              WhatsApp Desk
            </a>
          </div>
        </div>

        {/* ANA LİNKLER VE BİLGİLER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Kolon 1: Marka ve Açıklama (4 Kolon) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                ACUNENGY
              </span>
              <span className="font-mono text-[10px] text-[#38bdf8] border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2.5 py-0.5 rounded-md uppercase font-bold">
                SHIPPING
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Global maritime solutions, heavy-lift engineering, and
              uncompromised port agency services across international trade
              corridors.
            </p>

            <div className="pt-2 font-mono text-xs text-gray-300 space-y-2">
              <p className="font-bold text-white">Turkish Global HQ:</p>
              <p className="text-gray-400">
                Atatürk Caddesi, No: 180, Alsancak, Izmir / Türkiye
              </p>
              <p className="text-[#38bdf8] font-semibold pt-1">
                ops@acunengy.com
              </p>
            </div>
          </div>

          {/* Kolon 2: Servisler (2 Kolon) */}
          <div className="lg:col-span-2 space-y-4 lg:pl-4">
            <h4 className="font-mono text-xs text-[#38bdf8] font-bold uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Ship Agency
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Project Cargo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Heavy Lift
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Offshore Support
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Chartering
                </a>
              </li>
            </ul>
          </div>

          {/* Kolon 3: Sertifikalar (2 Kolon) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-[#38bdf8] font-bold uppercase tracking-widest">
              Compliance
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-gray-400 font-medium">
              <li>BIMCO Member</li>
              <li>ISO 9001:2015</li>
              <li>ISO 14001 HSE</li>
              <li>FONASBA Certified</li>
            </ul>
          </div>

          {/* Kolon 4: Kompakt Harita (4 Kolon) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-[#38bdf8] font-bold uppercase tracking-widest">
              Global Office Location
            </h4>
            <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                title="Acunengy HQ Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.938834018332!2d27.1422!3d38.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI2JzA4LjkiTiAyN8KwMDgnMzEuOSJF!5e0!3m2!1sen!2str!4v1620000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(0.8) contrast(1.2) invert(0.9)',
                }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ALT BÖLÜM: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <p>© {currentYear} Acunengy Shipping & Maritime Services Inc.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              HSE Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
