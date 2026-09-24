import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GOOGLE_REVIEW_URL, BRAND_CONFIG } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import StarRating from './components/StarRating';
import ReviewInput from './components/ReviewInput';
import ReviewPreview from './components/ReviewPreview';
import ActionButtons from './components/ActionButtons';
import CustomerReviews from './components/CustomerReviews';
import SuccessModal from './components/SuccessModal';
import QRModal from './components/QRModal';
import Toast from './components/Toast';
import Footer from './components/Footer';

export default function App() {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [toast, setToast] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  };

  // Robust cross-platform clipboard copy helper (iOS Safari, Android Chrome, Desktop)
  const copyTextToClipboard = async (text) => {
    if (!text || text.trim().length === 0) return false;
    const content = text.trim();

    // Primary: Modern Async Clipboard API
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(content);
        return true;
      } catch (err) {
        console.warn('Async clipboard write failed, trying fallback:', err);
      }
    }

    // Secondary Fallback: Synchronous execCommand for Mobile iOS/Android
    try {
      const textarea = document.createElement('textarea');
      textarea.value = content;
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.width = '2em';
      textarea.style.height = '2em';
      textarea.style.padding = '0';
      textarea.style.border = 'none';
      textarea.style.outline = 'none';
      textarea.style.boxShadow = 'none';
      textarea.style.background = 'transparent';
      textarea.setAttribute('readonly', '');
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, 99999); // Mobile touch selection support
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    } catch (err) {
      console.error('Mobile fallback clipboard copy error:', err);
      return false;
    }
  };

  const handleCopyReview = async () => {
    if (!reviewText || reviewText.trim().length === 0) {
      showToast('Write your review first.', 'info');
      return false;
    }

    const success = await copyTextToClipboard(reviewText);
    if (success) {
      showToast('Review copied to clipboard!', 'success');
      return true;
    } else {
      showToast('Please select and copy your review manually.', 'error');
      return false;
    }
  };

  const handleContinueToGoogle = async () => {
    if (rating === 0) {
      showToast('Please select a rating first.', 'error');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      !GOOGLE_REVIEW_URL ||
      GOOGLE_REVIEW_URL.trim() === '' ||
      GOOGLE_REVIEW_URL.includes('YOUR_GOOGLE_REVIEW_LINK')
    ) {
      showToast('Google review link is not configured yet.', 'error');
      setIsSuccessModalOpen(true);
      return;
    }

    // AUTOMATIC COPY ON MOBILE & DESKTOP:
    // If user wrote review text, automatically copy it to clipboard before opening Google
    if (reviewText && reviewText.trim().length > 0) {
      await copyTextToClipboard(reviewText);
      showToast('Review auto-copied! Opening Google...', 'success');
    }

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D69E4E', '#C4936E', '#FAF7F2', '#24160E']
      });
    } catch (e) {}

    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
    setIsSuccessModalOpen(true);
  };


  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#24160E] flex flex-col justify-between relative bg-creamy-noise selection:bg-[#C4936E]/30 selection:text-[#24160E] overflow-x-hidden">
      
      {/* Soft Ambient Cream Radial Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#C4936E]/12 via-[#FAF7F2]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Toast toast={toast} onClose={() => setToast(null)} />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        googleUrl={GOOGLE_REVIEW_URL}
        rating={rating}
        reviewText={reviewText}
        onCopyAgain={handleCopyReview}
      />

      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      <div className="w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-2 z-10 flex-1 flex flex-col">
        <Header onOpenQR={() => setIsQRModalOpen(true)} />

        <Hero />

        {/* Main Review Form Card */}
        <main className="w-full max-w-[620px] mx-auto bg-white rounded-3xl p-5 sm:p-8 border border-[#C4936E]/30 luxury-card-shadow transition-all duration-300 relative">
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C4936E] to-transparent"></div>

          <StarRating 
            rating={rating} 
            setRating={setRating} 
          />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C4936E]/20 to-transparent my-2.5"></div>

          <ReviewInput 
            reviewText={reviewText} 
            setReviewText={setReviewText} 
          />

          <ReviewPreview 
            rating={rating} 
            reviewText={reviewText} 
          />

          <ActionButtons
            onCopyReview={handleCopyReview}
            onContinueToGoogle={handleContinueToGoogle}
            reviewText={reviewText}
            rating={rating}
          />
        </main>

        <CustomerReviews />

        <Footer />
      </div>
    </div>
  );
}
