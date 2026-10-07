import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JOB_OPENINGS_DATA } from '../data/mockData';
import { JobOpening } from '../types';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Check,
  CheckCircle2,
  X,
  ArrowRight,
  Heart,
  Compass
} from 'lucide-react';

export const CareerView: React.FC = () => {
  const { showToast } = useApp();

  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Application submitted! Our recruitment team will review your profile.');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="bg-[#0B0D0C] text-white rounded-3xl border border-white/10 p-8 sm:p-14 mb-16 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Careers at Wiktrip
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black mt-2 leading-tight">
            Build the Future of Travel With Us
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Wiktrip brings together travel, technology, adventure and community. Create a workplace where people can contribute to meaningful travel experiences.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
            <h3 className="font-display text-base font-bold text-[#0B0D0C]">Wilderness Sabbaticals</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Paid expedition leaves every year to hike, climb, or lead tours across Himachal and Ladakh.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
            <h3 className="font-display text-base font-bold text-[#0B0D0C]">Pro Gear Allowance</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Annual gear stipends and free access to Wiktrip tents, packs, and technical outdoor apparel.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
            <h3 className="font-display text-base font-bold text-[#0B0D0C]">Flexible Mountain Bases</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Work from our Manali mountain chalet hub, Bengaluru engineering lab, or remotely.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
            <h3 className="font-display text-base font-bold text-[#0B0D0C]">Comprehensive Health</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              High-altitude medical insurance covering helicopter SAR rescue for all field employees.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-6">
          <div className="text-left mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0B0D0C]">
              Open Opportunities ({JOB_OPENINGS_DATA.length})
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Select any role to view detailed responsibilities and apply directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOB_OPENINGS_DATA.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span className="font-bold text-[#556B2F] uppercase">{job.department}</span>
                    <span>{job.employmentType}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0B0D0C]">{job.title}</h3>

                  <div className="flex items-center gap-3 text-xs text-neutral-500 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 mt-3 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setSubmitted(false);
                    }}
                    className="px-4 py-2 bg-[#556B2F] hover:bg-[#3F4F24] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Detail & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#161917] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-neutral-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#242625]/60">
              <div>
                <span className="text-[11px] font-bold text-[#F97316] uppercase tracking-wider">
                  {selectedJob.department} · {selectedJob.location}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-neutral-300">
              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-2">
                  Role Overview
                </h4>
                <p className="text-xs leading-relaxed text-neutral-400">
                  {selectedJob.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-2">
                  Core Responsibilities
                </h4>
                <div className="space-y-1.5 text-xs text-neutral-300">
                  {selectedJob.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#556B2F] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-2">
                  Requirements & Qualifications
                </h4>
                <div className="space-y-1.5 text-xs text-neutral-300">
                  {selectedJob.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#556B2F] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Application Form */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase text-[#F97316] tracking-wider mb-4">
                  Quick Application
                </h4>

                {submitted ? (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-800/40 rounded-xl text-center text-xs text-emerald-400">
                    <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                    Thank you, {applicantName}! Your application has been logged. We'll be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-neutral-400 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          required
                          className="w-full bg-[#242625] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#556B2F]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-neutral-400 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          required
                          className="w-full bg-[#242625] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#556B2F]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">LinkedIn or Portfolio URL *</label>
                      <input
                        type="url"
                        value={applicantResume}
                        onChange={(e) => setApplicantResume(e.target.value)}
                        placeholder="https://linkedin.com/in/... or drive link"
                        required
                        className="w-full bg-[#242625] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#556B2F]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs rounded-lg transition-colors"
                      >
                        Submit Candidacy
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
