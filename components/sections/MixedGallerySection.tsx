"use client";

import React from "react";
import NextImage from "next/image";
import {
    ContainerAnimated,
    ContainerScroll,
    ContainerStagger,
    ContainerSticky,
    GalleryCol,
    GalleryContainer,
} from "@/components/ui/animated-gallery";

import { ArrowRight, X } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const COL_1 = [
    {
        src: "/images/pot/bikjn.png",
        alt: "Brand Asset 1 - Tall",
    },
];

const COL_2 = [
    {
        src: "/images/pot/Black and Brown Simple Elegant Jewelry Boutique Brand Board.png",
        alt: "Jewelry Brand Board Dark - Tall",
    },
];

const COL_3 = [
    {
        src: "/images/pot/Elegant Jewelry Boutique Brand Board.png",
        alt: "Jewelry Brand Board Light - Tall",
    },
];

import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const MixedGallerySection = () => {
    return (
        <section id="work" className="w-full relative hidden md:block z-30 my-24 md:my-48">
            {/* Part 1: 3D Animated Gallery */}
            <div className="relative pt-0 pb-0">
                <div
                    className="pointer-events-none absolute top-0 left-0 z-0 h-[70vh] w-full"
                    style={{
                        background: "linear-gradient(to right, #f5f5f5, #ff9e5e, #F0660A)",
                        filter: "blur(84px)",
                        mixBlendMode: "screen",
                        opacity: 0.5,
                    }}
                />

                <ContainerScroll className="relative h-auto min-h-0 md:min-h-[50vh] md:h-[320vh]">
                    <ContainerSticky className="h-auto min-h-0 md:h-[100dvh] relative md:sticky top-auto md:top-0 flex items-center justify-center overflow-visible">
                        <GalleryContainer className="">
                            {/* COLUMN 1 */}
                            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                                {COL_1.map((item, index) => (
                                    <GalleryItem key={index} item={item} />
                                ))}
                            </GalleryCol>

                            {/* COLUMN 2 */}
                            <GalleryCol className="mt-[-10%] sm:mt-[-50%]" yRange={["15%", "5%"]}>
                                {COL_2.map((item, index) => (
                                    <GalleryItem key={index} item={item} />
                                ))}
                            </GalleryCol>

                            {/* COLUMN 3 */}
                            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                                {COL_3.map((item, index) => (
                                    <GalleryItem key={index} item={item} />
                                ))}
                            </GalleryCol>
                        </GalleryContainer>
                    </ContainerSticky>
                </ContainerScroll>
            </div>
        </section>
    );
};

// Reusable Item Component to handle Icons vs Images with Full Aspect Ratio
const GalleryItem = ({ item }: { item: any }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="cursor-pointer transition-transform hover:scale-[1.02] w-full">
                    {item.isIconGrid ? (
                        <div className="w-full bg-white p-4 grid grid-cols-2 gap-2 items-center justify-center border border-black/5 rounded-md aspect-square shadow">
                            {item.icons?.map((iconSrc: string, i: number) => (
                                <div key={i} className="relative aspect-square flex items-center justify-center p-2 bg-neutral-50 rounded-sm">
                                    <NextImage
                                        src={iconSrc}
                                        alt="icon"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-contain opacity-80"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <NextImage
                            className="block h-auto w-full rounded-md object-contain shadow bg-white/50"
                            src={item.src}
                            alt={item.alt}
                            width={800}
                            height={1200} // Using a tall preset, but strict h-auto classes override this for display
                        />
                    )}
                </div>
            </DialogTrigger>
            <DialogContent hideClose className="sm:max-w-[95vw] md:max-w-[95vw] max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                <VisuallyHidden>
                    <DialogTitle>Preview</DialogTitle>
                </VisuallyHidden>

                <DialogClose className="fixed z-[110] top-4 right-4 md:top-8 md:right-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="sr-only">Close</span>
                </DialogClose>

                <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                    {item.isIconGrid ? (
                        <div className="w-full max-w-2xl bg-white p-8 grid grid-cols-2 gap-4 rounded-xl pointer-events-auto">
                            {item.icons?.map((iconSrc: string, i: number) => (
                                <div key={i} className="relative aspect-square flex items-center justify-center p-4 bg-neutral-50 rounded-lg">
                                    <NextImage
                                        src={iconSrc}
                                        alt="icon"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <NextImage
                            src={item.src}
                            alt="full view"
                            fill
                            className="object-contain pointer-events-auto"
                            quality={100}
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
