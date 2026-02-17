"use client";

import { useState, useEffect } from "react";
import { Footer } from "@/components/ui/footer-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { OrangeGlow } from "@/components/ui/orange-glow";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollTextSection = dynamic(() => import("@/components/sections/ScrollTextSection").then(mod => mod.ScrollTextSection));
const WavyTextSection = dynamic(() => import("@/components/sections/WavyTextSection").then(mod => mod.WavyTextSection));
const MixedGallerySection = dynamic(() => import("@/components/sections/MixedGallerySection").then(mod => mod.MixedGallerySection));
const MobileGallerySection = dynamic(() => import("@/components/sections/MobileGallerySection").then(mod => mod.MobileGallerySection));
const ShowcaseSection = dynamic(() => import("@/components/sections/ShowcaseSection").then(mod => mod.ShowcaseSection));
const ExpandedServicesSection = dynamic(() => import("@/components/sections/ExpandedServicesSection").then(mod => mod.ExpandedServicesSection));
const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection").then(mod => mod.TechStackSection));
const JourneySection = dynamic(() => import("@/components/sections/JourneySection").then(mod => mod.JourneySection));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection));
const AgencySummarySection = dynamic(() => import("@/components/sections/AgencySummarySection").then(mod => mod.AgencySummarySection));

export default function Home() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Clean URL hash after navigation (e.g. comming from /about-us -> /#contact)
    if (window.location.hash) {
      // Wait a small moment for browser native scroll to kick in
      const timer = setTimeout(() => {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      }, 1000); // 1s delay to safely allow scroll to happen

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="relative w-full">
      <Navigation />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <OrangeGlow variant="center" intensity="medium" className="opacity-40" />
      </div>

      <AuroraBackground className="relative z-10 bg-transparent">
        <BackgroundPaths />

        <div className="relative z-20 w-full flex flex-col">
          <HeroSection />
          <ScrollTextSection />
          <WavyTextSection />

          {mounted && (isMobile ? (
            <MobileGallerySection />
          ) : (
            <>
              <MixedGallerySection />
              <ShowcaseSection />
            </>
          ))}

          <ExpandedServicesSection />
          <TechStackSection />
          <JourneySection />
          <ContactSection />
          <AgencySummarySection />
        </div>
      </AuroraBackground>

      {/* Footer sits outside the Aurora/Z-index stack to allow sticky reveal */}
      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  );
}
