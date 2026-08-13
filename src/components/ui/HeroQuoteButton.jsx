'use client';

import { useState } from 'react';
import QuoteModal from '@/components/ui/QuoteModal';

export default function HeroQuoteButton({ label, locale = 'tr' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="bg-customAccent text-customBg px-10 py-4 font-mono text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all font-bold shadow-lg shadow-customAccent/20 cursor-pointer"
      >
        {label}
      </button>

      {/* Teklif Alma Modalı */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </>
  );
}
