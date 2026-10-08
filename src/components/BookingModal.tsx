import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BookingDetails } from '../types';
import { formatINR } from '../utils/format';
import {
  X,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  Download,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  Check,
  MessageSquare,
  PhoneCall,
  Send,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, bookingItem, addUserBooking } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-15');
  const [guests, setGuests] = useState<number>(2);
  const [travelStyle, setTravelStyle] = useState<string>('Comfort & Premium');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'Comprehensive Wilderness Insurance'
  ]);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  if (!isBookingOpen || !bookingItem) return null;

  const itemPrice = bookingItem.price ?? 0;

  const availableAddOns = [
    {
      id: 'ins',
      name: 'Comprehensive Wilderness Insurance',
      price: 499,
      description: 'Backcountry medical evacuation & adventure coverage up to ₹5,00,000'
    },
    {
      id: 'porter',
      name: 'Backpack Porter / Equipment Offloading',
      price: 1500,
      description: 'Luggage carry up to 10kg by verified mountain staff'
    },
    {
      id: 'bbq',
      name: 'Private Bonfire & Artisan Barbecue Night',
      price: 950,
      description: 'Fresh marinated skewers roasted over pine wood embers'
    },
    {
      id: 'cab',
      name: 'Airport / Railway Station Direct Pickup',
      price: 1800,
      description: 'Sanitized private vehicle with mountain-experienced chauffeur'
    }
  ];

  const toggleAddOn = (name: string) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(selectedAddOns.filter(n => n !== name));
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  const estimatedBase = itemPrice * guests;
  const addOnsTotal = selectedAddOns.reduce((total, name) => {
    const item = availableAddOns.find(a => a.name === name);
    return total + (item ? item.price : 0);
  }, 0);
  const totalEstimated = estimatedBase + addOnsTotal;

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerPhone) return;

    const randomRef = `WT-ENQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnquiry: BookingDetails = {
      id: `enq-${Date.now()}`,
      type: bookingItem.type,
      title: bookingItem.title,
      location: bookingItem.location,
      pricePerUnit: itemPrice,
      date: selectedDate,
      guests,
      customerName,
      customerEmail,
      customerPhone,
      preferredContactMethod: contactMethod,
      budgetPreference: travelStyle,
      customNotes,
      addOns: selectedAddOns.map(name => ({
        name,
        price: availableAddOns.find(a => a.name === name)?.price || 0
      })),
      basePrice: estimatedBase,
      addOnTotal: addOnsTotal,
      taxes: Math.round(totalEstimated * 0.05),
      discount: 0,
      totalAmount: totalEstimated,
      paymentMethod: 'Custom Quote on Enquiry',
      bookingRef: randomRef,
      status: 'Enquiry Received',
      createdAt: new Date().toISOString().split('T')[0]
    };

    addUserBooking(newEnquiry);
    setConfirmedBooking(newEnquiry);
    setStep(3);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setStep(1);
    setConfirmedBooking(null);
    closeBooking();
  };

  const whatsappMessage = confirmedBooking
    ? encodeURIComponent(
        `Hi Wiktrip Team, I have submitted an enquiry for "${confirmedBooking.title}" (Ref: ${confirmedBooking.bookingRef}) for ${confirmedBooking.guests} guests on ${confirmedBooking.date}. My name is ${confirmedBooking.customerName}. Please share customized pricing and available slots!`
      )
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#161917] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#242625]/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#556B2F] text-white flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <span>Wiktrip Enquiry Desk</span>
                <span className="text-[10px] uppercase font-bold text-[#F97316] bg-[#F97316]/10 px-2 py-0.5 rounded border border-[#F97316]/20">
                  {step === 1 ? '1. Trip Details' : step === 2 ? '2. Contact & Notes' : '3. Enquiry Logged'}
                </span>
              </h2>
              <div className="text-[11px] text-neutral-400">
                100% on enquiry · Tailor-made itineraries · Zero upfront fees
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-neutral-200">
          {step === 1 && (
            <div className="space-y-6">
              {/* Experience Summary */}
              <div className="p-4 bg-[#242625] rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#556B2F] font-semibold uppercase tracking-wider">
                    {bookingItem.type === 'event' ? 'CAMPSITE TENT STAY ENQUIRY' : `${bookingItem.type.toUpperCase()} ENQUIRY`}
                  </div>
                  <div className="font-bold text-white text-base mt-0.5">{bookingItem.title}</div>
                  <div className="text-xs text-neutral-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{bookingItem.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-neutral-400">
                    {bookingItem.type === 'event' ? 'Wiktrip Campsite' : 'Estimated tariff'}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#F97316]">
                    {bookingItem.type === 'event' ? 'Tent Pitching' : itemPrice > 0 ? `₹${formatINR(itemPrice)}` : 'On Request'}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {bookingItem.type === 'event' ? 'Custom quote on enquiry' : 'Quote on enquiry'}
                  </div>
                </div>
              </div>

              {bookingItem.type === 'event' && (
                <div className="p-4 bg-[#556B2F]/15 border border-[#556B2F]/30 rounded-2xl text-xs text-neutral-300 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#F97316] text-lg leading-none">⛺</span>
                    <div>
                      <span className="font-bold text-white">Wiktrip Campsite Stay: </span>
                      Pre-pitched tents & campground hospitality at Kisama Heritage Village, Kohima (1.2 km from Festival Ground).
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
                    <span className="font-bold text-amber-400">Our Tents Include:</span>
                    <span>🏮 Tent Lamp</span>
                    <span>🛏️ Pillows</span>
                    <span>🟨 Comfortable Sleeping Mats</span>
                    <span>🛌 Warm Sleeping Bags</span>
                    <span className="text-emerald-400 font-semibold">☕ Welcome Breakfast</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="font-semibold text-neutral-300">Campsite Amenities:</span>
                    <span>✓ Food Court</span>
                    <span>✓ Cabs on Demand</span>
                    <span>✓ Charging Points</span>
                    <span>✓ Campfire</span>
                    <span>✓ Toilets & Bathrooms</span>
                    <span>✓ Parking</span>
                    <span>✓ First Aid</span>
                  </div>
                </div>
              )}

              {/* Date & Guests selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#F97316]" />
                    <span>Preferred Travel Date</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#F97316]" />
                    <span>Number of Travelers</span>
                  </label>
                  <div className="flex items-center gap-3 bg-[#242625] border border-white/10 rounded-lg px-3 py-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-sm font-semibold text-white">
                      {guests} {guests === 1 ? 'Explorer' : 'Explorers'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(guests + 1)}
                      className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Preferred Travel Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Budget / Standard', 'Comfort & Premium', 'Luxury / Private'].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setTravelStyle(style)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        travelStyle === style
                          ? 'bg-[#556B2F] border-[#556B2F] text-white shadow-md'
                          : 'bg-[#242625] border-white/5 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons of Interest */}
              <div>
                <h3 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-3">
                  Services to Include in Your Enquiry
                </h3>
                <div className="space-y-2.5">
                  {availableAddOns.map((addon) => {
                    const isSelected = selectedAddOns.includes(addon.name);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.name)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#556B2F]/20 border-[#556B2F]'
                            : 'bg-[#242625] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'bg-[#556B2F] border-[#556B2F] text-white'
                                : 'border-neutral-500'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{addon.name}</div>
                            <div className="text-xs text-neutral-400">{addon.description}</div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs text-neutral-400">+₹{formatINR(addon.price)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmitEnquiry} className="space-y-5">
              <div>
                <h3 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-1">
                  Traveler Contact Information
                </h3>
                <p className="text-xs text-neutral-400">
                  Where should our travel designer send your customized itinerary and quotation?
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      required
                      placeholder="+91 9711720218"
                      className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      required
                      placeholder="vikram@example.com"
                      className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5">
                    Preferred Way to Contact You
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setContactMethod(method)}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                          contactMethod === method
                            ? 'bg-[#556B2F] border-[#556B2F] text-white shadow-sm'
                            : 'bg-[#242625] border-white/5 text-neutral-300 hover:border-white/20'
                        }`}
                      >
                        {method === 'WhatsApp' && <MessageSquare className="w-3.5 h-3.5" />}
                        {method === 'Phone Call' && <PhoneCall className="w-3.5 h-3.5" />}
                        {method === 'Email' && <Send className="w-3.5 h-3.5" />}
                        <span>{method}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-1">
                    Special Customization Notes & Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="e.g. Vegetarian meals only, pickup required from Chandigarh, traveling with kids, requesting bonfire on Night 2..."
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-[#556B2F]"
                  />
                </div>
              </div>

              {/* No Payment Required Notice */}
              <div className="p-4 bg-[#556B2F]/15 border border-[#556B2F]/30 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#556B2F] shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-300 leading-relaxed">
                  <span className="font-semibold text-white">100% Free Trip Planning: </span>
                  No payment is required today. Our mountain travel designer will tailor this experience to your exact dates, group size, and budget with no obligation.
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Options</span>
                </button>

                <button
                  type="submit"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Trip Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && confirmedBooking && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Enquiry Logged · Specialist Assigned
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Enquiry Received
                </h3>
                <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for your enquiry. Our team will review your request and get back to you with the next steps.
                </p>
              </div>

              {/* Enquiry Summary Card */}
              <div className="p-5 bg-[#242625] border border-white/10 rounded-2xl text-left space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <div className="text-[11px] text-neutral-400">Enquiry Reference ID</div>
                    <div className="font-mono text-base font-bold text-[#F97316]">
                      {confirmedBooking.bookingRef}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                      Enquiry Under Review
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-400">Experience:</span>
                    <div className="font-medium text-white">{confirmedBooking.title}</div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Location:</span>
                    <div className="font-medium text-white">{confirmedBooking.location}</div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Preferred Date:</span>
                    <div className="font-medium text-white">{confirmedBooking.date}</div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Travelers:</span>
                    <div className="font-medium text-white">{confirmedBooking.guests} Persons</div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Lead Explorer:</span>
                    <div className="font-medium text-white">{confirmedBooking.customerName}</div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Contact Via:</span>
                    <div className="font-medium text-white">{confirmedBooking.preferredContactMethod || 'WhatsApp'} ({confirmedBooking.customerPhone})</div>
                  </div>
                </div>
              </div>

              {/* Direct Actions: WhatsApp & Call */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/919711720218?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="px-5 py-3 bg-[#242625] hover:bg-[#323634] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Summary</span>
                </button>

                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#556B2F] hover:bg-[#3F4F24] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation for Step 1 */}
        {step === 1 && (
          <div className="px-6 py-4 border-t border-white/10 bg-[#242625]/60 flex items-center justify-between">
            <div className="text-xs text-neutral-400">
              Custom quotes prepared with zero obligation.
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Continue to Contact</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
