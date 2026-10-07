import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PageView } from '../types';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Instagram,
  Youtube,
  Twitter,
  Linkedin
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to Wiktrip Adventure Dispatch!');
    setNewsletterEmail('');
  };

  const navTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0D0C] text-neutral-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Emergency Dispatch Strip */}
        <div className="bg-[#161917] border border-white/10 rounded-2xl p-8 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#F97316]">
              Adventure Dispatch
            </span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">
              Join 50,000+ Explorers in the Wild
            </h3>
            <p className="text-sm text-neutral-400 mt-2 max-w-md">
              Receive secret high-pass routes, seasonal stay offers, festival tickets, and wilderness masterclasses.
            </p>
          </div>
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>You're in! Watch your inbox for secret mountain coordinates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your personal email"
                  required
                  className="bg-[#242625] text-white placeholder-neutral-500 text-sm px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#556B2F] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#556B2F] hover:bg-[#3F4F24] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <button
              onClick={() => navTo('home')}
              className="flex items-center gap-2 mb-4 group text-left focus:outline-none cursor-pointer"
              title="Wiktrip - Home"
            >
              <img
                src="/wiktriplogo.png"
                alt="Wiktrip"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              A modern ecosystem for travel, exploration, verified stays, alpine trekking, permanent adventure, and outdoor gear.
            </p>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#556B2F]" />
                <a href="tel:+919711720218" className="hover:text-white transition-colors">+91 9711720218</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#556B2F]" />
                <a href="mailto:contact@wiktrip.in" className="hover:text-white transition-colors">contact@wiktrip.in</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#556B2F] shrink-0 mt-0.5" />
                <span>Techzone 4, Greater Noida West, Delhi NCR, UP 201306</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button onClick={() => navTo('hotels')} className="hover:text-white transition-colors">
                  Hotels & Resorts
                </button>
              </li>
              <li>
                <button onClick={() => navTo('tours')} className="hover:text-white transition-colors">
                  Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => navTo('adventure')} className="hover:text-white transition-colors">
                  Adventure Setup
                </button>
              </li>
              <li>
                <button onClick={() => navTo('trekking')} className="hover:text-white transition-colors">
                  Trekking & Camping
                </button>
              </li>
              <li>
                <button onClick={() => navTo('events')} className="hover:text-white transition-colors">
                  Events & Festivals
                </button>
              </li>
            </ul>
          </div>

          {/* Wiktrip Hub */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Wiktrip
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button onClick={() => navTo('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navTo('learning')} className="hover:text-white transition-colors">
                  Wiktrip Learning
                </button>
              </li>
              <li>
                <button onClick={() => navTo('store')} className="hover:text-white transition-colors">
                  Wiktrip Store
                </button>
              </li>
              <li>
                <button onClick={() => navTo('rentals')} className="hover:text-white transition-colors">
                  Rentals & Cabs
                </button>
              </li>
              <li>
                <button onClick={() => navTo('gallery')} className="hover:text-white transition-colors">
                  Travel Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button onClick={() => navTo('partners')} className="hover:text-white transition-colors">
                  Partner With Us
                </button>
              </li>
              <li>
                <button onClick={() => navTo('career')} className="hover:text-white transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => navTo('blogs')} className="hover:text-white transition-colors">
                  Blogs & Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors">
                  FAQs & Trip Help
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors">
                  Terms of Booking
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors">
                  Cancellation Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} WIKTRIP. All rights reserved. Explore More. Experience More. Travel Better.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navTo('contact')} className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => navTo('contact')} className="hover:text-neutral-300 transition-colors">
              Terms
            </button>
            <button onClick={() => navTo('contact')} className="hover:text-neutral-300 transition-colors">
              Cancellation Policy
            </button>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hover:text-white cursor-pointer transition-colors" title="Instagram">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="hover:text-white cursor-pointer transition-colors" title="YouTube">
              <Youtube className="w-4 h-4" />
            </span>
            <span className="hover:text-white cursor-pointer transition-colors" title="Twitter">
              <Twitter className="w-4 h-4" />
            </span>
            <span className="hover:text-white cursor-pointer transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
