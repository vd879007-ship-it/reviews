import React from 'react';
import { BRAND_CONFIG } from '../config';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="pt-6 sm:pt-8 pb-3 text-center px-4 relative">
      <div className="inline-flex flex-col items-center justify-center">
        {/* Official Brand Logo Badge */}
        <div className="relative group mb-2">
          <img
            src={BRAND_CONFIG.logo || "/logo-removebg-preview.png"}
            alt={BRAND_CONFIG.name}
            className="w-32 h-32 sm:w-36 sm:h-36 object-contain drop-shadow-md transition-transform duration-500 hover:scale-105 mx-auto"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.18em] uppercase text-[#2B170B] mt-0.5">
          {BRAND_CONFIG.name}
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-2 mt-2">
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#C2783B]/60"></span>
          <p className="text-[10px] sm:text-xs tracking-[0.24em] uppercase text-[#5C3820] font-sans-ui font-bold">
            {BRAND_CONFIG.tagline}
          </p>
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#C2783B]/60"></span>
        </div>

        {/* Sub-tagline / Philosophy */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#5C3820]/90 font-serif-luxury italic tracking-wide mt-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C2783B]" />
          <span>{BRAND_CONFIG.category}</span>
        </div>
      </div>
    </header>
  );
}
