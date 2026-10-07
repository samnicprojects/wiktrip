import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { PageView } from '../types';
import {
  Compass,
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Mountain,
  Tent,
  BookOpen,
  Car,
  Briefcase,
  Users,
  PhoneCall,
  Building2,
  Image,
  FileText,
  Info,
  Handshake,
  Home,
  Sparkles
} from 'lucide-react';

interface MenuItem {
  id: PageView;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'hotels', label: 'Hotels & Resorts', icon: Building2 },
  { id: 'tours', label: 'Tour Packages', icon: MapPin, tag: 'Popular' },
  { id: 'events', label: 'Events & Festivals', icon: Calendar },
  { id: 'adventure', label: 'Adventure Setup', icon: Mountain },
  { id: 'trekking', label: 'Trekking & Camping', icon: Tent },
  { id: 'store', label: 'Wiktrip Gear Store', icon: ShoppingBag },
  { id: 'learning', label: 'Wiktrip Learning', icon: BookOpen },
  { id: 'rentals', label: 'Rentals & Cabs', icon: Car },
  { id: 'gallery', label: 'Travel Gallery', icon: Image },
  { id: 'blogs', label: 'Blogs & Magazine', icon: FileText },
  { id: 'testimonials', label: 'Traveler Stories', icon: Users },
  { id: 'about', label: 'About Us', icon: Info },
  { id: 'partners', label: 'Partner With Us', icon: Handshake },
  { id: 'career', label: 'Careers', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: PhoneCall },
];

export const Navbar: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    setIsSearchOpen,
    cartCount,
    setIsCartOpen,
    wishlistIds,
    setIsWishlistOpen,
    openBooking
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const navScrollRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    if (navScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navScrollRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll active item into center view when currentPage changes
  useEffect(() => {
    if (navScrollRef.current) {
      const activeEl = navScrollRef.current.querySelector<HTMLElement>(
        `[data-nav-id="${currentPage}"]`
      );
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
    // Update scroll buttons after smooth scroll has finished
    const timer = setTimeout(updateScrollButtons, 350);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (navScrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      navScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (navScrollRef.current && Math.abs(e.deltaY) > 0) {
      navScrollRef.current.scrollLeft += e.deltaY;
      updateScrollButtons();
    }
  };

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleBookNowClick = () => {
    openBooking({
      type: 'tour',
      id: 'tour-1',
      title: 'Spiti Valley High-Altitude Overland Circuit',
      location: 'Spiti Valley, Himachal',
      price: 24999
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D0C]/95 backdrop-blur-md border-b border-white/10 shadow-2xl text-white'
            : 'bg-[#0B0D0C] border-b border-white/10 text-white'
        }`}
      >
        {/* TOP BAR: Logo on Left, Action Buttons / CTA on Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Top Bar Left: Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
                title="Wiktrip - Home"
              >
                <img
                  src="/wiktriplogo.png"
                  alt="Wiktrip"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </button>
            </div>

            {/* Top Bar Right: Action Buttons (Search, Wishlist, Cart, Account) + Enquire Now CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium border border-transparent hover:border-white/10"
                title="Search destinations, stays & gear"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-neutral-300" />
                <span className="hidden md:inline text-xs text-neutral-300">Search</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10"
                title="Saved Wishlist"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistIds.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#F97316] text-[10px] font-bold text-white rounded-full flex items-center justify-center shadow-sm">
                    {wishlistIds.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10"
                title="Wiktrip Store Cart"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#556B2F] text-[10px] font-bold text-white rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>


              {/* Primary Enquire Now CTA Button */}
              <button
                onClick={handleBookNowClick}
                className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-orange-500/25 transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ml-1"
              >
                <span>Enquire Now</span>
                <Sparkles className="w-3.5 h-3.5 hidden sm:inline opacity-90" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors md:hidden ml-1"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* SECOND BAR: Modern Sliding Menu Bar (All Menus Directly Displayed, No Submenu) */}
        <div className="relative border-t border-white/10 bg-[#0E1110]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center">
            {/* Left Scroll Chevron Button */}
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              disabled={!canScrollLeft}
              className={`hidden md:flex absolute left-2 z-20 items-center justify-center w-8 h-8 rounded-full bg-[#1A1F1C]/90 text-white border border-white/15 shadow-md backdrop-blur-md transition-all duration-200 ${
                canScrollLeft
                  ? 'opacity-100 hover:bg-[#252C28] hover:scale-105 cursor-pointer'
                  : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll menu left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Left Edge Fade Gradient */}
            <div
              className={`hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0E1110] to-transparent pointer-events-none z-10 transition-opacity duration-200 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Scrollable Horizontal Track */}
            <nav
              ref={navScrollRef}
              onScroll={updateScrollButtons}
              onWheel={handleWheel}
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2.5 px-3 sm:px-4 no-scrollbar scroll-smooth w-full"
            >
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    data-nav-id={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 group ${
                      isActive
                        ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20 font-semibold'
                        : 'text-neutral-300 hover:text-white hover:bg-white/10 active:bg-white/15'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-neutral-400 group-hover:text-[#F97316] group-hover:scale-110'
                      }`}
                    />
                    <span>{item.label}</span>
                    {item.tag && (
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-[#556B2F]/40 text-[#A3E635] border border-[#556B2F]/50'
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Edge Fade Gradient */}
            <div
              className={`hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0E1110] to-transparent pointer-events-none z-10 transition-opacity duration-200 ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Right Scroll Chevron Button */}
            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              disabled={!canScrollRight}
              className={`hidden md:flex absolute right-2 z-20 items-center justify-center w-8 h-8 rounded-full bg-[#1A1F1C]/90 text-white border border-white/15 shadow-md backdrop-blur-md transition-all duration-200 ${
                canScrollRight
                  ? 'opacity-100 hover:bg-[#252C28] hover:scale-105 cursor-pointer'
                  : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll menu right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (No Submenu, Direct Clean Navigation) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative ml-auto w-full max-w-xs bg-[#0B0D0C] text-white h-full shadow-2xl flex flex-col overflow-y-auto p-6 border-l border-white/10 z-10">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 text-left focus:outline-none cursor-pointer"
              >
                <img
                  src="/wiktriplogo.png"
                  alt="Wiktrip"
                  className="h-9 w-auto object-contain"
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Flat Direct Menu (No Submenu) */}
            <div className="py-4 space-y-1">
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F97316] text-white font-semibold shadow-md'
                        : 'text-neutral-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.tag && (
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#556B2F]/30 text-[#A3E635]'
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="mt-auto pt-5 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  handleBookNowClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-orange-500/25 transition-all"
              >
                Plan Your Trip / Enquire
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
