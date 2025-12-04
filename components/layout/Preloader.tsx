"use client";

import React, { useState, useEffect, useRef } from "react";
import WordLoader from "@/components/ui/word-loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PRELOADER_WORDS = [
  "Strategy",
  "Design",
  "Marketing",
  "Branding",
  "Analytics",
  "Growth",
  "Content",
  "Social Media",
  "SEO",
  "Campaigns",
];

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const wordLoaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useGSAP(() => {
    if (!isLoading) {
      const mainContent = document.getElementById("main-content");

      if (wordLoaderRef.current) {
        gsap.killTweensOf(wordLoaderRef.current.querySelectorAll("*"));
      }

      const tl = gsap.timeline();

      tl.to("#preloader", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
        .to("#preloader", {
          display: "none",
        })
        .fromTo(
          mainContent,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          }
        );
    }
  }, [isLoading]);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-cream-50 via-white to-orange-50"
    >
      <div className="mb-4 text-center">
        <h1
          className="text-6xl font-bold mb-2"
          style={{ color: "#F0660A" }}
        >
          Bloopha
        </h1>
      </div>

      <div ref={wordLoaderRef}>
        <WordLoader
          words={PRELOADER_WORDS}
          maxWords={4}
          className="text-neutral-800"
        />
      </div>
    </div>
  );
}
