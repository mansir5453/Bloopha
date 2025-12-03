"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard, { Testimonial } from "@/components/ui/multi-media-testimonial";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

// Convert your existing projects to the Testimonial format required by the card
const projects: Testimonial[] = [
  {
    title: "Web Design & Development",
    name: "E-Commerce Revolution",
    designation: "Success Story",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    content: "Achieved a 300% increase in online sales through a complete UX overhaul and performance optimization strategy.",
    profile: "https://i.pravatar.cc/150?u=1",
  },
  {
    title: "Branding & Marketing",
    name: "Brand Identity Redesign",
    designation: "Transformation",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    content: "A complete brand transformation that repositioned the company as a market leader in the tech sector.",
    profile: "https://i.pravatar.cc/150?u=2",
  },
  {
    title: "Digital Marketing",
    name: "Social Media Campaign",
    designation: "Growth",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    content: "Generated over 5M+ impressions in just 30 days through targeted viral content strategies.",
    profile: "https://i.pravatar.cc/150?u=3",
  },
  {
    title: "App Design",
    name: "Mobile App Development",
    designation: "Product Launch",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    content: "Featured on the App Store 'App of the Day' after our redesign focused on intuitive user flows.",
    profile: "https://i.pravatar.cc/150?u=4",
  },
  {
    title: "Video Production",
    name: "Corporate Vision",
    designation: "Media",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
    content: "A cinematic journey through the company's 50-year history, blending archival footage with modern motion graphics.",
    profile: "https://i.pravatar.cc/150?u=5",
  },
  {
    title: "SEO Strategy",
    name: "Organic Growth",
    designation: "Results",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
    content: "Dominated search rankings for 50+ competitive keywords within 6 months of implementation.",
    profile: "https://i.pravatar.cc/150?u=6",
  },
];

export function OurWorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Web Design", "Branding", "Marketing", "Development"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.title?.includes(activeFilter));

  return (
    <section id="work" className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-indigo-600 font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Our Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore our portfolio of successful projects that have transformed businesses
          </p>
        </div>

        {/* Filters - Glassmorphism Pill Buttons */}
        <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 pb-2 sm:pb-0 px-0 sm:flex-wrap sm:justify-center scrollbar-hide">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  relative whitespace-nowrap flex-shrink-0
                  px-5 py-2.5 sm:px-6 sm:py-3
                  rounded-full
                  text-sm sm:text-base font-medium
                  transition-all duration-300 ease-out
                  backdrop-blur-lg backdrop-saturate-150
                  ${isActive
                    ? `
                        bg-gradient-to-br from-amber-50/60 via-yellow-50/55 to-orange-50/60
                        text-gray-900
                        shadow-[0_2px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.04)]
                        scale-[1.02]
                        font-semibold
                      `
                    : `
                        bg-white/25
                        text-gray-800
                        shadow-[0_1px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.02)]
                        hover:bg-white/30
                        hover:shadow-[0_2px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.65)]
                        hover:scale-[1.01]
                      `
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Masonry Layout */}
        {filteredProjects.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-12">
            No projects found for this category.
          </p>
        )}

        {/* CTA - Glassmorphism Button */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <LiquidButton
            className="px-8 py-4 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-black"
            variant="default"
            size="xxl"
          >
            View All Projects
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
