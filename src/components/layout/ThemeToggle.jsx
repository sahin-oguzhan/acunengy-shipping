'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!isMounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full border border-customBorder hover:bg-customCard transition-all duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Toggle Theme"
    >
      <span className="material-symbols-outlined text-customText">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
