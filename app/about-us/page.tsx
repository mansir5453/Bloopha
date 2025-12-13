"use client";

import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { OrangeGlow } from "@/components/ui/orange-glow";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ArrowRight, Sparkles, Zap, Target, Layout, BarChart, Smartphone, Code, Rocket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutUs() {
    const router = useRouter();
    return (
        <main className="relative w-full bg-white selection:bg-[#F0660A] selection:text-white">
            <Navigation />

            {/* Global Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <OrangeGlow variant="center" intensity="medium" className="opacity-30" />
            </div>

            <AuroraBackground className="relative z-10 bg-transparent min-h-screen">
                <div className="relative z-20 flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">

                    {/* Header Section */}
                    <div className="mb-16 md:mb-24 space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black">
                            We Are <span className="text-[#F0660A]">Bloopha</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A fresh force in the digital world. We are a newly established agency with a singular vision: to craft immersive digital realities that don't just exist, but perform.
                        </p>
                    </div>

                    {/* Our Story / Vision Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-24 text-left">
                        <div className="bg-white/50 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-full bg-[#faefe9]">
                                    <Sparkles className="size-6 text-[#F0660A]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Bloopha was born from the belief that modern businesses need more than just a website—they need an identity. As a new company, we bring unbridled energy, modern techniques, and zero legacy baggage. We treat every project as our flagship, dedicating intense focus to layout, motion, and user experience.
                            </p>
                        </div>

                        <div className="bg-white/50 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-full bg-[#faefe9]">
                                    <Target className="size-6 text-[#F0660A]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To bridge the gap between "functional" and "phenomenal." We exist to help ambitious brands—whether startups or established names—redefine their digital presence. We don't just deliver code; we deliver results, traffic, and brand authority through cutting-edge SEO and high-performance design.
                            </p>
                        </div>
                    </div>

                    {/* What We Do (Services Data) */}
                    <div className="w-full mb-24 text-left">
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">What We Master</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/30 hover:bg-white/60 transition-colors">
                                <Layout className="size-8 text-[#F0660A] mb-4" />
                                <h4 className="text-xl font-bold mb-2">Web Design & UX</h4>
                                <p className="text-sm text-gray-600">Creating stunning, immersive interfaces/layouts that captivate users instantly.</p>
                            </div>

                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/30 hover:bg-white/60 transition-colors">
                                <Code className="size-8 text-[#F0660A] mb-4" />
                                <h4 className="text-xl font-bold mb-2">Development</h4>
                                <p className="text-sm text-gray-600">Robust, scalable code using modern tech like Next.js, React, and GSAP.</p>
                            </div>

                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/30 hover:bg-white/60 transition-colors">
                                <BarChart className="size-8 text-[#F0660A] mb-4" />
                                <h4 className="text-xl font-bold mb-2">Digital Strategy</h4>
                                <p className="text-sm text-gray-600">Data-driven planning, SEO optimization, and growth analytics.</p>
                            </div>

                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/30 hover:bg-white/60 transition-colors">
                                <Smartphone className="size-8 text-[#F0660A] mb-4" />
                                <h4 className="text-xl font-bold mb-2">Mobile First</h4>
                                <p className="text-sm text-gray-600">Optimized experiences for every device, ensuring speed and fluidity.</p>
                            </div>

                        </div>
                    </div>

                    {/* Our Process (Journey Data) */}
                    <div className="w-full mb-24">
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">How We Work</h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {["Discovery", "Strategy", "Execution", "Optimization", "Growth"].map((step, i) => (
                                <div key={step} className="flex items-center gap-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs font-bold text-[#F0660A] tracking-wider uppercase mb-1">Step {i + 1}</span>
                                        <span className="text-lg md:text-xl font-bold text-gray-900">{step}</span>
                                    </div>
                                    {i < 4 && <div className="hidden md:block w-12 h-[2px] bg-orange-200" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="relative z-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">Ready to start your journey?</h2>
                        <LiquidButton
                            variant="default"
                            size="xl"
                            onClick={() => router.push("/#contact")}
                            className="mx-auto"
                        >
                            <span className="font-bold flex items-center gap-2">
                                Let's Talk
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </LiquidButton>
                    </div>

                </div>
            </AuroraBackground>

            <div className="relative z-50">
                <Footer />
            </div>
        </main>
    );
}
