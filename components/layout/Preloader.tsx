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
  /* State for manual play interaction */
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wordLoaderRef = useRef<HTMLDivElement>(null);

  // Hydration fix: Ensure we only render interaction logic after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Master Timer: Force close preloader after 6 seconds no matter what
  useEffect(() => {
    const masterTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(masterTimer);
  }, []);

  // Fallback Timer: If video doesn't start in 2.5s, show fallback (ONLY if not showing play button)
  useEffect(() => {
    if (isVideoPlaying || showPlayButton) return;

    const fallbackTimer = setTimeout(() => {
      if (!isVideoPlaying && !showPlayButton) {
        setShowFallback(true);
      }
    }, 2500);

    return () => clearTimeout(fallbackTimer);
  }, [isVideoPlaying, showPlayButton]);

  useEffect(() => {
    if (videoRef.current && mounted) {
      // Ensure muted is set for autoplay policies
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.playsInline = true;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // graceful handling for autoplay blockers or power saving modes
          if (error.name === 'AbortError' || error.name === 'NotAllowedError') {
            console.log("Autoplay prevented by browser (" + error.name + "), switching to manual play.");
            setShowPlayButton(true);
          } else {
            console.error("Video play failed:", error);
            setShowPlayButton(true);
          }
        });
      }
    }
  }, [mounted]);

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

  const handleEnterSite = () => {
    if (videoRef.current) {
      setShowPlayButton(false);
      videoRef.current.play().catch(e => console.error("Manual play failed", e));
      // videoRef.current.muted = false; // User requested mute
      videoRef.current.muted = true;
    }
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

  if (!mounted) return null;

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
            className="w-full h-full object-contain pointer-events-none"
            controls={false}
          />
          {showPlayButton && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <button
                onClick={handleEnterSite}
                className="group relative px-8 py-4 bg-[#F0660A] hover:bg-[#d05500] text-white font-bold text-lg tracking-wider transition-all duration-300 rounded-full overflow-hidden shadow-[0_0_20px_rgba(240,102,10,0.5)] hover:shadow-[0_0_40px_rgba(240,102,10,0.8)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ENTER SITE
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
