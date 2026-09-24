import React from 'react';
import { BRAND_CONFIG } from '../config';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  const socials = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.facebook || 'https://facebook.com'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.582 7.19a2.505 2.505 0 0 0-1.764-1.773C18.257 5 12 5 12 5s-6.257 0-7.818.417A2.505 2.505 0 0 0 2.418 7.19C2 8.758 2 12 2 12s0 3.242.418 4.81a2.505 2.505 0 0 0 1.764 1.773C5.743 19 12 19 12 19s6.257 0 7.818-.417a2.505 2.505 0 0 0 1.764-1.773C22 15.242 22 12 22 12s0-3.242-.418-4.81zM10 15.5V8.5l6 3.5-6 3.5z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.youtube || 'https://youtube.com'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.linkedin || 'https://linkedin.com'
    }
  ];


  return (
    <footer className="mt-10 pb-8 text-center px-4 max-w-md mx-auto font-sans-ui">
      {/* Decorative Top Divider */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C4936E]/40 to-transparent mx-auto mb-5"></div>

      {/* Social Media Links (Instagram, Facebook, YouTube, LinkedIn) */}
      <div className="flex items-center justify-center gap-3.5 mb-5">
        {socials.map((s, idx) => (
          <a
            key={idx}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className="w-11 h-11 rounded-2xl bg-white border-2 border-[#C4936E]/35 text-[#3A2417] flex items-center justify-center hover:bg-[#24160E] hover:text-white hover:border-[#24160E] hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Official Google Review Flow Badge */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#68422A] mb-2">
        <ShieldCheck className="w-4 h-4 text-[#8C5835]" />
        <span>Official Google Review Flow</span>
      </div>

      {/* Brand Footer Note */}
      <p className="text-xs text-[#68422A]/85 font-serif-luxury italic tracking-wide mb-1.5">
        {BRAND_CONFIG.footerNote}
      </p>

      {/* Copyright */}
      <p className="text-[10px] text-[#3A2417]/50 uppercase tracking-[0.18em] font-sans-ui mb-3">
        © {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved.
      </p>

      {/* Developer Agency Credit: Powered by Skillstart Digital Solutions */}
      <div className="pt-2 border-t border-[#C4936E]/15">
        <a
          href={BRAND_CONFIG.poweredBy?.url || "https://skillstart.in"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-[#68422A]/80 hover:text-[#24160E] font-medium tracking-wide transition-colors"
        >
          <Sparkles className="w-3 h-3 text-[#9E6A47]" />
          <span>{BRAND_CONFIG.poweredBy?.text || "Powered by Skillstart Digital Solutions"}</span>
        </a>
      </div>
    </footer>
  );
}

