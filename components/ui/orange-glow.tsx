"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface OrangeGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "top" | "center" | "bottom";
  intensity?: "low" | "medium" | "high";
}

export const OrangeGlow = React.forwardRef<HTMLDivElement, OrangeGlowProps>(
  ({ className, variant = "top", intensity = "medium", ...props }, ref) => {
    const intensityMap = {
      low: "opacity-30",
      medium: "opacity-50",
      high: "opacity-70",
    };

    const positionMap = {
      top: "top-0",
      center: "top-1/2 -translate-y-1/2",
      bottom: "bottom-0",
    };

    return (
      <div
        ref={ref}
        className={cn("absolute w-full pointer-events-none", positionMap[variant], className)}
        {...props}
      >
        {/* Primary orange glow */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[600px] rounded-full blur-[120px]",
            intensityMap[intensity]
          )}
          style={{
            background: "radial-gradient(circle, rgba(240, 102, 10, 0.4) 0%, rgba(240, 102, 10, 0.2) 40%, transparent 70%)",
          }}
        />
        {/* Secondary amber glow */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] max-w-full h-[400px] rounded-full blur-[100px]",
            intensityMap[intensity]
          )}
          style={{
            background: "radial-gradient(circle, rgba(255, 140, 50, 0.3) 0%, rgba(255, 140, 50, 0.1) 50%, transparent 70%)",
          }}
        />
      </div>
    );
  }
);

OrangeGlow.displayName = "OrangeGlow";
