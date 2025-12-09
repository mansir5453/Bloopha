"use client";

import { WavyBlock, WavyBlockItem } from "@/components/ui/wavy-text";

export const WavyTextSection = () => {
  const lines = [
    "We Create Stunning",
    "Digital Experiences",
    "That Drive Results",
    "And Transform",
    "Your Business",
    "Into Success",
  ];

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center py-2 sm:py-16 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <WavyBlock className="space-y-1 sm:space-y-2 md:space-y-4">
          {lines.map((line, index) => (
            <WavyBlockItem
              key={index}
              index={index}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight text-center md:text-left"
            >
              {line}
            </WavyBlockItem>
          ))}
        </WavyBlock>


      </div>
    </section>
  );
};
