import React from 'react';
import { BRAND_CONFIG } from '../config';
import { Coffee } from 'lucide-react';

export default function Header() {
  return (
    <header className="pt-6 sm:pt-8 pb-3 text-center px-4 relative">
      <div className="inline-flex flex-col items-center justify-center">
        {/* Official Brand Logo Badge */}
        <div className="relative group mb-3">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#FFFDF9] to-[#F7EEDB] border-2 border-[#C2783B]/50 shadow-md flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <img
              src={BRAND_CONFIG.logo || "/la-cafe-logo.png"}
              alt={BRAND_CONFIG.name}
              className="w-full h-full object-contain rounded-full drop-shadow-xs"
            />
          </div>
          {/* Subtle Glow Ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C2783B]/20 via-[#D48D48]/30 to-[#C2783B]/20 blur-sm -z-10 opacity-70 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Brand Name */}
        <h1 className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.18em] uppercase text-[#2B170B] mt-0.5">
          {BRAND_CONFIG.name}
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-2 mt-1.5">
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#C2783B]/60"></span>
          <p className="text-[10px] sm:text-xs tracking-[0.24em] uppercase text-[#5C3820] font-sans-ui font-semibold">
            {BRAND_CONFIG.tagline}
          </p>
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#C2783B]/60"></span>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#5C3820]/80 font-serif-luxury italic tracking-wide mt-1">
          <Coffee className="w-3.5 h-3.5 text-[#C2783B]" />
          <span>{BRAND_CONFIG.category}</span>
        </div>
      </div>
    </header>
  );
}
