import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatINR } from '../utils/format';
import {
  X,
  User,
  Calendar,
  ShoppingBag,
  CreditCard,
  Settings,
  LogOut,
  CheckCircle2,
  Clock,
  Download,
  MapPin,
  Shield,
  Star
} from 'lucide-react';

export const UserAccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, userBookings, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'settings'>('bookings');

  if (!isAccountOpen) return null;

  const handlePrintBooking = () => {
    window.print();
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Account preferences updated successfully');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#161917] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#242625]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#556B2F] text-white flex items-center justify-center font-bold text-base">
              AS
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">Aarav Sharma</h3>
              <span className="text-xs text-neutral-400">Verified Explorer · Member since 2024</span>
            </div>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 bg-[#161917] text-sm">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`pb-3 px-2 font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'bookings'
                ? 'border-[#F97316] text-[#F97316]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>My Bookings & Trips ({userBookings.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-2 font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-[#F97316] text-[#F97316]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Emergency Info</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 px-2 font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'border-[#F97316] text-[#F97316]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Preferences</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-neutral-300">
          {activeTab === 'bookings' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Active & Past Expedition Reservations</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  All reservations backed by Weather Guarantee
                </span>
              </div>

              {userBookings.length === 0 ? (
                <div className="py-12 text-center text-neutral-400">
                  <Calendar className="w-10 h-10 mx-auto text-neutral-600 mb-2" />
                  <p className="text-white font-medium">No trips booked yet</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Ready to explore? Discover tour packages, treks, and chalets.
                  </p>
                </div>
              ) : (
                userBookings.map((bk) => (
                  <div
                    key={bk.id}
                    className="p-5 bg-[#242625] border border-white/10 rounded-2xl space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#556B2F] bg-[#556B2F]/20 px-2 py-0.5 rounded">
                          {bk.type.toUpperCase()}
                        </span>
                        <h4 className="font-display text-base font-bold text-white mt-1">
                          {bk.title}
                        </h4>
                        <div className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{bk.location}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-emerald-400 font-semibold flex items-center justify-end gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{bk.status}</span>
                        </div>
                        <div className="font-mono text-sm font-bold text-[#F97316] mt-0.5">
                          {bk.bookingRef}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-neutral-500">Preferred Date:</span>
                        <div className="font-medium text-white">{bk.date}</div>
                      </div>
                      <div>
                        <span className="text-neutral-500">Party Size:</span>
                        <div className="font-medium text-white">{bk.guests} Explorers</div>
                      </div>
                      <div>
                        <span className="text-neutral-500">Estimated Budget:</span>
                        <div className="font-medium text-white font-bold">
                          ₹{formatINR(bk.totalAmount)}
                        </div>
                      </div>
                      <div>
                        <span className="text-neutral-500">Contact Method:</span>
                        <div className="font-medium text-white">{bk.preferredContactMethod || 'WhatsApp'}</div>
                      </div>
                    </div>

                    {bk.addOns && bk.addOns.length > 0 && (
                      <div className="text-xs text-neutral-400 bg-[#161917] p-2.5 rounded-lg border border-white/5">
                        <span className="text-neutral-500">Included Services: </span>
                        {bk.addOns.map(a => a.name).join(', ')}
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-2 pt-2">
                      <a
                        href={`https://wa.me/919876543210?text=Hi%20Wiktrip%2C%20following%20up%20on%20my%20enquiry%20Ref%3A%20${bk.bookingRef}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span>WhatsApp Specialist</span>
                      </a>
                      <button
                        onClick={handlePrintBooking}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Save Summary</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Aarav Sharma"
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    defaultValue="aarav.sharma@example.com"
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Blood Group (Trek Safety)</label>
                  <input
                    type="text"
                    defaultValue="O Positive (O+)"
                    className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Emergency Backcountry Contact</label>
                <input
                  type="text"
                  defaultValue="Meera Sharma (Sister) - +91 98111 22334"
                  className="w-full bg-[#242625] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => showToast('Profile saved successfully')}
                  className="px-6 py-2.5 bg-[#556B2F] hover:bg-[#3F4F24] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Save Profile
                </button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 bg-[#242625] rounded-xl border border-white/5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#556B2F]" />
                  <div>
                    <div className="text-sm font-medium text-white">Weather & Avalanche Advisory Alerts</div>
                    <div className="text-xs text-neutral-400">Receive SMS warnings for road closures and snowfall in Himachal & Ladakh.</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#242625] rounded-xl border border-white/5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#556B2F]" />
                  <div>
                    <div className="text-sm font-medium text-white">Exclusive Member Gear Drops</div>
                    <div className="text-xs text-neutral-400">Get early notification on discounted tents, packs and seasonal hotel deals.</div>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    showToast('Logged out securely');
                    setIsAccountOpen(false);
                  }}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out of Wiktrip</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#556B2F] hover:bg-[#3F4F24] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Update Settings
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
