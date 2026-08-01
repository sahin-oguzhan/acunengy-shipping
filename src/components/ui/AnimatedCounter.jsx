'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

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

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{value}</span>;
}
