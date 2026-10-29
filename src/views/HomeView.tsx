import React, { useState } from 'react';
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
  VEHICLE_RENTALS_DATA,
  GALLERY_DATA,
  BLOG_POSTS_DATA,
  TESTIMONIALS_DATA
} from '../data/mockData';
import { SafeImage } from '../components/SafeImage';
import { HeroBanner } from '../components/HeroBanner';
import {
  Compass,
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowRight,
  Star,
  ShieldCheck,
  Mountain,
  Award,
  Tent,
  ShoppingBag,
  BookOpen,
  Car,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  Heart,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Music,
  Send,
  SlidersHorizontal,
  Flame,
  Layers,
  HelpCircle,
  Building,
  Navigation,
  Check,
  Zap,
  Utensils,
  Phone,
  MessageCircle,
  Shield,
  Lamp,
  Bed,
  Coffee,
  Bath,
  HeartPulse
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    setCurrentPage,
    openDetail,
    openBooking,
    toggleWishlist,
    isWishlisted,
    setIsSearchOpen,
    showToast
  } = useApp();



  // 2. HERO SEARCH STATE
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('2026-11-15');
  const [travelers, setTravelers] = useState('2');
  const [tripType, setTripType] = useState('Holiday Tours');
  const [experience, setExperience] = useState('Tours');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // 3. FEATURED EXPERIENCES TABS
  const [featuredTab, setFeaturedTab] = useState<
    'Stay' | 'Tours' | 'Trekking' | 'Camping' | 'Adventure' | 'Events' | 'Rentals' | 'Travel Products' | 'Learning'
  >('Tours');

  // Interactive Adventure Setup Concierge State
  const [setupType, setSetupType] = useState('Zipline Flight');
  const [setupLocation, setSetupLocation] = useState('Manali, Himachal Pradesh');
  const [setupPose, setSetupPose] = useState<'standing' | 'climbing'>('standing');

  const handleGoToAdventureLanding = () => {
    setCurrentPage('adventure');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSetupSpeech = () => {
    switch (setupType) {
      case 'Bungee Jump':
        return 'Flagship 40m–150m gravity thrills. The #1 tourist footfall magnet for high ROI!';
      case 'High Ropes Course':
        return 'Multi-tier aerial obstacle courses with continuous zero-unhook safety lifelines.';
      case 'Go-Kart Track':
        return 'Turnkey racing circuits with FIA-grade impact barriers, lap timing & kart fleets.';
      case 'Glass Skywalk':
        return 'Cantilevered toughened glass skywalks with dramatic valley views and viral footfall!';
      case 'Climbing Wall':
        return 'Modular indoor & outdoor climbing towers with pneumatic auto-belays and safety padding.';
      default:
        return 'Dual military-spec steel cables with magnetic eddy-current brakes up to 500m. 100% EN certified!';
    }
  };

  const handleSetupWhatsApp = () => {
    const loc = setupLocation.trim() ? ` at ${setupLocation}` : '';
    const msg = `Hello Wiktrip Adventure Setup Desk! I am interested in building a ${setupType}${loc}. Please share indicative turnkey costs and a site feasibility blueprint.`;
    window.open(`https://wa.me/919711720218?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSetupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSetupWhatsApp();
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    openBooking({
      type: 'tour',
      id: 'custom-journey',
      title: `${tripType} to ${destination || 'Himalayan Frontier'}`,
      location: destination || 'Incredible India',
      price: 18500
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    showToast('Subscribed! You will receive verified travel guides and updates.');
  };

  // 6 Verified "Why Wiktrip" pillars from Section 4 of the document
  const whyWiktripPillars = [
    {
      title: 'Fully Customizable',
      desc: 'Tell us what you want from your trip and we can shape the experience around your interests, schedule and travel requirements.',
      icon: SlidersHorizontal
    },
    {
      title: 'Easy Booking',
      desc: 'Discover and arrange travel experiences through one platform, making trip planning simpler and more convenient.',
      icon: CheckCircle2
    },
    {
      title: 'Value for Money',
      desc: 'Find travel options designed around meaningful experiences and practical travel requirements.',
      icon: ShieldCheck
    },
    {
      title: 'Travel Consulting',
      desc: 'Get guidance for destinations, itineraries and experiences directly from experienced travel specialists.',
      icon: Compass
    },
    {
      title: 'Diverse Destinations',
      desc: 'Explore popular destinations as well as lesser-known places, cultural experiences and off-the-beaten-path adventures.',
      icon: MapPin
    },
    {
      title: 'Passion for Travel',
      desc: 'Wiktrip brings together travelers, local experiences, adventure and discovery into one trusted ecosystem.',
      icon: Heart
    }
  ];

  // 11. Featured Destinations from Section 8 of the document
  const featuredDestinations = [
    {
      name: 'Arunachal Pradesh',
      tag: 'Eastern Himalayas',
      desc: 'Pristine rainforests, ancient monasteries, Ziro & Mechuka valleys.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      action: () => setCurrentPage('tours')
    },
    {
      name: 'Ladakh',
      tag: 'High Altitude Desert',
      desc: 'Pangong Tso, Nubra Valley, Khardung La & centuries-old Buddhist gompas.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      action: () => setCurrentPage('tours')
    },
    {
      name: 'Uttarakhand',
      tag: 'Devbhoomi Garhwal',
      desc: 'Rishikesh, Nainital, Ranikhet, Kausani & legendary alpine pilgrim trails.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      action: () => setCurrentPage('hotels')
    },
    {
      name: 'Kerala & Wayanad',
      tag: 'Western Ghats',
      desc: 'Misty spice plantations, prehistoric caves, and rainforest wildlife sanctuaries.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      action: () => setCurrentPage('tours')
    },
    {
      name: 'Rajasthan',
      tag: 'Heritage & Dunes',
      desc: 'Jodhpur, Jaisalmer, golden desert camps, royal palaces and folk heritage.',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      action: () => setCurrentPage('tours')
    },
    {
      name: 'Nainital, Kausani & Ranikhet',
      tag: 'Kumaon Lakes & Peaks',
      desc: '300-km panoramic Himalayan vistas, serene pine woodlands and tranquil lakes.',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      action: () => setCurrentPage('hotels')
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F6] text-[#0B0D0C]">
      {/* =========================================================================
          SECTION 1: HERO BANNER (DEDICATED COMPONENT)
          ========================================================================= */}
      <HeroBanner />

      {/* =========================================================================
          SECTION 2: EXPLORE BY CATEGORY (ECOSYSTEM NAVIGATION)
          Moved to top directly below HeroBanner with rich image, overview & landing page links
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F3F4F0] via-[#F8F9F6] to-[#F8F9F6] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#556B2F]/15 border border-[#556B2F]/30 text-xs font-bold uppercase tracking-wider text-[#556B2F] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Ecosystem Navigation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] tracking-tight">
              Explore By Category
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Discover verified stays, tours, treks, adventures, events, equipment and learning modules through one unified platform.
            </p>
          </div>

          {/* 10 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
            {[
              {
                title: 'Hotels & Resorts',
                sub: 'Sanctuaries & Chalets',
                tag: 'Stays',
                overview: 'Verified mountain chalets, heritage estates, luxury boutique retreats & eco-resorts.',
                image: '/images/banners/hero_luxury_glamping.jpg',
                icon: Building,
                btnText: 'Explore Stays',
                action: () => setCurrentPage('hotels')
              },
              {
                title: 'Tour Packages',
                sub: 'Holidays & Honeymoons',
                tag: 'Curated',
                overview: 'All-inclusive guided cultural circuits, Himalayan road trips, wildlife & bespoke honeymoons.',
                image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80',
                icon: Compass,
                btnText: 'View Packages',
                action: () => setCurrentPage('tours')
              },
              {
                title: 'Trekking & Camping',
                sub: 'High Passes & Glamping',
                tag: 'Trails',
                overview: 'Himalayan pass crossovers, alpine summit climbs, wilderness glamping & basecamps.',
                image: '/images/banners/hero_alpine_trek.jpg',
                icon: Mountain,
                btnText: 'Discover Treks',
                action: () => setCurrentPage('trekking')
              },
              {
                title: 'Adventure Setup',
                sub: 'Build Parks & Attractions',
                tag: 'Turnkey',
                overview: 'Turnkey park engineering: certified ziplines, bungee towers, high ropes & go-kart arenas.',
                image: '/images/adventure/aerial.jpg',
                icon: Flame,
                btnText: 'Build Setup',
                action: () => setCurrentPage('adventure')
              },
              {
                title: 'Events & Festivals',
                sub: 'Music & Cultural Fests',
                tag: 'Gatherings',
                overview: 'Hornbill Music Festival, OFAM Dambuk, Ziro Festival, and official festival campsite bookings.',
                image: '/images/events/hornbill-festival-banner.jpg',
                icon: Music,
                btnText: 'View Gatherings',
                action: () => setCurrentPage('events')
              },
              {
                title: 'Rent a Cab',
                sub: '5 & 7-Seater Mountain Fleet',
                tag: 'Fleet',
                overview: 'Verified local chauffeurs, 4x4 high-clearance SUVs, airport transfers & multi-day charters.',
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
                icon: Car,
                btnText: 'Rent Vehicle',
                action: () => setCurrentPage('rentals')
              },
              {
                title: 'Wiktrip Store',
                sub: 'Tents & Sleeping Bags',
                tag: 'Gear Store',
                overview: 'Technical outdoor equipment: sub-zero sleeping bags, alpine tents, backpacks & gear.',
                image: '/images/store/premium_tent.webp',
                icon: ShoppingBag,
                btnText: 'Shop Gear',
                action: () => setCurrentPage('store')
              },
              {
                title: 'Wiktrip Learning',
                sub: 'Outdoor Safety & Skills',
                tag: 'Academy',
                overview: 'Wilderness first aid, AMS acclimatization protocols, winter survival & mountaineering skills.',
                image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80',
                icon: BookOpen,
                btnText: 'Start Learning',
                action: () => setCurrentPage('learning')
              },
              {
                title: 'Travel Gallery',
                sub: 'Visual Chronicles',
                tag: 'Photography',
                overview: 'High-resolution photo essays, scenic dispatches, and drone frames from India frontiers.',
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
                icon: Layers,
                btnText: 'View Gallery',
                action: () => setCurrentPage('gallery')
              },
              {
                title: 'Travel Magazine',
                sub: 'ILP & Mountain Guides',
                tag: 'Field Notes',
                overview: 'Comprehensive permit walkthroughs, packing checklists, road status & mountain travel stories.',
                image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
                icon: Navigation,
                btnText: 'Read Magazine',
                action: () => setCurrentPage('blogs')
              }
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  onClick={cat.action}
                  className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5 cursor-pointer"
                >
                  {/* Card Visual Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                    <SafeImage
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Category Icon Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0B0D0C]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>{cat.tag}</span>
                    </div>

                    {/* Titles Overlay */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-wider block">
                        {cat.sub}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-black tracking-tight text-white leading-tight mt-0.5">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                      {cat.overview}
                    </p>

                    {/* View More Link Button */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#556B2F] group-hover:text-[#F97316] transition-colors flex items-center gap-1">
                        <span>{cat.btnText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#556B2F]/10 text-[#556B2F] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center transition-colors">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED EXPERIENCES
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Wiktrip Curated Selections
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Featured Experiences
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Hand-picked journeys, wilderness stays, and high-adrenaline adventures across India.
            </p>
          </div>

          {/* Categories: Stay, Tours, Trekking, Camping, Adventure, Events, Rentals, Travel Products, Learning */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EBECE7] rounded-xl overflow-x-auto no-scrollbar">
            {(
              [
                'Tours',
                'Stay',
                'Trekking',
                'Camping',
                'Adventure',
                'Events',
                'Rentals',
                'Travel Products',
                'Learning'
              ] as const
            )
              .filter((tab) => tab !== 'Stay' || HOTELS_DATA.length > 0)
              .map((tab) => (
              <button
                key={tab}
                onClick={() => setFeaturedTab(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  featuredTab === tab
                    ? 'bg-[#0B0D0C] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-[#0B0D0C]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards depending on selected tab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTab === 'Tours' &&
            TOUR_PACKAGES_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556B2F] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                      {item.destination}
                    </span>
                    <span className="text-neutral-200">{item.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                        Starting Price
                      </span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(item.price)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openDetail('tour', item)}
                        className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                      >
                        Itinerary
                      </button>
                      <button
                        onClick={() =>
                          openBooking({
                            type: 'tour',
                            id: item.id,
                            title: item.title,
                            location: item.destination,
                            price: item.price
                          })
                        }
                        className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {featuredTab === 'Stay' && (
            HOTELS_DATA.length === 0 ? (
              <div className="col-span-1 md:col-span-3 py-12 px-6 text-center bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
                <p className="font-display text-lg font-bold text-[#0B0D0C]">No properties currently listed</p>
                <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                  We are updating our stay accommodations and curated resorts. Stay tuned!
                </p>
              </div>
            ) : (
              HOTELS_DATA.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {item.type}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                        {item.location}
                      </span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                          Per Night
                        </span>
                        <span className="font-display text-xl font-black text-[#0B0D0C]">
                          ₹{formatINR(item.pricePerNight)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openDetail('hotel', item)}
                          className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() =>
                            openBooking({
                              type: 'hotel',
                              id: item.id,
                              title: item.name,
                              location: item.location,
                              price: item.pricePerNight
                            })
                          }
                          className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                        >
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          )}

          {featuredTab === 'Trekking' &&
            TREK_CAMPS_DATA.filter((t) => t.type === 'Trek').slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556B2F] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                      Alt: {item.altitude}
                    </span>
                    <span className="text-neutral-200">{item.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                        Trek Fee
                      </span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(item.price)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openDetail('trek', item)}
                        className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                      >
                        Plan
                      </button>
                      <button
                        onClick={() =>
                          openBooking({
                            type: 'trek',
                            id: item.id,
                            title: item.title,
                            location: item.location,
                            price: item.price
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

          {(featuredTab === 'Camping' || featuredTab === 'Adventure') &&
            ADVENTURE_ACTIVITIES_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                      {item.location}
                    </span>
                    <span className="text-neutral-200">{item.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                        Activity Fee
                      </span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(item.price)}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'adventure',
                          id: item.id,
                          title: item.name,
                          location: item.location,
                          price: item.price
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Enquire Activity
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {featuredTab === 'Events' &&
            EVENTS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F97316] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                      {item.location}
                    </span>
                    <span className="text-neutral-200">{item.date}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#556B2F] uppercase tracking-wider block">
                        Wiktrip Campsite
                      </span>
                      <span className="font-display text-base sm:text-lg font-bold text-[#0B0D0C]">
                        Tent Pitching & Stays
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'event',
                          id: item.id,
                          title: `${item.title} - Wiktrip Campsite Stay`,
                          location: item.location,
                          price: 0
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      Enquire Campsite
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {featuredTab === 'Rentals' &&
            VEHICLE_RENTALS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.seats} Seats · {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors">
                    {item.name}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                        Rental Rate
                      </span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(item.pricePerDay)}/day
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'rental',
                          id: item.id,
                          title: item.name,
                          location: 'All Mountain Routes',
                          price: item.pricePerDay
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Book Cab
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {featuredTab === 'Travel Products' &&
            STORE_PRODUCTS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556B2F] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors">
                    {item.name}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                        Verified Price
                      </span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(item.price)}
                      </span>
                    </div>
                    <button
                      onClick={() => setCurrentPage('store')}
                      className="px-4 py-2 bg-[#0B0D0C] hover:bg-neutral-800 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      View in Store
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {featuredTab === 'Learning' &&
            LEARNING_COURSES_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                      {item.duration}
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {item.price === 0 ? 'FREE' : `₹${item.price}`}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 block">Instructor</span>
                      <span className="text-xs font-bold text-[#0B0D0C]">{item.instructor.name}</span>
                    </div>
                    <button
                      onClick={() => setCurrentPage('learning')}
                      className="px-4 py-2 bg-[#556B2F] hover:bg-[#3F4F24] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3B: INTERACTIVE ADVENTURE SETUP CONCIERGE & FEASIBILITY PLANNER
          Featuring full 3D Guide/Engineer character guiding B2B turnkey setup inquiries
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#121614] via-[#1a221d] to-[#0c0f0d] border border-white/15 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12 text-white">
          {/* Ambient lighting blur orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#25D366]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F97316]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Full Character Showcase with Speech Bubble and Floating Badges */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              {/* Dynamic Interactive Speech Bubble */}
              <div className="relative mb-4 bg-white text-[#0B0D0C] p-4 rounded-2xl rounded-bl-none shadow-xl border border-neutral-200 text-xs sm:text-sm font-semibold max-w-sm animate-in fade-in duration-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-lg shrink-0">🛠️</span>
                  <p className="leading-snug text-left text-neutral-800">
                    {getSetupSpeech()}
                  </p>
                </div>
                {/* Speech tail */}
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45 border-r border-b border-neutral-200" />
              </div>

              {/* Full Character Image with Glowing Mountain/Engineering Stage */}
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[460px] sm:h-[520px] flex items-center justify-center">
                {/* Atmospheric circular stage gradient */}
                <div className="absolute bottom-4 inset-x-8 h-24 bg-gradient-to-t from-[#556B2F]/40 to-transparent rounded-full blur-xl pointer-events-none" />

                <SafeImage
                  src={
                    setupPose === 'climbing' || setupType === 'Climbing Wall' || setupType === 'Bungee Jump'
                      ? '/images/avatar/guide-avatar-climb.jpg'
                      : '/images/avatar/guide-avatar.jpg'
                  }
                  alt="Wiktrip Adventure Setup Specialist"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transition-all duration-500 hover:scale-103"
                />

                {/* Floating Badge 1: Response Time */}
                <div className="absolute top-8 left-0 sm:-left-2 z-20 bg-black/85 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>15-Min Feasibility Reply</span>
                </div>

                {/* Floating Badge 2: Certified Engineering */}
                <div className="absolute bottom-16 right-0 sm:-right-2 z-20 bg-[#556B2F]/90 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>EN / ASTM Safety Certified</span>
                </div>
              </div>

              {/* Character View Switcher */}
              <div className="flex items-center gap-2 mt-3 p-1.5 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-bold text-neutral-400 px-2">Character View:</span>
                <button
                  type="button"
                  onClick={() => setSetupPose('standing')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    setupPose === 'standing'
                      ? 'bg-[#F97316] text-white shadow-sm'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Site Engineer 📐
                </button>
                <button
                  type="button"
                  onClick={() => setSetupPose('climbing')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    setupPose === 'climbing'
                      ? 'bg-[#25D366] text-white shadow-sm'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Rigging & Safety 🧗
                </button>
              </div>
            </div>

            {/* Right Column: Sleek & Simple Adventure Setup Builder */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider text-[#25D366] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Turnkey Adventure Setup</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Build Your Adventure Attraction
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Select an attraction to receive turnkey cost breakdown & site feasibility blueprints.
                </p>
              </div>

              <form onSubmit={handleSetupSubmit} className="space-y-5">
                {/* 1. What to build? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    What would you like to build?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'Ziplines', label: 'Zipline Flight', icon: '🦅' },
                      { id: 'Bungee', label: 'Bungee Jump', icon: '🪂' },
                      { id: 'High Ropes', label: 'High Ropes Course', icon: '🧗' },
                      { id: 'Go-Kart', label: 'Go-Kart Track', icon: '🏎️' },
                      { id: 'Glass Skywalk', label: 'Glass Skywalk', icon: '🌉' },
                      { id: 'Climbing Wall', label: 'Climbing Wall', icon: '🧗‍♂️' }
                    ].map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => {
                          setSetupType(v.label);
                          if (v.id === 'Climbing Wall' || v.id === 'Bungee') {
                            setSetupPose('climbing');
                          } else {
                            setSetupPose('standing');
                          }
                        }}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                          setupType === v.label
                            ? 'bg-[#F97316] border-[#F97316] text-white shadow-lg shadow-orange-500/20 font-bold scale-[1.02]'
                            : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white font-medium'
                        }`}
                      >
                        <span className="text-xl shrink-0">{v.icon}</span>
                        <span className="text-xs font-bold truncate">{v.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Site Location Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Your Property Location:
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#F97316]" />
                    <input
                      type="text"
                      value={setupLocation}
                      onChange={(e) => setSetupLocation(e.target.value)}
                      placeholder="e.g. Manali, Lonavala, Munnar, Goa, Rishikesh..."
                      className="w-full bg-[#1F2321] border border-white/15 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#25D366] transition-colors"
                    />
                  </div>
                </div>

                {/* 3. High-Impact WhatsApp Action Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleSetupWhatsApp}
                    className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm sm:text-base font-black rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 cursor-pointer group hover:scale-[1.01] active:scale-95"
                  >
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shrink-0">
                      <SafeImage
                        src="/images/avatar/guide-avatar.jpg"
                        alt="Adventure Setup Engineer"
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    </div>
                    <span>Get Turnkey Setup Cost & Feasibility on WhatsApp</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 4. Minimal Footer */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>Free 3D Layout & Feasibility Report</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleGoToAdventureLanding}
                    className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Explore 26+ Setups</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOTELS & RESORTS
          ========================================================================= */}
      {HOTELS_DATA.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
                Comfort & Distinction
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
                Stay Somewhere Worth Remembering
              </h2>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                From comfortable stays to distinctive travel accommodations, discover places that make your journey more enjoyable.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('hotels')}
              className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
            >
              <span>View All Stays ({HOTELS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOTELS_DATA.slice(0, 3).map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full">
                  <SafeImage src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                      {hotel.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                      {hotel.location}
                    </span>
                    <span className="bg-amber-500/90 text-black font-bold px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" />
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0B0D0C]">{hotel.name}</h3>
                    <p className="text-xs text-neutral-500 mt-2 line-clamp-2">{hotel.description}</p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase">Starting Price</span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(hotel.pricePerNight)}
                      </span>
                    </div>
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
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 6: POPULAR TOUR PACKAGES
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D0C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
                Carefully Planned Holidays
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-1">
                Find a Journey That Fits You
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
                Explore destinations through carefully planned holidays combining sightseeing, accommodation, transportation and local experiences.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('tours')}
              className="text-sm font-bold text-[#F97316] hover:text-white flex items-center gap-1 group cursor-pointer"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOUR_PACKAGES_DATA.slice(0, 3).map((tour) => (
              <div
                key={tour.id}
                className="bg-[#161917] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col group"
              >
                <div className="relative h-64 w-full">
                  <SafeImage
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161917] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556B2F] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                      {tour.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-neutral-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                      {tour.duration}
                    </span>
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {tour.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F97316] transition-colors">
                      {tour.title}
                    </h3>
                    <div className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      <span>{tour.destination}</span>
                    </div>

                    <div className="mt-4 space-y-1.5 text-xs text-neutral-300">
                      {tour.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase">All Inclusive</span>
                      <span className="font-display text-xl font-black text-white">
                        ₹{formatINR(tour.price)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openDetail('tour', tour)}
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
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
                        className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                      >
                        Enquire Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8B: ADVENTURE SETUP — BUILD YOUR OWN ADVENTURE DESTINATION
          (Wiktrip Flagship B2B Adventure Park Engineering & Development)
          ========================================================================= */}
      <section className="py-24 bg-[#0B0D0C] text-white relative overflow-hidden border-y border-white/10">
        {/* Subtle background ambient blur orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#556B2F]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 text-xs font-bold uppercase tracking-widest text-[#F97316] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                <span>Turnkey Commercial Solutions</span>
                <span className="text-white/40">•</span>
                <span className="text-neutral-300 font-medium">B2B Park Development</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Build Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-amber-400 to-[#556B2F]">Adventure Destination</span>
              </h2>
              <p className="text-base text-neutral-300 mt-3 leading-relaxed">
                Turn your land, resort, campsite or tourism property into a high-footfall, highly profitable adventure park. Wiktrip delivers end-to-end master planning, structural civil engineering, certified rigs, and staff training.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setCurrentPage('adventure')}
                className="px-6 py-3.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Plan Your Adventure Park</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919711720218?text=Hello%20Wiktrip%2C%20I%20have%20land%2Fresort%20property%20and%20want%20to%20consult%20about%20an%20Adventure%20Setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#1F2321] hover:bg-[#2A302D] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-colors flex items-center gap-2.5 cursor-pointer group"
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#25D366] shrink-0">
                  <SafeImage
                    src="/images/avatar/guide-avatar-climb.jpg"
                    alt="Adventure Engineer Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                </div>
                <span className="hidden sm:inline">WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Masterplan Highlight Showcase Card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#161917] via-[#1a1f1c] to-[#0e110f] shadow-2xl mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left / Visual: High-Res Masterplan Render */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px] overflow-hidden group">
                <SafeImage
                  src="/images/adventure/masterplan.jpg"
                  alt="Wiktrip Adventure Park 3D Architectural Masterplan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#161917]" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-black/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Turnkey 3D Master Planning & Blueprint</span>
                  </span>
                  <span className="bg-[#556B2F]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider w-fit">
                    Civil & Aerial Engineering
                  </span>
                </div>
              </div>

              {/* Right / Value Proposition & Stats */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#556B2F] mb-1">
                    Custom Built for Your Space & Vision
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Complete Turnkey Setup from Ground to Sky
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                    Whether you have 1 acre of resort green space or 50+ acres of rugged mountain topography, Wiktrip customizes attractions to maximize footfall, guest dwell time, and ticket revenues.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      { title: '100% EN 15567 / AS/NZS Certified', desc: 'Military-spec steel wire ropes, backup lanyards & eddy-current brakes.' },
                      { title: 'Zero Site Damage & Eco-Sensitive', desc: 'Arborist-approved tree-friendly anchors and low-impact civil footings.' },
                      { title: 'Operational Handover & Training', desc: 'Complete staff SOP manual, safety operator drill, and certification.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#556B2F]/20 text-[#A3E635] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.title}</div>
                          <div className="text-[11px] text-neutral-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Quick Stat Tiles */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="font-display text-2xl font-black text-[#F97316]">100+</div>
                    <div className="text-[10px] text-neutral-400 uppercase font-semibold">Attractions Designed</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="font-display text-2xl font-black text-[#556B2F]">10</div>
                    <div className="text-[10px] text-neutral-400 uppercase font-semibold">Adventure Categories</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="font-display text-2xl font-black text-amber-400">60-90</div>
                    <div className="text-[10px] text-neutral-400 uppercase font-semibold">Days Turnkey Setup</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="font-display text-2xl font-black text-emerald-400">Zero</div>
                    <div className="text-[10px] text-neutral-400 uppercase font-semibold">Accident Safety Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Flagship Setup Categories */}
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#556B2F]">
                  Explore Adventure Categories
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                  What We Can Build on Your Property
                </h3>
              </div>
              <button
                onClick={() => setCurrentPage('adventure')}
                className="text-xs font-bold text-[#F97316] hover:text-white flex items-center gap-1 group cursor-pointer"
              >
                <span>View Full Catalogue (10 Categories)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: 'aerial',
                  title: 'Aerial Adventures',
                  badge: 'High-Demand',
                  image: '/images/adventure/aerial.jpg',
                  tagline: 'Experience the thrill of height, speed and open skies.',
                  attractions: ['Zipline & Superman Zip', 'Couple Zipline', 'Sky Cycle', 'Roller Coaster Zipline']
                },
                {
                  id: 'extreme',
                  title: 'Extreme Thrills',
                  badge: 'Signature Attraction',
                  image: '/images/adventure/extreme.jpg',
                  tagline: 'Adrenaline-pumping gravity rides for youth & thrill-seekers.',
                  attractions: ['Bungee Jump & Quick Jump', 'Human Bungee Slingshot', 'Reverse Bungee', 'Giant Canyon Swing']
                },
                {
                  id: 'climbing',
                  title: 'Climbing & Ropes',
                  badge: 'All-Age Favorite',
                  image: '/images/adventure/climbing.jpg',
                  tagline: 'Active obstacle challenges and vertical strength tests.',
                  attractions: ['Low & High Ropes Courses', 'Tyre Climbing Wall', 'Artificial Wall Climbing', 'Commando Net']
                }
              ].map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setCurrentPage('adventure')}
                  className="bg-[#161917] rounded-2xl overflow-hidden border border-white/10 hover:border-[#F97316]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
                      <SafeImage
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#F97316] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                          {cat.badge}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161917] via-transparent to-transparent opacity-90" />
                    </div>

                    <div className="p-6 pt-3">
                      <h4 className="font-display text-xl font-bold text-white group-hover:text-[#F97316] transition-colors">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{cat.tagline}</p>

                      <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#556B2F] mb-1">
                          Featured Setups:
                        </div>
                        {cat.attractions.slice(0, 3).map((att, i) => (
                          <div key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                            <span>{att}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F97316] font-bold group-hover:text-white transition-colors">
                      <span>Explore Setup Options</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Redirect Button */}
            <div className="mt-10 flex items-center justify-center">
              <button
                onClick={() => setCurrentPage('adventure')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-sm font-bold rounded-2xl shadow-xl shadow-orange-500/20 transition-all duration-300 group cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>View More Categories & Attractions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Turnkey 4-Step Engineering Roadmap */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#161917] via-[#1f2621] to-[#161917] border border-white/15 mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#556B2F]">
                Execution Methodology
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                How We Build Your Adventure Park
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                From empty land to operational ticket counter — a streamlined, transparent 4-stage engineering roadmap.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Site Feasibility & Topography', desc: 'On-ground survey, contour mapping, soil stability testing, and catchment capacity assessment.' },
                { step: '02', title: '3D Master Planning', desc: 'Custom architectural zoning, attraction density design, and detailed project cost estimation.' },
                { step: '03', title: 'Structural Civil Rigging', desc: 'Certified foundation casting, cable tensioning, safety arrest systems, and attraction fabrication.' },
                { step: '04', title: 'Audit, Training & Launch', desc: 'Load testing to international standards, staff SOP training, maintenance protocols & grand opening.' }
              ].map((st) => (
                <div key={st.step} className="p-5 bg-black/40 rounded-2xl border border-white/10 relative">
                  <span className="font-display text-3xl font-black text-[#F97316]/40 block mb-2">
                    {st.step}
                  </span>
                  <div className="text-sm font-bold text-white mb-1.5">{st.title}</div>
                  <div className="text-xs text-neutral-400 leading-relaxed">{st.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F97316]/20 via-[#1F2321] to-[#556B2F]/20 border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                Turnkey Project Consultation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                Ready to Turn Your Property into an Adventure Hub?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl">
                Get a customized feasibility report and 3D concept masterplan tailored to your property acreage, budget, and local tourist demographics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => setCurrentPage('adventure')}
                className="w-full sm:w-auto px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold rounded-xl transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Plan Your Adventure Destination</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919711720218?text=Hello%20Wiktrip%2C%20I%20want%20to%20consult%20about%20an%20Adventure%20Setup%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/15 transition-colors flex items-center justify-center gap-2.5 group"
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#25D366] shrink-0">
                  <SafeImage
                    src="/images/avatar/guide-avatar-climb.jpg"
                    alt="Adventure Engineer Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: WHY WIKTRIP
          ========================================================================= */}
      <section className="py-20 bg-[#F3F4F0] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              The Wiktrip Promise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Why Wiktrip
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Explore More. Experience More. Travel Better. Designed around verified local knowledge and practical travel requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWiktripPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#556B2F]/15 flex items-center justify-center text-[#556B2F]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C]">{pillar.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FEATURED DESTINATIONS
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Verified Regions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Featured Destinations
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
              Arunachal Pradesh, Kerala, Rajasthan, Uttarakhand, Ladakh, Wayanad, Nainital, Kausani and Ranikhet.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('tours')}
            className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
          >
            <span>All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map((dest, i) => (
            <div
              key={i}
              onClick={dest.action}
              className="group relative rounded-2xl overflow-hidden h-72 border border-neutral-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <SafeImage
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded">
                  {dest.tag}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-display text-xl font-black text-white group-hover:text-[#F97316] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                  {dest.desc}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#F97316]">
                  <span>Explore Circuit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: WIKTRIP STORE
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D0C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
                Outdoor Equipment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-1">
                Gear Up for the Journey
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
                Travel better with practical outdoor and camping equipment selected for your adventures.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('store')}
              className="text-sm font-bold text-[#F97316] hover:text-white flex items-center gap-1 group cursor-pointer"
            >
              <span>Visit Wiktrip Store</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORE_PRODUCTS_DATA.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                className="p-5 bg-[#161917] rounded-2xl border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 rounded-xl overflow-hidden mb-4 bg-[#242625]">
                    <SafeImage src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#556B2F] uppercase tracking-wider block">
                    {prod.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-white mt-1">{prod.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{prod.description}</p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-display text-xl font-black text-[#F97316]">
                    ₹{formatINR(prod.price)}
                  </span>
                  <button
                    onClick={() => setCurrentPage('store')}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: WIKTRIP LEARNING
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#242625] text-white rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Outdoor Skills & Education
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Learn Before You Explore
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Build the knowledge and confidence to travel, explore and experience the outdoors responsibly. Topics cover AMS acclimatization, wilderness navigation, camping skills, and Leave No Trace principles.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {['Travel Planning', 'Trekking & Hiking', 'Camping & Survival', 'Mountain Safety', 'Ecotourism & LNT', 'Outdoor Skills'].map((topic, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F]" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 text-center space-y-4">
            <button
              onClick={() => setCurrentPage('learning')}
              className="px-8 py-3.5 bg-[#556B2F] hover:bg-[#3F4F24] text-white rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg cursor-pointer"
            >
              Explore Learning Resources
            </button>
            <p className="text-[11px] text-neutral-400">Masterclasses & Beginner Guides</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: RENT A CAB
          ========================================================================= */}
      <section className="py-20 bg-[#F3F4F0] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
                Travel Transportation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
                Move Freely. Explore More.
              </h2>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                Local taxi, airport transfers, outstation cabs, and destination transport with verified 5-seater and 7-seater vehicles.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('rentals')}
              className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
            >
              <span>View All Fleet</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VEHICLE_RENTALS_DATA.slice(0, 3).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full">
                  <SafeImage src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                      {car.seats} Seater · {car.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0B0D0C]">{car.name}</h3>
                    <p className="text-xs text-neutral-500 mt-1">Chauffeur driven or self-drive mountain fleet.</p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase">Rental Rate</span>
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(car.pricePerDay)}/day
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'rental',
                          id: car.id,
                          title: car.name,
                          location: 'All Mountain Circuits',
                          price: car.pricePerDay
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Book / Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: TRAVELER STORIES
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Traveler Voices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
            Stories From Our Travelers
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Genuine experiences shared by travelers exploring India with Wiktrip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((test) => (
            <div
              key={test.id}
              className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{test.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <SafeImage src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B0D0C]">{test.name}</div>
                  <div className="text-xs text-neutral-500">{test.tripName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 16: TRAVEL GALLERY
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D0C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
                Visual Journal
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-1">
                Moments Worth Remembering
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
                Destinations, hotels, trekking, camping, adventure, festivals, and cultural moments captured across India.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('gallery')}
              className="text-sm font-bold text-[#F97316] hover:text-white flex items-center gap-1 group cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_DATA.slice(0, 8).map((img, i) => (
              <div
                key={i}
                onClick={() => setCurrentPage('gallery')}
                className="group relative h-48 rounded-xl overflow-hidden cursor-pointer bg-neutral-900"
              >
                <SafeImage
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <div className="text-xs text-white font-medium">{img.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 17: LATEST BLOGS
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Field Lore & Practical Guides
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Stories, Guides & Inspiration
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
              Inner Line Permits (ILP), mountain acclimatization, camping protocols, and responsible travel insights.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('blogs')}
            className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => openDetail('blog', post)}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="relative h-56 w-full">
                <SafeImage src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#556B2F] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-neutral-400 mb-2">{post.date} · {post.readTime}</div>
                  <h3 className="font-display text-base font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2">{post.excerpt}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center text-xs font-bold text-[#F97316]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 18: BECOME A PARTNER
          ========================================================================= */}
      <section className="py-16 bg-[#556B2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-200">
              Partner Ecosystem
            </span>
            <h2 className="font-display text-3xl font-black text-white mt-1">
              Grow With Wiktrip
            </h2>
            <p className="text-sm text-neutral-200 mt-2 max-w-xl">
              Join the Wiktrip ecosystem and connect your travel experience or service with travelers looking for new places and experiences. Hotels, resorts, tour operators, adventure specialists, and transport providers welcome.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('partners')}
            className="px-8 py-3.5 bg-[#0B0D0C] hover:bg-neutral-900 text-white rounded-xl text-sm font-bold tracking-wide transition-all shadow-xl whitespace-nowrap shrink-0 cursor-pointer"
          >
            Become a Partner
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 19: NEWSLETTER
          ========================================================================= */}
      <section className="py-20 bg-[#161917] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black mt-2">
            Dispatches from the Mountain Trails
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
            Receive verified travel updates, inner line permit notices, seasonal trekking advisories, and curated travel inspiration directly in your inbox.
          </p>

          {newsletterSubscribed ? (
            <div className="mt-8 p-4 bg-[#556B2F]/20 border border-[#556B2F] text-white rounded-xl inline-flex items-center gap-2 text-sm font-bold">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>Thank you for subscribing! We look forward to sharing inspiring journeys.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-[#242625] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#F97316]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-xl transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
