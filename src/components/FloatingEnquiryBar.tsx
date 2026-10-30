import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { MessageSquare, PhoneCall, Send, X, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export const FloatingEnquiryBar: React.FC = () => {
  const { openBooking } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const handleCustomEnquiry = () => {
    openBooking({
      type: 'tour',
      id: 'custom-trip-enquiry',
      title: 'Custom Adventure / Stay Itinerary Enquiry',
      location: 'Himalayan & Coastal Destinations',
      price: 15000
    });
    setIsOpen(false);
  };

  const whatsappUrl = `https://wa.me/919711720218?text=${encodeURIComponent(
    'Hi Wiktrip! I am looking to plan a trip/trek/stay and would like to receive customized options and pricing.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Expanded Quick Contact Popover */}
      {isOpen && (
        <div className="bg-[#161917] border border-white/15 rounded-3xl p-5 shadow-2xl w-80 text-white animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Guide Header with Avatar */}
          <div className="flex items-center gap-3.5 pb-3.5 border-b border-white/10 mb-3.5">
            <div className="relative w-12 h-12 rounded-full shrink-0">
              {/* Blinking ring around avatar */}
              <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#25D366] shadow-md bg-neutral-800">
                <SafeImage
                  src="/images/avatar/guide-avatar.jpg"
                  alt="Wiktrip Guide Avatar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#161917] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-white truncate">
                  Wiktrip Trip Desk
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#25D366] font-semibold mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Online on WhatsApp</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-300 mb-3.5 leading-relaxed">
            Everything at Wiktrip is customized on enquiry. Speak with our mountain trip designers directly:
          </p>

          <div className="space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-3.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-xl text-xs font-bold flex items-center justify-between transition-all shadow-md shadow-emerald-500/20 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/60 shrink-0">
                  <SafeImage
                    src="/images/avatar/guide-avatar.jpg"
                    alt="WhatsApp Guide"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span>Chat to Wik</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            </a>

            <button
              onClick={handleCustomEnquiry}
              className="w-full py-2.5 px-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Custom Trip Enquiry</span>
            </button>

            <a
              href="tel:+919711720218"
              className="w-full py-2 px-3.5 bg-[#242625] hover:bg-[#323634] text-neutral-200 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#556B2F]" />
              <span>Call Helpline: +91 9711720218</span>
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/5 text-[10px] text-neutral-400 text-center flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-[#F97316]" />
            <span>Average callback time: &lt; 15 mins</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button with Blinking Avatar */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 bg-[#0B0D0C] hover:bg-[#161917] text-white pl-2 pr-5 py-2 rounded-full border border-white/15 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer"
          aria-label="Chat to Wik"
        >
          {/* Avatar with Blinking Live Glow Ring */}
          <div className="relative shrink-0">
            {/* Blinking radar pulse ring */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

            {/* Avatar Circle with blinking border glow */}
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#25D366] shadow-lg shadow-emerald-500/30 bg-neutral-800">
              <SafeImage
                src="/images/avatar/guide-avatar.jpg"
                alt="Wiktrip Guide Avatar"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Blinking Online / WhatsApp indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 z-10 w-4 h-4 rounded-full bg-[#25D366] border-2 border-[#0B0D0C] flex items-center justify-center shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Chat to Wik</span>
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span>Online • Ask Any Query</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
