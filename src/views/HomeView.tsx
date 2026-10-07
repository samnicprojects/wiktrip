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
  Shield
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

  // 7. UPCOMING EVENTS: Hornbill Music Festival Campsite Spotlight State
  const [hornbillTent, setHornbillTent] = useState<'premium' | 'dome' | 'pitch'>('premium');
  const [hornbillPricingMode, setHornbillPricingMode] = useState<'perTent' | 'perPerson'>('perTent');

  const hornbillPackages = {
    premium: {
      id: 'premium',
      name: 'PREMIUM TENT',
      occupancy: '4 People',
      perTent: 4600,
      perPerson: 1400,
      badge: 'OFFER TILL 31 OCT 2026',
      tagline: 'Spacious weatherproof cabin tent with extra headroom & comfort',
      features: ['Comfy Beds', 'Power Access', 'Good Ventilation'],
      includesBreakfast: true,
      image: '/images/events/premium-tent.jpg'
    },
    dome: {
      id: 'dome',
      name: 'DOME TENT',
      occupancy: '2 People',
      perTent: 2600,
      perPerson: 1300,
      badge: 'OFFER TILL 31 OCT 2026',
      tagline: 'Cozy waterproof dome tent pitched on scenic hilltop clearing',
      features: ['Comfortable Stay', 'Nature View', 'Campfire Zone'],
      includesBreakfast: true,
      image: '/images/events/dome-tent.jpg'
    },
    pitch: {
      id: 'pitch',
      name: 'PITCH YOUR OWN TENT',
      occupancy: 'BYO Camper',
      perTent: 999,
      perPerson: 999,
      badge: 'BYO GEAR SPECIAL',
      tagline: 'Pitch your own tent with full access to washrooms, charging & food court',
      features: ['Washrooms', 'Charging Points', 'Food Court'],
      includesBreakfast: false,
      image: '/images/events/pitch-tent.jpg'
    }
  };

  const handleBookHornbillSlot = () => {
    const pkg = hornbillPackages[hornbillTent];
    const cost = hornbillTent === 'pitch' 
      ? pkg.perPerson 
      : (hornbillPricingMode === 'perTent' ? pkg.perTent : pkg.perPerson);
    
    openBooking({
      type: 'event',
      id: `hornbill-campsite-${hornbillTent}`,
      title: `The Hornbill Music Festival 2026 — Wiktrip Campsite (${pkg.name} - ${hornbillPricingMode === 'perTent' && hornbillTent !== 'pitch' ? 'Per Tent/Day' : 'Per Person/Day'})`,
      location: 'Wiktrip Campsite, 1.2 km from Festival Ground, Kisama Heritage Village, Kohima, Nagaland',
      price: cost
    });
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
          SECTION 2: UPCOMING EVENTS & HORNBILL CAMPSITE SPOTLIGHT (OFFICIAL CAMPSITE SETTING)
          Designed matching the official Wiktrip Hornbill Festival Campsite poster
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#556B2F]/15 border border-[#556B2F]/30 text-xs font-bold uppercase tracking-wider text-[#556B2F] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Upcoming Events & Official Festival Stays</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C]">
              Where Travel Meets Experience
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
              Immerse yourself in India's most exhilarating cultural celebrations and music gatherings with verified on-ground camping, local food courts, and safe accommodations.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('events')}
            className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
          >
            <span>View All Gatherings ({EVENTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* =========================================================================
            FEATURED COMPONENT: EXACT MOCKUP IMPLEMENTATION
            Top Banner + Lower Accommodation Options with AI Images
            ========================================================================= */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-300/80 mb-16">
          {/* 1. TOP CINEMATIC BANNER */}
          <div className="relative min-h-[460px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 text-white overflow-hidden">
            {/* AI Generated Hornbill Campsite & Festival Stage Backdrop */}
            <div className="absolute inset-0 z-0">
              <SafeImage
                src="/images/events/hornbill-festival-banner.jpg"
                alt="The Hornbill Music Festival 2026 Wiktrip Campsite"
                className="w-full h-full object-cover scale-105 filter brightness-[0.82] contrast-105"
              />
              {/* Measured dark gradient scrim matching the mockup */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>

            {/* Banner Top Row */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 bg-[#485B29] text-white text-[11px] font-black rounded-full tracking-wider uppercase shadow-md">
                  WIKTRIP CAMPSITE
                </span>
                <span className="text-xs text-neutral-300 tracking-widest font-bold uppercase">
                  CAMP • EXPLORE • EXPERIENCE
                </span>
              </div>

              {/* Hand-drawn organic stamp badge */}
              <div className="bg-[#2D3F1B]/90 border border-[#556B2F] px-4 py-3 rounded-2xl backdrop-blur-md shadow-xl text-center flex flex-col items-center">
                <Tent className="w-4 h-4 text-amber-400 mb-0.5" />
                <div className="font-display font-black text-xs text-white uppercase tracking-wider">
                  LAST YEAR WAS EPIC!
                </div>
                <div className="text-[11px] text-amber-200 font-medium">
                  Welcome Back Again! ♡
                </div>
              </div>
            </div>

            {/* Banner Middle Content */}
            <div className="relative z-10 my-6 max-w-2xl">
              <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] uppercase">
                THE HORNBILL
                <span className="block text-[#FBBF24] tracking-tight">MUSIC FESTIVAL 2026</span>
              </h3>

              <p className="font-serif italic text-amber-300 text-sm sm:text-base mt-2">
                “Same Vibes. Bigger Stage. Better Stays.”
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-5 text-xs sm:text-sm text-neutral-200">
                {/* Date Chip */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-lg bg-[#F97316] text-white flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">1 December –</div>
                    <div className="text-neutral-300">10 December 2026</div>
                  </div>
                </div>

                {/* Location Chip */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-lg bg-[#F97316] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Kohima, Nagaland</div>
                    <div className="text-[11px] text-neutral-300">1.2 km from Festival Ground, Kisama Heritage Village</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => {
                    const el = document.getElementById('hornbill-stays');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-full transition-all duration-200 shadow-xl shadow-orange-500/30 flex items-center gap-2 group cursor-pointer inline-flex"
                >
                  <span>EXPLORE STAYS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Banner Bottom Row: 4 Circular Feature Badges */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <Music className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                  LIVE MUSIC
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <Tent className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                  PREMIUM CAMPING
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <Mountain className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                  NATURE EXPERIENCE
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                  CULTURE & COMMUNITY
                </span>
              </div>
            </div>

            {/* Organic Torn Paper Edge Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden leading-none z-20 pointer-events-none">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-[#F4F5F0] fill-current">
                <path d="M0,0 L40,15 L80,5 L130,22 L180,8 L230,25 L280,12 L340,28 L390,10 L440,24 L500,12 L560,26 L620,10 L680,24 L740,10 L800,26 L860,12 L920,24 L980,10 L1040,26 L1100,12 L1160,22 L1200,8 L1200,120 L0,120 Z"></path>
              </svg>
            </div>
          </div>

          {/* 2. LOWER SECTION: ACCOMMODATION OPTIONS (EXACT MOCKUP) */}
          <div id="hornbill-stays" className="bg-[#F4F5F0] p-6 sm:p-10 lg:p-12 relative text-[#0B0D0C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Heading & Trust Badges */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F] block">
                    SELECT YOUR STAY STYLE
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-black text-[#0B0D0C] mt-1 leading-tight">
                    Wiktrip Campsite Accommodation Options
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                    Stay close to the action with comfortable and eco-friendly accommodation options designed for festival lovers.
                  </p>
                </div>

                {/* 3 Circular Trust Badges matching the image */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#556B2F] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#0B0D0C]">
                      Safe & Secure Campsite
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#556B2F] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#0B0D0C]">
                      Clean & Hygienic Facilities
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#556B2F] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#0B0D0C]">
                      Walking Distance to Festival
                    </span>
                  </div>
                </div>

                {/* Pricing unit switch */}
                <div className="p-3 bg-white rounded-2xl border border-neutral-200 space-y-2">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                    Pricing Rate Display
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#EBECE7] rounded-xl text-xs">
                    <button
                      onClick={() => setHornbillPricingMode('perTent')}
                      className={`py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                        hornbillPricingMode === 'perTent'
                          ? 'bg-[#0B0D0C] text-white shadow-sm'
                          : 'text-neutral-600 hover:text-black'
                      }`}
                    >
                      Per Tent
                    </button>
                    <button
                      onClick={() => setHornbillPricingMode('perPerson')}
                      className={`py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                        hornbillPricingMode === 'perPerson'
                          ? 'bg-[#0B0D0C] text-white shadow-sm'
                          : 'text-neutral-600 hover:text-black'
                      }`}
                    >
                      Per Person
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Columns: 3 Cards Grid (PREMIUM, DOME, PITCH) */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1: PREMIUM TENT */}
                <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Image with AI Photo + Badges */}
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                      <SafeImage
                        src={hornbillPackages.premium.image}
                        alt="Premium Tent"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#F97316] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                          OFFER TILL 31 OCT 2026
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>4 People</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h5 className="font-display font-black text-lg text-[#0B0D0C]">
                        PREMIUM TENT
                      </h5>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Spacious weatherproof cabin tent with extra headroom & comfort
                      </p>

                      {/* 3 Features with Icons matching image */}
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-neutral-100 text-center">
                        <div className="flex flex-col items-center">
                          <Tent className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Comfy Beds</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Zap className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Power Access</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Sparkles className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Good Ventilation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase text-neutral-500 block">
                        {hornbillPricingMode === 'perTent' ? '₹4,600 /Tent/Day' : '₹1,400 /Person/Day'} (Inc. Breakfast)
                      </span>
                      <span className="font-display text-2xl font-black text-[#F97316]">
                        ₹{formatINR(hornbillPricingMode === 'perTent' ? 4600 : 1400)}
                      </span>
                      <span className="text-xs text-neutral-500 ml-1">
                        {hornbillPricingMode === 'perTent' ? '/day' : '/person/day'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setHornbillTent('premium');
                        handleBookHornbillSlot();
                      }}
                      className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* CARD 2: DOME TENT */}
                <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Image with AI Photo + Badges */}
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                      <SafeImage
                        src={hornbillPackages.dome.image}
                        alt="Dome Tent"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#F97316] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                          OFFER TILL 31 OCT 2026
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>2 People</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h5 className="font-display font-black text-lg text-[#0B0D0C]">
                        DOME TENT
                      </h5>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Cozy waterproof dome tent pitched on scenic hilltop clearing
                      </p>

                      {/* 3 Features with Icons matching image */}
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-neutral-100 text-center">
                        <div className="flex flex-col items-center">
                          <Tent className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Comfortable Stay</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Mountain className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Nature View</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Flame className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Campfire Zone</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase text-neutral-500 block">
                        {hornbillPricingMode === 'perTent' ? '₹2,600 /Tent/Day' : '₹1,300 /Person/Day'} (Inc. Breakfast)
                      </span>
                      <span className="font-display text-2xl font-black text-[#F97316]">
                        ₹{formatINR(hornbillPricingMode === 'perTent' ? 2600 : 1300)}
                      </span>
                      <span className="text-xs text-neutral-500 ml-1">
                        {hornbillPricingMode === 'perTent' ? '/day' : '/person/day'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setHornbillTent('dome');
                        handleBookHornbillSlot();
                      }}
                      className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* CARD 3: PITCH YOUR OWN TENT */}
                <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Image with AI Photo + Badges */}
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                      <SafeImage
                        src={hornbillPackages.pitch.image}
                        alt="Pitch Your Own Tent"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#059669] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                          BYO GEAR SPECIAL
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>BYO Camper</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h5 className="font-display font-black text-lg text-[#0B0D0C]">
                        PITCH YOUR OWN TENT
                      </h5>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Pitch your own tent with full access to washrooms, charging & food court
                      </p>

                      {/* 3 Features with Icons matching image */}
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-neutral-100 text-center">
                        <div className="flex flex-col items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Washrooms</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Zap className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Charging Points</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Utensils className="w-4 h-4 text-[#556B2F]" />
                          <span className="text-[10px] font-bold text-neutral-700 mt-1">Food Court</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase text-neutral-500 block">
                        Campground Slot
                      </span>
                      <span className="font-display text-2xl font-black text-[#F97316]">
                        ₹999
                      </span>
                      <span className="text-xs text-neutral-500 ml-1">/Person/Day</span>
                    </div>

                    <button
                      onClick={() => {
                        setHornbillTent('pitch');
                        handleBookHornbillSlot();
                      }}
                      className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Contact & WhatsApp Bar */}
            <div className="mt-10 p-4 bg-white rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#556B2F]/15 text-[#556B2F] flex items-center justify-center shrink-0">
                  <Tent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B0D0C]">Wiktrip Campsite • Limited Slots Available!</div>
                  <div className="text-[11px] text-neutral-500">Early bird pricing valid till 31 October 2026. Includes 24/7 security & on-demand transfers.</div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/919711720218?text=${encodeURIComponent(
                    'Hello Wiktrip, I want to book/enquire about Hornbill Music Festival 2026 campsite stays at Kisama Heritage Village, Kohima.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: 9711720218</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* More Upcoming Music & Adventure Gatherings */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
                More Upcoming Gatherings
              </span>
              <h3 className="font-display text-2xl font-black text-[#0B0D0C] mt-0.5">
                Explore Other Festivals Across India
              </h3>
            </div>
            <button
              onClick={() => setCurrentPage('events')}
              className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
            >
              <span>See All Events</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.filter((e) => e.id !== 'event-hornbill').slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    <SafeImage
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#F97316] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        {event.location}
                      </span>
                      <span className="text-neutral-200">{event.date}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-display text-base font-bold text-[#0B0D0C] line-clamp-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1 line-clamp-2">{event.description}</p>
                    <div className="mt-3 text-[11px] text-[#556B2F] font-semibold">
                      Camping: {event.campingOptions?.map((c) => c.type).join(' · ') || 'Dome Tent / Premium Tent'}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#556B2F] block uppercase tracking-wider">
                        Wiktrip Campsite
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[#0B0D0C]">
                        Tent Pitching & Stays
                      </span>
                    </div>
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
                      className="px-3.5 py-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Enquire Campsite
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
          SECTION 4: EXPLORE BY CATEGORY
          ========================================================================= */}
      <section className="py-20 bg-[#F3F4F0] border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Ecosystem Navigation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Explore By Category
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Discover verified stays, tours, treks, adventures, events, equipment and learning modules through one platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Hotels & Resorts',
                sub: 'Sanctuaries & Chalets',
                icon: Building,
                action: () => setCurrentPage('hotels')
              },
              {
                title: 'Tour Packages',
                sub: 'Holidays & Honeymoons',
                icon: Compass,
                action: () => setCurrentPage('tours')
              },
              {
                title: 'Trekking & Camping',
                sub: 'High Passes & Glamping',
                icon: Mountain,
                action: () => setCurrentPage('trekking')
              },
              {
                title: 'Adventure Setup',
                sub: 'Build Parks & Attractions',
                icon: Flame,
                action: () => setCurrentPage('adventure')
              },
              {
                title: 'Events & Festivals',
                sub: 'Music & Cultural Fests',
                icon: Music,
                action: () => setCurrentPage('events')
              },
              {
                title: 'Rent a Cab',
                sub: '5 & 7-Seater Mountain Fleet',
                icon: Car,
                action: () => setCurrentPage('rentals')
              },
              {
                title: 'Wiktrip Store',
                sub: 'Tents & Sleeping Bags',
                icon: ShoppingBag,
                action: () => setCurrentPage('store')
              },
              {
                title: 'Wiktrip Learning',
                sub: 'Outdoor Safety & Skills',
                icon: BookOpen,
                action: () => setCurrentPage('learning')
              },
              {
                title: 'Travel Gallery',
                sub: 'Visual Chronicles',
                icon: Layers,
                action: () => setCurrentPage('gallery')
              },
              {
                title: 'Travel Magazine',
                sub: 'ILP & Mountain Guides',
                icon: Navigation,
                action: () => setCurrentPage('blogs')
              }
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  onClick={cat.action}
                  className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-[#556B2F] hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#556B2F]/10 group-hover:bg-[#556B2F] text-[#556B2F] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{cat.sub}</p>
                  </div>
                </div>
              );
            })}
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
          SECTION 8: PERMANENT ADVENTURE
          ========================================================================= */}
      <section className="py-20 bg-[#161917] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
                Engineered Adrenaline Setups
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-1">
                Adventure Starts Here
              </h2>
              <p className="text-sm text-neutral-300 mt-2 max-w-2xl">
                Tyre Climbing Wall, Rope Courses, Zipline, Rocket Ejector, Artificial Rappelling Wall, and Artificial Wall Climbing with verified safety standards.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('adventure')}
              className="text-sm font-bold text-[#F97316] hover:text-white flex items-center gap-1 group cursor-pointer"
            >
              <span>Explore All Activities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVENTURE_ACTIVITIES_DATA.slice(0, 3).map((act) => (
              <div
                key={act.id}
                className="bg-[#1F2321] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col group shadow-lg"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <SafeImage
                    src={act.image}
                    alt={act.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556B2F] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                      {act.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                      {act.location}
                    </span>
                    <span className="text-neutral-300">{act.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F97316] transition-colors">
                      {act.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{act.description}</p>
                    <div className="mt-3 text-[11px] text-[#556B2F] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{act.safetyInfo?.[0] || 'Certified Safe Setup'}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase">Activity Fee</span>
                      <span className="font-display text-xl font-black text-white">
                        ₹{formatINR(act.price)}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'adventure',
                          id: act.id,
                          title: act.name,
                          location: act.location,
                          price: act.price
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Enquire Activity
                    </button>
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
                className="px-5 py-3.5 bg-[#1F2321] hover:bg-[#2A302D] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
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
                className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/15 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TREKKING & CAMPING
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Wild Trails & High Altitudes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Enter the Wild
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
              Step away from ordinary travel and discover trails, mountains, forests and remote landscapes through trekking and camping experiences.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('trekking')}
            className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 group cursor-pointer"
          >
            <span>Explore Treks & Camps</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREK_CAMPS_DATA.slice(0, 3).map((trek) => (
            <div
              key={trek.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full">
                <SafeImage src={trek.image} alt={trek.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {trek.type} · {trek.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                    Alt: {trek.altitude}
                  </span>
                  <span className="bg-emerald-600/90 text-white font-bold px-2 py-1 rounded backdrop-blur-sm">
                    {trek.duration}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C]">{trek.title}</h3>
                  <p className="text-xs text-neutral-500 mt-2 line-clamp-2">{trek.overview}</p>
                  <div className="mt-3 text-xs text-[#556B2F] font-semibold">
                    Best Season: {trek.bestSeason}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase">Expedition Fee</span>
                    <span className="font-display text-xl font-black text-[#0B0D0C]">
                      ₹{formatINR(trek.price)}
                    </span>
                  </div>
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
                    className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Enquire Trek
                  </button>
                </div>
              </div>
            </div>
          ))}
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
