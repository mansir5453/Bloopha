"use client";

import React from "react";
import Image from "next/image";

export const MobileGallerySection = () => {
    return (
        <section id="work" className="w-full py-20 px-4 block md:hidden mt-12 bg-transparent z-10 relative">
            <div className="w-full max-w-[420px] mx-auto space-y-8">
                {/* Title Space Placeholder if needed or just gap */}
                <div className="relative w-full">
                    <Image
                        src="/images/no.png"
                        alt="Selected Works Gallery"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        priority
                        sizes="(max-width: 640px) 90vw, 450px"
                    />
                </div>
            </div>
        </section>
    );
};
