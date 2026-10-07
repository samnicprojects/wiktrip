import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS_DATA } from '../data/mockData';
import { SafeImage } from '../components/SafeImage';
import { Clock, Calendar, User, ArrowRight, Share2, Sparkles } from 'lucide-react';

export const BlogsView: React.FC = () => {
  const { openDetail } = useApp();
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = [
    'All',
    'Travel Guides',
    'Adventure',
    'Trekking',
    'Camping',
    'Destinations',
    'Travel Tips',
    'Culture',
    'Safety',
    'Events',
    'Responsible Travel'
  ];

  const featuredPost = BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0];
  const remainingPosts = BLOG_POSTS_DATA.filter((p) => p.id !== featuredPost.id);

  const filteredPosts =
    selectedTag === 'All'
      ? remainingPosts
      : remainingPosts.filter(
          (p) => p.category === selectedTag || p.tags.includes(selectedTag)
        );

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Field Dispatches & Travel Lore
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Stories, Guides & Inspiration
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Inner Line Permits (ILP), mountain travel guides, city sightseeing, high-altitude protocols, and responsible outdoor practices.
          </p>
        </div>

        {/* Featured Big Article Card */}
        {featuredPost && (
          <div
            onClick={() => openDetail('blog', featuredPost)}
            className="group relative bg-[#0B0D0C] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <SafeImage
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#F97316] text-white text-[11px] font-bold rounded">
                    Featured Dispatch
                  </span>
                  <span className="text-xs text-neutral-400">· {featuredPost.readTime}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-black leading-tight text-white group-hover:text-[#F97316] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 mt-4 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                    <SafeImage src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                    <div className="text-[11px] text-neutral-400">{featuredPost.date}</div>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#F97316] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#0B0D0C] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => openDetail('blog', post)}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-neutral-400 flex items-center gap-2 mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                      <SafeImage src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-neutral-700 font-medium">{post.author.name}</span>
                  </div>

                  <span className="text-[#F97316] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
