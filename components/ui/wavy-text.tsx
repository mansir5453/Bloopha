'use client';

import {
  HTMLMotionProps,
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import React from 'react';

interface WavyTextsConfig {
  baseOffsetFactor: number;
  baseExtra: number;
  baseAmplitude: number;
  lengthEffect: number;
  frequency: number;
  progressScale: number;
  phaseShiftDeg: number;
  spring: SpringOptions;
}

interface WavyBlockItemProps extends HTMLMotionProps<'div'> {
  index: number;
  config?: WavyTextsConfig;
}

interface WavyBlockContextValue {
  scrollYProgress: MotionValue<number>;
  maxLen: number;
}

const WavyBlockContext = React.createContext<WavyBlockContextValue | undefined>(
  undefined,
);

function useWavyBlockContext() {
  const context = React.useContext(WavyBlockContext);
  if (context === undefined) {
    throw new Error('useWavyBlockContext must be used within a WavyBlock');
  }
  return context;
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
    spring: { damping: 22, stiffness: 300 },
  },
  style,
  ...props
}: WavyBlockItemProps) {
  const { scrollYProgress, maxLen } = useWavyBlockContext();
  const reducedMotion = useReducedMotion();
  const lengthFactor = Math.min(1, Math.max(0, maxLen / (maxLen || 1)));

  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calculateX = React.useCallback(
    (p: number, windowWidth?: number) => {
      const phase = config.progressScale * p;
      const width = windowWidth ?? (typeof window !== 'undefined' ? window.innerWidth : 1200);

      // Mobile adjustments
      const currentAmplitude = isMobile ? 30 : config.baseAmplitude; // Reduced amplitude on mobile
      const currentOffsetFactor = isMobile ? 0 : config.baseOffsetFactor; // Center on mobile

      const baseOffset = currentOffsetFactor * width + config.baseExtra;
      const amplitudeScale = 1 - config.lengthEffect * lengthFactor;
      const amplitude = currentAmplitude * amplitudeScale;
      const angle = toRadian(config.frequency * index) + phase + toRadian(config.phaseShiftDeg);
      return baseOffset + amplitude * Math.cos(angle);
    },
    [config, lengthFactor, index, isMobile],
  );

  const initialX = calculateX(0, 1200);
  const rawX = useMotionValue(initialX);
  const springX = useSpring(rawX, config.spring);

  // Disable spring on mobile for snappier feel
  const x = reducedMotion || isMobile ? rawX : springX;

  React.useEffect(() => {
    if (!scrollYProgress || !isMounted) return;
    const unsub = scrollYProgress.onChange((p) => {
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const newX = calculateX(p, windowWidth);
      rawX.set(newX);
    });
    return () => {
      if (unsub) unsub();
    };
  }, [scrollYProgress, rawX, calculateX, isMounted]);

  return <motion.div style={{ x, ...style, willChange: 'transform' }} suppressHydrationWarning {...props} />;
}

export function WavyBlock({
  offset = ['start end', 'end start'],
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: React.ComponentPropsWithRef<'div'> & { offset?: any }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { current } = containerRef;

  const maxLen = React.useMemo(() => {
    if (!current?.children || current.children.length === 0) return 1;
    const childrenArray = Array.from(current.children);
    return Math.max(...childrenArray.map((child) => (child ? String(child).length : 0)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  return (
    <WavyBlockContext.Provider value={{ scrollYProgress, maxLen }}>
      <div ref={containerRef} {...props} />
    </WavyBlockContext.Provider>
  );
}
