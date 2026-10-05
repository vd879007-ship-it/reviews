import React from 'react';
import { Star, ArrowRight, Sparkles, ExternalLink, Coffee, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function ReviewActionCard({ onOpenGoogle }) {
  return (
    <main className="w-full max-w-[580px] mx-auto bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FBF6ED] rounded-3xl p-6 sm:p-8 border-2 border-[#C2783B]/30 luxury-card-shadow transition-all duration-300 relative text-center overflow-hidden">
      {/* Decorative Top Roasted Caramel Glow Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C2783B] via-[#D48D48] to-[#C2783B]"></div>
      
      {/* Top Floating Mini Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8EAC2]/70 border border-[#C2783B]/35 text-[#5C3820] text-[11px] font-sans-ui font-semibold uppercase tracking-widest mb-3 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#C2783B]" />
        <span>Your Experience Matters</span>
      </div>

      {/* Decorative Shimmering Gold Stars */}
      <div className="flex items-center justify-center gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="relative group">
            <Star
              className="w-7 h-7 sm:w-8 sm:h-8 fill-[#D48D48] text-[#D48D48] drop-shadow-[0_2px_10px_rgba(212,141,72,0.5)] transition-transform duration-300 hover:scale-125"
            />
          </div>
        ))}
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-[#2B170B] font-bold tracking-tight mb-2">
        Rate Your Taste Experience
      </h3>

      <div className="max-w-md mx-auto mb-6 space-y-2.5">
        <p className="font-serif-luxury italic text-sm sm:text-base text-[#C2783B] font-bold tracking-wide">
          “Experience the Cafe Revolution”
        </p>

        <p className="font-sans-ui text-xs sm:text-sm text-[#5C3820]/90 leading-relaxed font-normal">
          Breaking boundaries with the history of coffee brewing — <span className="font-bold text-[#2B170B]">"Science"</span>
        </p>

        {/* Feature Highlights Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#C2783B]/35 text-[#2B170B] text-[11px] font-bold font-sans-ui shadow-2xs hover:border-[#C2783B] transition-colors">
            ⚡ Tech Meets Plates!
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#C2783B]/35 text-[#2B170B] text-[11px] font-bold font-sans-ui shadow-2xs hover:border-[#C2783B] transition-colors">
            🚴 BIKING COMMUNITY
          </span>
        </div>
      </div>

      {/* Primary 1-Click Submit CTA Button */}
      <button
        type="button"
        onClick={onOpenGoogle}
        className="w-full relative group py-4 px-6 rounded-full bg-gradient-to-r from-[#2B170B] via-[#3D2314] to-[#2B170B] hover:from-[#3D2314] hover:to-[#2B170B] text-[#FFFDF9] font-sans-ui font-bold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-[#D48D48]/50 overflow-hidden cursor-pointer"
      >
        {/* Subtle Button Shine Overlay */}
        <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>

        <span className="relative z-10 flex items-center gap-2 text-[#FFFDF9]">
          <Coffee className="w-5 h-5 text-[#E6A85C] group-hover:rotate-12 transition-transform duration-300" />
          <span>Submit My Review on Google</span>
        </span>
        <ArrowRight className="w-4 h-4 text-[#E6A85C] group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
      </button>

      {/* Verified Microcopy */}
      <div className="flex items-center justify-center gap-1.5 mt-3.5 text-xs text-[#5C3820] font-sans-ui font-medium">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
        <span>Direct 1-click Google Business Profile review</span>
      </div>

      {/* Attractive Luxury Social Media Section */}
      <div className="mt-6 pt-5 border-t border-[#C2783B]/20">
        <div className="flex items-center justify-center gap-2 mb-3.5">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C2783B]/40"></span>
          <p className="text-[11px] font-sans-ui text-[#5C3820] uppercase tracking-[0.2em] font-bold">
            Connect With Us
          </p>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C2783B]/40"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          {/* Instagram Luxury Card */}
          <a
            href={BRAND_CONFIG.socialLinks?.instagram || "https://www.instagram.com/la_cafe_coimbatore?stkn=MnJ2cGwwYjZzc3oy"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-white hover:to-[#FFF0F5] border border-[#C2783B]/30 hover:border-[#E4405F]/60 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-xs font-bold text-[#2B170B] group-hover:text-[#DD2A7B] transition-colors">
                Instagram
              </span>
              <span className="block text-[11px] text-[#5C3820]/75 truncate font-medium">
                @la_cafe_coimbatore
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#C2783B]/60 group-hover:text-[#DD2A7B] group-hover:translate-x-0.5 transition-all shrink-0" />
          </a>

          {/* WhatsApp Luxury Card */}
          <a
            href={BRAND_CONFIG.socialLinks?.whatsapp || "https://wa.me/919842879998"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-white hover:to-[#F0FDF4] border border-[#C2783B]/30 hover:border-[#25D366]/60 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-xs font-bold text-[#2B170B] group-hover:text-[#128C7E] transition-colors">
                WhatsApp
              </span>
              <span className="block text-[11px] text-[#5C3820]/75 truncate font-medium">
                +91 98428 79998
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#C2783B]/60 group-hover:text-[#128C7E] group-hover:translate-x-0.5 transition-all shrink-0" />
          </a>
        </div>
      </div>
    </main>
  );
}
