'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Services({ wpData }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);

  const sliderRef = useRef(null);
  const cursorRef = useRef(null);

  const [lastX, setLastX] = useState(0);

  const headerData = wpData?.pageFields?.servicesHeaderGroup;
  const displayBadge = headerData?.badge || '';
  const displayTitle = headerData?.title || '';
  const displayDesc = headerData?.description || '';
  const displayBtnLearnMore = headerData?.btnText || 'LEARN MORE';

  const rawWpServices = wpData?.servicesList || [];

  const finalServices = useMemo(() => {
    return rawWpServices
      .filter((item) => item.title && item.title.trim() !== '')
      .map((item) => ({
        id: item.id,
        icon: item.serviceFields?.iconName || 'anchor',
        title: item.title,
        description: item.serviceFields?.shortDesc || '',
      }));
  }, [rawWpServices]);

  const paddedServices = useMemo(() => {
    let list = [...finalServices];
    if (list.length > 0) {
      while (list.length < 6) {
        list = [...list, ...finalServices];
      }
    }
    return list;
  }, [finalServices]);

  const duplicatedServices = useMemo(() => {
    return paddedServices.length > 0
      ? [...paddedServices, ...paddedServices, ...paddedServices]
      : [];
  }, [paddedServices]);

  const checkLoopBoundaries = useCallback(
    (slider) => {
      if (!slider || duplicatedServices.length === 0) return;
      const singleSetWidth = slider.scrollWidth / 3;

      if (slider.scrollLeft <= 5) {
        slider.scrollLeft += singleSetWidth;
      } else if (slider.scrollLeft >= singleSetWidth * 2 - 5) {
        slider.scrollLeft -= singleSetWidth;
      }
    },
    [duplicatedServices.length],
  );

  useEffect(() => {
    if (sliderRef.current && duplicatedServices.length > 0) {
      const timeout = setTimeout(() => {
        if (sliderRef.current) {
          const singleSetWidth = sliderRef.current.scrollWidth / 3;
          sliderRef.current.scrollLeft = singleSetWidth;
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [duplicatedServices.length]);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 32}px, ${e.clientY - 32}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || finalServices.length === 0) return;

    let animationId;
    const step = () => {
      if (!isDragging && !isHovering) {
        slider.scrollLeft += 1;
        checkLoopBoundaries(slider);
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isHovering, isDragging, finalServices.length, checkLoopBoundaries]);

  const handleMouseDown = (e) => {
    if (finalServices.length === 0) return;
    setIsDragging(true);
    setDragDistance(0);
    setLastX(e.pageX);
  };

  const handleMouseMoveDrag = (e) => {
    if (!isDragging || finalServices.length === 0 || !sliderRef.current) return;
    e.preventDefault();

    const x = e.pageX;
    const walkDelta = (x - lastX) * 1.5;

    sliderRef.current.scrollLeft -= walkDelta;
    setLastX(x);
    setDragDistance((prev) => prev + Math.abs(walkDelta));

    checkLoopBoundaries(sliderRef.current);
  };

  const handleCardClick = (e) => {
    if (dragDistance > 10) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!displayTitle && !displayBadge && finalServices.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-28 bg-customBg relative overflow-hidden">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] will-change-transform"
        style={{
          opacity: isHovering && finalServices.length > 0 ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center font-mono font-black text-lg transition-all duration-300 ease-out ${
            isDragging
              ? 'bg-customText text-customBg scale-90 shadow-2xl'
              : 'bg-customAccent text-white backdrop-blur-sm shadow-xl scale-100'
          }`}
        >
          &lt; &gt;
        </div>
      </div>

      <div className="absolute inset-0 bg-customSurface/20 pointer-events-none" />

      <FadeIn direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-6 relative z-10">
          {displayBadge && (
            <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
              {displayBadge}
            </span>
          )}
          {displayTitle && (
            <h2 className="text-3xl md:text-5xl text-customText font-black mb-6 font-heading tracking-tight">
              {displayTitle}
            </h2>
          )}
          {displayDesc && (
            <p className="text-customMuted text-base md:text-lg leading-relaxed font-normal">
              {displayDesc}
            </p>
          )}
        </div>
      </FadeIn>

      {finalServices.length > 0 && (
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-6">
          <div className="absolute left-0 inset-y-0 w-24 md:w-40 bg-gradient-to-r from-customBg to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 md:w-40 bg-gradient-to-l from-customBg to-transparent z-30 pointer-events-none" />

          <div
            ref={sliderRef}
            className="flex gap-8 px-4 w-full overflow-x-auto touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2 cursor-none select-none relative z-20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setIsDragging(false);
            }}
            onMouseMove={handleMouseMoveDrag}
            onMouseDown={handleMouseDown}
            onMouseUp={() => setIsDragging(false)}
            onScroll={(e) => checkLoopBoundaries(e.currentTarget)}
          >
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id || 'srv'}-${index}`}
                className="w-[300px] sm:w-[340px] md:w-[380px] bg-customSurface/60 backdrop-blur-xl p-8 md:p-10 border border-customBorder/80 hover:border-customAccent/50 transition-all duration-300 group/card shadow-lg hover:shadow-2xl rounded-3xl flex flex-col justify-between shrink-0 whitespace-normal"
              >
                <div>
                  <div className="p-3.5 bg-customBg/80 border border-customBorder w-fit rounded-2xl mb-6 group-hover/card:border-customAccent/40 group-hover/card:bg-customAccent/15 transition-all duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-3xl text-customAccent block group-hover/card:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-customText mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-customMuted mb-8 text-sm md:text-base leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  draggable={false}
                  onClick={handleCardClick}
                  className="font-mono text-xs text-customText font-extrabold flex items-center gap-2 group-hover/card:gap-3.5 group-hover/card:text-customAccent transition-all uppercase tracking-wider w-fit cursor-none"
                >
                  {displayBtnLearnMore}{' '}
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/card:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-customBg to-transparent pointer-events-none z-10" />
    </section>
  );
}
