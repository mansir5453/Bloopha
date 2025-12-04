"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ArrowRight } from "lucide-react";
import { OrangeGlow } from "@/components/ui/orange-glow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Immersive Experiences", "Digital Realities", "Future Interfaces", "Visual Magic"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(".hero-logo", {
      y: 200,
      scale: 0.8,
      opacity: 0,
      ease: "power1.inOut",
    });

    tl.to(".hero-content", {
      y: 100,
      opacity: 0,
      ease: "power1.inOut",
    }, "<");
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Orange Glow Background Effect */}
      {/* Top Glow Effect matching Footer */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-[radial-gradient(60%_200px_at_50%_0%,rgba(240,102,10,0.4),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-1/2 left-1/2 h-[2px] w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-[#F0660A] to-transparent blur-[4px] opacity-100 pointer-events-none" />

      {/* Orange Glow removed for seamless blending */}

      <div className="relative z-30 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full hero-content">
        <div className="mb-3 sm:mb-4 md:mb-6 animate-fade-in-up delay-0 flex justify-center hero-logo">
          <Image
            src="/bloopha-logo-new.png"
            alt="Bloopha Logo"
            width={1920}
            height={720}
            quality={100}
            className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] h-auto object-contain select-none"
            priority
          />
        </div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-14 leading-relaxed animate-fade-in-up delay-100 px-4 text-[#F0660A] flex flex-col items-center font-light tracking-wide">
          <span className="opacity-80 mb-2">We create</span>
          <div className="relative h-12 sm:h-14 md:h-16 w-full overflow-hidden flex justify-center items-center">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F0660A] to-[#ff9e5e]"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? -50 : 50, opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                {title}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="animate-fade-in-up delay-200">
          <LiquidButton
            variant="default"
            size="xxl"
            onClick={() => {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto"
          >
            <span className="font-bold flex items-center gap-2 justify-center text-sm sm:text-base text-[#F0660A]">
              Discover Excellence
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </LiquidButton>
        </div>
      </div>

    </section>
  );
};
