"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: "Explore",
        links: [
            { title: "Home", href: "/#hero" },
            { title: "Our Work", href: "/#work" },
            { title: "Services", href: "/#services" },
            { title: "Journey", href: "/#journey" },
        ],
    },
    {
        label: "Company",
        links: [
            { title: "About Us", href: "/about-us" },
            { title: "Contact", href: "/#contact" },
            { title: "Privacy Policy", href: "/privacy-policy" },
            { title: "Terms of Service", href: "/terms-of-service" },
        ],
    },
    {
        label: "Connect",
        links: [
            { title: "Twitter", href: "#", icon: TwitterIcon },
            { title: "Instagram", href: "https://www.instagram.com/thebloopha?igsh=MWxwbmd6ZzhvanBwMw==", icon: InstagramIcon },
            { title: "LinkedIn", href: "#", icon: LinkedinIcon },
            { title: "Facebook", href: "#", icon: FacebookIcon },
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/40 bg-white/95 bg-[radial-gradient(60%_200px_at_50%_0%,rgba(240,102,10,0.4),transparent)] px-6 py-12 lg:py-20 backdrop-blur-[100px] backdrop-saturate-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            {/* Orange Glow Top Line */}
            <div className="absolute top-0 right-1/2 left-1/2 h-[2px] w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-[#F0660A] to-transparent blur-[4px] opacity-100" />

            <div className="grid w-full gap-10 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-6 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-bold tracking-tighter text-black">
                            BLOOPHA
                        </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
                        Crafting immersive digital realities that transform brands and captivate audiences.
                    </p>
                    <p className="text-gray-600 text-sm mt-8">
                        © {new Date().getFullYear()} Bloopha. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">{section.label}</h3>
                                <ul className="space-y-3 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            {link.href.startsWith("http") ? (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-700 hover:text-[#F0660A] inline-flex items-center transition-colors duration-300"
                                                >
                                                    {link.icon && <link.icon className="me-2 size-4" />}
                                                    {link.title}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-700 hover:text-[#F0660A] inline-flex items-center transition-colors duration-300"
                                                >
                                                    {link.icon && <link.icon className="me-2 size-4" />}
                                                    {link.title}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>["className"];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
