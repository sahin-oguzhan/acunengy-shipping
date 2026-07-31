'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ dict, wpData }) {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_service: '',
    message: '',
  });

  // Dinamik Metinler ve İletişim Bilgileri (WP ACF -> Dict/Fallback)
  const displayBadge = wpData?.contactBadge || dict?.badge || 'CONTACT US';
  const displayTitle = wpData?.contactTitle || dict?.title || 'Get in Touch';
  const displayDesc = wpData?.contactDesc || dict?.description;

  const displayPhone = wpData?.contactPhone || '+90 532 XXX XX XX';
  const displayEmail = wpData?.contactEmail || 'shipping@acunengy.com';
  const displayAddress =
    wpData?.contactAddress ||
    'Plaza Cubes Office Solutions, Mistral Tower, Konak / İzmir, Türkiye';
  const whatsappUrl = wpData?.contactWhatsapp || '#';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Key
    emailjs
      .sendForm(
        'service_lcw0fqz', // SERVICE_ID
        'template_gsq0q5s', // TEMPLATE_ID
        formRef.current,
        'jQFpGWnhcgr9QoCsM', // PUBLIC_KEY
      )
      .then(
        (result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          setFormData({
            user_name: '',
            user_email: '',
            user_service: '',
            message: '',
          });

          setTimeout(() => setSubmitStatus(null), 3000);
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
          console.log(error.text);
        },
      );
  };

  return (
    <section className="relative py-24 overflow-hidden bg-customBg border-t border-customBorder">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBONveGnvoRVEMwiZMsLDSl_IsHYJgsTx83HYglPA899m0IDbC0k-Sglu8GweCxD7Y7U4bNCM8URNOgzpHZanpv06uRJzX8vLI0KPH1i9iWYZ-JbCyQ2MCpu7e7GejNaUuYmofqKqGnPrOv0BDOlj4UBIDfVCCJFgzNuMnZZe7lEc_sKYlRk-KTWl04H2eaBMyerSQyL3yzt-1XC7gn9LN7r5XHdBcJwyEbFf1z_jSK8ZxyC56L9ylC')",
          }}
        ></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {/* Sol Taraf: İletişim Bilgileri */}
        <div>
          <span className="font-mono text-sm text-customAccent tracking-widest uppercase mb-4 block font-bold">
            {displayBadge}
          </span>
          <h2 className="text-4xl md:text-5xl text-customText font-bold mb-8 font-heading">
            {displayTitle}
          </h2>
          <p className="text-customMuted text-lg mb-12">{displayDesc}</p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-customAccent text-3xl">
                emergency
              </span>
              <div>
                <p className="font-mono text-sm text-customMuted uppercase font-bold">
                  {dict?.emergency}
                </p>
                <p className="text-customText text-xl font-bold font-mono mt-1">
                  {displayPhone}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-customAccent text-3xl">
                mail
              </span>
              <div>
                <p className="font-mono text-sm text-customMuted uppercase font-bold">
                  {dict?.general}
                </p>
                <p className="text-customText text-xl font-bold font-mono mt-1">
                  {displayEmail}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-customAccent text-3xl">
                location_on
              </span>
              <div>
                <p className="font-mono text-sm text-customMuted uppercase font-bold">
                  {dict?.office}
                </p>
                <p className="text-customText text-base font-medium mt-1 leading-relaxed">
                  {displayAddress}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-all font-bold rounded-sm shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined">chat</span>{' '}
                {dict?.whatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: İletişim Formu */}
        <div className="bg-customSurface/80 backdrop-blur-md p-8 md:p-10 border border-customBorder rounded-sm shadow-xl relative z-10">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-customMuted uppercase font-bold">
                  {dict?.formName}
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-customMuted uppercase font-bold">
                  {dict?.formEmail}
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-customMuted uppercase font-bold">
                {dict?.formService}
              </label>
              <select
                name="user_service"
                required
                value={formData.user_service}
                onChange={handleChange}
                className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select a Service...
                </option>
                <option value="Ship Agency">Ship Agency</option>
                <option value="Project Cargo">Project Cargo</option>
                <option value="Heavy Lift">Heavy Lift</option>
                <option value="Offshore Support">Offshore Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-customMuted uppercase font-bold">
                {dict?.formMessage}
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors resize-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-customBg py-4 font-mono text-sm uppercase tracking-widest transition-all font-bold mt-4 flex justify-center items-center gap-2
                ${isSubmitting ? 'bg-customMuted cursor-not-allowed' : 'bg-customAccent hover:opacity-80'}`}
            >
              {isSubmitting ? dict?.btnSending : dict?.btnSend}
            </button>

            {/* Bildirim Mesajları */}
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm font-bold text-center mt-4">
                {dict?.msgSuccess}
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm font-bold text-center mt-4">
                {dict?.msgError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
