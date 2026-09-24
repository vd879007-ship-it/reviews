import React from 'react';
import { BRAND_CONFIG } from '../config';
import { QrCode } from 'lucide-react';

export default function Header({ onOpenQR }) {
  return (
    <header className="pt-6 sm:pt-8 pb-3 text-center px-4 relative">
      <div className="inline-flex flex-col items-center justify-center">
        {/* Monogram Badge */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-2.5 rounded-full border border-[#C4936E]/40 bg-gradient-to-b from-[#FFFFFF] to-[#F7F2EA] flex items-center justify-center shadow-xs transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-1 rounded-full border border-dashed border-[#9E6A47]/30 pointer-events-none"></div>
          <span className="font-brand text-xl sm:text-2xl font-bold tracking-widest text-[#3A2417] select-none">
            {BRAND_CONFIG.monogram}
          </span>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase text-[#24160E] mt-0.5">
          {BRAND_CONFIG.name}
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-2 mt-1.5">
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#9E6A47]/50"></span>
          <p className="text-[10px] sm:text-xs tracking-[0.26em] uppercase text-[#68422A] font-sans-ui font-medium">
            {BRAND_CONFIG.tagline}
          </p>
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#9E6A47]/50"></span>
        </div>

        <p className="text-[11px] sm:text-xs text-[#68422A]/75 font-serif-luxury italic tracking-wider mt-1">
          {BRAND_CONFIG.category}
        </p>
      </div>

      <div className="absolute right-3 top-5 sm:right-4 sm:top-6">
        <button
          onClick={onOpenQR}
          title="Store QR Code Tool"
          className="text-[11px] font-sans-ui flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C4936E]/40 text-[#3A2417] bg-white/90 hover:bg-white hover:border-[#9E6A47] transition-all shadow-2xs cursor-pointer backdrop-blur-sm"
        >
          <QrCode className="w-3.5 h-3.5 text-[#9E6A47]" />
          <span className="hidden sm:inline font-medium">QR Code</span>
        </button>
      </div>
    </header>
  );
}
