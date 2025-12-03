"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
    char: string;
    index: number;
    centerIndex: number;
    scrollYProgress: MotionValue<number>;
};

export const ScrollCharacterText = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const isSpace = char === " ";
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0]
    );

    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0]
    );

    return (
        <motion.span
            className={cn(
                "inline-block text-[#F0660A]",
                isSpace && "w-4"
            )}
            style={{
                x,
                rotateX,
            }}
        >
            {char}
        </motion.span>
    );
};
