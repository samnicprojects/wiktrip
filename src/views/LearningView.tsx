import React from 'react';
import { useApp } from '../context/AppContext';
import { LEARNING_COURSES_DATA } from '../data/mockData';
import { formatINR } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import {
  BookOpen,
  Clock,
  Award,
  Video,
  CheckCircle2,
  Users,
  Play,
  ArrowRight
} from 'lucide-react';

export const LearningView: React.FC = () => {
  const { openDetail } = useApp();

  return (
    <div className="min-h-screen bg-[#F8F9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#556B2F]">
            Outdoor Skills & Education
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-1">
            Learn Before You Explore
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
            Build the knowledge and confidence to travel, explore and experience the outdoors responsibly.
          </p>
        </div>

        {/* Learning Topics & Content Types Strip */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm mb-10 space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Learning Topics
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'Travel Planning',
                'Trekking & Hiking',
                'Camping & Survival',
                'Mountain Activities',
                'Adventure Safety',
                'Travel Guiding',
                'Client Management',
                'Outdoor Skills',
                'Responsible Travel',
                'Ecotourism'
              ].map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#F3F4F0] text-[#0B0D0C] rounded-lg text-xs font-semibold border border-neutral-200/60"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
            <span className="font-bold text-neutral-700">Content Formats:</span>
            <span>• Verified Masterclasses</span>
            <span>• Beginner Guides</span>
            <span>• Adventure & Altitude Resources</span>
            <span>• Safety Protocols</span>
            <span>• Outdoor Field Lore</span>
          </div>
        </div>

        {/* Learning Ethos Banner */}
        <div className="bg-[#0B0D0C] text-white p-8 rounded-3xl border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#F97316]">
              Responsible Adventure Ethos
            </span>
            <h3 className="font-display text-2xl font-bold">
              Knowledge is the Most Essential Piece of Mountain Gear
            </h3>
            <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
              Before setting foot on high-altitude passes or wilderness trails, learn the warning signs of AMS, practical first aid, and Leave No Trace outdoor principles.
            </p>
          </div>
          <div className="flex items-center gap-6 text-center shrink-0">
            <div>
              <div className="font-display text-2xl font-black text-white">100%</div>
              <div className="text-[11px] text-neutral-400">Free Backcountry Safety</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="font-display text-2xl font-black text-[#556B2F]">HMI / NIM</div>
              <div className="text-[11px] text-neutral-400">Certified Instructors</div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEARNING_COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                <SafeImage
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#556B2F] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {course.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                    {course.duration}
                  </span>
                  <span className="bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                    {course.level} Level
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0D0C] line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3 p-3 bg-[#F3F4F0] rounded-xl">
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                      <SafeImage src={course.instructor.avatar} alt={course.instructor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B0D0C]">{course.instructor.name}</div>
                      <div className="text-[11px] text-neutral-500 line-clamp-1">{course.instructor.role}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      Enrollment
                    </span>
                    <span className="font-display text-lg font-black text-[#556B2F]">
                      {course.price === 0 ? 'FREE ACCESS' : `₹${formatINR(course.price)}`}
                    </span>
                  </div>

                  <button
                    onClick={() => openDetail('course', course)}
                    className="px-5 py-2.5 bg-[#0B0D0C] hover:bg-neutral-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
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
