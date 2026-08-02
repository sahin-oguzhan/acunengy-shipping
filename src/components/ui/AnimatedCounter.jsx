'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export default function AnimatedCounter({ value }) {
  const ref = useRef(null);

  const stringValue = String(value);
  const match = stringValue.match(/(\d+)/);
  const numericString = match ? match[1] : '0';
  const numericValue = parseInt(numericString, 10);

  const prefix = stringValue.substring(0, match ? match.index : 0);
  const suffix = stringValue.substring(
    match ? match.index + numericString.length : 0,
  );

  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, numericValue, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue, prefix, suffix]);

  return <span ref={ref}>{value}</span>;
}
