import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEW_URL } from '../config';

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Priya R.",
      time: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Beautiful saree collection and excellent quality. The fabric is so soft and the packaging was also very nice. Truly worth it!",
      productImg: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&auto=format&fit=crop&q=80",
      productAlt: "Magenta Silk Saree"
    },
    {
      name: "Divya S.",
      time: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Very elegant collection. The service was also really good. The team helped me choose the perfect saree for my family function. Highly recommended!",
      productImg: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=300&auto=format&fit=crop&q=80",
      productAlt: "Green Heritage Silk Saree"
    },
    {
      name: "Anitha K.",
      time: "3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "The jewellery collection is just amazing! Each piece is so unique and classy. I received so many compliments. Will definitely shop again.",
      productImg: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&auto=format&fit=crop&q=80",
      productAlt: "Heritage Gold Jhumkas"
    }
  ];

  // Helper card component for consistent rendering
  const renderCard = (rev, idx) => (
    <div
      key={idx}
      className="w-[280px] sm:w-[300px] md:w-auto flex-shrink-0 rounded-2xl bg-white border border-[#C4936E]/25 p-4 sm:p-5 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md select-none"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <img
            src={rev.avatar}
            alt={rev.name}
            className="w-10 h-10 rounded-full object-cover border border-[#C4936E]/30"
            loading="lazy"
          />
          <div>
            <h4 className="text-sm font-semibold font-sans-ui text-[#24160E]">
              {rev.name}
            </h4>
            <div className="flex items-center gap-1.5 text-[10px] text-[#68422A] font-sans-ui">
              <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Verified Review</span>
            </div>
            <p className="text-[10px] text-[#3A2417]/40 font-sans-ui">{rev.time}</p>
          </div>
        </div>

        <div className="flex items-center gap-0.5 mb-2.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3.5 h-3.5 fill-[#D69E4E] text-[#D69E4E]" />
          ))}
        </div>

        <p className="text-xs font-sans-ui text-[#3A2417] leading-relaxed mb-3">
          “{rev.comment}”
        </p>
      </div>

      <div className="mt-2 pt-2 border-t border-[#C4936E]/15">
        <img
          src={rev.productImg}
          alt={rev.productAlt}
          className="w-16 h-12 rounded-lg object-cover border border-[#C4936E]/20 shadow-2xs"
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-[760px] mx-auto mt-10 mb-4 px-1">
      <div className="flex items-center justify-between mb-4 px-2">
        <div>
          <h3 className="font-display text-xl sm:text-2xl text-[#24160E] font-medium">
            Recent Client Feedback
          </h3>
          <p className="text-xs text-[#68422A] font-sans-ui">
            Authentic experiences shared on Google
          </p>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-sans-ui font-semibold text-[#8C5835] hover:text-[#68422A] flex items-center gap-1 transition-colors"
        >
          <span>View on Google</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 1. Mobile Horizontal Infinite Marquee Carousel */}
      <div className="block md:hidden w-full overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee gap-3.5 flex">
          {reviews.map((rev, i) => renderCard(rev, `m1-${i}`))}
          {reviews.map((rev, i) => renderCard(rev, `m2-${i}`))}
        </div>
      </div>

      {/* 2. Desktop 3-Column Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {reviews.map((rev, i) => renderCard(rev, `d-${i}`))}
      </div>
    </section>
  );
}

