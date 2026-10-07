import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { formatINR } from '../utils/format';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  Check,
  Star,
  Share2,
  Heart,
  ShoppingBag,
  Sparkles,
  AlertTriangle,
  Car,
  Fuel,
  Send,
  MessageSquare,
  Tent
} from 'lucide-react';

export const DetailModal: React.FC = () => {
  const {
    activeDetailItem,
    detailType,
    closeDetail,
    openBooking,
    addToCart,
    toggleWishlist,
    isWishlisted,
    showToast
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  if (!activeDetailItem || !detailType) return null;

  const item = activeDetailItem;
  const isSaved = isWishlisted(item.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Enquiry link copied to clipboard!');
    }
  };

  const handleBookNow = () => {
    closeDetail();
    if (detailType === 'hotel') {
      const room = item.rooms?.[selectedRoomIndex];
      openBooking({
        type: 'hotel',
        id: item.id,
        title: `${item.name} (${room?.name || 'Standard'})`,
        location: item.location || 'Himachal Pradesh',
        price: room?.price ?? item.pricePerNight ?? 0
      });
    } else if (detailType === 'tour') {
      openBooking({
        type: 'tour',
        id: item.id,
        title: item.title,
        location: item.destination || item.location || 'Himalayas',
        price: item.price ?? 0
      });
    } else if (detailType === 'trek') {
      openBooking({
        type: 'trek',
        id: item.id,
        title: item.title,
        location: item.location || 'High Altitude',
        price: item.price ?? 0
      });
    } else if (detailType === 'event') {
      openBooking({
        type: 'event',
        id: item.id,
        title: `${item.title} - Wiktrip Campsite Stay`,
        location: item.location || 'Festival Grounds',
        price: 0
      });
    } else if (detailType === 'adventure') {
      openBooking({
        type: 'adventure',
        id: item.id,
        title: item.name || item.title,
        location: item.location || 'Adventure Zone',
        price: item.price ?? 0
      });
    } else if (detailType === 'rental') {
      openBooking({
        type: 'rental',
        id: item.id,
        title: item.name || 'Expedition Rental Fleet',
        location: item.rentalType || 'Self-Drive & Chauffeur Fleet',
        price: item.pricePerDay ?? 0
      });
    } else if (detailType === 'course') {
      openBooking({
        type: 'tour',
        id: item.id,
        title: `Masterclass: ${item.title}`,
        location: 'Wilderness Skills Academy',
        price: item.price ?? 0
      });
    }
  };

  const basePrice = item.price ?? item.pricePerNight ?? item.pricePerDay ?? (item.rooms?.[0]?.price ?? 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#161917] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-neutral-200">
        {/* Top Floating Controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => toggleWishlist(item.id)}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
            title="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'text-[#F97316] fill-[#F97316]' : ''}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
            title="Share Experience"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={closeDetail}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner / Gallery */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
            <SafeImage
              src={item.gallery ? item.gallery[activeImageIndex] || item.image : item.image}
              alt={item.title || item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161917] via-transparent to-black/40" />

            {/* Gallery Thumbnails */}
            {item.gallery && item.gallery.length > 1 && (
              <div className="absolute bottom-4 left-6 flex items-center gap-2 z-10">
                {item.gallery.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#F97316] scale-105' : 'border-white/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <SafeImage src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Core Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Metadata Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#556B2F] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                  {detailType === 'hotel'
                    ? item.type || 'Resort Stay'
                    : detailType === 'tour'
                    ? item.category || 'Curated Expedition'
                    : detailType === 'trek'
                    ? item.type || 'Himalayan Trek'
                    : detailType === 'rental'
                    ? item.type || 'Fleet Vehicle'
                    : detailType.toUpperCase()}
                </span>
                <span className="bg-[#F97316]/20 text-[#F97316] border border-[#F97316]/30 text-[11px] font-semibold px-2 py-0.5 rounded">
                  Enquiry Model · Custom Quote
                </span>
                {item.difficulty && (
                  <span className="bg-white/10 text-neutral-300 text-[11px] font-medium px-2 py-0.5 rounded">
                    Level: {item.difficulty}
                  </span>
                )}
                {item.rating && (
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold ml-auto">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{item.rating}</span>
                    <span className="text-neutral-400 font-normal">({item.reviewCount || 12} reviews)</span>
                  </div>
                )}
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                {item.title || item.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 mt-2">
                {(item.location || item.destination) && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{item.location || item.destination}</span>
                  </div>
                )}
                {item.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#556B2F]" />
                    <span>{item.duration}</span>
                  </div>
                )}
                {item.groupSize && (
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#556B2F]" />
                    <span>Group: {item.groupSize}</span>
                  </div>
                )}
                {item.date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{item.date} {item.time ? `· ${item.time}` : ''}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Enquiry Banner */}
            <div className="p-4 bg-[#556B2F]/15 border border-[#556B2F]/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#F97316] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Everything On Enquiry
                  </div>
                  <div className="text-xs text-neutral-300">
                    Get custom dates, family/group discounts, and transparent itineraries from our specialists.
                  </div>
                </div>
              </div>
              <button
                onClick={handleBookNow}
                className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm shrink-0 cursor-pointer"
              >
                Send Quick Enquiry
              </button>
            </div>

            {/* RENTAL VEHICLE SPECIFIC */}
            {detailType === 'rental' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
                    <Users className="w-4 h-4 mx-auto text-[#F97316] mb-1" />
                    <span className="text-[11px] text-neutral-400 block">Seating</span>
                    <span className="font-bold text-white text-xs">{item.seats || 5} Passengers</span>
                  </div>
                  <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
                    <Car className="w-4 h-4 mx-auto text-[#556B2F] mb-1" />
                    <span className="text-[11px] text-neutral-400 block">Luggage</span>
                    <span className="font-bold text-white text-xs">{item.luggage || 3} Bags Capacity</span>
                  </div>
                  <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
                    <Fuel className="w-4 h-4 mx-auto text-[#F97316] mb-1" />
                    <span className="text-[11px] text-neutral-400 block">Fuel</span>
                    <span className="font-bold text-white text-xs">{item.fuelType || 'Diesel'}</span>
                  </div>
                  <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
                    <ShieldCheck className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                    <span className="text-[11px] text-neutral-400 block">AC / Climate</span>
                    <span className="font-bold text-white text-xs">{item.hasAC ? 'Full Climate AC' : 'Standard'}</span>
                  </div>
                </div>

                {item.features && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                      Vehicle Specifications & Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.features.map((feat: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-[#242625] rounded-xl border border-white/5 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#556B2F] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.included && (
                  <div className="p-4 bg-[#242625] rounded-xl border border-white/5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Included with Rental
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.included.map((inc: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* HOTEL SPECIFIC */}
            {detailType === 'hotel' && (
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Property Overview
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                    {item.description}
                  </p>
                </div>

                {/* Amenities */}
                {item.amenities && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                      Featured Amenities
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {item.amenities.map((amen: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-3 bg-[#242625] rounded-xl border border-white/5 text-xs text-neutral-300"
                        >
                          <Check className="w-3.5 h-3.5 text-[#556B2F] shrink-0" />
                          <span>{amen}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rooms selection */}
                {item.rooms && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                      Available Room Categories
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.rooms.map((room: any, idx: number) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedRoomIndex(idx)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            selectedRoomIndex === idx
                              ? 'bg-[#556B2F]/15 border-[#556B2F]'
                              : 'bg-[#242625] border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-white text-sm">{room.name}</h4>
                              <div className="text-xs text-neutral-400 mt-0.5">
                                {room.bed} · Up to {room.maxGuests} Guests
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-base font-bold text-white">
                                ₹{formatINR(room.price)}
                              </div>
                              <div className="text-[10px] text-neutral-400">tariff / night</div>
                            </div>
                          </div>
                          <div className="space-y-1 mt-3">
                            {room.features?.map((feat: string, fIdx: number) => (
                              <div key={fIdx} className="text-xs text-neutral-400 flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-[#556B2F]" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Policies */}
                {item.policies && (
                  <div className="p-4 bg-[#242625] border border-white/5 rounded-2xl space-y-2">
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Resort Policies
                    </h4>
                    {item.policies.map((pol: string, idx: number) => (
                      <p key={idx} className="text-xs text-neutral-400">
                        • {pol}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TOUR & TREK SPECIFIC */}
            {(detailType === 'tour' || detailType === 'trek') && (
              <div className="space-y-8">
                {/* Highlights */}
                {item.highlights && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                      Expedition Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.highlights.map((high: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 bg-[#242625] rounded-xl border border-white/5 text-xs text-neutral-300"
                        >
                          <Sparkles className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Day by Day Itinerary */}
                {item.itinerary && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                      Day-by-Day Expedition Itinerary
                    </h3>
                    <div className="space-y-3">
                      {item.itinerary.map((day: any) => (
                        <div
                          key={day.day}
                          className="p-4 bg-[#242625] rounded-xl border border-white/5 space-y-1.5"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#F97316] uppercase">
                              Day 0{day.day}
                            </span>
                            {day.altitude && (
                              <span className="text-neutral-400">
                                Alt: {day.altitude} {day.distance ? `· Dist: ${day.distance}` : ''}
                              </span>
                            )}
                          </div>
                          <h4 className="font-bold text-white text-sm">{day.title}</h4>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {day.description}
                          </p>
                          {day.meals && (
                            <div className="text-[11px] text-[#556B2F] font-semibold pt-1">
                              Meals: {day.meals}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {item.inclusions && (
                    <div className="p-4 bg-[#242625] border border-white/5 rounded-2xl space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        What's Included
                      </h4>
                      <div className="space-y-2">
                        {item.inclusions.map((inc: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.exclusions && (
                    <div className="p-4 bg-[#242625] border border-white/5 rounded-2xl space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        What's Excluded
                      </h4>
                      <div className="space-y-2">
                        {item.exclusions.map((exc: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                            <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                            <span>{exc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* EVENT SPECIFIC */}
            {detailType === 'event' && (
              <div className="space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                  {item.description}
                </p>

                {item.lineup && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Artist & Speaker Lineup
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.lineup.map((art: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#242625] text-white text-xs font-medium rounded-lg border border-white/10"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.schedule && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Festival Schedule
                    </h3>
                    <div className="space-y-2">
                      {item.schedule.map((sch: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-3 bg-[#242625] rounded-xl flex items-center justify-between text-xs border border-white/5"
                        >
                          <span className="font-semibold text-[#F97316]">{sch.time}</span>
                          <span className="text-white font-medium">{sch.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wiktrip Campsite & Tent Pitching Details */}
                <div className="p-4 bg-[#556B2F]/15 border border-[#556B2F]/30 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Tent className="w-4 h-4 text-[#F97316]" />
                    <span>Wiktrip Campsite & Tent Pitching Stays</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Wiktrip sets up verified campsite accommodation and pitched tents directly at this festival. Festival entry passes must be obtained separately from the official festival organizers.
                  </p>
                  {item.campingOptions && item.campingOptions.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {item.campingOptions.map((opt: any, idx: number) => (
                        <div key={idx} className="p-3 bg-[#242625] rounded-xl border border-white/5">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>⛺ {opt.type}</span>
                            <span className="text-[10px] text-neutral-400">{opt.capacity}</span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">{opt.description}</p>
                          {opt.amenities && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {opt.amenities.map((am: string, aIdx: number) => (
                                <span key={aIdx} className="text-[10px] bg-white/5 text-neutral-300 px-2 py-0.5 rounded">
                                  {am}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {item.facilities && (
                    <div className="pt-2 border-t border-white/10">
                      <div className="text-[11px] font-semibold text-neutral-400 mb-1.5">Campground Amenities & Facilities:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.facilities.map((fac: string, idx: number) => (
                          <span key={idx} className="text-[10px] bg-[#242625] text-neutral-300 px-2.5 py-1 rounded border border-white/5">
                            ✓ {fac}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ADVENTURE SPECIFIC */}
            {detailType === 'adventure' && (
              <div className="space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                  {item.description}
                </p>

                {item.safetyInfo && (
                  <div className="p-4 bg-[#556B2F]/15 border border-[#556B2F]/30 rounded-2xl space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#556B2F]" />
                      Safety Protocols & Certifications
                    </h4>
                    {item.safetyInfo.map((info: string, idx: number) => (
                      <p key={idx} className="text-xs text-neutral-300">
                        • {info}
                      </p>
                    ))}
                  </div>
                )}

                {item.requirements && (
                  <div className="p-4 bg-[#242625] rounded-2xl border border-white/5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Participant Requirements
                    </h4>
                    {item.requirements.map((req: string, idx: number) => (
                      <p key={idx} className="text-xs text-neutral-300">
                        • {req}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STORE PRODUCT SPECIFIC */}
            {detailType === 'product' && (
              <div className="space-y-6">
                <p className="text-sm leading-relaxed text-neutral-300">
                  {item.description}
                </p>

                {item.specs && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Technical Specifications
                    </h3>
                    <div className="p-4 bg-[#242625] rounded-2xl border border-white/5 divide-y divide-white/5 text-xs">
                      {Object.entries(item.specs).map(([k, v]) => (
                        <div key={k} className="py-2 flex justify-between">
                          <span className="text-neutral-400">{k}</span>
                          <span className="text-white font-medium">{String(v)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* LEARNING COURSE SPECIFIC */}
            {detailType === 'course' && (
              <div className="space-y-6">
                <p className="text-sm leading-relaxed text-neutral-300">
                  {item.description}
                </p>

                {item.instructor && (
                  <div className="p-4 bg-[#242625] rounded-2xl border border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <SafeImage src={item.instructor.avatar} alt={item.instructor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.instructor.name}</h4>
                      <p className="text-xs text-[#556B2F]">{item.instructor.role}</p>
                      <p className="text-xs text-neutral-400 mt-1">{item.instructor.bio}</p>
                    </div>
                  </div>
                )}

                {item.modules && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Course Curriculum ({item.modules.length} Modules)
                    </h3>
                    <div className="space-y-2">
                      {item.modules.map((m: any, idx: number) => (
                        <div key={idx} className="p-3 bg-[#242625] rounded-xl border border-white/5 text-xs">
                          <div className="flex justify-between font-semibold text-white">
                            <span>Module 0{idx + 1}: {m.title}</span>
                            <span className="text-neutral-400">{m.duration}</span>
                          </div>
                          <div className="text-neutral-400 mt-1">
                            Topics: {m.topics?.join(' · ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* BLOG SPECIFIC */}
            {detailType === 'blog' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-[#242625] rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <SafeImage src={item.author?.avatar} alt={item.author?.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.author?.name}</div>
                    <div className="text-xs text-neutral-400">{item.author?.role} · {item.date} · {item.readTime}</div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed">
                  {item.content?.map((para: string, idx: number) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className="text-xs text-neutral-400 bg-white/5 px-2.5 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Enquiry Action Bar */}
        {detailType !== 'blog' && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#242625]/80 backdrop-blur-sm flex items-center justify-between">
            <div>
              <div className="text-xs text-neutral-400">
                {detailType === 'event'
                  ? 'Wiktrip Campsite Accommodation'
                  : detailType === 'hotel'
                  ? 'Estimated tariff (Quote on Enquiry)'
                  : detailType === 'rental'
                  ? 'Estimated tariff / day (Quote on Enquiry)'
                  : 'Estimated Price (Quote on Enquiry)'}
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                {detailType === 'event' ? (
                  <span className="text-base sm:text-lg text-[#F97316]">Tent Pitching & Stays</span>
                ) : basePrice === 0 ? (
                  'FREE / ON REQUEST'
                ) : (
                  <>
                    ₹{formatINR(basePrice)}
                    <span className="text-xs font-normal text-neutral-400 ml-1">
                      {detailType === 'hotel'
                        ? '/night'
                        : detailType === 'rental'
                        ? '/day'
                        : detailType === 'product'
                        ? ''
                        : '/person'}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {detailType === 'product' ? (
                <button
                  onClick={() => addToCart(item, 1)}
                  className="bg-[#556B2F] hover:bg-[#3F4F24] text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Gear Enquiry</span>
                </button>
              ) : (
                <button
                  onClick={handleBookNow}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors flex items-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {detailType === 'event'
                      ? 'Enquire Campsite Stay'
                      : detailType === 'course'
                      ? 'Enquire Masterclass'
                      : detailType === 'hotel'
                      ? 'Enquire Stay & Rates'
                      : detailType === 'adventure'
                      ? 'Enquire Adventure Slot'
                      : detailType === 'rental'
                      ? 'Enquire Vehicle Rates'
                      : 'Send Trip Enquiry'}
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
