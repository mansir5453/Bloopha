"use client";

import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formkeep.com/f/b25ba1557251", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let's build the
                <br />
                <span className="text-[#F0660A]">impossible.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Ready to elevate your brand? Bloopha transforms visions into digital reality.
              </p>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mx-auto lg:mx-0">
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

          {/* Right Column - Form Container */}
          <div className="relative h-[600px] w-full perspective-1000">
            <div className="relative w-full h-full">
              {/* Form Face */}
              <motion.div
                initial={false}
                animate={{
                  rotateY: isSubmitted ? -180 : 0,
                  opacity: isSubmitted ? 0 : 1,
                  zIndex: isSubmitted ? 0 : 1
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 h-full flex flex-col justify-center">
                  <input type="hidden" name="utf8" value="✓" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white text-black placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white text-black placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select id="projectType" name="projectType" className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white text-black focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base backdrop-blur-sm">
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Marketing Strategy">Marketing Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-200 bg-white text-black placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base resize-none backdrop-blur-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="pt-2">
                    <LiquidButton type="submit" variant="default" size="xl" className="w-full" disabled={isSubmitting}>
                      <span className="text-black font-semibold flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Request"
                        )}
                      </span>
                    </LiquidButton>
                  </div>
                </form>
              </motion.div>

              {/* Success Face */}
              <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{
                  rotateY: isSubmitted ? 0 : 180,
                  opacity: isSubmitted ? 1 : 0,
                  zIndex: isSubmitted ? 1 : 0
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-200 shadow-xl flex flex-col items-center justify-center text-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSubmitted ? 1 : 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <LiquidButton
                  variant="default"
                  size="lg"
                  onClick={() => setIsSubmitted(false)}
                  className="min-w-[200px]"
                >
                  <span className="text-black font-semibold">Send Another</span>
                </LiquidButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};