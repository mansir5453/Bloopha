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
    return <AboutUsClient />;
}
