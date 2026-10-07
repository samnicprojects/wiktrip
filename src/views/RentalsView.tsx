import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VEHICLE_RENTALS_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  Car,
  MapPin,
  Calendar,
  Clock,
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  ShieldCheck,
  Check,
  ArrowRight
} from 'lucide-react';

export const RentalsView: React.FC = () => {
  const { openBooking } = useApp();

  const [pickup, setPickup] = useState('Chandigarh Airport (IXC)');
  const [drop, setDrop] = useState('Manali / Old Manali');
  const [pickupDate, setPickupDate] = useState('2026-11-12');
  const [pickupTime, setPickupTime] = useState('09:00 AM');
  const [vehicleFilter, setVehicleFilter] = useState<string>('All');

  const filteredVehicles = VEHICLE_RENTALS_DATA.filter(
    (v) => vehicleFilter === 'All' || v.type === vehicleFilter
  );

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Travel Transportation & Rentals
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Move Freely. Explore More.
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Reliable local taxis, airport transfers, outstation cabs, and destination transport featuring verified 5-seater and 7-seater vehicles.
          </p>
        </div>

        {/* Categories Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            'All Vehicles',
            'Local taxi',
            'Airport transfer',
            'Outstation cab',
            'Destination transport',
            'Group vehicles'
          ].map((cat, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 bg-white border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-700 shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Search & Booking Interface */}
        <div className="bg-[#161917] p-6 rounded-3xl border border-white/10 shadow-2xl mb-12 text-white">
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#F97316] mb-4">
            Cab Booking & Travel Transport Enquiry
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#556B2F]" />
                <span>Pickup Location</span>
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-transparent text-sm text-white font-medium focus:outline-none"
              />
            </div>

            <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Drop Location</span>
              </label>
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full bg-transparent text-sm text-white font-medium focus:outline-none"
              />
            </div>

            <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>Pickup Date</span>
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-transparent text-sm text-white font-medium focus:outline-none"
              />
            </div>

            <div className="p-3 bg-[#242625] rounded-xl border border-white/5">
              <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Pickup Time</span>
              </label>
              <input
                type="text"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-transparent text-sm text-white font-medium focus:outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={() =>
                  openBooking({
                    type: 'rental',
                    id: VEHICLE_RENTALS_DATA[0].id,
                    title: `Cab Transfer: ${pickup} to ${drop}`,
                    location: `${pickup} → ${drop}`,
                    price: VEHICLE_RENTALS_DATA[0].pricePerDay
                  })
                }
                className="w-full py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire Cab Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {['All', 'SUV', '4x4 Off-Roader', 'Minivan / Traveller', 'Adventure Bike', 'Sedan'].map((type) => (
            <button
              key={type}
              onClick={() => setVehicleFilter(type)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                vehicleFilter === type
                  ? 'bg-[#0B0D0C] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                <SafeImage
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0B0D0C]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {vehicle.rentalType}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] group-hover:text-[#556B2F] transition-colors">
                    {vehicle.name}
                  </h3>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-[#F3F4F0] rounded-lg">
                      <Users className="w-4 h-4 mx-auto text-neutral-600 mb-1" />
                      <span className="font-bold text-[#0B0D0C]">{vehicle.seats} Seats</span>
                    </div>
                    <div className="p-2 bg-[#F3F4F0] rounded-lg">
                      <Briefcase className="w-4 h-4 mx-auto text-neutral-600 mb-1" />
                      <span className="font-bold text-[#0B0D0C]">{vehicle.luggage} Bags</span>
                    </div>
                    <div className="p-2 bg-[#F3F4F0] rounded-lg">
                      <Fuel className="w-4 h-4 mx-auto text-neutral-600 mb-1" />
                      <span className="font-bold text-[#0B0D0C]">{vehicle.fuelType}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5 text-xs text-neutral-600">
                    {vehicle.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#556B2F]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      Per Day Tariff
                    </span>
                    <span className="font-display text-xl font-black text-[#0B0D0C]">
                      ₹{formatINR(vehicle.pricePerDay)}
                    </span>
                    {vehicle.pricePerKm && (
                      <span className="text-[11px] text-neutral-500 block">
                        or ₹{vehicle.pricePerKm}/km outstation
                      </span>
                    )}
                  </div>

                    <button
                      onClick={() =>
                        openBooking({
                          type: 'rental',
                          id: vehicle.id,
                          title: vehicle.name,
                          location: 'Mountain Transfer & Outstation',
                          price: vehicle.pricePerDay
                        })
                      }
                      className="px-5 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Enquire Cab Quote
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
