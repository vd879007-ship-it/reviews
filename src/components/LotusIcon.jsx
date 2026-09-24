import React from 'react';

export default function LotusIcon({ className = "w-8 h-8 text-[#B38238]" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 64 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M32 2C32 2 24 14 24 24C24 29 27.5 32 32 32C36.5 32 40 29 40 24C40 14 32 2 32 2Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M24 16C24 16 14 20 12 26C10.5 30.5 15 32 19 31C24 29.5 26 24 26 24" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M40 16C40 16 50 20 52 26C53.5 30.5 49 32 45 31C40 29.5 38 24 38 24" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M17 26C17 26 8 28 6 31C4.5 33 8 34 12 33.5C16.5 33 19 30 19 30" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <path 
        d="M47 26C47 26 56 28 58 31C59.5 33 56 34 52 33.5C47.5 33 45 30 45 30" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <circle cx="32" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}
