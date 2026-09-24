import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />,
    info: <Info className="w-5 h-5 text-[#D4AF37] shrink-0" />
  };

  return (
    <aside aria-label="Notification" aria-live="polite" className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md animate-fade-in-up pointer-events-auto">
      <div className="bg-[#0B0B0B]/95 text-white px-4 py-3.5 rounded-2xl border border-[#D4AF37]/40 shadow-2xl flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {icons[toast.type] || icons.info}
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#FAF7F0] font-sans-ui">
            {toast.message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-[#FAF7F0]/60 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
