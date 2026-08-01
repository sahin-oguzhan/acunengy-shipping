'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    'Ship Agency & Husbandry',
  );
  const [formData, setFormData] = useState({
    vesselName: '',
    port: '',
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    let newErrors = {};
    if (step === 2) {
      if (!formData.vesselName.trim())
        newErrors.vesselName = 'Vessel name is required.';
      if (!formData.port.trim()) newErrors.port = 'Target port is required.';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim())
      newErrors.email = 'Corporate email is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Otomatik kapanma süresi 5 saniyeye (5000ms) çıkarıldı
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 5000);
  };

  const services = [
    {
      title: 'Ship Agency & Husbandry',
      desc: 'Port clearance, crew changes, and bunker operations.',
      icon: 'anchor',
    },
    {
      title: 'Technical Support & Spares',
      desc: 'OEM certified marine engineering and logistics.',
      icon: 'precision_manufacturing',
    },
    {
      title: 'Project Cargo & Heavy Lift',
      desc: 'OOG transport, wind turbines, and industrial assets.',
      icon: 'directions_boat',
    },
    {
      title: 'Maritime Survey & Inspection',
      desc: 'Draft surveys, off-hire evaluations, and safety audits.',
      icon: 'verified_user',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          /* max-h-[75vh] ile yüksekliği küçültüldü, mt-16 ile Navbar'dan mesafe bırakıldı */
          className="relative w-full max-w-2xl max-h-[75vh] mt-16 md:mt-20 overflow-y-auto custom-scrollbar bg-customSurface border border-customBorder/80 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] p-6 md:p-8 text-customText backdrop-blur-3xl"
        >
          {/* Üst Kısım: Durum ve Kapatma */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-customBorder/80">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-customAccent animate-pulse shadow-[0_0_10px_var(--customAccent)]" />
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-customAccent font-extrabold">
                EXECUTIVE DESK // STEP {step} OF 3
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
              {/* ADIM 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-1">
                      Select Operation Framework
                    </h3>
                    <p className="text-customMuted text-xs">
                      Choose the primary maritime division required for your
                      fleet.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((srv) => (
                      <div
                        key={srv.title}
                        onClick={() => setSelectedService(srv.title)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                          selectedService === srv.title
                            ? 'border-customAccent bg-customAccent/10 shadow-lg shadow-customAccent/5'
                            : 'border-customBorder hover:border-customAccent/40 bg-customBg/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`material-symbols-outlined text-2xl transition-colors ${
                              selectedService === srv.title
                                ? 'text-customAccent'
                                : 'text-customMuted group-hover:text-customText'
                            }`}
                          >
                            {srv.icon}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              selectedService === srv.title
                                ? 'border-customAccent bg-customAccent text-slate-950 font-bold text-[10px]'
                                : 'border-customBorder'
                            }`}
                          >
                            {selectedService === srv.title && '✓'}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-xs md:text-sm tracking-tight mb-0.5 text-customText">
                            {srv.title}
                          </h4>
                          <p className="text-[11px] text-customMuted leading-tight">
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
                      Proceed to Parameters →
                    </button>
                  </div>
                </div>
              )}

              {/* ADIM 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-1">
                      Vessel & Location
                    </h3>
                    <p className="text-customMuted text-xs">
                      Provide vessel identification for terminal scheduling.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                        Vessel Name / IMO Number{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. MV ACUNENGY / IMO 9876543"
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
                        Target Port / Terminal{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alsancak Port / Nemrut Bay"
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
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 bg-customAccent text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:brightness-110 shadow-lg shadow-customAccent/20 transition-all cursor-pointer"
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* ADIM 3 */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-1">
                      Representative Details
                    </h3>
                    <p className="text-customMuted text-xs">
                      Where should our commercial desk transmit the official
                      estimate?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="font-mono text-xs text-customMuted uppercase font-bold tracking-wider block">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Captain / Manager"
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
                          Corporate Email{' '}
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
                        Additional Scope / Remarks
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Laycan dates, specific cargo constraints..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-customBg border border-customBorder rounded-xl p-3.5 text-sm focus:outline-none focus:border-customAccent text-customText transition-colors resize-none placeholder:text-customMuted/40 font-medium"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 bg-slate-800 dark:bg-transparent border border-slate-700 dark:border-customBorder text-white dark:text-customMuted hover:text-white dark:hover:text-customText text-xs font-mono uppercase font-bold rounded-xl transition-all cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-3 bg-customAccent text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:brightness-110 shadow-xl shadow-customAccent/30 transition-all cursor-pointer"
                    >
                      DISPATCH TENDER ✓
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
                Parameters Dispatched
              </h3>
              <p className="text-customMuted text-sm font-normal max-w-sm mx-auto leading-relaxed">
                Executive port operations desk connection established. Official
                response incoming within 2 hours.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
