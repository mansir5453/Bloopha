import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollTextSection } from "@/components/sections/ScrollTextSection";
import { WavyTextSection } from "@/components/sections/WavyTextSection";
import { MixedGallerySection } from "@/components/sections/MixedGallerySection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { ExpandedServicesSection } from "@/components/sections/ExpandedServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ScrollExpansionSection } from "@/components/sections/ScrollExpansionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/footer-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { OrangeGlow } from "@/components/ui/orange-glow";

export default function Home() {
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
          <MixedGallerySection />
          {/* <OurWorkSection /> */}
          <ExpandedServicesSection />
          <TechStackSection />
          <JourneySection />
          <ScrollExpansionSection />
          {/* <PortfolioSection /> */}
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
