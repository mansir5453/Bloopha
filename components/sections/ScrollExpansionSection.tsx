"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const MediaContent = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                Immersive Design Experience
            </h2>
            <p className="text-lg mb-8 text-black dark:text-white">
                Experience the future of digital interaction. Our designs aren't just visual; they are immersive journeys that captivate and engage.
            </p>

            <p className="text-lg mb-8 text-black dark:text-white">
                We blend creativity with technology to create seamless, expansive experiences that tell your brand's story in ways never thought possible.
            </p>
        </div>
    );
};

export const ScrollExpansionSection = () => {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-black relative">
            <ScrollExpandMedia
                mediaType="video"
                mediaSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                bgImageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
                title="Expand Your Vision"
                date="Future Ready"
                scrollToExpand="Scroll to Experience"
                textBlend={true}
            >
                <MediaContent />
            </ScrollExpandMedia>
        </div>
    );
};
