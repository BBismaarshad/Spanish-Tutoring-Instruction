import React from 'react';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA, INSTITUTE_INFO } from '../data/spanishData';

export const Testimonials: React.FC = () => {
  const featured = TESTIMONIALS_DATA.find(t => t.featured) || TESTIMONIALS_DATA[0];
  const others = TESTIMONIALS_DATA.filter(t => !t.featured);

  return (
    <section id="testimonials" className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/10 text-[#D97706] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#D97706]" />
            <span>Austin Student Success Stories</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E293B]">
            Trusted by Students & Professionals Across Austin
          </h2>
          <p className="text-base sm:text-lg text-[#1E293B]/70 font-sans">
            Read how our personalized 1-on-1 methodology has helped Austin locals achieve fluid conversational fluency and academic excellence.
          </p>
        </div>

        {/* Rating Overview Summary Banner */}
        <div className="mt-8 max-w-xl mx-auto bg-[#FAF7F2] rounded-xl p-4 border border-[#E2E8F0] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C84B31] text-white flex items-center justify-center font-bold text-lg font-serif">
              G
            </div>
            <div>
              <p className="text-sm font-bold text-[#1E293B]">Google Verified Reviews</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                ))}
                <span className="text-xs font-bold text-[#1E293B] ml-1">
                  {INSTITUTE_INFO.rating} / 5.0 Rating
                </span>
              </div>
            </div>
          </div>
          <span className="text-xs text-[#1E293B]/70 font-semibold bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0]">
            Based on {INSTITUTE_INFO.reviewCount} Reviews
          </span>
        </div>

        {/* Featured Large Review */}
        <div className="mt-12 bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm relative overflow-hidden">
          <div className="absolute top-6 right-8 text-[#C84B31]/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={featured.avatar}
                  alt={featured.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#1E293B]">{featured.name}</h3>
                <p className="text-xs font-bold text-[#C84B31] uppercase tracking-wider mt-0.5">{featured.program}</p>
                <p className="text-xs text-[#1E293B]/60 font-medium">{featured.role}</p>
              </div>
              <div className="flex items-center gap-1 text-[#D97706]">
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97706] bg-[#D97706]/10 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Review</span>
              </div>
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#1E293B] leading-relaxed">
                "{featured.quote}"
              </blockquote>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#1E293B]/70">
                <CheckCircle className="w-4 h-4 text-[#C84B31]" />
                <span>Verified Student • Austin Studio Session Participant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Testimonials Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((item) => {
            const isTerracotta = item.theme === 'terracotta';
            const isSlate = item.theme === 'slate';

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isTerracotta
                    ? 'bg-[#C84B31] text-white border-[#A6331B] shadow-md'
                    : isSlate
                    ? 'bg-[#1E293B] text-white border-[#0F172A] shadow-md'
                    : 'bg-[#FAF7F2] text-[#1E293B] border-[#E2E8F0] shadow-2xs'
                }`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          isTerracotta || isSlate ? 'fill-[#D97706] text-[#D97706]' : 'fill-[#D97706] text-[#D97706]'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    isTerracotta || isSlate ? 'text-white/90 font-sans' : 'text-[#1E293B]/80'
                  }`}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className={`pt-4 border-t flex items-center gap-3 ${
                  isTerracotta || isSlate ? 'border-white/20' : 'border-[#E2E8F0]'
                }`}>
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${isTerracotta || isSlate ? 'text-white font-serif' : 'text-[#1E293B]'}`}>
                      {item.name}
                    </h4>
                    <p className={`text-xs ${isTerracotta || isSlate ? 'text-white/80' : 'text-[#C84B31] font-semibold'}`}>
                      {item.program}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
