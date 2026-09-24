import React from 'react';
import { CheckCircle2, ExternalLink, X, Copy } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function SuccessModal({ isOpen, onClose, googleUrl, rating, reviewText, onCopyAgain }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24160E]/75 backdrop-blur-sm animate-fade-in-up">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#C4936E]/40 shadow-2xl p-6 sm:p-8 text-center overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8C5835] via-[#D69E4E] to-[#8C5835]"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#3A2417]/50 hover:text-[#24160E] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-white border border-[#C4936E]/50 flex items-center justify-center shadow-xs">
          <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 text-[#8C5835]" />
        </div>

        <h3 id="modal-title" className="font-display text-2xl sm:text-3xl font-medium text-[#24160E] mb-2">
          Thank You
        </h3>

        <p className="font-sans-ui text-sm sm:text-base text-[#3A2417]/85 max-w-md mx-auto leading-relaxed mb-4">
          Thank you for taking the time to share your experience with {BRAND_CONFIG.name}.
        </p>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C4936E]/25 text-left mb-6 shadow-2xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8C5835] mb-2 font-sans-ui">
            Final Steps on Google:
          </p>
          <ol className="space-y-2 text-xs sm:text-sm text-[#24160E]/85 font-sans-ui list-decimal list-inside">
            <li>
              Select your rating ({rating > 0 ? `${rating} Star${rating > 1 ? 's' : ''}` : '5 Stars'}).
            </li>
            <li>
              {reviewText && reviewText.trim().length > 0 ? (
                <span>
                  <strong>Paste</strong> your copied review into Google's review box and click <strong>Post</strong>.
                </span>
              ) : (
                <span>Type your feedback and click <strong>Post</strong>.</span>
              )}
            </li>
          </ol>

          {reviewText && reviewText.trim().length > 0 && (
            <button
              onClick={onCopyAgain}
              className="mt-3 w-full py-2 px-3 rounded-lg bg-[#FAF7F2] border border-[#C4936E]/30 text-xs text-[#24160E] font-medium flex items-center justify-center gap-1.5 hover:bg-white transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#8C5835]" />
              <span>Copy review text again</span>
            </button>
          )}
        </div>

        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-xl bg-[#24160E] hover:bg-[#3A2417] text-[#FCFAF6] font-sans-ui font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-xl"
        >
          <span>Open Google Review</span>
          <ExternalLink className="w-4 h-4 text-[#C4936E]" />
        </a>

        <p className="text-[11px] text-[#68422A]/70 font-serif-luxury italic mt-3">
          Google will open in a new tab. Please complete submission manually on Google.
        </p>
      </div>
    </div>
  );
}
