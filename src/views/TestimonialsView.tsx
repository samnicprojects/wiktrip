import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { SafeImage } from '../components/SafeImage';
import { Testimonial } from '../types';
import {
  Star,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const TestimonialsView: React.FC = () => {
  const { showToast } = useApp();

  const [feedbacks, setFeedbacks] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [authorTrip, setAuthorTrip] = useState('');
  const [authorRating, setAuthorRating] = useState(5);
  const [authorReview, setAuthorReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !authorReview) {
      showToast('Please fill out all fields');
      return;
    }

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      name: authorName,
      location: authorLocation || 'India',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: authorRating,
      tripName: authorTrip || 'Himalayan Exploration',
      tripType: 'Expedition',
      review: authorReview,
      date: 'Just now',
      verified: true
    };

    setFeedbacks([newTestimonial, ...feedbacks]);
    setSubmitted(true);
    showToast('Thank you! Your story has been added to our community log.');
    setAuthorName('');
    setAuthorLocation('');
    setAuthorTrip('');
    setAuthorReview('');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Community Chronicles
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Stories From Our Travelers
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Read verified dispatches and reflections from fellow adventurers who crossed high passes, stayed in secluded chalets, and tested our gear.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {feedbacks.map((test) => (
            <div
              key={test.id}
              className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  {test.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Explorer
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                  "{test.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                    <SafeImage src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B0D0C]">{test.name}</div>
                    <div className="text-xs text-neutral-500">{test.location}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-semibold text-[#556B2F]">{test.tripName}</div>
                  <div className="text-[11px] text-neutral-400">{test.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Submission Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
              Share Your Experience
            </span>
            <h2 className="font-display text-2xl font-black text-[#0B0D0C] mt-1">
              Add Your Story to Wiktrip
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Traveled with us recently? We'd love to hear your authentic reflections.
            </p>
          </div>

          <form onSubmit={handleSubmitFeedback} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Maya Iyer"
                  required
                  className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Your City / State</label>
                <input
                  type="text"
                  value={authorLocation}
                  onChange={(e) => setAuthorLocation(e.target.value)}
                  placeholder="e.g. Pune, Maharashtra"
                  className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Trip / Experience Name</label>
                <input
                  type="text"
                  value={authorTrip}
                  onChange={(e) => setAuthorTrip(e.target.value)}
                  placeholder="e.g. Kedarkantha Winter Summit"
                  className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Rating</label>
                <select
                  value={authorRating}
                  onChange={(e) => setAuthorRating(Number(e.target.value))}
                  className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
                >
                  <option value={5}>5 Stars - Outstanding Expedition</option>
                  <option value={4}>4 Stars - Great Experience</option>
                  <option value={3}>3 Stars - Satisfactory</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Story / Feedback *</label>
              <textarea
                value={authorReview}
                onChange={(e) => setAuthorReview(e.target.value)}
                rows={4}
                placeholder="Describe the guide, campsite, food, views, or mountain memories..."
                required
                className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#556B2F]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#556B2F] hover:bg-[#3F4F24] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Traveler Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
