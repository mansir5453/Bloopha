"use client";

import React, { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { ScrollIconItem } from "@/components/ui/scroll-icon-item";
import { Code, Cpu, Globe, Zap, Layers, Smartphone, Database, Cloud } from "lucide-react";
import { OrangeGlow } from "@/components/ui/orange-glow";

const Bracket = ({ className }: { className: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 27 78"
            className={className}
        >
            <path
                fill="currentColor"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
        </svg>
    );
};

import { useIsMobile } from "@/hooks/use-mobile";

export const TechStackSection = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useIsMobile();

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 25,
        mass: 1,
        restDelta: 0.001
    });

    const icons = [
        <Code key="code" className="w-full h-full" />,
        <Cpu key="cpu" className="w-full h-full" />,
        <Globe key="globe" className="w-full h-full" />,
        <Zap key="zap" className="w-full h-full" />,
        <Layers key="layers" className="w-full h-full" />,
        <Smartphone key="smartphone" className="w-full h-full" />,
        <Database key="database" className="w-full h-full" />,
        <Cloud key="cloud" className="w-full h-full" />,
    ];

    const centerIndex = Math.floor(icons.length / 2);

    return (
        <section className="w-full py-5 overflow-hidden relative">
            {/* OrangeGlow removed */}
            <div
                ref={targetRef}
                className="relative box-border flex min-h-[40vh] md:h-[60vh] flex-col items-center justify-start pt-0 gap-[2vw]"
            >
                <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 md:gap-12 w-full px-4">
                    <p className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-3xl font-medium tracking-tight text-black whitespace-nowrap">
                        <Bracket className="h-6 sm:h-16 text-black" />
                        <span className="font-medium uppercase tracking-widest text-xs sm:text-base">
                            Powered by Modern Tech
                        </span>
                        <Bracket className="h-6 sm:h-16 scale-x-[-1] text-black" />
                    </p>

                    <div
                        className="w-full max-w-6xl grid grid-cols-4 md:flex md:justify-center items-center gap-4 sm:gap-8"
                        style={{
                            perspective: "500px",
                        }}
                    >
                        {isMobile ? (
                            // Mobile: Simple grid with fade-in
                            icons.map((icon, index) => (
                                <div key={index} className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-[#F0660A]">
                                    {icon}
                                </div>
                            ))
                        ) : (
                            // Desktop: Scroll physics
                            icons.map((icon, index) => (
                                <ScrollIconItem
                                    key={index}
                                    icon={icon}
                                    index={index}
                                    centerIndex={centerIndex}
                                    scrollYProgress={smoothProgress}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
