import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EVENTS_DATA } from '../data/mockData';
import { SafeImage } from '../components/SafeImage';
import {
  Calendar,
  Clock,
  MapPin,
  Tent,
  Users,
  Music,
  Mountain,
  History,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

export const EventsView: React.FC = () => {
  const { openDetail, openBooking } = useApp();
  const [filterTab, setFilterTab] = useState<'all' | 'upcoming' | 'music' | 'adventure' | 'past'>('all');

  const filteredEvents = EVENTS_DATA.filter((event) => {
    if (filterTab === 'upcoming') return !event.isPast;
    if (filterTab === 'past') return event.isPast;
    if (filterTab === 'music') return event.category === 'Music & Nightlife';
    if (filterTab === 'adventure') return event.category === 'Adventure Festival';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Gatherings & Festivals · Wiktrip Campsite Stays
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Where Travel Meets Experience
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Official Wiktrip campsite tent stays & glamping setups at India's premier festivals. We pitch your secured tent stay on-ground so you can immerse fully in the celebration.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#556B2F]/10 border border-[#556B2F]/20 text-xs text-[#39491F] font-medium">
            <Tent className="w-4 h-4 text-[#556B2F] shrink-0" />
            <span>
              <strong>Wiktrip Tent Pitching:</strong> We provide secured campsite & tent accommodation at these events. Festival entry passes must be obtained separately from official festival organizers.
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
          {[
            { id: 'all', label: 'All Events' },
            { id: 'upcoming', label: 'Upcoming Events' },
            { id: 'music', label: 'Music Events' },
            { id: 'adventure', label: 'Adventure Events' },
            { id: 'past', label: 'Previous Events' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                filterTab === tab.id
                  ? 'bg-[#0B0D0C] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                event.isPast ? 'opacity-85' : ''
              }`}
            >
              <div className="relative h-72 w-full overflow-hidden bg-neutral-900">
                <SafeImage
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded text-white ${
                      event.isPast ? 'bg-neutral-600' : 'bg-[#F97316]'
                    }`}
                  >
                    {event.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{event.date}</span>
                    <span>·</span>
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{event.time}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold">{event.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#556B2F]" />
                    <span>{event.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {event.lineup && event.lineup.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider block mb-2">
                        Featured Artists & Speakers
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.lineup.map((art, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#F3F4F0] text-neutral-700 px-2.5 py-1 rounded-md"
                          >
                            {art}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {event.campingOptions && event.campingOptions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="text-[11px] font-bold uppercase text-[#556B2F] tracking-wider block mb-2 flex items-center gap-1.5">
                        <Tent className="w-3.5 h-3.5 text-[#556B2F]" />
                        <span>Wiktrip Campsite Stays</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.campingOptions.map((c, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#556B2F]/10 text-[#556B2F] font-semibold px-2.5 py-1 rounded-md"
                          >
                            ⛺ {c.type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#556B2F] uppercase tracking-wider block">
                      Wiktrip Campsite
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-[#0B0D0C]">
                      {event.isPast ? 'Concluded' : 'Tent Pitching & Stays'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openDetail('event', event)}
                      className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black cursor-pointer"
                    >
                      Schedule
                    </button>
                    {!event.isPast && (
                      <button
                        onClick={() =>
                          openBooking({
                            type: 'event',
                            id: event.id,
                            title: `${event.title} - Wiktrip Campsite Stay`,
                            location: event.location,
                            price: 0
                          })
                        }
                        className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm cursor-pointer"
                      >
                        Enquire Campsite
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
