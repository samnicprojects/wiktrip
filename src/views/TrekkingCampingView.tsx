import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { TREK_CAMPS_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  Mountain,
  Tent,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  Heart,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const TrekkingCampingView: React.FC = () => {
  const { openDetail, openBooking, toggleWishlist, isWishlisted } = useApp();

  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [searchLocation, setSearchLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(200000);

  const categories = ['All', 'Trek', 'Camping', 'Expedition'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging', 'Expert'];

  const filteredTreks = useMemo(() => {
    return TREK_CAMPS_DATA.filter((item) => {
      const matchesType = typeFilter === 'All' || item.type === typeFilter;
      const matchesDiff =
        difficultyFilter === 'All' || item.difficulty.toLowerCase().includes(difficultyFilter.toLowerCase());
      const matchesLoc =
        !searchLocation ||
        item.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        item.title.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesPrice = item.price <= maxPrice;
      return matchesType && matchesDiff && matchesLoc && matchesPrice;
    });
  }, [typeFilter, difficultyFilter, searchLocation, maxPrice]);

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Trekking & Camping
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Enter the Wild
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Step away from ordinary travel and discover trails, mountains, forests and remote landscapes through trekking and camping experiences.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Type
              </label>
              <div className="flex items-center gap-1 bg-[#F3F4F0] p-1 rounded-lg">
                {(['All', 'Trek', 'Camping'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      typeFilter === t ? 'bg-[#556B2F] text-white shadow-sm' : 'text-neutral-600'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Difficulty
              </label>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full bg-[#F3F4F0] text-sm px-3 py-2 rounded-lg focus:outline-none"
              >
                {difficulties.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Search Mountain / Pass
              </label>
              <div className="flex items-center gap-2 bg-[#F3F4F0] px-3 py-2 rounded-lg">
                <Search className="w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Hampta, Kedarkantha, Kasol..."
                  className="bg-transparent text-sm w-full focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Max Fee: ₹{formatINR(maxPrice)}
              </label>
              <input
                type="range"
                min="3000"
                max="15000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#556B2F] mt-2 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Treks & Camps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map((trek) => (
            <div
              key={trek.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                <SafeImage
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {trek.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => toggleWishlist(trek.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted(trek.id) ? 'text-[#F97316] fill-[#F97316]' : ''
                    }`}
                  />
                </button>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                    {trek.duration}
                  </span>
                  <span className="bg-emerald-600/90 text-white font-bold px-2 py-0.5 rounded">
                    Alt: {trek.altitude}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {trek.title}
                  </h3>
                  <div className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{trek.location}</span>
                  </div>

                  <p className="text-xs text-neutral-600 mt-3 line-clamp-2 leading-relaxed">
                    {trek.overview}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
                    <span>Best Season:</span>
                    <span className="font-semibold text-[#556B2F]">{trek.bestSeason}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">
                      All Inclusive Fee
                    </span>
                    <span className="font-display text-xl font-black text-[#0B0D0C]">
                      ₹{formatINR(trek.price)}
                    </span>
                    <span className="text-xs text-neutral-500"> /person</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openDetail('trek', trek)}
                      className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                    >
                      Route Map
                    </button>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'trek',
                          id: trek.id,
                          title: trek.title,
                          location: trek.location,
                          price: trek.price
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Enquire Trek
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
