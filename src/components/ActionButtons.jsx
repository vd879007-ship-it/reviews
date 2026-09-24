import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';

export default function ActionButtons({ onCopyReview, onContinueToGoogle, reviewText, rating }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await onCopyReview();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3.5 mt-5">
      <button
        type="button"
        onClick={handleCopy}
        className="w-full py-3.5 px-5 rounded-xl border border-[#C4936E]/50 bg-white hover:bg-[#FAF7F2] text-[#24160E] font-sans-ui font-medium text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-2xs active:scale-[0.99] group cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-600 animate-star-pop" />
            <span className="text-emerald-700 font-semibold">Review Copied to Clipboard!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-[#9E6A47] group-hover:scale-110 transition-transform" />
            <span>Copy Review Text</span>
          </>
        )}
      </button>

      {/* Professional Creamy Mocha Button */}
      <button
        type="button"
        onClick={onContinueToGoogle}
        className="w-full relative group py-4 px-6 rounded-xl bg-[#24160E] hover:bg-[#3A2417] text-[#FCFAF6] font-sans-ui font-medium text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 border border-[#C4936E]/30 overflow-hidden cursor-pointer"
      >
        <span className="relative z-10 font-sans-ui font-medium text-[#FAF7F2]">
          Continue to Google
        </span>
        <ArrowRight className="w-4 h-4 text-[#C4936E] group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
      </button>

      <div className="text-center space-y-0.5 mt-1">
        <p className="text-xs text-[#3A2417]/75 font-sans-ui">
          You'll be redirected to Google to complete your review.
        </p>
        <p className="text-[11px] text-[#68422A] font-serif-luxury italic">
          Your review will be submitted directly through Google.
        </p>
      </div>
    </div>
  );
}
