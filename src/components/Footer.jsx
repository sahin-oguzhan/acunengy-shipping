import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#061324] text-slate-300 border-t border-customBorder pt-16 pb-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Kolon 1: Marka & Misyon */}
        <div>
          <h3 className="text-xl font-bold font-heading text-white tracking-wider mb-4">
            ACUNENGY <span className="text-customAccent">SHIPPING</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Global maritime solutions, project cargo logistics, and 24/7 ship
            agency excellence for world-class shipping lines.
          </p>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-customSurface border border-customBorder rounded font-mono text-xs text-customAccent">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            24/7 Operational Status
          </span>
        </div>

        {/* Kolon 2: Hızlı Linkler */}
        <div>
          <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-xs mb-6">
            Core Specializations
          </h4>
          <ul className="space-y-3 font-mono text-xs text-slate-400">
            <li>
              <a href="#" className="hover:text-customAccent transition-colors">
                Ship Agency & Husbandry
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customAccent transition-colors">
                Project Cargo & Heavy Lift
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customAccent transition-colors">
                Offshore & Wind Energy Logistics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customAccent transition-colors">
                Port Operations & Survey
              </a>
            </li>
          </ul>
        </div>

        {/* Kolon 3: Brief HQ Bilgileri */}
        <div>
          <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-xs mb-6">
            Global Headquarters
          </h4>
          <address className="not-italic text-sm text-slate-400 space-y-3">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-customAccent text-base mt-0.5">
                location_on
              </span>
              <span>Mistral Tower, Konak / İzmir, Türkiye</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-customAccent text-base">
                mail
              </span>
              <a
                href="mailto:shipping@acunengy.com"
                className="hover:text-white transition-colors font-mono text-xs"
              >
                shipping@acunengy.com
              </a>
            </div>
          </address>
        </div>

        {/* Kolon 4: Güvenlik & Sertifikasyon */}
        <div>
          <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-xs mb-6">
            Compliance & Standards
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Operating under international maritime safety standards, BIMCO
            membership protocols, and ISO 9001 compliance.
          </p>
          <div className="flex gap-2 font-mono text-[10px] text-slate-500 uppercase">
            <span className="border border-slate-800 px-2 py-1 rounded">
              BIMCO Member
            </span>
            <span className="border border-slate-800 px-2 py-1 rounded">
              ISO 9001
            </span>
          </div>
        </div>
      </div>

      {/* Alt Telif Şeridi */}
      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-mono">
        <p>
          © {new Date().getFullYear()} Acunengy Shipping. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-300">
            Terms of Operation
          </a>
          <a href="#" className="hover:text-slate-300">
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}
