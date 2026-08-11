import React from 'react';
import { Star, UserCheck, Calendar, BookOpen, Award, Compass, HeartHandshake, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/spanishData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-6 h-6 text-[#D97706] fill-[#D97706]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#C84B31]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[#C84B31]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#1E293B]" />;
      default:
        return <Award className="w-6 h-6 text-[#C84B31]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C84B31]/10 text-[#C84B31] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>The Boutique Advantage</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E293B]">
            Why Austin Learners Choose Our Institute
          </h2>
          <p className="text-base sm:text-lg text-[#1E293B]/70 font-sans">
            We move beyond standard textbook drills into authentic, conversational immersion paired with deep grammatical precision.
          </p>
        </div>

        {/* 4 Feature Grid Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E2E8F0] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1E293B] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1E293B]/75 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF7F2] flex items-center gap-2 text-xs font-semibold text-[#C84B31]">
                <CheckCircle className="w-4 h-4" />
                <span>Austin Proven Quality</span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Feature Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 lg:p-10 border border-[#E2E8F0] shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706] bg-[#D97706]/10 px-3 py-1 rounded-md">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Proven Pedagogy</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E293B]">
              The 4 Pillars of Our Conversational Pedagogy
            </h3>
            <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed font-sans">
              Our unique instructional framework combines auditory immersion, real-time feedback, tactile vocabulary exercises, and situational roleplay tailored specifically to Texan and Latin American Spanish usage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E2E8F0]">
                <p className="font-bold text-sm text-[#1E293B] mb-1">1. Active Speaking Ratio</p>
                <p className="text-xs text-[#1E293B]/70">Students speak for 70%+ of every 1-on-1 session.</p>
              </div>
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E2E8F0]">
                <p className="font-bold text-sm text-[#1E293B] mb-1">2. Cultural Context</p>
                <p className="text-xs text-[#1E293B]/70">Idioms, regional nuance, and practical social etiquette.</p>
              </div>
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E2E8F0]">
                <p className="font-bold text-sm text-[#1E293B] mb-1">3. Structural Grammar</p>
                <p className="text-xs text-[#1E293B]/70">Clear explanations of verb tenses without dry memorization.</p>
              </div>
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E2E8F0]">
                <p className="font-bold text-sm text-[#1E293B] mb-1">4. Custom Pace</p>
                <p className="text-xs text-[#1E293B]/70">Lessons adjust dynamically to your speed and confidence.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-xl p-6 border border-[#E2E8F0] space-y-4">
            <h4 className="font-serif font-bold text-xl text-[#1E293B]">
              Central West Austin Studio & Online
            </h4>
            <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">
              Located conveniently on Northland Drive with easy parking, our studio provides a serene, comfortable atmosphere equipped with modern learning media.
            </p>
            <div className="space-y-2 text-xs font-medium text-[#1E293B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
                <span>3303 Northland Dr #205, Austin, TX 78731</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Mon–Fri: 9am–8pm | Sat: 10am–2pm</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
