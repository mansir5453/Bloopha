"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WordLoader from "@/components/ui/word-loader";

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wordLoaderRef = useRef<HTMLDivElement>(null);

  // Master Timer: Force close preloader after 6 seconds no matter what
  useEffect(() => {
    const masterTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(masterTimer);
  }, []);

  // Fallback Timer: If video doesn't start in 2.5s, show fallback
  useEffect(() => {
    if (isVideoPlaying) return;

    const fallbackTimer = setTimeout(() => {
      if (!isVideoPlaying) {
        setShowFallback(true);
      }
    }, 2500);

    return () => clearTimeout(fallbackTimer);
  }, [isVideoPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure muted is set for autoplay policies
      videoRef.current.muted = true;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video play failed:", error);
        });
      }
    }
  }, []);

  const handleVideoEnd = () => {
    setIsLoading(false);
  };

  const handleVideoUpdate = () => {
    if (!showFallback && !isVideoPlaying) {
      setIsVideoPlaying(true);
    }
  };

  const handleVideoError = () => {
    console.error("Video load error");
    setShowFallback(true);
  };

  useGSAP(() => {
    if (!isLoading) {
      const mainContent = document.getElementById("main-content");

      // Kill WordLoader animations if they are running
      if (wordLoaderRef.current) {
        gsap.killTweensOf(wordLoaderRef.current.querySelectorAll("*"));
      }

      const tl = gsap.timeline();

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
          document.body.style.overflow = "auto";
        }
      })
        .fromTo(
          mainContent,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      id="preloader"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      {showFallback ? (
        // Fallback: Word Loader
        <div className="flex flex-col items-center justify-center w-full max-w-md px-4">
          <div className="mb-8 text-center">
            <h1
              className="text-4xl sm:text-6xl font-bold mb-2"
              style={{ color: "#F0660A" }}
            >
              Bloopha
            </h1>
          </div>
          <div ref={wordLoaderRef} className="w-full">
            <WordLoader
              words={PRELOADER_WORDS}
              maxWords={4}
              className="text-neutral-800"
            />
          </div>
        </div>
      ) : (
        // Primary: Video
        <>
          <video
            ref={videoRef}
            src="/videos/scroll-video.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            onTimeUpdate={handleVideoUpdate}
            onPlaying={handleVideoUpdate}
            onError={handleVideoError}
            className="w-full h-full object-contain"
          />
        </>
      )}
    </div>
  );
}
