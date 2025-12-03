"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollCharacterText } from "@/components/ui/scroll-character-text";
import { OrangeGlow } from "@/components/ui/orange-glow";

export const ScrollTextSection = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const text = "IMMERSIVE DIGITAL REALITY";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);

    return (
        <section className="w-full py-20 relative overflow-hidden">
            <OrangeGlow variant="center" intensity="medium" className="opacity-50" />
            <div
                ref={targetRef}
                className="relative box-border flex h-[60vh] md:h-[120vh] items-start justify-center overflow-hidden"
            >
                <div className="sticky top-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden">
                    <div
                        className="w-full max-w-7xl text-center text-3xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#F0660A] whitespace-nowrap"
                        style={{
                            perspective: "500px",
                            willChange: "transform",
                        }}
                    >
                        {characters.map((char, index) => (
                            <ScrollCharacterText
                                key={index}
                                char={char}
                                index={index}
                                centerIndex={centerIndex}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
