"use client";

import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer-section";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function PrivacyPolicy() {
    return (
        <main className="relative w-full bg-white">
            <Navigation />

            <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F0660A] to-[#ff9e5e] mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-6">
                    <p>Effective Date: {new Date().getFullYear()}-01-01</p>

                    <p>
                        At <strong>Bloopha</strong> ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website <strong>bloopha.com</strong>.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect information you voluntarily provide to us, such as:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact forms.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with our website (e.g., pages visited, time spent) via analytics tools.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use your data to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Respond to your inquiries and project requests.</li>
                        <li>Improve our website functionality and user experience.</li>
                        <li>Send infrequent updates or marketing communications (only if you opt-in).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Cookies & Tracking</h2>
                    <p>
                        We may use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some site features may not function properly.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Data Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and advertisers.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us at <strong>contact@bloopha.com</strong>.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We encourage users to frequently check this page for any changes.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via our website contact form or at contact@bloopha.com.
                    </p>
                </div>
            </div>

            <div className="relative z-50">
                <Footer />
            </div>
        </main>
    );
}
