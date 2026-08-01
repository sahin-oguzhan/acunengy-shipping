import React from 'react';
import FadeIn from '@/components/FadeIn';

export default function Footer({ dict, locale, wpData }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2341] text-white border-t border-white/10 pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* ÜST BÖLÜM: 24/7 Emergency Operations Banner */}
        <div className="bg-[#12325A] border border-customAccent/30 rounded-lg p-6 md:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full animate-pulse">
              <span className="material-symbols-outlined text-2xl">
                emergency
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-customAccent tracking-widest uppercase font-bold">
                24/7 EMERGENCY RESPONSE DESK
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                Urgent Vessel & Husbandry Assistance
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+902320000000"
              className="font-mono text-xs text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded font-bold transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-base">
                phone_in_talk
              </span>
              Duty Agent Direct: +90 (232) 000 00 00
            </a>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded font-bold transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              WhatsApp 24/7
            </a>
          </div>
        </div>

        {/* ORTA BÖLÜM: HQ Detayları, Harita ve Linkler (4 Kolon Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Kolon 1: Marka & Turkish HQ Adresi (4 Kolon) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                ACUNENGY
              </span>
              <span className="font-mono text-xs text-customAccent border border-customAccent/40 px-2 py-0.5 rounded uppercase">
                SHIPPING
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Global Maritime Solutions & Heavy-Lift Engineering. Providing
              world-class port agency, chartering, and offshore support.
            </p>

            {/* Turkish HQ Bilgileri */}
            <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-customAccent text-base mt-0.5">
                  location_on
                </span>
                <div>
                  <strong className="text-white block font-sans text-sm">
                    Turkish Global HQ:
                  </strong>
                  Atatürk Caddesi, No: 180, Alsancak Port District, Izmir /
                  Türkiye
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-customAccent text-base">
                  mail
                </span>
                <span>ops@acunengy.com</span>
              </div>
            </div>
          </div>

          {/* Kolon 2: Hızlı Navigasyon (2 Kolon) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-customAccent font-bold uppercase tracking-widest">
              SERVICES
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-customAccent transition-colors"
                >
                  Ship Agency
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-customAccent transition-colors"
                >
                  Project Cargo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-customAccent transition-colors"
                >
                  Heavy Lift
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-customAccent transition-colors"
                >
                  Offshore Support
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-customAccent transition-colors"
                >
                  Chartering
                </a>
              </li>
            </ul>
          </div>

          {/* Kolon 3: Sertifikasyonlar & Üyelikler (2 Kolon) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-customAccent font-bold uppercase tracking-widest">
              COMPLIANCE
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-customAccent"></span>
                BIMCO Member
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-customAccent"></span>
                ISO 9001:2015
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-customAccent"></span>
                ISO 14001 HSE
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-customAccent"></span>
                FONASBA Certified
              </li>
            </ul>
          </div>

          {/* Kolon 4: Google Maps HQ Integration (4 Kolon) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs text-customAccent font-bold uppercase tracking-widest">
              HQ LOCATION MAP
            </h4>
            <div className="relative h-44 rounded-md overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="Acunengy HQ Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.938834018332!2d27.1422!3d38.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI2JzA4LjkiTiAyN8KwMDgnMzEuOSJF!5e0!3m2!1sen!2str!4v1620000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ALT BÖLÜM: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <p>
            © {currentYear} Acunengy Shipping & Maritime Services Inc. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Agency
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
