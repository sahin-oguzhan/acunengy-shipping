import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default async function TermsPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const isTr = locale === 'tr';

  return (
    <main className="min-h-screen bg-customBg text-customText pt-36 pb-20 px-6 md:px-16 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full mb-20">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 font-mono text-xs text-customAccent font-bold uppercase mb-8 hover:underline"
        >
          ← {isTr ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>

        <h1 className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-8">
          {isTr ? 'Kullanım Şartları' : 'Terms of Service'}
        </h1>

        <div className="space-y-6 text-customMuted text-sm md:text-base leading-relaxed">
          <p>
            {isTr
              ? 'Bu web sitesini kullanarak aşağıda belirtilen şartları kabul etmiş sayılırsınız.'
              : 'By accessing and using this website, you agree to comply with the following terms of service.'}
          </p>

          <h2 className="text-xl font-bold text-customText pt-4">
            {isTr ? '1. Fikri Mülkiyet' : '1. Intellectual Property'}
          </h2>
          <p>
            {isTr
              ? 'Bu sitede yer alan tüm içerik, amblem, görsel ve yazılı materyaller Acunengy Shipping & Maritime Services mülkiyetindedir.'
              : 'All materials, text, branding, and content displayed on this website are the intellectual property of Acunengy Shipping & Maritime Services.'}
          </p>

          <h2 className="text-xl font-bold text-customText pt-4">
            {isTr ? '2. Hizmet Şartları' : '2. Service Information'}
          </h2>
          <p>
            {isTr
              ? 'Sitede sunulan bilgiler bilgilendirme amaçlıdır. Bağlayıcı navlun teklifleri ve operasyonel şartlar yazılı sözleşmelerle belirlenir.'
              : 'Information provided on this site is for general communication. Binding operational commitments and freight quotations are executed via formal written agreements.'}
          </p>
        </div>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
