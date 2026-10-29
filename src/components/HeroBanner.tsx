import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface BannerItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  linkAction?: () => void;
}

export const HeroBanner: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  const handleJumpToLandingPage = () => {
    setCurrentPage('events');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pure banner images uploaded in public/ (no text overlays)
  const publicBanners: BannerItem[] = [
    {
      id: 'banner-hornbill-official',
      src: '/banner.png',
      alt: 'The Hornbill Music Festival 2026 - Wiktrip Campsite Official Stay Partner',
      title: 'The Hornbill Music Festival 2026',
      linkAction: handleJumpToLandingPage
    },
    {
      id: 'banner-hornbill-campsite',
      src: '/banner2.png',
      alt: 'The Hornbill Music Festival 2026 - Explore Wiktrip Campsite',
      title: 'Explore Wiktrip Campsite 2026',
      linkAction: handleJumpToLandingPage
    }
  ];

  useEffect(() => {
    if (isSliderPaused || publicBanners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % publicBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isSliderPaused, publicBanners.length]);

  const nextHeroSlide = () => {
    if (publicBanners.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % publicBanners.length);
  };

  const prevHeroSlide = () => {
    if (publicBanners.length <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + publicBanners.length) % publicBanners.length);
  };

  const currentBanner = publicBanners[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsSliderPaused(true)}
      onMouseLeave={() => setIsSliderPaused(false)}
      className="w-full bg-[#0B0D0C] text-white"
    >
      {/* Edge-to-Edge Full-Width Panoramic Banner */}
      <div
        onClick={handleJumpToLandingPage}
        className="relative w-full overflow-hidden bg-neutral-950 cursor-pointer group select-none"
      >
        <SafeImage
          src={currentBanner.src}
          alt={currentBanner.alt}
          className="w-full h-auto object-cover block"
        />

        {/* Floating "Book Stay Here" Button with Guide Avatar */}
        <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 lg:right-10 z-30">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleJumpToLandingPage();
            }}
            className="inline-flex items-center gap-2 sm:gap-3.5 pl-1.5 sm:pl-2.5 pr-3 sm:pr-5 py-1.5 sm:py-2.5 bg-gradient-to-r from-[#F97316] via-[#EA580C] to-[#C2410C] hover:from-[#EA580C] hover:to-[#9A3412] text-white rounded-full shadow-[0_10px_30px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_35px_rgba(249,115,22,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/60 cursor-pointer group/btn backdrop-blur-md"
            aria-label="Book Stay Here - Hornbill Festival Campsite"
          >
            {/* Guide Avatar with animated radar ping */}
            <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white shrink-0 shadow-md bg-neutral-900">
              <SafeImage
                src="/images/avatar/guide-avatar.jpg"
                alt="Wiktrip Adventure Guide"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#25D366] animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#25D366] border border-white" />
            </div>

            {/* Label Stack */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xs sm:text-base tracking-wide uppercase text-white drop-shadow-sm">
                  Book Stay Here
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/20 text-white uppercase tracking-wider">
                  Festival Campsite
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-amber-100 font-semibold leading-tight drop-shadow">
                Hornbill 2026 Stays · Tent Pitching
              </span>
            </div>

            {/* Arrow Icon */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/25 flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 group-hover/btn:bg-white text-white group-hover/btn:text-[#EA580C] transition-all duration-300 shadow-sm">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* Carousel arrows */}
        {publicBanners.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevHeroSlide();
              }}
              aria-label="Previous Banner"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#F97316] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextHeroSlide();
              }}
              aria-label="Next Banner"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#F97316] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 flex items-center gap-2 z-20">
              {publicBanners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(idx);
                  }}
                  className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide ? 'w-6 sm:w-8 bg-[#F97316]' : 'w-2 sm:w-2.5 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
