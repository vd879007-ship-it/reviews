import React from 'react';
import { Star, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

export default function ReviewActionCard({ onOpenGoogle }) {
  return (
    <main className="w-full max-w-[580px] mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#C4936E]/35 luxury-card-shadow transition-all duration-300 relative text-center">
      {/* Subtle Golden Accent Bar */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C4936E] to-transparent"></div>

      {/* Decorative Gold Stars */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className="w-7 h-7 sm:w-8 sm:h-8 fill-[#D69E4E] text-[#D69E4E] drop-shadow-[0_2px_8px_rgba(214,158,78,0.35)]"
          />
        ))}
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-[#24160E] font-medium tracking-tight mb-2">
        Share Your Genuine Feedback
      </h3>

      <p className="font-sans-ui text-xs sm:text-sm text-[#3A2417]/80 max-w-md mx-auto leading-relaxed mb-6 font-light">
        We would love to hear about your experience with our sarees, heritage jewellery, and store hospitality. Click below to rate and review us on Google.
      </p>

      {/* Primary 1-Click Submit CTA Button */}
      <button
        type="button"
        onClick={onOpenGoogle}
        className="w-full relative group py-4 px-6 rounded-full bg-[#24160E] hover:bg-[#3A2417] text-[#FCFAF6] font-sans-ui font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 border border-[#C4936E]/40 overflow-hidden cursor-pointer"
      >
        <span className="relative z-10 flex items-center gap-2 text-[#FAF7F2]">
          <Sparkles className="w-4 h-4 text-[#D69E4E]" />
          <span>Submit My Review on Google</span>
        </span>
        <ArrowRight className="w-4 h-4 text-[#C4936E] group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
      </button>

      {/* Transparent Microcopy */}
      <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-[#68422A] font-sans-ui">
        <ExternalLink className="w-3.5 h-3.5 text-[#9E6A47]" />
        <span>Opens Google Business Profile Review page directly</span>
      </div>
    </main>
  );
}
