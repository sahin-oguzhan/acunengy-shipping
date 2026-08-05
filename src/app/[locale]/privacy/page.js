import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default async function PrivacyPage({ params }) {
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
          {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
        </h1>

        <div className="space-y-6 text-customMuted text-sm md:text-base leading-relaxed">
          <p>
            {isTr
              ? 'Acunengy Shipping & Maritime Services olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu gizlilik politikası, web sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.'
              : 'At Acunengy Shipping & Maritime Services, we commit to protecting your personal data. This privacy policy explains how we process and safeguard information collected through our website.'}
          </p>

          <h2 className="text-xl font-bold text-customText pt-4">
            {isTr ? '1. Toplanan Veriler' : '1. Information We Collect'}
          </h2>
          <p>
            {isTr
              ? 'İletişim formları aracılığıyla paylaştığınız ad, soyad, e-posta adresi ve mesaj detayları gibi veriler yalnızca taleplerinize yanıt vermek amacıyla işlenir.'
              : 'Personal details such as name, email address, and inquiry messages submitted via our contact forms are processed solely to respond to your service inquiries.'}
          </p>

          <h2 className="text-xl font-bold text-customText pt-4">
            {isTr ? '2. Veri Güvenliği' : '2. Data Protection & Security'}
          </h2>
          <p>
            {isTr
              ? 'Verileriniz yetkisiz erişimlere ve üçüncü şahıslarla paylaşılmaya karşı endüstri standardı güvenlik önlemleri ile korunmaktadır.'
              : 'We implement industry-standard technical and organizational security measures to prevent unauthorized access or disclosure of your data.'}
          </p>

          <h2 className="text-xl font-bold text-customText pt-4">
            {isTr ? '3. İletişim' : '3. Contact Us'}
          </h2>
          <p>
            {isTr
              ? 'Gizlilik politikamızla ilgili tüm sorularınız için resmi e-posta adresimiz üzerinden bizimle iletişime geçebilirsiniz.'
              : 'For any inquiries regarding our privacy policy, please reach out through our official communications email.'}
          </p>
        </div>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
