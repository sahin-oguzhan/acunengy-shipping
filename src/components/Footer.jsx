import React from 'react';

export default function Footer({ dict, wpData }) {
  // Dinamik Değerler (WP ACF -> JSON Dict -> Hardcoded Fallback)
  const logoText = wpData?.footerLogo || 'ACUNENGY SHIPPING';
  const description = wpData?.footerDesc || dict?.description;
  const linkedin = wpData?.socialLinkedin || '#';
  const twitter = wpData?.socialTwitter || '#';
  const instagram = wpData?.socialInstagram || '#';
  const rightsText =
    wpData?.footerRights ||
    dict?.rights ||
    '© 2026 ACUNENGY SHIPPING. ALL RIGHTS RESERVED.';

  // Navigasyon Linkleri
  const nav1Label = wpData?.nav1Label || dict?.nav1 || 'About Us';
  const nav1Url = wpData?.nav1Url || '#about';

  const nav2Label = wpData?.nav2Label || dict?.nav2 || 'Services';
  const nav2Url = wpData?.nav2Url || '#services';

  const nav3Label = wpData?.nav3Label || dict?.nav3 || 'Industries';
  const nav3Url = wpData?.nav3Url || '#industries';

  const nav4Label = wpData?.nav4Label || dict?.nav4 || 'Contact';
  const nav4Url = wpData?.nav4Url || '#contact';

  return (
    <footer className="w-full py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-customBg border-t border-customBorder">
      {/* 1. Sütun: Logo ve Hakkında */}
      <div className="col-span-1 lg:col-span-1">
        <div className="text-2xl text-customText font-bold tracking-tighter mb-6">
          {logoText}
        </div>
        <p className="text-customMuted text-sm leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* 2. Sütun: Navigasyon */}
      <div>
        <h5 className="text-customText font-mono text-sm uppercase tracking-widest font-bold mb-6">
          {dict?.navTitle || 'NAVIGATION'}
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              href={nav1Url}
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {nav1Label}
            </a>
          </li>
          <li>
            <a
              href={nav2Url}
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {nav2Label}
            </a>
          </li>
          <li>
            <a
              href={nav3Url}
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {nav3Label}
            </a>
          </li>
          <li>
            <a
              href={nav4Url}
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {nav4Label}
            </a>
          </li>
        </ul>
      </div>

      {/* 3. Sütun: Kurumsal ve Hukuki */}
      <div>
        <h5 className="text-customText font-mono text-sm uppercase tracking-widest font-bold mb-6">
          {dict?.legalTitle || 'LEGAL'}
        </h5>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal1 || 'Privacy Policy'}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal2 || 'Terms of Service'}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal3 || 'Cookie Policy'}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customMuted hover:text-customAccent transition-colors text-sm font-medium"
            >
              {dict?.legal4 || 'Compliance'}
            </a>
          </li>
        </ul>
      </div>

      {/* 4. Sütun: Bülten Kaydı */}
      <div>
        <h5 className="text-customText font-mono text-sm uppercase tracking-widest font-bold mb-6">
          {dict?.subscribeTitle || 'NEWSLETTER'}
        </h5>
        <p className="text-customMuted text-sm mb-4">
          {dict?.subscribeDesc ||
            'Subscribe to stay updated with maritime insights.'}
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder={dict?.placeholder || 'Your email address...'}
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
          {rightsText}
        </p>
        <div className="flex gap-6">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-customMuted hover:text-customAccent transition-all font-mono text-xs font-bold tracking-widest"
          >
            LINKEDIN
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-customMuted hover:text-customAccent transition-all font-mono text-xs font-bold tracking-widest"
          >
            TWITTER
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-customMuted hover:text-customAccent transition-all font-mono text-xs font-bold tracking-widest"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
}
