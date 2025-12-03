"use client";

import React from "react";
import {
    ContainerAnimated,
    ContainerScroll,
    ContainerStagger,
    ContainerSticky,
    GalleryCol,
    GalleryContainer,
} from "@/components/ui/animated-gallery";
import StickyScroll from "@/components/ui/sticky-scroll";
import { ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const IMAGES_1 = [
    "https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHwwfDB8fHwy",
];
const IMAGES_2 = [
    "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1564284369929-026ba231f89b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1493515322954-4fa727e97985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D",
];
const IMAGES_3 = [
    "https://images.unsplash.com/photo-1528361237150-8a9a7df33035?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const MixedGallerySection = () => {
    return (
        <section id="work" className="w-full relative">
            {/* Part 1: 3D Animated Gallery */}
            <div className="relative pt-20 pb-10">
                <ContainerStagger className="relative z-10 mb-12 place-self-center px-6 text-center">
                    <ContainerAnimated>
                        <h1 className="font-serif text-4xl font-extralight md:text-5xl text-black">
                            Your{" "}
                            <span className="font-serif font-extralight text-[#F0660A]">
                                one source
                            </span>
                        </h1>
                    </ContainerAnimated>
                    <ContainerAnimated>
                        <h1 className="font-serif text-4xl font-extralight md:text-5xl text-black">
                            for all your designs
                        </h1>
                    </ContainerAnimated>

                    <ContainerAnimated className="my-4">
                        <p className="leading-normal tracking-tight text-gray-600">
                            No waste of time and money, we provide you with
                            <br /> collection of designs to plan your next project.
                        </p>
                    </ContainerAnimated>

                    <ContainerAnimated>
                        <div className="flex justify-center gap-4 mt-6">
                            <LiquidButton variant="default" size="xl">
                                <span className="flex items-center gap-2 text-white">
                                    Book free call <ArrowRight className="size-4" />
                                </span>
                            </LiquidButton>
                        </div>
                    </ContainerAnimated>
                </ContainerStagger>

                <div
                    className="pointer-events-none absolute top-0 left-0 z-0 h-[70vh] w-full"
                    style={{
                        background: "linear-gradient(to right, #f5f5f5, #ff9e5e, #F0660A)",
                        filter: "blur(84px)",
                        mixBlendMode: "screen",
                        opacity: 0.5,
                    }}
                />

                <ContainerScroll className="relative h-[150vh] sm:h-[250vh]">
                    <ContainerSticky className="h-screen sticky top-0">
                        <GalleryContainer className="grid-cols-1 sm:grid-cols-3">
                            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2 hidden sm:flex">
                                {IMAGES_1.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                                        src={imageUrl}
                                        alt="gallery item"
                                    />
                                ))}
                            </GalleryCol>
                            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                                {IMAGES_2.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                                        src={imageUrl}
                                        alt="gallery item"
                                    />
                                ))}
                            </GalleryCol>
                            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2 hidden sm:flex">
                                {IMAGES_3.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                                        src={imageUrl}
                                        alt="gallery item"
                                    />
                                ))}
                            </GalleryCol>
                        </GalleryContainer>
                    </ContainerSticky>
                </ContainerScroll>
            </div>

            {/* Part 2: Existing Sticky Scroll */}
            {/* <div className="relative z-20">
                <StickyScroll />
            </div> */}
        </section>
    );
};
