"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  id: string;
}

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", id: "hero" },
    { label: "Work", id: "work" },
    { label: "Services", id: "services" },
    { label: "Process", id: "journey" },
    { label: "Contact", id: "contact" },
  ];

  // Spring animations for smooth motion
  const pillWidth = useSpring(180, {
    stiffness: 300,
    damping: 35,
    mass: 0.8,
    restDelta: 0.01,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // SCROLL DETECTION - Automatically detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hover/click expansion
  useEffect(() => {
    if (expanded) {
      // On mobile, expand to 90vw, on desktop to 640px (or fit content)
      const targetWidth = isMobile ? window.innerWidth * 0.9 : 640;
      pillWidth.set(targetWidth);
    } else {
      pillWidth.set(180);
    }
  }, [expanded, isMobile, pillWidth]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHovering(true);
      setExpanded(true);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovering(false);
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
      }, 500);
    }
  };

  const handleMobileToggle = () => {
    if (isMobile) {
      setExpanded(!expanded);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setExpanded(false); // Collapse on click

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeItem = navItems.find((item) => item.id === activeSection);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* LIQUID GLASS OUTER PILL */}
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMobileToggle}
        style={{
          width: pillWidth,
          height: "64px",
          maxWidth: "95vw", // Ensure it doesn't overflow screen
        }}
        className="relative rounded-full pointer-events-auto overflow-hidden sm:overflow-visible cursor-pointer sm:cursor-default"
      >
        {/* Liquid Glass Background Container */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: expanded
              ? `
                0 8px 32px rgba(0, 0, 0, 0.12),
                0 2px 8px rgba(0, 0, 0, 0.08),
                inset 3px 3px 0.5px -3px rgba(255, 255, 255, 0.3),
                inset -3px -3px 0.5px -3px rgba(0, 0, 0, 0.1),
                inset 0 0 6px 6px rgba(255, 255, 255, 0.05)
              `
              : `
                0 4px 16px rgba(0, 0, 0, 0.10),
                0 2px 4px rgba(0, 0, 0, 0.06),
                inset 3px 3px 0.5px -3px rgba(255, 255, 255, 0.2),
                inset -3px -3px 0.5px -3px rgba(0, 0, 0, 0.08),
                inset 0 0 6px 6px rgba(255, 255, 255, 0.03)
              `,
            transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
          }}
        />

        {/* Top edge highlight for glass effect */}
        <div
          className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
          style={{
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Bottom subtle shadow for depth */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
          style={{
            height: "30%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Navigation Content */}
        <div
          ref={containerRef}
          className="relative z-10 h-full flex items-center justify-center px-4"
          style={{
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", sans-serif',
          }}
        >
          {/* Collapsed state - shows current section */}
          {!expanded && (
            <div className="flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                {activeItem && (
                  <motion.span
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#F0660A",
                      letterSpacing: "0.3px",
                      whiteSpace: "nowrap",
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", sans-serif',
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {activeItem.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Expanded state - shows all nav items as plain buttons */}
          {expanded && (
            <div className="flex items-center justify-between w-full gap-1 px-1 sm:px-2 overflow-x-auto no-scrollbar">
              {navItems.map((item, index) => {
                const isActive = item.id === activeSection;

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent toggling when clicking an item
                      handleSectionClick(item.id);
                    }}
                    className={`
                      relative px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm font-medium
                      transition-all duration-200 cursor-pointer
                      whitespace-nowrap
                      ${isActive
                        ? "bg-white/20 text-[#F0660A] font-semibold scale-105"
                        : "bg-transparent text-[#F0660A]/80 hover:bg-white/10 hover:text-[#F0660A] scale-100"
                      }
                    `}
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", sans-serif',
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
