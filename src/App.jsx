import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GOOGLE_REVIEW_URL, BRAND_CONFIG } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import ReviewActionCard from './components/ReviewActionCard';
import CustomerReviews from './components/CustomerReviews';
import SuccessModal from './components/SuccessModal';
import QRModal from './components/QRModal';
import Toast from './components/Toast';
import Footer from './components/Footer';

export default function App() {
  const [toast, setToast] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  };

  const handleOpenGoogleReview = () => {
    if (
      !GOOGLE_REVIEW_URL ||
      GOOGLE_REVIEW_URL.trim() === '' ||
      GOOGLE_REVIEW_URL.includes('YOUR_GOOGLE_REVIEW_LINK')
    ) {
      showToast('Google review link is not configured yet.', 'error');
      setIsSuccessModalOpen(true);
      return;
    }

    // Trigger celebratory golden confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D69E4E', '#C4936E', '#FAF7F2', '#24160E']
      });
    } catch (e) {}

    // Open official Google Business Profile review URL directly
    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');

    // Show Thank-You modal popup for when the customer returns
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#24160E] flex flex-col justify-between relative bg-creamy-noise selection:bg-[#C4936E]/30 selection:text-[#24160E] overflow-x-hidden">
      
      {/* Soft Ambient Cream Radial Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#C4936E]/12 via-[#FAF7F2]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Thank-You Popup Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        googleUrl={GOOGLE_REVIEW_URL}
      />

      {/* QR Code Modal for store displays */}
      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      <div className="w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-2 z-10 flex-1 flex flex-col">
        <Header onOpenQR={() => setIsQRModalOpen(true)} />

        <Hero />

        {/* Direct 1-Click Google Review Card */}
        <ReviewActionCard onOpenGoogle={handleOpenGoogleReview} />

        {/* Recent Client Feedback Carousel / Grid */}
        <CustomerReviews />

        <Footer />
      </div>
    </div>
  );
}
