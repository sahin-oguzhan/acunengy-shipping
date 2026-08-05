'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // F5 veya sayfa yenileme durumunu kontrol et
    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload = navEntry && navEntry.type === 'reload';

    const hasLoaded = sessionStorage.getItem('hasLoaded');

    // Eğer sayfa yenilenmediyse (normal site içi geçiş veya dil değişimi) ve daha önceden yüklendiyse hiç gösterme
    if (hasLoaded && !isReload) {
      setIsLoading(false);
      return;
    }

    // İlk giriş veya F5 atıldığında preloader'ı göster ve 1.2 saniye sonra kapat
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasLoaded', 'true');
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950 transition-opacity duration-500">
      <div className="relative w-[340px] sm:w-[420px] md:w-[500px] h-36 md:h-44 animate-pulse drop-shadow-[0_0_50px_rgba(56,189,248,0.7)]">
        <Image
          src="/images/logo.png"
          alt="Acunengy Shipping Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
