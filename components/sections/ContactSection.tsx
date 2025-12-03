"use client";

import { LiquidButton } from "@/components/ui/liquid-glass-button";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let's build the
                <br />
                <span className="text-indigo-600">impossible.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Ready to elevate your brand? Bloopha transforms visions into digital reality.
              </p>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                Accepting new projects for Q4 2025
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 italic">
                "Bloopha didn't just build a website; they built a digital flagship that doubled our leads in 3 months."
              </p>
              <p className="text-xs sm:text-sm text-gray-500">— Sarah J., TechStart Inc.</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base">
                  <option>Brand Identity</option>
                  <option>Website Design</option>
                  <option>Marketing Strategy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="pt-2">
                <LiquidButton variant="default" size="xl" className="w-full">
                  <span className="text-white">Send Request</span>
                </LiquidButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};