"use client";

import { Logo } from "@/assets/icons/Logo";
import { cn } from "@/utils/cn";
import { useState } from "react";

export const StickyNav = () => {
  return (
    <div className="sticky bottom-0 bg-dark-800 shadow p-5 flex items-end justify-center max-h-[60px] z-50 mt-20">
      <div className="max-h-[60px] max-w-[60px] flex items-center justify-center relative">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 60px, 0 60px)",
          }}
          className={cn(
            "min-h-[140px] min-w-[140px] pointer-events-none bg-primary-100 flex items-center justify-center rounded-full transition-all animate-pulse"
          )}
        >
          <div className="min-h-[100px] min-w-[100px] bg-primary-100 flex items-center justify-center rounded-full"></div>
        </div>
        <a className="absolute block h-[60px] w-[60px]" href="#hero">
          <div className="h-[60px] w-[60px] bg-primary rounded-full flex items-center justify-center">
            <Logo className="h-5 w-5 translate-x-1" />
          </div>
        </a>
      </div>
    </div>
  );
};
