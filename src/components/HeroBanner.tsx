import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BannerItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  linkAction?: () => void;
}

export const HeroBanner: React.FC = () => {
  const { openBooking } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  // Pure banner images uploaded in public/ (no text overlays)
  const publicBanners: BannerItem[] = [
    {
      id: 'banner-hornbill-official',
      src: '/banner.png',
      alt: 'The Hornbill Music Festival 2026 - Wiktrip Campsite Official Stay Partner',
      title: 'The Hornbill Music Festival 2026',
      linkAction: () => {
        const el = document.getElementById('hornbill-stays');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          openBooking({
            type: 'event',
            id: 'event-hornbill',
            title: 'The Hornbill Music Festival 2026 Wiktrip Campsite',
            location: 'Kohima, Nagaland',
            price: 999
          });
        }
      }
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
        onClick={() => {
          const el = document.getElementById('hornbill-stays');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else currentBanner?.linkAction?.();
        }}
        className="relative w-full overflow-hidden bg-neutral-950 cursor-pointer group"
      >
        <SafeImage
          src={currentBanner.src}
          alt={currentBanner.alt}
          className="w-full h-auto object-cover block"
        />

        {/* If more banners are added in future */}
        {publicBanners.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevHeroSlide();
              }}
              aria-label="Previous Banner"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#F97316] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextHeroSlide();
              }}
              aria-label="Next Banner"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#F97316] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {publicBanners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide ? 'w-8 bg-[#F97316]' : 'w-2.5 bg-white/60 hover:bg-white'
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
