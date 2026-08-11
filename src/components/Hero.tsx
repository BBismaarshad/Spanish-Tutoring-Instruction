import React from 'react';
import { Star, MapPin, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/spanishData';

interface HeroProps {
  onOpenTrialModal: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#FAF7F2]">
      {/* Soft background ambient gradient accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#C84B31]/5 via-[#D97706]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Rating Pill & Location Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a 
                href="#testimonials" 
                className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-2xs hover:border-[#C84B31]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#1E293B]">
                  {INSTITUTE_INFO.rating} / 5.0
                </span>
                <span className="text-xs text-[#1E293B]/60 font-medium">
                  ({INSTITUTE_INFO.reviewCount} Google Reviews)
                </span>
              </a>

              <div className="inline-flex items-center gap-1.5 bg-[#C84B31]/10 text-[#C84B31] px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Central West Austin • Northland Dr</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1E293B] leading-[1.12] tracking-tight">
              Master Spanish in <br className="hidden sm:inline" />
              <span className="text-[#C84B31] relative inline-block">
                Austin, TX
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D97706]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#1E293B]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Personalized 1-on-1 and group Spanish tutoring for students, professionals, and conversational learners. Guided by certified native educators in Central West Austin.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-left pt-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#C84B31] shrink-0" />
                <span>AP & IB Spanish Exam Prep</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#C84B31] shrink-0" />
                <span>Medical, Legal & Executive Spanish</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#C84B31] shrink-0" />
                <span>Native Certified Instructors</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#C84B31] shrink-0" />
                <span>In-Person Studio or Online</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-book-trial-btn"
                onClick={() => onOpenTrialModal()}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#C84B31] hover:bg-[#A6331B] text-white font-semibold text-base px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#D97706]" />
                <span>Book a Free Trial Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#1E293B] font-semibold text-base px-6 py-4 rounded-xl border border-[#E2E8F0] shadow-2xs hover:border-[#C84B31]/40 transition-all"
              >
                <span>Explore Programs & Fees</span>
              </a>
            </div>

            {/* Micro Trust Guarantee */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#1E293B]/60 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#D97706]" />
              <span>No commitment required • Free level placement assessment included</span>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C84B31]/20 to-[#D97706]/20 rounded-3xl blur-lg opacity-70" />

              <div className="relative bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#E2E8F0]">
                {/* Main Image with ReferrerPolicy */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={INSTITUTE_INFO.heroImageUrl}
                    alt="Spanish Tutoring & Instruction in Austin, TX"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-transparent to-transparent" />
                  
                  {/* Overlay Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded-lg bg-[#1E293B]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#D97706] uppercase tracking-wider">Studio Location</p>
                      <p className="text-sm font-bold text-white font-serif">{INSTITUTE_INFO.address}</p>
                    </div>
                    <a 
                      href="#contact" 
                      className="text-xs bg-[#C84B31] hover:bg-[#A6331B] text-white px-3 py-1.5 rounded font-semibold transition-colors shrink-0"
                    >
                      Map & Directions
                    </a>
                  </div>
                </div>

                {/* Stat Highlights Bar */}
                <div className="grid grid-cols-3 gap-2 mt-4 text-center pt-2 border-t border-[#E2E8F0]">
                  <div className="p-2">
                    <p className="font-serif font-bold text-xl text-[#C84B31]">100%</p>
                    <p className="text-[11px] text-[#1E293B]/70 font-medium">Custom Lessons</p>
                  </div>
                  <div className="p-2 border-x border-[#E2E8F0]">
                    <p className="font-serif font-bold text-xl text-[#1E293B]">4.9★</p>
                    <p className="text-[11px] text-[#1E293B]/70 font-medium">18 Google Reviews</p>
                  </div>
                  <div className="p-2">
                    <p className="font-serif font-bold text-xl text-[#D97706]">A1–C2</p>
                    <p className="text-[11px] text-[#1E293B]/70 font-medium">All Skill Levels</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
