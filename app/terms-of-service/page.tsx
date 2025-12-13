"use client";

import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer-section";

export default function TermsOfService() {
    return (
        <main className="relative w-full bg-white">
            <Navigation />

            <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F0660A] to-[#ff9e5e] mb-8">
                    Terms of Service
                </h1>

                <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-6">
                    <p>Last Updated: {new Date().getFullYear()}-01-01</p>

                    <p>
                        Welcome to <strong>Bloopha</strong>. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Services</h2>
                    <p>
                        Bloopha provides digital marketing, web design, and branding services. The specific scope, deliverables, and terms for client projects will be defined in separate service agreements or contracts.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, and code, is the property of Bloopha or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. User Conduct</h2>
                    <p>
                        You agree to use our website only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website, including accessing data not intended for you or attempting to probe, scan, or test the vulnerability of our system.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>
                        In no event shall Bloopha be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or our services.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We have no control over the content or practices of these sites and accept no responsibility for them.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Changes to Terms</h2>
                    <p>
                        Bloopha reserves the right to modify these specific Terms of Service at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Governing Law</h2>
                    <p>
                        These terms generally shall be governed by and construed in accordance with the laws of the jurisdiction in which Bloopha operates, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Contact Info</h2>
                    <p>
                        For any questions regarding these Terms, please contact us at contact@bloopha.com.
                    </p>
                </div>
            </div>

            <div className="relative z-50">
                <Footer />
            </div>
        </main>
    );
}
