import React from 'react';
import { CheckCircle2, ExternalLink, X, Star, Sparkles, Coffee } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function SuccessModal({ isOpen, onClose, googleUrl }) {
  if (!isOpen) return null;

  const socials = [
    {
      name: 'Instagram',
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]/50',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.instagram || 'https://www.instagram.com/la_cafe_coimbatore?stkn=MnJ2cGwwYjZzc3oy'
    },
    {
      name: 'WhatsApp',
      color: 'hover:text-[#25D366] hover:border-[#25D366]/50',
      icon: (
        <svg className="w-6 h-6 fill-currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.whatsapp || 'https://wa.me/919842879998'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B170B]/80 backdrop-blur-md animate-fade-in-up">
      {/* Animated Cafe Pop-Up Modal Box */}
      <div 
        className="relative w-full max-w-md bg-gradient-to-b from-[#FFFDF9] to-[#FBF6ED] rounded-3xl border border-[#C2783B]/60 luxury-modal-glow animate-modal-pop p-6 sm:p-8 text-center overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Roasted Caramel Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C2783B] via-[#D48D48] to-[#C2783B]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#3D2314]/50 hover:text-[#2B170B] hover:rotate-90 rounded-full hover:bg-black/5 transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Floating Animated Cafe Crest */}
        <div className="animate-float-slow">
          <div className="w-22 h-22 sm:w-24 sm:h-24 mx-auto mb-3 rounded-full bg-gradient-to-b from-white to-[#F7EEDB] border-2 border-[#C2783B]/50 p-2 flex items-center justify-center shadow-lg">
            <img
              src={BRAND_CONFIG.logo || "/la-cafe-logo.png"}
              alt={BRAND_CONFIG.name}
              className="w-full h-full object-contain rounded-full animate-star-pop"
            />
          </div>
        </div>

        {/* 5 Animated Gold Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star 
              key={s} 
              className="w-5 h-5 fill-[#D48D48] text-[#D48D48] drop-shadow-[0_2px_6px_rgba(212,141,72,0.5)] animate-star-pop" 
            />
          ))}
        </div>

        {/* Heading */}
        <h3 id="modal-title" className="font-display text-2xl sm:text-3xl font-bold text-[#2B170B] mb-1.5">
          Review Submitted!
        </h3>

        <p className="font-sans-ui text-xs sm:text-sm text-[#5C3820] max-w-xs mx-auto leading-relaxed mb-5 font-normal">
          Thank you so much for supporting <strong className="font-bold text-[#2B170B]">{BRAND_CONFIG.name}</strong> on Google! We can’t wait to brew your next cup.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5 mb-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 px-5 rounded-full bg-[#2B170B] hover:bg-[#3D2314] text-[#FFFDF9] text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Done
          </button>

          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 rounded-full bg-white border border-[#C2783B]/40 hover:bg-[#FBF6ED] text-[#2B170B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
          >
            <span>Re-open Google Review page</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C2783B]" />
          </a>
        </div>

        {/* Connect With Us Section */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#C2783B]/25"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[#FBF6ED] px-3 text-[11px] uppercase tracking-widest text-[#5C3820] font-bold">
              Follow Our Cafe
            </span>
          </div>
        </div>

        {/* Big Prominent Brand Social Media Icon Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-3.5">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              title={s.name}
              className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white border-2 border-[#C2783B]/40 text-[#3D2314] flex items-center justify-center hover:bg-[#2B170B] hover:text-white hover:border-[#2B170B] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md ${s.color}`}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Powered by Skillstart Digital Solutions Link in Modal */}
        <div className="pt-2 border-t border-[#C2783B]/20">
          <a
            href={BRAND_CONFIG.poweredBy?.url || "https://www.skillstardigitalsolutions.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] text-[#5C3820] hover:text-[#2B170B] font-semibold tracking-wide transition-colors group"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C2783B] group-hover:rotate-45 transition-transform" />
            <span className="underline decoration-[#C2783B]/50 underline-offset-2 hover:decoration-[#2B170B]">
              {BRAND_CONFIG.poweredBy?.text || "Powered by Skillstart Digital Solutions"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

