import React from 'react';
import { useApp } from '../context/AppContext';
import { ADVENTURE_ACTIVITIES_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Users,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export const PermanentAdventureView: React.FC = () => {
  const { openDetail, openBooking } = useApp();

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Permanent Adventure Setups
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Adventure Starts Here
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Engineered outdoor installations operated year-round with certified equipment, redundant safety rigging, and trained instructors.
          </p>
        </div>

        {/* Safety Banner */}
        <div className="p-6 bg-[#0B0D0C] text-white rounded-2xl border border-white/10 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#556B2F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">100% Certified Equipment & Redundant Rigging</h3>
              <p className="text-xs text-neutral-400 mt-0.5 max-w-xl">
                Every harness, carabiner, pulley and cable is inspected daily by certified safety engineers. Zero compromises on life safety.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 bg-white/10 text-xs font-semibold rounded-lg text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
            ISO 9001 & EN Certified
          </span>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVENTURE_ACTIVITIES_DATA.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                <SafeImage
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded text-white ${
                      activity.difficulty === 'Extreme'
                        ? 'bg-rose-600'
                        : activity.difficulty === 'Moderate'
                        ? 'bg-[#F97316]'
                        : 'bg-[#556B2F]'
                    }`}
                  >
                    {activity.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                    {activity.duration}
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] font-medium backdrop-blur-sm">
                    {activity.ageRequirement.split('(')[0]}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors">
                    {activity.name}
                  </h3>
                  <div className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{activity.location}</span>
                  </div>

                  <p className="text-xs text-neutral-600 mt-3 line-clamp-3 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1">
                    <span className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider block">
                      Gear Provided
                    </span>
                    <p className="text-xs text-neutral-600">
                      {activity.equipmentProvided.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      Per Participant
                    </span>
                    <span className="font-display text-xl font-black text-[#0B0D0C]">
                      ₹{formatINR(activity.price)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openDetail('adventure', activity)}
                      className="px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-black"
                    >
                      Safety Info
                    </button>
                    <button
                      onClick={() =>
                        openBooking({
                          type: 'adventure',
                          id: activity.id,
                          title: activity.name,
                          location: activity.location,
                          price: activity.price
                        })
                      }
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Enquire Slot
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
