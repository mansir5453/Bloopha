"use client";

import React, { useRef } from "react";
import { OrangeGlow } from "@/components/ui/orange-glow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ScrollTextSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const text = "IMMERSIVE DIGITAL REALITY";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);

    useGSAP(() => {
        const chars = textRef.current?.querySelectorAll(".char");
        if (!chars) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "center center",
                scrub: 1,
            }
        });

        // Animate characters from scattered positions to center
        tl.from(chars, {
            x: (i) => {
                const distance = i - centerIndex;
                return distance * 150; // Increased distance for dramatic effect
            },
            rotateX: (i) => {
                const distance = i - centerIndex;
                return distance * 90;
            },
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-2 relative">
            <OrangeGlow variant="top" intensity="medium" className="opacity-50" />
            <div className="relative box-border flex h-[20vh] md:h-[60vh] items-start justify-center overflow-hidden">
                <div className="sticky top-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden">
                    <div
                        ref={textRef}
                        className="w-full max-w-7xl text-center text-3xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#F0660A] whitespace-nowrap perspective-500"
                        style={{ perspective: "500px" }}
                    >
                        {characters.map((char, index) => (
                            <span
                                key={index}
                                className={`char inline-block ${char === " " ? "w-4" : ""}`}
                                style={{ willChange: "transform, opacity" }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
