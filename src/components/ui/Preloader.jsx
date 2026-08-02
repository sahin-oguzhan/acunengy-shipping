'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] bg-[#07172C] flex items-center justify-center overflow-hidden perspective-1000"
        >
          <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[#38bdf8]/20 rounded-full blur-[130px] animate-pulse" />

          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: 25, z: -200 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0, z: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-72 h-72 md:w-[420px] md:h-[420px] z-10 shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Acunengy Shipping Logo"
              fill
              priority
              className="object-contain drop-shadow-[0_0_80px_rgba(56,189,248,0.75)] filter brightness-110"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
