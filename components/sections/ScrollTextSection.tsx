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

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions as { isDesktop: boolean; isMobile: boolean };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: isDesktop ? "top bottom" : "top 80%",
                    end: isDesktop ? "center center" : "bottom 20%",
                    scrub: isDesktop ? 1 : false, // Scrub on desktop only
                    toggleActions: isDesktop ? undefined : "play none none reverse", // Auto-play on mobile
                }
            });

            tl.from(chars, {
                x: (i) => {
                    const distance = i - centerIndex;
                    // Larger movement on desktop, cleaner on mobile
                    return distance * (isDesktop ? 150 : 50);
                },
                rotateX: (i) => {
                    const distance = i - centerIndex;
                    return distance * (isDesktop ? 90 : 45);
                },
                opacity: 0,
                duration: isDesktop ? 1 : 1.5, // Duration mainly matters for mobile (timed)
                stagger: isDesktop ? 0 : 0.05, // Stagger only for timed mobile effect
                ease: isDesktop ? "power2.out" : "power3.out",
            });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-2 relative">
            <OrangeGlow variant="top" intensity="medium" className="opacity-50" />
            <div className="relative box-border flex h-[20vh] md:h-[60vh] items-start justify-center overflow-hidden">
                <div className="relative md:sticky md:top-1/2 md:-translate-y-1/2 w-full flex justify-center overflow-hidden">
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
