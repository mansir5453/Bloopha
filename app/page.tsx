"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollTextSection } from "@/components/sections/ScrollTextSection";
import { WavyTextSection } from "@/components/sections/WavyTextSection";
import { MixedGallerySection } from "@/components/sections/MixedGallerySection";
import { MobileGallerySection } from "@/components/sections/MobileGallerySection";
import { ExpandedServicesSection } from "@/components/sections/ExpandedServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/footer-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { OrangeGlow } from "@/components/ui/orange-glow";

import { useIsMobile } from "@/hooks/use-mobile";

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
        </div>
      </AuroraBackground>

      {/* Footer sits outside the Aurora/Z-index stack to allow sticky reveal */}
      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  );
}
