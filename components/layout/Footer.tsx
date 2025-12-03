"use client";

import React from "react";

export const Footer = () => {
  return (
    <div 
      className="relative h-[500px]" 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[500px] w-full bg-[#F0660A] text-black">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-8 md:mb-0">
              Bloopha
            </h2>
            <div className="flex flex-col gap-4 text-lg font-medium">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-black/20 pt-8">
            <div className="flex flex-col gap-2 mb-4 md:mb-0">
              <span className="text-xl font-bold">Got an idea?</span>
              <a href="mailto:hello@bloopha.com" className="text-2xl md:text-4xl font-light underline decoration-1 underline-offset-4">
                hello@bloopha.com
              </a>
            </div>
            
            <div className="flex gap-8 text-sm font-semibold uppercase tracking-widest">
              <p>© 2025 Bloopha Inc.</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};