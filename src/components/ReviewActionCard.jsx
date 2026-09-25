import React from 'react';
import { Star, ArrowRight, Sparkles, ExternalLink, Coffee } from 'lucide-react';

export default function ReviewActionCard({ onOpenGoogle }) {
  return (
    <main className="w-full max-w-[580px] mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#C2783B]/35 luxury-card-shadow transition-all duration-300 relative text-center">
      {/* Subtle Roasted Caramel Accent Bar */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C2783B] to-transparent"></div>

      {/* Decorative Gold Stars */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className="w-7 h-7 sm:w-8 sm:h-8 fill-[#D48D48] text-[#D48D48] drop-shadow-[0_2px_8px_rgba(212,141,72,0.4)]"
          />
        ))}
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-[#2B170B] font-bold tracking-tight mb-2">
        Rate Your Coffee & Bites
      </h3>

      <p className="font-sans-ui text-xs sm:text-sm text-[#5C3820]/85 max-w-md mx-auto leading-relaxed mb-6 font-normal">
        From our signature espresso blends and silky lattes to fresh pastries, we’d love to know what made your visit special! Tap below to review us on Google.
      </p>

      {/* Primary 1-Click Submit CTA Button */}
      <button
        type="button"
        onClick={onOpenGoogle}
        className="w-full relative group py-4 px-6 rounded-full bg-[#2B170B] hover:bg-[#3D2314] text-[#FFFDF9] font-sans-ui font-bold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-[#C2783B]/50 overflow-hidden cursor-pointer"
      >
        <span className="relative z-10 flex items-center gap-2 text-[#FFFDF9]">
          <Coffee className="w-5 h-5 text-[#E6A85C]" />
          <span>Submit My Review on Google</span>
        </span>
        <ArrowRight className="w-4 h-4 text-[#E6A85C] group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
      </button>

      {/* Transparent Microcopy */}
      <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-[#5C3820] font-sans-ui">
        <ExternalLink className="w-3.5 h-3.5 text-[#C2783B]" />
        <span>Direct 1-click Google Business Profile review</span>
      </div>
    </main>
  );
}
