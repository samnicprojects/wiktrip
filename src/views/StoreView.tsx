import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { STORE_PRODUCTS_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  ShoppingBag,
  Star,
  Check,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

export const StoreView: React.FC = () => {
  const { openDetail, addToCart, setIsCartOpen } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'bestseller' | 'priceAsc' | 'priceDesc'>('featured');

  const categories = [
    'All',
    'Tents',
    'Sleeping Equipment',
    'Camping Lighting',
    'Outdoor Gear',
    'Travel Accessories',
    'Wiktrip Merchandise'
  ];

  const filteredProducts = useMemo(() => {
    return STORE_PRODUCTS_DATA.filter((p) => {
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleBuyNow = (product: any) => {
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Outdoor Equipment & Gear
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Gear Up for the Journey
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Travel better with practical outdoor and camping equipment selected for your adventures.
          </p>
        </div>

        {/* Value Props Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#556B2F] shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0B0D0C]">Himalayan Field Guarantee</div>
              <div className="text-[11px] text-neutral-500">2-Year manufacturer warranty on all technical packs</div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <Truck className="w-6 h-6 text-[#556B2F] shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0B0D0C]">Expedition Delivery</div>
              <div className="text-[11px] text-neutral-500">Free delivery across India within 3-5 days</div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <RotateCcw className="w-6 h-6 text-[#556B2F] shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0B0D0C]">Trial & Fit Exchange</div>
              <div className="text-[11px] text-neutral-500">14-day hassle-free replacement on boots & layers</div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#556B2F] text-white shadow-sm'
                    : 'bg-[#F3F4F0] text-neutral-600 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-[#F3F4F0] px-3 py-1.5 rounded-lg w-full sm:w-60">
              <Search className="w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search gear..."
                className="bg-transparent text-xs w-full focus:outline-none"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F3F4F0] text-xs px-3 py-2 rounded-lg focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="bestseller">Best Sellers</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div
                className="relative h-64 w-full overflow-hidden bg-neutral-100 cursor-pointer"
                onClick={() => openDetail('product', prod)}
              >
                <SafeImage
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {prod.category}
                  </span>
                  {prod.isBestSeller && (
                    <span className="bg-[#F97316] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Best Seller
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-4 bg-amber-400 text-black font-bold text-xs px-2 py-0.5 rounded flex items-center gap-1 shadow">
                  <Star className="w-3 h-3 fill-black" />
                  {prod.rating} ({prod.reviewCount})
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => openDetail('product', prod)}
                    className="font-display text-base font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-1 cursor-pointer"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {prod.specs && (
                    <div className="mt-3 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2 text-[11px] text-neutral-500">
                      {Object.entries(prod.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="line-clamp-1">
                          <span className="font-semibold text-neutral-700">{k}:</span> {String(v)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xl font-black text-[#0B0D0C]">
                        ₹{formatINR(prod.price)}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs text-neutral-400 line-through">
                          ₹{formatINR(prod.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(prod, 1)}
                      className="p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleBuyNow(prod)}
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Enquire Gear
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
