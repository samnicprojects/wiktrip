import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { HOTELS_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  MapPin,
  Star,
  Check,
  Heart,
  SlidersHorizontal,
  Search,
  Calendar,
  Users,
  ArrowRight,
  Filter,
  Building2
} from 'lucide-react';

export const HotelsView: React.FC = () => {
  const { openDetail, openBooking, toggleWishlist, isWishlisted } = useApp();

  const [searchLocation, setSearchLocation] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [selectedAmenity, setSelectedAmenity] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating'>('featured');

  const propertyTypes = ['All', 'Mountain Chalet', 'Eco Stay', 'Luxury Resort', 'Boutique Villa', 'Heritage Lodge'];
  const amenityOptions = ['All', 'Snow Mountain View', 'Fireplace in Room', 'Geothermal Heating', 'Private River Access', 'Ayurvedic Spa & Detox'];

  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      const matchesLoc =
        !searchLocation ||
        hotel.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        hotel.name.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesType = selectedType === 'All' || hotel.type === selectedType;
      const matchesPrice = hotel.pricePerNight <= maxPrice;
      const matchesAmenity =
        selectedAmenity === 'All' || hotel.amenities.includes(selectedAmenity);
      return matchesLoc && matchesType && matchesPrice && matchesAmenity;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.pricePerNight - b.pricePerNight;
      if (sortBy === 'priceDesc') return b.pricePerNight - a.pricePerNight;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchLocation, selectedType, maxPrice, selectedAmenity, sortBy]);

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Hotels & Resorts
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Stay Somewhere Worth Remembering
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            From comfortable stays to distinctive travel accommodations, discover places that make your journey more enjoyable.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Destination / Property
              </label>
              <div className="flex items-center gap-2 bg-[#F3F4F0] px-3 py-2 rounded-lg">
                <Search className="w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Manali, Rishikesh, Spiti, Goa..."
                  className="bg-transparent text-sm w-full focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#F3F4F0] text-sm px-3 py-2 rounded-lg focus:outline-none"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Max Price: ₹{formatINR(maxPrice)}/night
              </label>
              <input
                type="range"
                min="4000"
                max="15000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#556B2F] mt-2 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#F3F4F0] text-sm px-3 py-2 rounded-lg focus:outline-none"
              >
                <option value="featured">Featured Curations</option>
                <option value="rating">Highest Guest Rating</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.length === 0 ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 px-6 text-center bg-white rounded-2xl border border-neutral-200/80 shadow-sm max-w-xl mx-auto w-full">
              <div className="w-16 h-16 rounded-full bg-[#F3F4F0] flex items-center justify-center mx-auto mb-4 text-[#556B2F]">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B0D0C] mb-2">
                No properties currently listed
              </h3>
              <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6 leading-relaxed">
                {HOTELS_DATA.length === 0
                  ? 'We are currently updating our stays and resort collections. For custom stay requests or bookings, feel free to submit an enquiry.'
                  : 'No hotels match your current filters. Try adjusting your destination or price limit.'}
              </p>
              <button
                onClick={() =>
                  openBooking({
                    type: 'hotel',
                    id: 'custom-stay-enquiry',
                    title: 'Hotels & Resorts Custom Enquiry',
                    location: 'All Destinations',
                    price: 0
                  })
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Enquire for Stays
              </button>
            </div>
          ) : (
            filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                      {hotel.type}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleWishlist(hotel.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted(hotel.id) ? 'text-[#F97316] fill-[#F97316]' : ''
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 line-clamp-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                      {hotel.location}
                    </span>
                    <span className="bg-amber-400 text-black font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" />
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {hotel.amenities.slice(0, 3).map((am, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-neutral-600 bg-[#F3F4F0] px-2.5 py-1 rounded-md"
                        >
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">
                        Estimated Tariff
                      </span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(hotel.pricePerNight)}
                      </span>
                      <span className="text-xs text-neutral-500 font-normal"> /night</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openDetail('hotel', hotel)}
                        className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                      >
                        Rooms
                      </button>
                      <button
                        onClick={() =>
                          openBooking({
                            type: 'hotel',
                            id: hotel.id,
                            title: hotel.name,
                            location: hotel.location,
                            price: hotel.pricePerNight
                          })
                        }
                        className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                      >
                        Enquire Stay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
