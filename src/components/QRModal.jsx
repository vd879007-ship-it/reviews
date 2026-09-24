import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Download, Printer } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function QRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://rokea-review.vercel.app';
  const qrRef = useRef(null);

  const handleDownload = () => {
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = 1000;
      canvas.height = 1000;
      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 50, 50, 900, 900);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'ROKEA-BY-RK-Review-QR.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/80 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-md bg-[#FAF7F0] rounded-3xl border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-7 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#0B0B0B]/50 hover:text-[#0B0B0B] rounded-full hover:bg-black/5 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-brand text-xl font-bold tracking-widest text-[#0B0B0B] uppercase">
          {BRAND_CONFIG.name}
        </h3>
        <p className="text-xs text-[#0B0B0B]/60 font-sans-ui mt-0.5 tracking-wider uppercase">
          QR Code for Packaging & Display
        </p>

        <div ref={qrRef} className="my-5 p-5 bg-white rounded-2xl border-2 border-[#D4AF37]/40 inline-block shadow-md">
          <QRCodeSVG
            value={currentUrl}
            size={190}
            level="H"
            includeMargin={true}
          />
        </div>

        <p className="text-xs text-[#0B0B0B]/70 font-sans-ui max-w-xs mx-auto mb-4">
          Print this QR on saree packaging, jewellery boxes, thank-you cards, or billing counter.
        </p>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={handleDownload}
            className="py-2.5 px-4 rounded-xl bg-[#0B0B0B] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1C1C1C] transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Download PNG</span>
          </button>
          <button
            onClick={() => window.print()}
            className="py-2.5 px-4 rounded-xl bg-white border border-[#D4AF37]/50 text-[#0B0B0B] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#FAF7F0] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Print Sheet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
