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
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", id: "hero" },
    { label: "Our Work", id: "work" },
    { label: "Services", id: "services" },
    { label: "Journey", id: "journey" },
    { label: "Contact", id: "contact" },
  ];

  // Spring animations for smooth motion
  const pillWidth = useSpring(180, {
    stiffness: 300,
    damping: 35,
    mass: 0.8,
    restDelta: 0.01,
  });

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

  // Handle hover expansion
  useEffect(() => {
    if (hovering) {
      setExpanded(true);
      pillWidth.set(640);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
        pillWidth.set(180);
      }, 500);
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [hovering, pillWidth]);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setHovering(false);

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
        style={{
          width: pillWidth,
          height: "64px",
          maxWidth: "90vw",
        }}
        className="relative rounded-full pointer-events-auto overflow-hidden sm:overflow-visible"
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
                      color: "#1a1a1a",
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
            <div className="flex items-center justify-between w-full gap-1 px-2">
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
                    onClick={() => handleSectionClick(item.id)}
                    className={`
                      relative px-3 py-2 rounded-full text-sm font-medium
                      transition-all duration-200 cursor-pointer
                      whitespace-nowrap
                      ${isActive
                        ? "bg-white/20 text-gray-900 font-semibold scale-105"
                        : "bg-transparent text-gray-700 hover:bg-white/10 hover:text-gray-900 scale-100"
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
