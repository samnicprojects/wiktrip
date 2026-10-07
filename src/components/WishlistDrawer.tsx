import React from 'react';
import { useApp } from '../context/AppContext';
import { HOTELS_DATA, TOUR_PACKAGES_DATA, TREK_CAMPS_DATA, ADVENTURE_ACTIVITIES_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from './SafeImage';
import { X, Heart, ArrowRight, Trash2, MapPin } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistIds,
    toggleWishlist,
    openDetail,
    openBooking,
    setCurrentPage
  } = useApp();

  if (!isWishlistOpen) return null;

  // Retrieve wishlist items
  const allSaved = [
    ...HOTELS_DATA.map(h => ({ ...h, savedType: 'hotel', priceFormatted: `₹${formatINR(h.pricePerNight)}/night` })),
    ...TOUR_PACKAGES_DATA.map(t => ({ ...t, savedType: 'tour', priceFormatted: `₹${formatINR(t.price)}` })),
    ...TREK_CAMPS_DATA.map(tc => ({ ...tc, savedType: 'trek', priceFormatted: `₹${formatINR(tc.price)}` })),
    ...ADVENTURE_ACTIVITIES_DATA.map(a => ({ ...a, savedType: 'adventure', priceFormatted: `₹${formatINR(a.price)}` }))
  ].filter(item => wishlistIds.includes(item.id));

  const handleItemClick = (item: any) => {
    setIsWishlistOpen(false);
    if (item.savedType === 'hotel') {
      setCurrentPage('hotels');
      openDetail('hotel', item);
    } else if (item.savedType === 'tour') {
      setCurrentPage('tours');
      openDetail('tour', item);
    } else if (item.savedType === 'trek') {
      setCurrentPage('trekking');
      openDetail('trek', item);
    } else if (item.savedType === 'adventure') {
      setCurrentPage('adventure');
      openDetail('adventure', item);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#161917] border-l border-white/10 h-full flex flex-col shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#242625]/60">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#F97316] fill-[#F97316]" />
            <h2 className="font-display text-lg font-bold">Saved Wishlist</h2>
            <span className="text-xs text-neutral-400">({allSaved.length})</span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {allSaved.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400">
              <Heart className="w-12 h-12 text-neutral-600 mb-3" />
              <p className="text-base font-semibold text-white">No saved experiences yet</p>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                Click the heart icon on any resort, trek, or tour package to save it to your wishlist.
              </p>
            </div>
          ) : (
            allSaved.map((item: any) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 p-3 bg-[#242625] rounded-xl border border-white/5 hover:border-white/20 transition-colors"
              >
                <div
                  className="w-16 h-16 rounded-lg overflow-hidden shrink-0 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <SafeImage
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="text-[11px] text-[#556B2F] font-semibold uppercase">
                    {item.savedType}
                  </div>
                  <h4 className="text-sm font-medium text-white truncate group-hover:text-[#F97316] transition-colors">
                    {item.title || item.name}
                  </h4>
                  <div className="text-xs font-bold text-neutral-300 mt-0.5">
                    {item.priceFormatted}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="text-neutral-500 hover:text-rose-400 p-1 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      openBooking({
                        type: item.savedType,
                        id: item.id,
                        title: item.title || item.name,
                        location: item.location || 'India',
                        price: item.price || item.pricePerNight
                      });
                    }}
                    className="px-2.5 py-1 bg-[#F97316] text-white text-[11px] font-semibold rounded hover:bg-[#EA580C] transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
