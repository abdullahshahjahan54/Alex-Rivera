import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const WhatsAppButton: React.FC = () => {
  const { settings } = usePortfolio();
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Hi, I would like to discuss a website project.';
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e1424] border border-blue-500/30 text-white text-xs font-medium shadow-2xl backdrop-blur-md animate-bounce-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Quick quote? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-0.5 rounded text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-xl shadow-emerald-600/40 hover:shadow-emerald-500/60 hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        
        <MessageSquare className="w-6 h-6 fill-white stroke-none relative z-10" />
      </a>
    </div>
  );
};
