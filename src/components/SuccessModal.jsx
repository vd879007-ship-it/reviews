import React from 'react';
import { CheckCircle2, ExternalLink, X, Star, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function SuccessModal({ isOpen, onClose, googleUrl, onReopenGoogle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24160E]/75 backdrop-blur-sm animate-fade-in-up">
      <div 
        className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl border border-[#C4936E]/45 shadow-2xl p-6 sm:p-8 text-center overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C5835] via-[#D69E4E] to-[#8C5835]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#3A2417]/50 hover:text-[#24160E] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated Check Crest */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3.5 rounded-full bg-white border-2 border-[#C4936E]/40 flex items-center justify-center shadow-md">
          <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 text-[#8C5835] animate-star-pop" />
        </div>

        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-4 h-4 fill-[#D69E4E] text-[#D69E4E]" />
          ))}
        </div>

        {/* Heading */}
        <h3 id="modal-title" className="font-display text-2xl sm:text-3xl font-medium text-[#24160E] mb-2">
          Thank You!
        </h3>

        <p className="font-sans-ui text-xs sm:text-sm text-[#3A2417]/85 max-w-xs mx-auto leading-relaxed mb-5 font-light">
          Thank you for taking the time to rate and review <strong className="font-medium text-[#24160E]">{BRAND_CONFIG.name}</strong> on Google!
        </p>

        {/* Re-open / Done Actions */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-5 rounded-full bg-[#24160E] hover:bg-[#3A2417] text-white text-sm font-semibold transition-all shadow-xs cursor-pointer"
          >
            Done
          </button>

          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full bg-white border border-[#C4936E]/40 hover:bg-[#FAF7F2] text-[#24160E] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Re-open Google Review page</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#9E6A47]" />
          </a>
        </div>

        <p className="text-[11px] text-[#68422A]/70 font-serif-luxury italic mt-4">
          Your feedback inspires our timeless heritage craftsmanship.
        </p>
      </div>
    </div>
  );
}
