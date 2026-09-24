import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function ReviewPreview({ rating, reviewText }) {
  if (rating === 0 && (!reviewText || reviewText.trim().length === 0)) {
    return null;
  }

  return (
    <div className="w-full mt-4 animate-fade-in-up">
      <div className="rounded-2xl bg-gradient-to-b from-white to-[#FAF7F2] p-4 sm:p-5 border border-[#C4936E]/35 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between mb-2.5 border-b border-[#C4936E]/15 pb-2">
          <span className="text-[11px] font-sans-ui uppercase tracking-[0.2em] font-semibold text-[#9E6A47] flex items-center gap-1.5">
            <Quote className="w-3 h-3 text-[#9E6A47] rotate-180" />
            Your Review Preview
          </span>
          <span className="text-[11px] font-sans-ui text-[#3A2417]/50">Ready for Google</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-4 h-4 ${
                  s <= rating
                    ? 'fill-[#D69E4E] text-[#D69E4E]'
                    : 'text-[#3A2417]/15 fill-transparent'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-sans-ui font-semibold text-[#24160E]">
            {rating > 0 ? `${rating}.0 / 5.0` : 'No rating selected'}
          </span>
        </div>

        <div className="text-sm font-sans-ui text-[#24160E] leading-relaxed italic bg-white p-3 rounded-xl border border-[#C4936E]/15">
          {reviewText && reviewText.trim().length > 0 ? (
            <p className="whitespace-pre-wrap font-serif-luxury text-base">"{reviewText.trim()}"</p>
          ) : (
            <p className="text-[#3A2417]/45 not-italic text-xs">
              (You can type your experience above or write it directly on Google)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
