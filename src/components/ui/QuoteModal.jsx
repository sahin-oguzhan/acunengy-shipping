'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteModal({ isOpen, onClose, locale = 'tr' }) {
  const isTr = locale.toLowerCase() === 'tr';

  const defaultServices = [
    {
      id: 'ship-agency',
      title: isTr ? 'Gemi Acenteliği' : 'Ship Agency',
      desc: isTr
        ? 'Liman giriş-çıkış formaliteleri, gümrük evrakları ve boğaz transit geçiş klerens işlemleri.'
        : 'Port entrance/exit clearance, customs formalities, and Turkish straits transit clearance.',
      icon: 'directions_boat',
    },
    {
      id: 'project-cargo',
      title: isTr ? 'Proje Kargo Koordinasyonu' : 'Project Cargo Coordination',
      desc: isTr
        ? 'Ağır yük, gabari dışı kargo ve rüzgar enerjisi ekipmanlarının taşıma planlaması.'
        : 'Transport planning and coordination for heavy-lift, out-of-gauge, and wind energy equipment.',
      icon: 'precision_manufacturing',
    },
  ];

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    defaultServices[0].title,
  );
  const [formData, setFormData] = useState({
    vesselName: '',
    port: '',
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    let newErrors = {};
    if (step === 2) {
      if (!formData.vesselName.trim())
        newErrors.vesselName = isTr
          ? 'Gemi adı zorunludur.'
          : 'Vessel name is required.';
      if (!formData.port.trim())
        newErrors.port = isTr
          ? 'Hedef liman zorunludur.'
          : 'Target port is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim())
      newErrors.name = isTr ? 'Ad Soyad zorunludur.' : 'Full name is required.';
    if (!formData.email.trim())
      newErrors.email = isTr
        ? 'E-posta adresi zorunludur.'
        : 'Corporate email is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: selectedService,
          subject: `[TEKLİF TALEBİ] ${selectedService} - ${formData.vesselName || formData.name}`,
          message: `🚢 Gemi / IMO: ${formData.vesselName}\n📍 Hedef Liman: ${formData.port}\n📝 Ek Notlar: ${formData.message || 'Belirtilmedi'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setStep(1);
          setFormData({
            vesselName: '',
            port: '',
            name: '',
            email: '',
            message: '',
          });
          onClose();
        }, 4000);
      } else {
        throw new Error('API Hatası');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Modal API Error:', error);
      setErrors({
        submit: isTr
          ? 'Gönderim başarısız oldu. Lütfen tekrar deneyin.'
          : 'Transmission failed. Please try again.',
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[75vh] mt-16 md:mt-20 overflow-y-auto custom-scrollbar bg-customSurface border border-customBorder/80 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] p-6 md:p-8 text-customText backdrop-blur-3xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-customBorder/80">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-customAccent animate-pulse shadow-[0_0_10px_var(--customAccent)]" />
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-customAccent font-extrabold">
                {isTr ? 'OPERASYON MASASI' : 'EXECUTIVE DESK'} /{' '}
                {isTr ? 'ADIM' : 'STEP'} {step} / 3
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 dark:bg-customBg border border-slate-700 dark:border-customBorder flex items-center justify-center text-white dark:text-customMuted hover:bg-slate-700 dark:hover:text-customText hover:border-customAccent transition-all cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-xs">close</span>
            </button>
          </div>

          {!isSubmitted ? (
            <div>
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-1">
                      {isTr
                        ? 'Hizmet Türü Seçiniz'
                        : 'Select Service Framework'}
                    </h3>
                    <p className="text-customMuted text-xs">
                      {isTr
                        ? 'Operasyonunuz için gerekli olan ana hizmet alanını belirleyin.'
                        : 'Choose the primary maritime division required for your operation.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {defaultServices.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv.title)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                          selectedService === srv.title
                            ? 'border-customAccent bg-customAccent/10 shadow-lg shadow-customAccent/5'
                            : 'border-customBorder hover:border-customAccent/40 bg-customBg/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`material-symbols-outlined text-3xl transition-colors ${
                              selectedService === srv.title
                                ? 'text-customAccent'
                                : 'text-customMuted group-hover:text-customText'
                            }`}
                          >
                            {srv.icon}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              selectedService === srv.title
                                ? 'border-customAccent bg-customAccent text-slate-950 font-bold text-xs'
                                : 'border-customBorder'
                            }`}
                          >
                            {selectedService === srv.title && '✓'}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm md:text-base tracking-tight mb-1 text-customText">
                            {srv.title}
                          </h4>
                          <p className="text-xs text-customMuted leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 bg-customAccent text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:brightness-110 shadow-lg shadow-customAccent/20 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      {isTr ? 'Devam Et →' : 'Proceed to Parameters →'}
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-1">
                      {isTr ? 'Gemi ve Lokasyon Bilgisi' : 'Vessel & Location'}
                    </h3>
                    <p className="text-customMuted text-xs">
                      {isTr
                        ? 'Liman ve terminal planlaması için gemi detaylarını giriniz.'
                        : 'Provide vessel identification for terminal scheduling.'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                        {isTr
                          ? 'Gemi Adı / IMO Numarası'
                          : 'Vessel Name / IMO Number'}{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: MV ACUNENGY / IMO 9876543"
                        value={formData.vesselName}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            vesselName: e.target.value,
                          });
                          if (errors.vesselName)
                            setErrors({ ...errors, vesselName: null });
                        }}
                        className={`w-full bg-customBg border rounded-xl p-3.5 text-sm focus:outline-none transition-colors text-customText placeholder:text-customMuted/40 font-medium ${
                          errors.vesselName
                            ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                            : 'border-customBorder focus:border-customAccent'
                        }`}
                      />
                      {errors.vesselName && (
                        <p className="text-red-500 text-[11px] font-bold mt-1">
                          {errors.vesselName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                        {isTr
                          ? 'Hedef Liman / Terminal'
                          : 'Target Port / Terminal'}{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: Alsancak Limanı / Nemrut Körfezi"
                        value={formData.port}
                        onChange={(e) => {
                          setFormData({ ...formData, port: e.target.value });
                          if (errors.port) setErrors({ ...errors, port: null });
                        }}
                        className={`w-full bg-customBg border rounded-xl p-3.5 text-sm focus:outline-none transition-colors text-customText placeholder:text-customMuted/40 font-medium ${
                          errors.port
                            ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                            : 'border-customBorder focus:border-customAccent'
                        }`}
                      />
                      {errors.port && (
                        <p className="text-red-500 text-[11px] font-bold mt-1">
                          {errors.port}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 bg-slate-800 dark:bg-transparent border border-slate-700 dark:border-customBorder text-white dark:text-customMuted hover:text-white dark:hover:text-customText text-xs font-mono uppercase font-bold rounded-xl transition-all cursor-pointer"
                    >
                      ← {isTr ? 'Geri' : 'Back'}
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 bg-customAccent text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:brightness-110 shadow-lg shadow-customAccent/20 transition-all cursor-pointer"
                    >
                      {isTr ? 'Devam Et →' : 'Continue →'}
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-1">
                      {isTr ? 'İletişim Bilgileri' : 'Representative Details'}
                    </h3>
                    <p className="text-customMuted text-xs">
                      {isTr
                        ? 'Resmi teklif özetinin iletileceği yetkili bilgilerini giriniz.'
                        : 'Where should our commercial desk transmit the official estimate?'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                          {isTr ? 'Ad Soyad' : 'Full Name'}{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={
                            isTr ? 'Kaptan / Yetkili' : 'Captain / Manager'
                          }
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name)
                              setErrors({ ...errors, name: null });
                          }}
                          className={`w-full bg-customBg border rounded-xl p-3.5 text-sm focus:outline-none transition-colors text-customText placeholder:text-customMuted/40 font-medium ${
                            errors.name
                              ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                              : 'border-customBorder focus:border-customAccent'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-[11px] font-bold mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                          {isTr ? 'Kurumsal E-posta' : 'Corporate Email'}{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email)
                              setErrors({ ...errors, email: null });
                          }}
                          className={`w-full bg-customBg border rounded-xl p-3.5 text-sm focus:outline-none transition-colors text-customText placeholder:text-customMuted/40 font-medium ${
                            errors.email
                              ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                              : 'border-customBorder focus:border-customAccent'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[11px] font-bold mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                        {isTr
                          ? 'Ek Notlar / Detaylar'
                          : 'Additional Scope / Remarks'}
                      </label>
                      <textarea
                        rows={2}
                        placeholder={
                          isTr
                            ? 'Laycan tarihleri, özel kargo gereksinimleri...'
                            : 'Laycan dates, specific cargo constraints...'
                        }
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-customBg border border-customBorder rounded-xl p-3.5 text-sm focus:outline-none focus:border-customAccent text-customText transition-colors resize-none placeholder:text-customMuted/40 font-medium"
                      />
                    </div>

                    {errors.submit && (
                      <p className="text-red-500 font-mono text-xs font-bold text-center">
                        {errors.submit}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handlePrev}
                      className="px-5 py-3 bg-slate-800 dark:bg-transparent border border-slate-700 dark:border-customBorder text-white dark:text-customMuted hover:text-white dark:hover:text-customText text-xs font-mono uppercase font-bold rounded-xl transition-all cursor-pointer disabled:opacity-50"
                    >
                      ← {isTr ? 'Geri' : 'Back'}
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 bg-customAccent text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:brightness-110 shadow-xl shadow-customAccent/30 transition-all cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmitting
                        ? isTr
                          ? 'GÖNDERİLİYOR...'
                          : 'TRANSMITTING...'
                        : isTr
                          ? 'TEKLİFİ GÖNDER ✓'
                          : 'DISPATCH TENDER ✓'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="py-10 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20 animate-bounce">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h3 className="text-2xl font-black font-heading tracking-tight text-customText">
                {isTr ? 'Talebiniz Alındı' : 'Parameters Dispatched'}
              </h3>
              <p className="text-customMuted text-sm font-normal max-w-sm mx-auto leading-relaxed">
                {isTr
                  ? 'Operasyon masamıza talebiniz iletildi. En kısa sürede sizinle iletişime geçilecektir.'
                  : 'Executive port operations desk connection established. Official response incoming within 2 hours.'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
