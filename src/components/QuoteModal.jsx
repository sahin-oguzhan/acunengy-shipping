'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: 'Ship Agency',
    vesselName: '',
    port: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 2500);
  };

  const serviceOptions = [
    { id: 'agency', label: 'Ship Agency & Husbandry', icon: 'anchor' },
    {
      id: 'technical',
      label: 'Technical Support & Spare Parts',
      icon: 'precision_manufacturing',
    },
    {
      id: 'logistics',
      label: 'Project Cargo & Heavy Lift',
      icon: 'directions_boat',
    },
    {
      id: 'survey',
      label: 'Maritime Survey & Inspection',
      icon: 'verified_user',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-customSurface border border-customBorder rounded-lg shadow-2xl overflow-hidden p-6 md:p-8 text-customText"
        >
          {/* Kapat Butonu */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-customMuted hover:text-customText transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {!isSubmitted ? (
            <>
              {/* Adım İlerleme Çubuğu */}
              <div className="mb-8">
                <span className="font-mono text-xs uppercase text-customAccent tracking-widest block mb-2 font-semibold">
                  Step {step} of 3
                </span>
                <div className="w-full h-1 bg-customBorder rounded-full overflow-hidden">
                  <div
                    className="h-full bg-customAccent transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Başlıkları */}
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    Select Service Needed
                  </h3>
                  <p className="text-customMuted text-sm mb-6">
                    Which service can we assist your vessel with?
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, serviceType: opt.label })
                        }
                        className={`p-4 rounded-sm border text-left flex items-start gap-4 transition-all ${
                          formData.serviceType === opt.label
                            ? 'border-customAccent bg-customAccent/10 text-customText'
                            : 'border-customBorder hover:border-customAccent/40 bg-customBg/50 text-customMuted'
                        }`}
                      >
                        <span className="material-symbols-outlined text-customAccent text-2xl">
                          {opt.icon}
                        </span>
                        <div>
                          <div className="font-bold text-sm text-customText">
                            {opt.label}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    Vessel & Operation Details
                  </h3>
                  <p className="text-customMuted text-sm mb-6">
                    Provide location and vessel identification.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-xs font-mono uppercase text-customMuted mb-2">
                        Vessel Name / IMO Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. MV ACUNENGY I / IMO 9876543"
                        value={formData.vesselName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            vesselName: e.target.value,
                          })
                        }
                        className="w-full bg-customBg border border-customBorder rounded p-3 text-sm focus:outline-none focus:border-customAccent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-customMuted mb-2">
                        Target Port / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tuzla Shipyard / Nemrut Bay"
                        value={formData.port}
                        onChange={(e) =>
                          setFormData({ ...formData, port: e.target.value })
                        }
                        className="w-full bg-customBg border border-customBorder rounded p-3 text-sm focus:outline-none focus:border-customAccent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    Contact Details
                  </h3>
                  <p className="text-customMuted text-sm mb-6">
                    Where should we send your official quote?
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-customMuted mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Captain / Manager Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-customBg border border-customBorder rounded p-3 text-sm focus:outline-none focus:border-customAccent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-customMuted mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-customBg border border-customBorder rounded p-3 text-sm focus:outline-none focus:border-customAccent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-customMuted mb-2">
                        Additional Scope / Remarks
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any specific technical constraints or timing details..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-customBg border border-customBorder rounded p-3 text-sm focus:outline-none focus:border-customAccent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Butonlar */}
              <div className="flex justify-between items-center pt-4 border-t border-customBorder">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-2 border border-customBorder text-customMuted hover:text-customText text-sm font-mono uppercase font-bold rounded"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 bg-customAccent text-customBg font-mono text-xs uppercase tracking-widest font-bold rounded hover:brightness-110"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-customAccent text-customBg font-mono text-xs uppercase tracking-widest font-bold rounded hover:brightness-110"
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <span className="material-symbols-outlined text-6xl text-customAccent mb-4 block">
                check_circle
              </span>
              <h3 className="text-2xl font-bold font-heading mb-2">
                Quote Request Sent!
              </h3>
              <p className="text-customMuted text-sm">
                Our 24/7 port operations desk has received your request and will
                reach out shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
