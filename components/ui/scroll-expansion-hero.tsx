'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
    mediaType?: 'video' | 'image';
    mediaSrc: string;
    posterSrc?: string;
    bgImageSrc: string;
    title?: string;
    date?: string;
    scrollToExpand?: string;
    textBlend?: boolean;
    children?: React.ReactNode;
}

const ScrollExpandMedia = ({
    mediaType = 'video',
    mediaSrc,
    posterSrc,
    bgImageSrc,
    title,
    date,
    scrollToExpand,
    textBlend,
    children,
}: ScrollExpandMediaProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Animation Transforms
    // 0 -> 0.6: Expand media to full screen
    // 0.6 -> 0.8: Hold full screen, fade in content
    // 0.8 -> 1.0: Scroll away

    const width = useTransform(scrollYProgress, [0, 0.6], ["300px", "100vw"]);
    const height = useTransform(scrollYProgress, [0, 0.6], ["400px", "100vh"]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["16px", "0px"]);

    const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    const textXLeft = useTransform(scrollYProgress, [0, 0.4], ["0%", "-100%"]);
    const textXRight = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

    const firstWord = title ? title.split(' ')[0] : '';
    const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

    return (
        <div ref={sectionRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Background Image (Fades out) */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ opacity: bgOpacity }}
                >
                    <Image
                        src={bgImageSrc}
                        alt='Background'
                        fill
                        className='object-cover'
                        priority
                    />
                    <div className='absolute inset-0 bg-black/10' />
                </motion.div>

                {/* Expanding Media Container */}
                <motion.div
                    style={{
                        width,
                        height,
                        borderRadius,
                    }}
                    className="relative z-10 overflow-hidden shadow-2xl"
                >
                    {mediaType === 'video' ? (
                        mediaSrc.includes('youtube.com') ? (
                            <iframe
                                src={
                                    mediaSrc.includes('embed')
                                        ? mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                                        : mediaSrc.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' + mediaSrc.split('v=')[1]
                                }
                                className='w-full h-full object-cover'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            />
                        ) : (
                            <video
                                src={mediaSrc}
                                poster={posterSrc}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        )
                    ) : (
                        <Image
                            src={mediaSrc}
                            alt={title || 'Media'}
                            fill
                            className="object-cover"
                        />
                    )}
                    {/* Overlay inside media - reduced opacity for better visibility */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </motion.div>

                {/* Title Text (Splits and moves away) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className={`flex flex-col items-center gap-4 ${textBlend ? 'mix-blend-difference text-white' : ''}`}>
                        <div className="flex gap-3 md:gap-6 overflow-hidden">
                            <motion.h2
                                style={{ x: textXLeft, opacity: textOpacity }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F0660A]"
                            >
                                {firstWord}
                            </motion.h2>
                            <motion.h2
                                style={{ x: textXRight, opacity: textOpacity }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F0660A]"
                            >
                                {restOfTitle}
                            </motion.h2>
                        </div>

                        <motion.div
                            style={{ opacity: textOpacity }}
                            className="flex flex-col items-center gap-2"
                        >
                            {date && <p className="text-[#F0660A] text-xl md:text-2xl font-light">{date}</p>}
                            {scrollToExpand && <p className="text-[#F0660A] text-sm uppercase tracking-widest">{scrollToExpand}</p>}
                        </motion.div>
                    </div>
                </div>

                {/* Content Reveal (At the end of animation) */}
                <motion.div
                    className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                    style={{ opacity: contentOpacity, y: contentY }}
                >
                    <div className="container mx-auto px-4 pointer-events-auto">
                        <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
                            {children}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ScrollExpandMedia;
