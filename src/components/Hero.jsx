import React from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center px-4 pt-1 pb-4 max-w-xl mx-auto">
      <h2 className="font-display text-2xl sm:text-3xl text-[#24160E] font-medium tracking-tight mb-1.5">
        Share Your Experience
      </h2>

      <p className="font-sans-ui text-xs sm:text-sm text-[#3A2417]/80 max-w-md mx-auto leading-relaxed mb-3.5">
        We value your patronage. Your honest feedback helps us serve you with excellence.
      </p>

      {/* Google 4.9/5 Badge in Creamy Brown */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#C4936E]/35 shadow-xs">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>

        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3.5 h-3.5 fill-[#D69E4E] text-[#D69E4E]" />
          ))}
        </div>

        <span className="text-xs font-semibold font-sans-ui text-[#24160E]">4.9 / 5</span>
        <span className="text-[11px] text-[#68422A] font-sans-ui hidden sm:inline">• Google Reviews</span>
      </div>
    </section>
  );
}
