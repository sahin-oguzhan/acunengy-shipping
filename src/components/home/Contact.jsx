'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FadeIn from '@/components/ui/FadeIn';

export default function Contact({ wpData, locale = 'tr' }) {
  const formRef = useRef();
  const isTr = locale.toLowerCase() === 'tr';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_service: '',
    message: '',
  });

  const contactData = wpData?.pageFields?.contactGroup;

  const displayBadge = contactData?.badge;
  const displayTitle = contactData?.title;
  const displayDesc = contactData?.description;
  const displayPhone = contactData?.phone;
  const displayEmail = contactData?.email;
  const displayAddress = contactData?.address;
  const whatsappUrl = contactData?.whatsapp;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          setFormData({
            user_name: '',
            user_email: '',
            user_service: '',
            message: '',
          });

          setTimeout(() => setSubmitStatus(null), 4000);
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
          console.error('EmailJS Error:', error.text);
        },
      );
  };

  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden bg-customBg border-t border-customBorder/80 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBONveGnvoRVEMwiZMsLDSl_IsHYJgsTx83HYglPA899m0IDbC0k-Sglu8GweCxD7Y7U4bNCM8URNOgzpHZanpv06uRJzX8vLI0KPH1i9iWYZ-JbCyQ2MCpu7e7GejNaUuYmofqKqGnPrOv0BDOlj4UBIDfVCCJFgzNuMnZZe7lEc_sKYlRk-KTWl04H2eaBMyerSQyL3yzt-1XC7gn9LN7r5XHdBcJwyEbFf1z_jSK8ZxyC56L9ylC')",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto items-center">
        <FadeIn direction="up">
          <div>
            {displayBadge && (
              <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
                {displayBadge}
              </span>
            )}
            {displayTitle && (
              <h2 className="text-3xl md:text-5xl text-customText font-black mb-6 font-heading tracking-tight">
                {displayTitle}
              </h2>
            )}
            {displayDesc && (
              <p className="text-customMuted text-base md:text-lg mb-12 leading-relaxed font-normal">
                {displayDesc}
              </p>
            )}

            <div className="space-y-8">
              {displayPhone && (
                <div className="flex gap-6 items-start group">
                  <div className="p-3.5 bg-customSurface/80 border border-customBorder rounded-2xl group-hover:border-customAccent/40 group-hover:bg-customAccent/15 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-customAccent text-2xl block">
                      emergency
                    </span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider">
                      {isTr ? 'ACİL OPERASYON MASASI' : 'EMERGENCY DESK'}
                    </h3>
                    <p className="text-customText text-lg md:text-xl font-bold font-mono mt-1 tracking-tight">
                      {displayPhone}
                    </p>
                  </div>
                </div>
              )}

              {displayEmail && (
                <div className="flex gap-6 items-start group">
                  <div className="p-3.5 bg-customSurface/80 border border-customBorder rounded-2xl group-hover:border-customAccent/40 group-hover:bg-customAccent/15 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-customAccent text-2xl block">
                      mail
                    </span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider">
                      {isTr ? 'GENEL BİLGİ & TALEPLER' : 'GENERAL INQUIRIES'}
                    </h3>
                    <p className="text-customText text-lg md:text-xl font-bold font-mono mt-1 tracking-tight">
                      {displayEmail}
                    </p>
                  </div>
                </div>
              )}

              {displayAddress && (
                <div className="flex gap-6 items-start group">
                  <div className="p-3.5 bg-customSurface/80 border border-customBorder rounded-2xl group-hover:border-customAccent/40 group-hover:bg-customAccent/15 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-customAccent text-2xl block">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider">
                      {isTr ? 'MERKEZ OFİS' : 'HEADQUARTERS'}
                    </h3>
                    <p className="text-customText text-sm md:text-base font-medium mt-1 leading-relaxed">
                      {displayAddress}
                    </p>
                  </div>
                </div>
              )}

              {whatsappUrl && (
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact via WhatsApp"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-all font-extrabold rounded-2xl shadow-lg hover:shadow-xl"
                  >
                    <span className="material-symbols-outlined text-lg">
                      chat
                    </span>
                    {isTr ? 'WHATSAPP İLE İLETİŞİME GEÇİN' : 'WHATSAPP DESK'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="bg-customSurface/60 backdrop-blur-xl p-8 md:p-12 border border-customBorder/80 rounded-3xl shadow-2xl relative z-10">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                    {isTr ? 'Ad Soyad' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder={isTr ? 'Ahmet Yılmaz' : 'John Doe'}
                    className="w-full bg-customBg/80 border border-customBorder/80 rounded-2xl text-customText p-4 focus:border-customAccent focus:outline-none transition-colors text-sm font-medium shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                    {isTr ? 'E-posta Adresi' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-customBg/80 border border-customBorder/80 rounded-2xl text-customText p-4 focus:border-customAccent focus:outline-none transition-colors text-sm font-medium shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="user_service_select"
                  className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block"
                >
                  {isTr ? 'Hizmet Seçiniz' : 'Select Service'}
                </label>

                <select
                  id="user_service_select"
                  name="user_service"
                  required
                  value={formData.user_service}
                  onChange={handleChange}
                  className="w-full bg-customBg/80 border border-customBorder/80 rounded-2xl text-customText p-4 focus:border-customAccent focus:outline-none transition-colors text-sm font-medium shadow-sm"
                >
                  <option value="">
                    {isTr ? 'Bir Hizmet Seçiniz...' : 'Select a Service...'}
                  </option>
                  <option value={isTr ? 'Gemi Acenteliği' : 'Ship Agency'}>
                    {isTr ? 'Gemi Acenteliği' : 'Ship Agency'}
                  </option>
                  <option
                    value={
                      isTr
                        ? 'Proje Kargo Koordinasyonu'
                        : 'Project Cargo Coordination'
                    }
                  >
                    {isTr
                      ? 'Proje Kargo Koordinasyonu'
                      : 'Project Cargo Coordination'}
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                  {isTr ? 'Mesaj & Detaylar' : 'Message & Specifications'}
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    isTr
                      ? 'Kargo detayları, liman bilgisi veya tarih aralığı giriniz...'
                      : 'Provide cargo details, port of call, or timeline...'
                  }
                  className="w-full bg-customBg/80 border border-customBorder/80 rounded-2xl text-customText p-4 focus:border-customAccent focus:outline-none transition-colors resize-none text-sm font-medium shadow-sm"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-mono text-xs uppercase tracking-widest transition-all font-extrabold rounded-2xl flex justify-center items-center gap-2 shadow-lg cursor-pointer ${
                  isSubmitting
                    ? 'bg-customMuted text-white cursor-not-allowed'
                    : 'bg-customAccent text-white hover:opacity-90 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                }`}
              >
                {isSubmitting
                  ? isTr
                    ? 'GÖNDERİLİYOR...'
                    : 'TRANSMITTING...'
                  : isTr
                    ? 'TALEP GÖNDER'
                    : 'SEND INQUIRY'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-emerald-400 font-mono text-xs font-bold text-center mt-4 bg-emerald-500/10 border border-emerald-500/30 py-3 rounded-xl">
                  {isTr
                    ? 'Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.'
                    : 'Inquiry successfully transmitted. Our desk will contact you shortly.'}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-rose-400 font-mono text-xs font-bold text-center mt-4 bg-rose-500/10 border border-rose-500/30 py-3 rounded-xl">
                  {isTr
                    ? 'Gönderim başarısız oldu. Lütfen tekrar deneyin veya doğrudan e-posta atın.'
                    : 'Transmission failed. Please try again or use direct email.'}
                </p>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
