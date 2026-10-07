import React from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from '../components/SafeImage';
import { STATS_DATA, TRUST_FEATURES } from '../data/mockData';
import {
  Compass,
  Mountain,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setCurrentPage } = useApp();

  const leadershipTeam = [
    {
      name: 'Dr. Tenzing Norbu',
      role: 'Chief Expedition Physician & Co-Founder',
      bio: 'High-altitude specialist with 18+ years acclimatization research in the Himalayas.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sunil Negi',
      role: 'Head of Outdoor Safety & Mountain Operations',
      bio: 'Ex-HMI instructor and veteran river expeditioner with 100+ high pass crossings.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Ananya Sharma',
      role: 'Curator of Boutique Stays & Hospitality',
      bio: 'Dedicated to discovering generational heritage homestays and zero-impact eco-retreats.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Story Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            About Wiktrip
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#0B0D0C] mt-2 leading-tight">
            Travel. Explore. Live.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 mt-6 leading-relaxed">
            Wiktrip is a comprehensive travel, tourism and adventure ecosystem connecting travelers with destinations, stays, tours, trekking, camping, adventure activities, events, rentals, travel products and learning resources.
          </p>
        </div>

        {/* Cinematic Visual Spread */}
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden border border-neutral-200 mb-16 shadow-lg">
          <SafeImage
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Wiktrip Mountain Ecosystem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#F97316]">
              Core Brand Idea
            </span>
            <h3 className="font-display text-2xl font-bold mt-1">Explore More. Experience More. Travel Better.</h3>
            <p className="text-xs text-neutral-300 mt-2">
              From comfortable stays to wild adventures, discover places and journeys that make your travel truly memorable.
            </p>
          </div>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#556B2F]/15 flex items-center justify-center text-[#556B2F]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0B0D0C]">Our Mission</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Help people explore the world, live actively and create meaningful experiences through travel, adventure and discovery.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#556B2F]/15 flex items-center justify-center text-[#556B2F]">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0B0D0C]">Our Vision</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Build a travel ecosystem where people can discover destinations, experiences, adventure, culture and community through one trusted platform.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-[#161917] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold text-[#F97316] tracking-wider">
              Guiding Principles
            </span>
            <h3 className="font-display text-3xl font-black text-white mt-1">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Exploration', desc: 'Pushing boundaries to discover the extraordinary in nature and culture.' },
              { title: 'Customer Experience', desc: 'Putting travelers first with warm, responsive, and reliable support.' },
              { title: 'Responsible Travel', desc: 'Protecting fragile natural ecosystems and respecting local communities.' },
              { title: 'Sustainability', desc: 'Promoting eco-friendly stays and low-impact outdoor adventures.' },
              { title: 'Community', desc: 'Fostering shared bonds between travelers, locals, and guides.' },
              { title: 'Innovation', desc: 'Pioneering better ways to plan, experience, and book trips.' },
              { title: 'Collaboration', desc: 'Working with verified local operators and trusted partners.' },
              { title: 'Continuous Improvement', desc: 'Constantly raising our standards of safety and service quality.' }
            ].map((val, idx) => (
              <div key={idx} className="p-4 bg-[#242625] rounded-2xl border border-white/5 space-y-1.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wiktroopers / Team Section */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Wiktrip Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D0C] mt-1">
              Meet the Wiktroopers
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-xl">
              The passionate outdoor leaders, travel consultants, and expedition curators behind your journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm p-6 space-y-4"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-neutral-200">
                  <SafeImage src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C]">{leader.name}</h3>
                  <p className="text-xs text-[#556B2F] font-semibold mt-0.5">{leader.role}</p>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#556B2F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-black">
              Ready to Explore Beyond the Ordinary?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 mt-2">
              Browse our tour packages, high mountain treks, or handpicked chalets.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('tours')}
            className="px-8 py-3.5 bg-[#0B0D0C] hover:bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl whitespace-nowrap cursor-pointer"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};
