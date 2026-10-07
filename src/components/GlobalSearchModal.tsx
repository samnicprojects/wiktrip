import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { formatINR } from '../utils/format';
import {
  HOTELS_DATA,
  TOUR_PACKAGES_DATA,
  EVENTS_DATA,
  ADVENTURE_ACTIVITIES_DATA,
  TREK_CAMPS_DATA,
  STORE_PRODUCTS_DATA,
  LEARNING_COURSES_DATA,
  VEHICLE_RENTALS_DATA
} from '../data/mockData';
import {
  Search,
  X,
  Compass,
  MapPin,
  Calendar,
  Mountain,
  Tent,
  ShoppingBag,
  BookOpen,
  Car,
  ArrowRight
} from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openDetail, setCurrentPage, openBooking } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Unified items
  const allItems = useMemo(() => {
    const list: any[] = [];

    HOTELS_DATA.forEach(h =>
      list.push({
        id: h.id,
        title: h.name,
        subtitle: `${h.type} · ${h.location}`,
        price: `₹${formatINR(h.pricePerNight)}/night`,
        category: 'hotel',
        categoryLabel: 'Hotel & Resort',
        data: h
      })
    );

    TOUR_PACKAGES_DATA.forEach(t =>
      list.push({
        id: t.id,
        title: t.title,
        subtitle: `${t.duration} · ${t.destination}`,
        price: `₹${formatINR(t.price)}`,
        category: 'tour',
        categoryLabel: 'Tour Package',
        data: t
      })
    );

    TREK_CAMPS_DATA.forEach(tc =>
      list.push({
        id: tc.id,
        title: tc.title,
        subtitle: `${tc.altitude} · ${tc.duration} · ${tc.difficulty}`,
        price: `₹${formatINR(tc.price)}`,
        category: 'trek',
        categoryLabel: 'Trek & Camp',
        data: tc
      })
    );

    ADVENTURE_ACTIVITIES_DATA.forEach(a =>
      list.push({
        id: a.id,
        title: a.name,
        subtitle: `${a.duration} · ${a.location}`,
        price: `₹${formatINR(a.price)}`,
        category: 'adventure',
        categoryLabel: 'Adventure',
        data: a
      })
    );

    EVENTS_DATA.forEach(e =>
      list.push({
        id: e.id,
        title: e.title,
        subtitle: `${e.date} · ${e.location}`,
        price: e.isPast ? 'Concluded' : 'Campsite Stays Available',
        category: 'event',
        categoryLabel: 'Event',
        data: e
      })
    );

    STORE_PRODUCTS_DATA.forEach(p =>
      list.push({
        id: p.id,
        title: p.name,
        subtitle: `${p.category} · Rating: ${p.rating}★`,
        price: `₹${formatINR(p.price)}`,
        category: 'store',
        categoryLabel: 'Gear Store',
        data: p
      })
    );

    LEARNING_COURSES_DATA.forEach(l =>
      list.push({
        id: l.id,
        title: l.title,
        subtitle: `${l.level} · ${l.duration}`,
        price: l.price === 0 ? 'Free Masterclass' : `₹${formatINR(l.price)}`,
        category: 'learning',
        categoryLabel: 'Academy',
        data: l
      })
    );

    VEHICLE_RENTALS_DATA.forEach(v =>
      list.push({
        id: v.id,
        title: v.name,
        subtitle: `${v.type} · ${v.seats} Seats · ${v.rentalType}`,
        price: `₹${formatINR(v.pricePerDay)}/day`,
        category: 'rental',
        categoryLabel: 'Cab Rental',
        data: v
      })
    );

    return list;
  }, []);

  const filteredResults = useMemo(() => {
    return allItems.filter(item => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [allItems, searchTerm, activeCategory]);

  if (!isSearchOpen) return null;

  const handleSelectItem = (item: any) => {
    setIsSearchOpen(false);
    if (item.category === 'hotel') {
      setCurrentPage('hotels');
      openDetail('hotel', item.data);
    } else if (item.category === 'tour') {
      setCurrentPage('tours');
      openDetail('tour', item.data);
    } else if (item.category === 'trek') {
      setCurrentPage('trekking');
      openDetail('trek', item.data);
    } else if (item.category === 'adventure') {
      setCurrentPage('adventure');
      openDetail('adventure', item.data);
    } else if (item.category === 'event') {
      setCurrentPage('events');
      openDetail('event', item.data);
    } else if (item.category === 'store') {
      setCurrentPage('store');
      openDetail('product', item.data);
    } else if (item.category === 'learning') {
      setCurrentPage('learning');
      openDetail('course', item.data);
    } else if (item.category === 'rental') {
      setCurrentPage('rentals');
      openBooking({
        type: 'rental',
        id: item.data.id,
        title: item.data.name,
        location: 'Mountain Transfer',
        price: item.data.pricePerDay
      });
    }
  };

  const categories = [
    { id: 'all', label: 'All Results' },
    { id: 'hotel', label: 'Stays' },
    { id: 'tour', label: 'Tours' },
    { id: 'trek', label: 'Treks & Camps' },
    { id: 'adventure', label: 'Adventures' },
    { id: 'event', label: 'Events' },
    { id: 'store', label: 'Store Gear' },
    { id: 'rental', label: 'Cabs & Rentals' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#161917] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#242625]/60">
          <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Manali stays, Hampta trek, rafting, Spiti 4x4, camping gear..."
            autoFocus
            className="w-full bg-transparent text-white placeholder-neutral-400 text-sm focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-neutral-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs text-neutral-400 hover:text-white px-2 py-1 bg-white/10 rounded"
          >
            ESC
          </button>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 p-3 overflow-x-auto border-b border-white/10 text-xs no-scrollbar bg-[#161917]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#556B2F] text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-[#242625]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto divide-y divide-white/5 p-2 flex-1">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 text-sm">
              <Compass className="w-8 h-8 mx-auto mb-2 text-[#556B2F] opacity-70" />
              No experiences found matching "{searchTerm}".
              <div className="text-xs text-neutral-500 mt-1">
                Try searching for "Spiti", "Kedarkantha", "Resort", or "Zipline".
              </div>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectItem(item)}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#242625] cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#242625] border border-white/5 flex items-center justify-center text-[#556B2F] group-hover:bg-[#556B2F] group-hover:text-white transition-colors shrink-0 mt-0.5">
                    {item.category === 'hotel' && <MapPin className="w-4 h-4" />}
                    {item.category === 'tour' && <Compass className="w-4 h-4" />}
                    {item.category === 'trek' && <Mountain className="w-4 h-4" />}
                    {item.category === 'adventure' && <Mountain className="w-4 h-4" />}
                    {item.category === 'event' && <Calendar className="w-4 h-4" />}
                    {item.category === 'store' && <ShoppingBag className="w-4 h-4" />}
                    {item.category === 'learning' && <BookOpen className="w-4 h-4" />}
                    {item.category === 'rental' && <Car className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#F97316] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-400 line-clamp-1">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-xs font-semibold text-neutral-300">
                    {item.price}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
