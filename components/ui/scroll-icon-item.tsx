"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import React, { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
    icon: ReactNode;
    index: number;
    centerIndex: number;
    scrollYProgress: MotionValue<number>;
};

export const ScrollIconItem = ({
    icon,
    index,
    centerIndex,
    scrollYProgress,
}: IconProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * (isMobile ? 30 : 90), 0]
    );

    const rotate = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * (isMobile ? 15 : 50), 0]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.5],
        [-Math.abs(distanceFromCenter) * (isMobile ? 5 : 20), 0]
    );

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

    return (
        <motion.div
            className={cn("inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 text-[#F0660A]")}
            style={{
                x,
                rotate,
                y,
                scale,
                transformOrigin: "center",
                willChange: "transform",
            }}
        >
            {icon}
        </motion.div>
    );
};
