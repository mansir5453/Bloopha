'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface WavyTextsConfig {
  baseOffsetFactor: number;
  baseExtra: number;
  baseAmplitude: number;
  lengthEffect: number;
  frequency: number;
  progressScale: number;
  phaseShiftDeg: number;
}

interface WavyBlockItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  config?: WavyTextsConfig;
}

const toRadian = (deg: number) => (deg * Math.PI) / 180;

export function WavyBlockItem({
  index,
  config = {
    baseOffsetFactor: 0.1,
    baseExtra: 0,
    baseAmplitude: 160,
    lengthEffect: 0.6,
    frequency: 35,
    progressScale: 6,
    phaseShiftDeg: -180,
  },
  style,
  className,
  children,
  ...props
}: WavyBlockItemProps) {
  // WavyBlockItem is now just a wrapper that adds the class for GSAP targeting
  return (
    <div
      className={`wavy-item ${className || ''}`}
      data-index={index}
      style={{ willChange: 'transform', ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export function WavyBlock({
  offset = ['start end', 'end start'],
  children,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: React.ComponentPropsWithRef<'div'> & { offset?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (isMobile) {
      // Ensure any previous GSAP transforms are cleared
      const items = containerRef.current?.querySelectorAll('.wavy-item');
      if (items) {
        gsap.set(items, { clearProps: "all" });
      }
      return;
    }

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.wavy-item');
      if (!items || items.length === 0) return;

      // Default config (matching the default in WavyBlockItem)
      const config = {
        baseOffsetFactor: 0.1,
        baseExtra: 0,
        baseAmplitude: 160,
        lengthEffect: 0.6,
        frequency: 35,
        progressScale: 6,
        phaseShiftDeg: -180,
      };

      // Calculate max length for length effect
      let maxLen = 0;
      items.forEach((item) => {
        const len = item.textContent?.length || 0;
        if (len > maxLen) maxLen = len;
      });
      const lengthFactor = Math.min(1, Math.max(0, maxLen / (maxLen || 1)));

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          const p = self.progress;
          const windowWidth = window.innerWidth;

          items.forEach((item) => {
            const index = Number(item.getAttribute('data-index'));

            const phase = config.progressScale * p;
            const baseOffset = config.baseOffsetFactor * windowWidth + config.baseExtra;
            const amplitudeScale = 1 - config.lengthEffect * lengthFactor;
            const amplitude = config.baseAmplitude * amplitudeScale;
            const angle = toRadian(config.frequency * index) + phase + toRadian(config.phaseShiftDeg);

            const x = baseOffset + amplitude * Math.cos(angle);

            gsap.set(item, { x: x });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} {...props}>
      {children}
    </div>
  );
}
