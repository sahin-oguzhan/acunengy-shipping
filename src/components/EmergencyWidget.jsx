'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmergencyWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Brief'teki iletişim bilgileri
  const whatsappNumber = '905300000000'; // Müşterinin gerçek WhatsApp hattı
  const defaultMessage = encodeURIComponent(
    'Hello Acunengy 24/7 Desk, I require urgent maritime/port agency support.',
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Pop-up Kartı */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-4 w-72 md:w-80 bg-customSurface border border-customBorder rounded-lg shadow-2xl p-5 text-customText backdrop-blur-md"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                24/7 Operations Desk
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-customMuted hover:text-customText transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            <h4 className="font-heading font-bold text-base mb-1">
              Urgent Vessel Support?
            </h4>
            <p className="text-customMuted text-xs mb-4 leading-relaxed">
              Direct line to our duty manager at Izmir HQ for immediate port
              clearance & technical emergencies.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Start WhatsApp Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ana Yüzen Buton */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-[#0B2341] dark:bg-customAccent text-white dark:text-[#0B2341] p-4 rounded-full shadow-2xl border border-white/20 flex items-center justify-center group hover:scale-105 active:scale-95 transition-all"
        aria-label="24/7 Emergency Support"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0B2341] rounded-full animate-pulse" />
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
          support_agent
        </span>
      </button>
    </div>
  );
}
