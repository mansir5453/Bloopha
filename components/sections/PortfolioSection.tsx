"use client";

import { Carousel } from "@/components/ui/carousel";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-teal-600 font-medium tracking-widest uppercase text-xs md:text-sm mb-4 block">
          Our Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
          Featured Work
        </h2>
        <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
          Explore our latest projects showcasing innovative digital marketing
          campaigns, stunning designs, and results-driven strategies.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4">
        <Carousel
          slides={[
            // Social Media Campaigns
            <div
              key="social-media"
              className="border h-[400px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 shadow-lg"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
                  alt="Social media marketing campaigns"
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Social Media Campaigns
                </h3>
                <p className="text-white/90 text-sm">
                  Engaging content that drives real results
                </p>
              </div>
            </div>,

            // Website Designs
            <div
              key="website-design"
              className="border h-[400px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 shadow-lg"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
                  alt="Modern website designs"
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Website Designs
                </h3>
                <p className="text-white/90 text-sm">
                  Beautiful, conversion-optimized websites
                </p>
              </div>
            </div>,

            // Brand Identity
            <div
              key="brand-identity"
              className="border h-[400px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 shadow-lg"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                  alt="Brand identity and logo design"
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Brand Identity
                </h3>
                <p className="text-white/90 text-sm">
                  Memorable logos and brand systems
                </p>
              </div>
            </div>,

            // SEO & Analytics
            <div
              key="seo-analytics"
              className="border h-[400px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-green-100 to-green-50 shadow-lg"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="SEO and analytics dashboard"
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  SEO & Analytics
                </h3>
                <p className="text-white/90 text-sm">
                  Data-driven growth strategies
                </p>
              </div>
            </div>,

            // Content Creation
            <div
              key="content-creation"
              className="border h-[400px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 shadow-lg"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Content creation and copywriting"
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Content Creation
                </h3>
                <p className="text-white/90 text-sm">
                  Compelling stories that convert
                </p>
              </div>
            </div>,

            // Paid Advertising
            <div
              key="paid-ads"
              className="border h-[400px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 via-teal-100 to-teal-50 shadow-lg"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Paid advertising campaigns"
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Paid Advertising
                </h3>
                <p className="text-white/90 text-sm">
                  Maximum ROI on every ad dollar
                </p>
              </div>
            </div>,
          ]}
        />

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <LiquidButton className="h-14 cursor-pointer rounded-full px-10 text-base font-semibold">
            View All Projects →
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
