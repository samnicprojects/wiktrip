import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import { SafeImage } from '../components/SafeImage';
import { ImageLightbox } from '../components/ImageLightbox';
import { Eye, MapPin, Camera } from 'lucide-react';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Destinations',
    'Hotels & Resorts',
    'Trekking',
    'Camping',
    'Adventure',
    'Events',
    'Music',
    'Travelers',
    'Nature',
    'Culture',
    'Experiences'
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Hotels & Resorts') return item.category === 'Hotels';
    return item.category === selectedCategory;
  });

  const allImages = filteredItems.map((item) => item.image);

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Visual Chronicles
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Moments Worth Remembering
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Captured moments through the journeys of travelers, guides and adventurers across destinations, stays, trails and festivals.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0B0D0C] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-200/60 shadow-sm"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-display text-base font-bold line-clamp-1">{item.title}</h3>
                <div className="flex items-center justify-between text-xs text-neutral-300 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    {item.location}
                  </span>
                  {item.photographer && (
                    <span className="flex items-center gap-1 text-neutral-400">
                      <Camera className="w-3 h-3" />
                      {item.photographer}
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="p-3 rounded-full bg-black/60 text-white backdrop-blur-sm">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <ImageLightbox
          isOpen={lightboxIndex !== null}
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % allImages.length)}
          onPrev={() =>
            setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length)
          }
          title={filteredItems[lightboxIndex]?.title}
          location={filteredItems[lightboxIndex]?.location}
        />
      )}
    </div>
  );
};
