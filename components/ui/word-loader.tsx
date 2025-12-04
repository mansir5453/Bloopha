"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

interface WordLoaderProps {
  words?: string[];
  className?: string;
  maxWords?: number;
}

const DEFAULT_WORDS = [
  "branding",
  "design",
  "development",
  "ecommerce",
  "mobile apps",
  "packaging",
];

const WordLoader: React.FC<WordLoaderProps> = ({
  words = DEFAULT_WORDS,
  className,
  maxWords = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  // Randomize on client side only (after mount)
  useEffect(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setSelectedWords(shuffled.slice(0, maxWords));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGSAP(
    () => {
      if (selectedWords.length === 0) return;

      const tl = gsap.timeline({ repeat: 0 });
      const wordDelay = 0.3;
      const wordDuration = 0.8;

      selectedWords.forEach((_, index) => {
        const startTime = index * (wordDuration + wordDelay);

        tl.set(`.word-${index}`, { visibility: "visible", zIndex: 1 }, startTime);

        tl.fromTo(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.out",
          },
          startTime
        );

        tl.to(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: -5,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.in",
          },
          startTime + 0.5
        );

        tl.set(`.word-${index}`, { visibility: "hidden", zIndex: -1 }, startTime + wordDuration);
      });
    },
    { scope: containerRef, dependencies: [selectedWords] }
  );

  // Don't render until words are selected (client-side only)
  if (selectedWords.length === 0) {
    return (
      <div className={cn("flex flex-col gap-y-6 w-full", className)}>
        <div className="relative h-12 flex items-center justify-center">
          <span className="text-xl tracking-wider font-bold opacity-0">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col gap-y-6 w-full", className)}
    >
      <div className="relative h-12 flex items-center justify-center">
        {selectedWords.map((word, index) => (
          <span
            key={index}
            className={`word-${index} absolute text-xl tracking-wider font-bold flex gap-x-1`}
            style={{ visibility: "hidden", zIndex: -1 }}
          >
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="char">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
