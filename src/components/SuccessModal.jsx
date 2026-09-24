import React from 'react';
import { CheckCircle2, ExternalLink, X, Star, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function SuccessModal({ isOpen, onClose, googleUrl }) {
  if (!isOpen) return null;

  const socials = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.instagram || 'https://instagram.com'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.facebook || 'https://facebook.com'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.582 7.19a2.505 2.505 0 0 0-1.764-1.773C18.257 5 12 5 12 5s-6.257 0-7.818.417A2.505 2.505 0 0 0 2.418 7.19C2 8.758 2 12 2 12s0 3.242.418 4.81a2.505 2.505 0 0 0 1.764 1.773C5.743 19 12 19 12 19s6.257 0 7.818-.417a2.505 2.505 0 0 0 1.764-1.773C22 15.242 22 12 22 12s0-3.242-.418-4.81zM10 15.5V8.5l6 3.5-6 3.5z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.youtube || 'https://youtube.com'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.linkedin || 'https://linkedin.com'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24160E]/80 backdrop-blur-md animate-fade-in-up">
      {/* Animated Luxury Pop-Up Modal Box */}
      <div 
        className="relative w-full max-w-md bg-gradient-to-b from-[#FFFFFF] to-[#FAF7F2] rounded-3xl border border-[#C4936E]/50 luxury-modal-glow animate-modal-pop p-6 sm:p-8 text-center overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Shimmering Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C5835] via-[#D69E4E] to-[#8C5835]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#3A2417]/50 hover:text-[#24160E] hover:rotate-90 rounded-full hover:bg-black/5 transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Floating Animated Crest */}
        <div className="animate-float-slow">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3.5 rounded-full bg-gradient-to-b from-white to-[#F7F2EA] border-2 border-[#C4936E]/50 flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 text-[#8C5835] animate-star-pop" />
          </div>
        </div>

        {/* 5 Animated Gold Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star 
              key={s} 
              className="w-5 h-5 fill-[#D69E4E] text-[#D69E4E] drop-shadow-[0_2px_6px_rgba(214,158,78,0.5)] animate-star-pop" 
            />
          ))}
        </div>

        {/* Heading */}
        <h3 id="modal-title" className="font-display text-2xl sm:text-3xl font-medium text-[#24160E] mb-1.5">
          Thank You!
        </h3>

        <p className="font-sans-ui text-xs sm:text-sm text-[#3A2417]/85 max-w-xs mx-auto leading-relaxed mb-5 font-light">
          Thank you for taking the time to share your review for <strong className="font-medium text-[#24160E]">{BRAND_CONFIG.name}</strong> on Google!
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 px-5 rounded-full bg-[#24160E] hover:bg-[#3A2417] text-[#FCFAF6] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Done
          </button>

          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full bg-white border border-[#C4936E]/40 hover:bg-[#FAF7F2] text-[#24160E] text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
          >
            <span>Re-open Google Review page</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#9E6A47]" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C4936E]/40 to-transparent mx-auto my-4"></div>

        {/* Brand Social Media Icons in Modal */}
        <div className="flex items-center justify-center gap-2.5 mb-3">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-7 h-7 rounded-full bg-white border border-[#C4936E]/35 text-[#68422A] flex items-center justify-center hover:bg-[#24160E] hover:text-white hover:border-[#24160E] hover:scale-110 transition-all duration-300 shadow-2xs"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Powered by Skillstart Digital Solutions Link in Modal */}
        <div>
          <a
            href={BRAND_CONFIG.poweredBy?.url || "https://www.skillstardigitalsolutions.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-[#68422A]/85 hover:text-[#24160E] font-medium tracking-wide transition-colors group"
          >
            <Sparkles className="w-3 h-3 text-[#9E6A47] group-hover:rotate-45 transition-transform" />
            <span className="underline decoration-[#C4936E]/40 underline-offset-2">
              {BRAND_CONFIG.poweredBy?.text || "Powered by Skillstart Digital Solutions"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

