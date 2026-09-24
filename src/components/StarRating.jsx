import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function StarRating({ rating, setRating }) {
  const [hoverRating, setHoverRating] = useState(0);

  const activeStar = hoverRating || rating;
  const feedbackMessage = rating > 0 
    ? BRAND_CONFIG.ratingMessages[rating] 
    : 'Tap a star to rate your experience';

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <label className="text-xs uppercase font-sans-ui tracking-[0.2em] text-[#68422A] font-semibold mb-3">
        Select Star Rating
      </label>

      <div 
        className="flex items-center justify-center gap-2.5 sm:gap-4" 
        role="radiogroup" 
        aria-label="Star Rating"
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= activeStar;
          const isSelected = star === rating;

          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className={`group relative p-2 sm:p-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6A47] cursor-pointer ${
                isSelected ? 'scale-110' : 'hover:scale-115 active:scale-95'
              }`}
            >
              <Star
                className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 ${
                  isFilled
                    ? 'fill-[#D69E4E] text-[#D69E4E] drop-shadow-[0_2px_8px_rgba(214,158,78,0.45)]'
                    : 'text-[#3A2417]/20 fill-transparent group-hover:text-[#D69E4E]/60'
                } ${isSelected ? 'animate-star-pop' : ''}`}
                strokeWidth={isFilled ? 1.5 : 1.2}
              />
            </button>
          );
        })}
      </div>

      <div className="min-h-[2.25rem] flex items-center justify-center text-center mt-1 px-4">
        <p 
          key={rating} 
          className={`text-xs sm:text-sm font-sans-ui transition-all duration-300 ${
            rating > 0 
              ? 'text-[#24160E] font-serif-luxury italic text-sm sm:text-base animate-fade-in-up font-medium' 
              : 'text-[#3A2417]/55'
          }`}
        >
          {feedbackMessage}
        </p>
      </div>
    </div>
  );
}
