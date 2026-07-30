import React from 'react';

export default function Footer({ dict }) {
  return (
    <footer className="w-full py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-customBg border-t border-customBorder">
      {/* 1. Sütun: Logo ve Hakkında */}
      <div className="col-span-1 lg:col-span-1">
        <div className="text-2xl text-customText font-bold tracking-tighter mb-6">
          ACUNENGY SHIPPING
        </div>
        <p className="text-customMuted text-sm leading-relaxed mb-8">
          {dict?.description}
        </p>
      </div>

      {/* 2. Sütun: Navigasyon */}
      <div>
        <h5 className="text-customText font-mono text-sm uppercase tracking-widest font-bold mb-6">
          {dict?.navTitle}
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.nav1}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.nav2}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.nav3}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.nav4}
            </a>
          </li>
        </ul>
      </div>

      {/* 3. Sütun: Kurumsal ve Hukuki */}
      <div>
        <h5 className="text-customText font-mono text-sm uppercase tracking-widest font-bold mb-6">
          {dict?.legalTitle}
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal1}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal2}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal3}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal4}
            </a>
          </li>
        </ul>
      </div>

      {/* 4. Sütun: Bülten Kaydı */}
      <div>
        <h5 className="text-customText font-mono text-sm uppercase tracking-widest font-bold mb-6">
          {dict?.subscribeTitle}
        </h5>
        <p className="text-customMuted text-sm mb-4">{dict?.subscribeDesc}</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder={dict?.placeholder}
            className="bg-customSurface border border-customBorder text-customText px-4 py-2 w-full focus:outline-none focus:border-customAccent text-sm"
          />
          <button className="bg-customAccent p-2 text-customBg hover:opacity-80 transition-opacity flex items-center justify-center">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>

      {/* Alt Bilgi ve Sosyal Medya */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4 pt-8 mt-8 border-t border-customBorder flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-customMuted font-mono text-xs uppercase tracking-widest">
          {dict?.rights}
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-customMuted hover:text-customAccent transition-all font-mono text-xs font-bold tracking-widest"
          >
            LINKEDIN
          </a>
          <a
            href="#"
            className="text-customMuted hover:text-customAccent transition-all font-mono text-xs font-bold tracking-widest"
          >
            TWITTER
          </a>
          <a
            href="#"
            className="text-customMuted hover:text-customAccent transition-all font-mono text-xs font-bold tracking-widest"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
}
