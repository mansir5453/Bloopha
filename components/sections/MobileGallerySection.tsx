"use client";

import React from "react";
import Image from "next/image";

export const MobileGallerySection = () => {
    return (
        <section id="work" className="w-full py-12 px-4 block md:hidden">
            <div className="w-full max-w-[420px] mx-auto">
                <div className="relative w-full">
                    <Image
                        src="/images/no.png"
                        alt="Selected Works Gallery"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
