import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, PhoneCall, Send, X, HelpCircle, Sparkles } from 'lucide-react';

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
        <div className="bg-[#161917] border border-white/10 rounded-2xl p-4 shadow-2xl w-72 text-white animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-xs uppercase tracking-wider text-neutral-300">
                Wiktrip Trip Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
            Everything at Wiktrip is customized on enquiry. Speak with our mountain trip designers directly:
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={handleCustomEnquiry}
              className="w-full py-2.5 px-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Custom Trip Enquiry</span>
            </button>

            <a
              href="tel:+919711720218"
              className="w-full py-2 px-3 bg-[#242625] hover:bg-[#323634] text-neutral-200 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors"
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

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 bg-[#0B0D0C] hover:bg-[#161917] text-white pl-4 pr-5 py-3 rounded-full border border-white/15 shadow-2xl hover:shadow-orange-500/10 transition-all duration-200 cursor-pointer"
          aria-label="Enquire Now"
        >
          <div className="w-7 h-7 rounded-full bg-[#F97316] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Enquire Now</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
            </div>
            <div className="text-[10px] text-neutral-400">WhatsApp & Custom Quotes</div>
          </div>
        </button>
      </div>
    </div>
  );
};
