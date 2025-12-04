"use client";

import { Timeline } from "@/components/ui/timeline";

export function JourneySection() {
  const data = [
    {
      id: "discovery", // ✅ Added unique ID
      title: "Discovery",
      content: (
        <div>
          <h4 className="text-xl font-bold text-neutral-800 mb-4">
            Understanding Your Vision
          </h4>
          <p className="text-neutral-700 text-base mb-6">
            We begin by diving deep into your brand identity, business goals,
            and target audience. Through comprehensive consultation sessions,
            we identify unique opportunities and craft a strategic roadmap
            perfectly aligned with your vision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-bold text-2xl text-neutral-800 mb-1">100%</p>
              <p className="text-sm text-neutral-600">Client-Focused</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-bold text-2xl text-neutral-800 mb-1">360°</p>
              <p className="text-sm text-neutral-600">Brand Analysis</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "strategy", // ✅ Added unique ID
      title: "Strategy",
      content: (
        <div>
          <h4 className="text-xl font-bold text-neutral-800 mb-4">
            Data-Driven Planning
          </h4>
          <p className="text-neutral-700 text-base mb-6">
            Our expert team develops a comprehensive digital marketing strategy
            tailored to your needs. We create detailed content calendars,
            campaign blueprints, and performance KPIs designed to maximize
            ROI and drive measurable results.
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700">
            <li>Comprehensive market research & competitor analysis</li>
            <li>Custom content calendar & campaign roadmap</li>
            <li>Performance KPIs & success metrics</li>
            <li>Budget optimization & resource allocation</li>
          </ul>
        </div>
      ),
    },
    {
      id: "execution", // ✅ Added unique ID
      title: "Execution",
      content: (
        <div>
          <h4 className="text-xl font-bold text-neutral-800 mb-4">
            Bringing Ideas to Life
          </h4>
          <p className="text-neutral-700 text-base mb-6">
            We transform strategy into reality with stunning content, optimized
            campaigns, and cutting-edge digital experiences. Our creative team
            crafts compelling narratives that captivate your audience and
            drive meaningful engagement across all channels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-semibold text-neutral-800">SEO</p>
              <p className="text-sm text-neutral-600">Optimization</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-semibold text-neutral-800">Social</p>
              <p className="text-sm text-neutral-600">Campaigns</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-semibold text-neutral-800">Content</p>
              <p className="text-sm text-neutral-600">Creation</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-semibold text-neutral-800">Paid Ads</p>
              <p className="text-sm text-neutral-600">Management</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "optimization", // ✅ Added unique ID
      title: "Optimization",
      content: (
        <div>
          <h4 className="text-xl font-bold text-neutral-800 mb-4">
            Continuous Improvement
          </h4>
          <p className="text-neutral-700 text-base mb-6">
            We don't just launch and leave. Our team continuously monitors
            performance metrics, analyzes data insights, and refines strategies
            to ensure sustained growth and exceptional results month after month.
          </p>
          <div className="bg-white/50 p-4 rounded-lg">
            <p className="font-bold text-3xl text-neutral-800 mb-2">24/7</p>
            <p className="text-neutral-600">
              Real-time monitoring & performance tracking
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "growth", // ✅ Added unique ID
      title: "Growth",
      content: (
        <div>
          <h4 className="text-xl font-bold text-neutral-800 mb-4">
            Scaling Your Success
          </h4>
          <p className="text-neutral-700 text-base mb-6">
            Watch your brand soar as we implement advanced growth tactics,
            expand your market reach, and establish your dominance in the
            digital landscape. Your success is our mission.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/50 p-4 rounded-lg text-center">
              <p className="font-bold text-xl text-neutral-800 mb-1">300%+</p>
              <p className="text-xs text-neutral-600">Avg Growth</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg text-center">
              <p className="font-bold text-xl text-neutral-800 mb-1">500+</p>
              <p className="text-xs text-neutral-600">Campaigns</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg text-center">
              <p className="font-bold text-xl text-neutral-800 mb-1">98%</p>
              <p className="text-xs text-neutral-600">Satisfaction</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="journey" className="relative py-6 md:py-12 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-[#F0660A] font-medium tracking-widest uppercase text-xs md:text-sm mb-2 block">
          Our Process
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-800 mb-2">
          How We Work
        </h2>
        <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
          From concept to launch, we follow a proven methodology to ensure
          your digital success at every stage.
        </p>
      </div>

      <Timeline data={data} />
    </section>
  );
}
