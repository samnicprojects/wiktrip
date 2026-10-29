import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from '../components/SafeImage';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Send,
  Calendar,
  Users,
  Compass
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { showToast } = useApp();

  // Contact Form Fields from Official Specification
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalDestination, setArrivalDestination] = useState('');
  const [travelStartDate, setTravelStartDate] = useState('');
  const [travelEndDate, setTravelEndDate] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [tourType, setTourType] = useState('Holiday Tour');
  const [budget, setBudget] = useState('Standard / Moderate');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !email) {
      showToast('Please fill out Name, Mobile, and Email');
      return;
    }
    setSubmitted(true);
    showToast('Enquiry received! Our team will get back to you shortly.');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-left max-w-2xl">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Get In Touch
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Let's Plan Your Next Journey
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Discover destinations, adventures, beautiful stays and customized itineraries. Our travel consultants are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0D0C] text-white p-8 rounded-3xl border border-white/10 space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-[#F97316]">
                Official Contact
              </span>
              <h3 className="font-display text-xl font-bold">Wiktrip Head Office</h3>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Head Office:</span>
                    Techzone 4, Greater Noida West, Delhi NCR, Uttar Pradesh, India 201306
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Phone:</span>
                    <a href="tel:+919711720218" className="hover:text-white transition-colors">
                      +91 9711720218
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Email:</span>
                    <a href="mailto:contact@wiktrip.in" className="hover:text-white transition-colors">
                      contact@wiktrip.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#556B2F] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Support Hours:</span>
                    Mon - Sun: 09:00 AM - 08:00 PM IST (Enquiry Desk Open)
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href="https://wa.me/919711720218?text=Hello%20Wiktrip%2C%20I%20would%20like%20to%20enquire%20about%20a%20trip."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md group"
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/60 shrink-0">
                  <SafeImage
                    src="/images/avatar/guide-avatar.jpg"
                    alt="Guide Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-ping" />
                </div>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Travel Consulting Feature Card */}
            <div className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#556B2F]">
                <Compass className="w-5 h-5" />
                <span className="font-display font-bold text-sm text-[#0B0D0C]">Travel Consulting</span>
              </div>
              <h4 className="font-display text-base font-bold text-[#0B0D0C]">
                Not Sure Where to Go? We'll Help You Plan.
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Tell us what you want from your trip and we can shape the experience around your interests, schedule and budget requirements.
              </p>
            </div>

            {/* Safe Travel Assurance box */}
            <div className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-sm flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#556B2F] shrink-0" />
              <div className="text-xs text-neutral-600">
                <span className="font-bold text-[#0B0D0C] block">Verified Information:</span>
                Handpicked hotels, certified adventure instructors, and local guidance for every journey.
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Trip Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-[#0B0D0C] mb-1">
              Universal Trip Enquiry Form
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Fill in your trip details below. Our travel team will review your requirements and provide verified options.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-display text-xl font-bold text-emerald-900">
                  Enquiry Received
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you for your enquiry. Our team will review your request and get back to you with the next steps.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919711720218?text=Hello%20Wiktrip%2C%20I%20have%20submitted%20an%20enquiry%20online."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-900 underline"
                  >
                    Need an immediate response? Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name, Mobile, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Mobile *</label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+91 9711..."
                      required
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      required
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>
                </div>

                {/* Current Location, Departure Location, Arrival Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your City / Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Delhi NCR, Mumbai"
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Departure Location</label>
                    <input
                      type="text"
                      value={departureLocation}
                      onChange={(e) => setDepartureLocation(e.target.value)}
                      placeholder="e.g. New Delhi"
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Arrival Destination</label>
                    <input
                      type="text"
                      value={arrivalDestination}
                      onChange={(e) => setArrivalDestination(e.target.value)}
                      placeholder="e.g. Spiti, Kerala, Goa"
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>
                </div>

                {/* Travel Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Travel Start Date</label>
                    <input
                      type="date"
                      value={travelStartDate}
                      onChange={(e) => setTravelStartDate(e.target.value)}
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Travel End Date</label>
                    <input
                      type="date"
                      value={travelEndDate}
                      onChange={(e) => setTravelEndDate(e.target.value)}
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>
                </div>

                {/* Number of Adults, Children, Tour Type, Budget */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Adults</label>
                    <input
                      type="number"
                      min="1"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Children</label>
                    <input
                      type="number"
                      min="0"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Tour Type</label>
                    <select
                      value={tourType}
                      onChange={(e) => setTourType(e.target.value)}
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-2 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    >
                      <option value="Holiday Tour">Holiday Tour</option>
                      <option value="Honeymoon Tour">Honeymoon Tour</option>
                      <option value="Pilgrimage Tour">Pilgrimage Tour</option>
                      <option value="Adventure Tour">Adventure Tour</option>
                      <option value="Trekking & Camping">Trekking & Camping</option>
                      <option value="Corporate Tour">Corporate Tour</option>
                      <option value="Educational Tour">Educational Tour</option>
                      <option value="Ecotourism">Ecotourism</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-2 py-2 text-xs focus:outline-none focus:border-[#556B2F]"
                    >
                      <option value="Budget Experiences">Budget Friendly</option>
                      <option value="Standard / Moderate">Standard / Value</option>
                      <option value="Luxury Experiences">Luxury / Premium</option>
                      <option value="Customizable">Custom</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Message & Special Requirements</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell us about special requirements, preferred stay type, activities, or places you wish to visit..."
                    className="w-full bg-[#F3F4F0] border border-neutral-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
