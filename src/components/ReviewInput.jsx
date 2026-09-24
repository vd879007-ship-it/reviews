import React from 'react';
import { BRAND_CONFIG } from '../config';
import { Sparkles } from 'lucide-react';

export default function ReviewInput({ reviewText, setReviewText }) {
  const maxChars = BRAND_CONFIG.maxChars || 500;
  const currentChars = reviewText.length;

  const handleTagClick = (tag) => {
    if (reviewText.trim().length === 0) {
      setReviewText(`${tag} - `);
    } else if (!reviewText.includes(tag)) {
      const separator = reviewText.endsWith(' ') || reviewText.endsWith('.') ? '' : ', ';
      setReviewText(`${reviewText}${separator}${tag}`);
    }
  };

  return (
    <div className="w-full flex flex-col mt-1">
      <div className="flex items-center justify-between mb-2 px-1">
        <label
          htmlFor="review-textarea"
          className="text-xs uppercase font-sans-ui tracking-[0.16em] text-[#24160E]/80 font-semibold flex items-center gap-1.5"
        >
          <span>Share Your Story</span>
          <span className="text-[10px] text-[#9E6A47] font-normal lowercase tracking-normal">(optional)</span>
        </label>
        <span
          className={`text-xs font-mono font-medium transition-colors ${
            currentChars >= maxChars ? 'text-red-600 font-bold' :
            currentChars > 400 ? 'text-amber-700' : 'text-[#3A2417]/50'
          }`}
        >
          {currentChars} / {maxChars}
        </span>
      </div>

      <div className="relative rounded-2xl bg-white border border-[#C4936E]/35 focus-within:border-[#9E6A47] focus-within:ring-2 focus-within:ring-[#9E6A47]/20 transition-all duration-300 shadow-xs overflow-hidden">
        <textarea
          id="review-textarea"
          rows={4}
          maxLength={maxChars}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Tell us about your experience with our sarees, jewellery, or store hospitality..."
          className="w-full p-3.5 sm:p-4.5 bg-transparent text-[#24160E] text-sm sm:text-base placeholder-[#3A2417]/35 font-sans-ui focus:outline-none resize-none leading-relaxed selection:bg-[#C4936E]/25"
        />
        <div className="px-4 py-1.5 bg-[#FAF7F2] border-t border-[#C4936E]/15 flex items-center justify-between text-[11px] text-[#68422A] font-sans-ui">
          <span>Share your genuine experience with us.</span>
          {reviewText.trim().length > 0 && (
            <button
              type="button"
              onClick={() => setReviewText('')}
              className="text-[#3A2417]/45 hover:text-red-700 transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="mt-2.5">
        <div className="flex items-center gap-1.5 text-[11px] text-[#68422A] font-sans-ui mb-1.5 font-medium">
          <Sparkles className="w-3 h-3 text-[#9E6A47]" />
          <span>Inspiration topics (tap to add):</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {BRAND_CONFIG.inspirationTags.map((tag, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="text-[11px] sm:text-xs font-sans-ui px-2.5 py-1 rounded-full bg-white border border-[#C4936E]/30 text-[#24160E] hover:bg-[#FAF7F2] hover:border-[#9E6A47] active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              + {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
