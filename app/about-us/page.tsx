import React from "react";
import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
    title: "About Us | Bloopha - The Agency",
    description: "Learn about Bloopha's mission to craft immersive digital realities. We are a team of visionaries redefining the digital landscape.",
    openGraph: {
        title: "About Us | Bloopha - The Agency",
        description: "Learn about Bloopha's mission to craft immersive digital realities. We are a team of visionaries redefining the digital landscape.",
        url: "https://bloopha.com/about-us",
    },
};

export default function AboutUs() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "Bloopha",
                                "description": "Bloopha is a digital agency focused on crafting immersive digital realities.",
                                "logo": "https://bloopha.com/icon.png",
                                "url": "https://bloopha.com"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://bloopha.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "About Us",
                                    "item": "https://bloopha.com/about-us"
                                }
                            ]
                        }
                    ])
                }}
            />
            <AboutUsClient />
        </>
    );
}
