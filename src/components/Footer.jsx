import React from 'react';
import { BRAND_CONFIG } from '../config';
import { ShieldCheck, Sparkles, Coffee } from 'lucide-react';

export default function Footer() {
  const socials = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.instagram || 'https://www.instagram.com/la_cafe_coimbatore?stkn=MnJ2cGwwYjZzc3oy'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      url: BRAND_CONFIG.socialLinks?.whatsapp || 'https://wa.me/919842279998'
    }
  ];

  return (
    <footer className="mt-10 pb-8 text-center px-4 max-w-md mx-auto font-sans-ui">
      {/* Decorative Top Divider */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C2783B]/40 to-transparent mx-auto mb-5"></div>

      {/* Social Media Links (Instagram & WhatsApp) */}
      <div className="flex items-center justify-center gap-3.5 mb-5">
        {socials.map((s, idx) => (
          <a
            key={idx}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className="w-11 h-11 rounded-2xl bg-white border-2 border-[#C2783B]/35 text-[#3D2314] flex items-center justify-center hover:bg-[#2B170B] hover:text-white hover:border-[#2B170B] hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Official Google Review Flow Badge */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#5C3820] mb-2 font-medium">
        <ShieldCheck className="w-4 h-4 text-[#C2783B]" />
        <span>Official Google Review Gateway</span>
      </div>

      {/* Brand Footer Note */}
      <p className="text-xs text-[#5C3820]/90 font-serif-luxury italic tracking-wide mb-1.5">
        {BRAND_CONFIG.footerNote}
      </p>

      {/* Copyright */}
      <p className="text-[10px] text-[#2B170B]/50 uppercase tracking-[0.18em] font-sans-ui mb-3">
        © {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved.
      </p>

      {/* Developer Agency Credit: Powered by Skillstart Digital Solutions */}
      <div className="pt-2 border-t border-[#C2783B]/15">
        <a
          href={BRAND_CONFIG.poweredBy?.url || "https://www.skillstardigitalsolutions.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-[#5C3820]/80 hover:text-[#2B170B] font-medium tracking-wide transition-colors"
        >
          <Sparkles className="w-3 h-3 text-[#C2783B]" />
          <span>{BRAND_CONFIG.poweredBy?.text || "Powered by Skillstart Digital Solutions"}</span>
        </a>
      </div>
    </footer>
  );
}

