import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { TOUR_PACKAGES_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Heart,
  Users,
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ToursView: React.FC = () => {
  const { openDetail, openBooking, toggleWishlist, isWishlisted } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchDestination, setSearchDestination] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(50000);

  const categories = [
    'All',
    'Holiday',
    'Honeymoon',
    'Pilgrimage',
    'Adventure',
    'Corporate',
    'Educational',
    'Ecotourism'
  ];

  const filteredTours = useMemo(() => {
    return TOUR_PACKAGES_DATA.filter((tour) => {
      const matchesCat = activeCategory === 'All' || tour.category.toLowerCase().includes(activeCategory.toLowerCase());
      const matchesDest =
        !searchDestination ||
        tour.destination.toLowerCase().includes(searchDestination.toLowerCase()) ||
        tour.title.toLowerCase().includes(searchDestination.toLowerCase());
      const matchesPrice = tour.price <= maxPrice;
      return matchesCat && matchesDest && matchesPrice;
    });
  }, [activeCategory, searchDestination, maxPrice]);

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Tour Packages
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Find a Journey That Fits You
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Explore destinations through carefully planned holidays combining sightseeing, accommodation, transportation and local experiences.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B0D0C] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
              }`}
            >
              {cat === 'All' ? 'All Journeys' : `${cat} Trips`}
            </button>
          ))}
        </div>

        {/* Filter Strip */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F3F4F0] px-3 py-2 rounded-lg w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 shrink-0" />
            <input
              type="text"
              value={searchDestination}
              onChange={(e) => setSearchDestination(e.target.value)}
              placeholder="Search Spiti, Kashmir, Meghalaya, Kerala..."
              className="bg-transparent text-sm w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="text-xs font-semibold text-neutral-600 whitespace-nowrap">
              Max Budget: ₹{formatINR(maxPrice)}
            </span>
            <input
              type="range"
              min="6000"
              max="35000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-40 sm:w-48 accent-[#556B2F] cursor-pointer"
            />
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                <SafeImage
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#556B2F] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {tour.category}
                  </span>
                </div>

                <button
                  onClick={() => toggleWishlist(tour.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted(tour.id) ? 'text-[#F97316] fill-[#F97316]' : ''
                    }`}
                  />
                </button>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                    {tour.duration}
                  </span>
                  <span className="bg-amber-400 text-black font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    {tour.rating}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {tour.title}
                  </h3>
                  <div className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{tour.destination}</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {tour.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">
                      All Inclusive
                    </span>
                    <span className="font-display text-xl font-black text-[#0B0D0C]">
                      ₹{formatINR(tour.price)}
                    </span>
                    <span className="text-xs text-neutral-500"> /person</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openDetail('tour', tour)}
                      className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'tour',
                          id: tour.id,
                          title: tour.title,
                          location: tour.destination,
                          price: tour.price
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Enquire Package
                    </button>
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
