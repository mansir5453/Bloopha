"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description?: string;
  features: string[];
  icon: React.ElementType;
  delay: number;
}

export const ServiceCard = ({
  title,
  description,
  features,
  icon: Icon,
  delay,
}: ServiceCardProps) => {
  // 1. Entry Animation State
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px", threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 2. Magnetic / Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [0, 400], [10, -10]); 
  const rotateY = useTransform(mouseX, [0, 350], [-10, 10]);

  return (
    // Wrapper handles the "Fade In Up" entry animation
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Motion Div handles the Magnetic Tilt */}
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 p-2 md:rounded-[1.5rem] md:p-3 perspective-1000"
      >
        {/* Glowing Effect Component */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={2}
        />

        {/* Inner content card */}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-gray-200 bg-white/60 backdrop-blur-xl p-6 shadow-lg md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Icon */}
            <div className="w-fit rounded-lg border-[0.75px] border-gray-200 bg-gray-100/50 p-2">
              <Icon className="h-5 w-5 text-gray-700" />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900">
                {title}
              </h3>

              {description && (
                <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 font-medium">
                  {description}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-2 mt-4">
                {features.map((feat, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    • {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};