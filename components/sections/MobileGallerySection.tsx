"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const MobileGallerySection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full py-12 px-4 block md:hidden">
            <div className="w-full max-w-[420px] mx-auto">
                <div
                    className="relative w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    onClick={() => setIsOpen(true)}
                >
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

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-[90vw] md:max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <DialogTitle className="sr-only">Gallery View</DialogTitle>
                    <div className="relative w-full h-[80vh] bg-transparent flex items-center justify-center">
                        <Image
                            src="/images/no.png"
                            alt="Gallery Preview"
                            fill
                            className="object-contain"
                            sizes="90vw"
                        />
                        <DialogClose
                            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-50 pointer-events-auto"
                        >
                            <X className="w-6 h-6" />
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};
