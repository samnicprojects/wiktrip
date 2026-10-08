import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const PartnersView: React.FC = () => {
  const { showToast } = useApp();

  const [partnerType, setPartnerType] = useState('Hotels');
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [services, setServices] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !contactEmail || !contactPhone || !contactName) {
      showToast('Please fill out all required fields');
      return;
    }
    setSubmitted(true);
    showToast('Partnership proposal submitted! Our regional manager will review your details.');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0B0D0C] text-white rounded-3xl border border-white/10 p-8 sm:p-14 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
              Partner Ecosystem
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-black mt-2 leading-tight">
              Grow With Wiktrip
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Join the Wiktrip ecosystem and connect your travel experience or service with travelers looking for new places and experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#556B2F]" />
                <span>Verified Partner Network</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#556B2F]" />
                <span>Seamless Collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#556B2F]" />
                <span>Dedicated Ground Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#556B2F]/15 flex items-center justify-center text-[#556B2F]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0B0D0C]">High-Intent Travelers</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Attract quality explorers seeking premium outdoor experiences and authentic hospitality.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#556B2F]/15 flex items-center justify-center text-[#556B2F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0B0D0C]">Wiktrip Verified Standard</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Benefit from established brand trust. All listed partners adhere to authentic safety and hospitality standards.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#556B2F]/15 flex items-center justify-center text-[#556B2F]">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0B0D0C]">Pan-India Reach</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Feature in our curated journeys, seasonal adventure itineraries, and cross-category travel drops.
            </p>
          </div>
        </div>

        {/* Partner Registration Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Partner Enquiry Form
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0B0D0C] mt-1">
              Connect Your Service With Wiktrip
            </h2>
            <p className="text-xs text-neutral-500 mt-2">
              Share details about your property, experience, or fleet. Our team will review your application.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-display text-xl font-bold text-emerald-900">
                Enquiry Submitted!
              </h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Thank you for your interest in joining Wiktrip. Our partnerships desk will review your details and connect with <span className="font-semibold">{contactEmail}</span> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Contact person name"
                    required
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Company / Property name"
                    required
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+91 9711720218"
                    required
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@business.com"
                    required
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Business Type *
                  </label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  >
                    <option value="Hotels">Hotels</option>
                    <option value="Resorts">Resorts</option>
                    <option value="Tour operators">Tour operators</option>
                    <option value="Adventure operators">Adventure operators</option>
                    <option value="Local guides">Local guides</option>
                    <option value="Transport providers">Transport providers</option>
                    <option value="Event organizers">Event organizers</option>
                    <option value="Activity providers">Activity providers</option>
                    <option value="Travel businesses">Travel businesses</option>
                    <option value="Local experience providers">Local experience providers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Location / Destination *
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Manali, Himachal or Wayanad, Kerala"
                    required
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Services Offered
                  </label>
                  <input
                    type="text"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    placeholder="e.g. Stays, Treks, Cabs, Activities"
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your operations, capacity, and what you would like to offer..."
                  className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#556B2F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Partner Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
