import React from 'react';
import { Star, CheckCircle2, Quote, Sparkles, Heart } from 'lucide-react';

export default function TestimonialsWall({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="w-full max-w-[620px] mx-auto mt-10 mb-6 font-sans-ui animate-fade-in-up">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227] mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Patron Experiences</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
        
        <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#0B0B0B] tracking-wide">
          Words of Elegance
        </h3>

        <p className="text-xs sm:text-sm text-[#0B0B0B]/60 font-serif-luxury italic mt-1">
          Genuine stories from cherished patrons of ROKEA BY RK
        </p>

        {/* Stats Strip */}
        <div className="inline-flex items-center gap-3 sm:gap-6 bg-white/80 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mt-3 shadow-2xs">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-[#0B0B0B]">4.9</span>
            <div className="flex text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
          </div>
          <span className="w-[1px] h-3 bg-[#D4AF37]/30"></span>
          <span className="text-[11px] font-medium text-[#0B0B0B]/70">100% Handcrafted Luxury</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 shadow-sm relative overflow-hidden ${
              rev.isNew
                ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF7F0] border-[#D4AF37] ring-2 ring-[#D4AF37]/30'
                : 'bg-white/90 border-[#D4AF37]/25 hover:border-[#D4AF37]/50'
            }`}
          >
            {/* Top Badge for newly submitted review */}
            {rev.isNew && (
              <div className="inline-flex items-center gap-1.5 bg-[#0B0B0B] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2.5">
                <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                <span>Your Review • Just Added</span>
              </div>
            )}

            {/* Header: Name, Location & Stars */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-semibold text-sm sm:text-base text-[#0B0B0B]">
                    {rev.name || 'Valued Patron'}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-sans-ui text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded-md font-medium">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Verified Patron</span>
                  </span>
                </div>
                {rev.item && (
                  <p className="text-[11px] text-[#C9A227] font-medium mt-0.5">
                    {rev.item}
                  </p>
                )}
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-3.5 h-3.5 ${
                      s <= (rev.rating || 5)
                        ? 'fill-[#D4AF37] text-[#D4AF37]'
                        : 'text-[#0B0B0B]/15 fill-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Review Body */}
            <p className="text-xs sm:text-sm text-[#1C1C1C]/85 leading-relaxed italic font-serif-luxury text-[15px]">
              "{rev.text}"
            </p>

            {/* Footer Date */}
            <div className="mt-2.5 pt-2 border-t border-[#D4AF37]/15 flex items-center justify-between text-[10px] text-[#0B0B0B]/45">
              <span>ROKEA BY RK Boutique Experience</span>
              <span>{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
