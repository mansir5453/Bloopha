"use client";

import { ServiceCard } from "@/components/ui/service-card";
import {
  Sparkles,
  Search,
  PenTool,
  Target,
  BarChart,
  Mail,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";

export const ExpandedServicesSection = () => {
  const services = [
    {
      title: "Social Media Marketing",
      icon: Sparkles,
      description: "Social media strategy & planning",
      features: [
        "Content creation & management",
        "Paid social ads (Meta, TikTok, LinkedIn)",
        "Community management",
        "Influencer marketing",
      ],
    },
    {
      title: "Search Engine Optimization",
      icon: Search,
      description: "On-page SEO",
      features: [
        "Technical SEO",
        "Off-page / backlink building",
        "Local SEO",
        "SEO audits",
      ],
    },
    {
      title: "Content Marketing",
      icon: PenTool,
      description: "Blog writing & SEO content",
      features: [
        "Video content & reels",
        "Copywriting (web, ads, emails)",
        "Content strategy",
      ],
    },
    {
      title: "Meta Ads & Paid Social",
      icon: Target,
      description: "Facebook Ads",
      features: [
        "Instagram Ads",
        "Performance creatives",
        "A/B testing & optimization",
      ],
    },
    {
      title: "Marketing Strategy",
      icon: TrendingUp,
      description: "Full digital strategy",
      features: [
        "Competitor analysis",
        "Market research",
        "Brand positioning",
      ],
    },
    {
      title: "Analytics & Reporting",
      icon: BarChart,
      description: "GA4 setup & tracking",
      features: [
        "Dashboard creation",
        "Monthly performance reports",
        "ROI analysis",
      ],
    },
    {
      title: "Email Marketing",
      icon: Mail,
      description: "Campaign design & strategy",
      features: [
        "Automation workflows",
        "List segmentation",
        "A/B testing",
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      description: "Custom website design",
      features: [
        "E-commerce solutions",
        "Landing page optimization",
        "Mobile-first development",
      ],
    },
    {
      title: "Lead Generation",
      icon: Users,
      description: "Funnel building",
      features: [
        "WhatsApp marketing automation",
        "Reputation management",
        "Conversion optimization",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-indigo-600 font-medium tracking-widest uppercase text-xs md:text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to elevate your brand and
            drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 50}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
