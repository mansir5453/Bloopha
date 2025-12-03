"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col w-full bg-white text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        {/* Aurora effect layer - z-0 */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute -inset-[10px] pointer-events-none opacity-50 will-change-transform"
            style={{
              background: `
                repeating-linear-gradient(
                  100deg,
                  #ffffff 0%,
                  #ffffff 7%,
                  transparent 10%,
                  transparent 12%,
                  #ffffff 16%
                ),
                repeating-linear-gradient(
                  100deg,
                  #3b82f6 10%,
                  #a5b4fc 15%,
                  #93c5fd 20%,
                  #ddd6fe 25%,
                  #60a5fa 30%
                )
              `,
              backgroundSize: '300% 200%, 200% 100%',
              backgroundPosition: '50% 50%, 50% 50%',
              filter: 'blur(10px)',
              maskImage: showRadialGradient 
                ? 'radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)'
                : undefined,
            }}
          >
            <div
              className="absolute inset-0 animate-aurora"
              style={{
                background: `
                  repeating-linear-gradient(
                    100deg,
                    #ffffff 0%,
                    #ffffff 7%,
                    transparent 10%,
                    transparent 12%,
                    #ffffff 16%
                  ),
                  repeating-linear-gradient(
                    100deg,
                    #3b82f6 10%,
                    #a5b4fc 15%,
                    #93c5fd 20%,
                    #ddd6fe 25%,
                    #60a5fa 30%
                  )
                `,
                backgroundSize: '200% 100%',
                backgroundAttachment: 'fixed',
                mixBlendMode: 'difference',
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        {children}
      </div>
    </main>
  );
};
