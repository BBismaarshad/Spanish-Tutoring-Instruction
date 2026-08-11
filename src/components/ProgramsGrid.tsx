import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../data/spanishData';
import { Program } from '../types';
import { BookOpen, Check, Sparkles, GraduationCap, Users, Briefcase, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ProgramsGridProps {
  onOpenTrialModal: (category?: string) => void;
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({ onOpenTrialModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>('academic');

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-[#C84B31]" />;
      case 'conversational':
        return <Users className="w-5 h-5 text-[#D97706]" />;
      case 'business':
        return <Briefcase className="w-5 h-5 text-[#1E293B]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#C84B31]" />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C84B31]/10 text-[#C84B31] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Language Curricula</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E293B]">
            Tailored Programs & Course Offerings
          </h2>
          <p className="text-base sm:text-lg text-[#1E293B]/70 font-sans">
            Whether you are preparing for AP exams, learning for Austin business, or seeking fluid conversational confidence, our native instructors craft a syllabus specifically for you.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'academic', label: 'High School & College' },
            { id: 'conversational', label: 'Adult Conversational' },
            { id: 'business', label: 'Business & Professional' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#1E293B]/80 hover:bg-[#E2E8F0] hover:text-[#1E293B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program: Program) => {
            const isExpanded = expandedProgramId === program.id;

            return (
              <div
                key={program.id}
                className={`relative bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  program.popularTag
                    ? 'border-[#C84B31] shadow-md ring-1 ring-[#C84B31]/30'
                    : 'border-[#E2E8F0] shadow-2xs hover:shadow-md'
                }`}
              >
                {/* Popular Badge if exists */}
                {program.popularTag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C84B31] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D97706]" />
                    <span>{program.popularTag}</span>
                  </div>
                )}

                <div>
                  {/* Category Header & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-2xs">
                      {getCategoryIcon(program.category)}
                    </div>
                    <div className="text-right">
                      <p className="font-serif font-bold text-2xl text-[#1E293B]">{program.price}</p>
                      <p className="text-xs text-[#1E293B]/60 font-medium">{program.period}</p>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif font-bold text-2xl text-[#1E293B] mb-1">
                    {program.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#C84B31] mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-sm text-[#1E293B]/80 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Target Audience Pill */}
                  <div className="mb-6 p-3 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#1E293B]">
                    <span className="font-bold text-[#1E293B]">Ideal for:</span> {program.targetAudience}
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1E293B]/60">Key Highlights:</p>
                    {program.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-[#1E293B]">
                        <Check className="w-4 h-4 text-[#C84B31] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Course Syllabus Accordion Toggle */}
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <button
                      onClick={() => setExpandedProgramId(isExpanded ? null : program.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-[#1E293B] uppercase tracking-wider py-2 hover:text-[#C84B31] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Course Modules' : 'View Course Modules'} ({program.courses.length})</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3 pt-2">
                        {program.courses.map((course, cIdx) => (
                          <div key={cIdx} className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-bold text-sm text-[#1E293B]">{course.name}</h4>
                              <span className="text-[10px] bg-[#FAF7F2] text-[#C84B31] px-2 py-0.5 rounded font-semibold border border-[#E2E8F0]">
                                {course.level}
                              </span>
                            </div>
                            <p className="text-xs text-[#1E293B]/70 leading-relaxed">{course.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenTrialModal(program.id)}
                    className={`w-full flex items-center justify-center gap-2 font-semibold text-sm py-3 px-4 rounded-xl shadow-sm transition-all cursor-pointer ${
                      program.popularTag
                        ? 'bg-[#C84B31] hover:bg-[#A6331B] text-white'
                        : 'bg-[#1E293B] hover:bg-[#0F172A] text-white'
                    }`}
                  >
                    <span>Book Trial for {program.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Group & Corporate Banner */}
        <div className="mt-12 bg-[#1E293B] text-white rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl text-white">
              Need a Custom Schedule or Corporate Group Training in Austin?
            </h3>
            <p className="text-sm text-white/80 max-w-2xl font-sans">
              We provide tailored on-site corporate workshops and customized intensive 1-on-1 packages at our Northland Drive studio or your business office.
            </p>
          </div>
          <button
            onClick={() => onOpenTrialModal('business')}
            className="shrink-0 bg-[#C84B31] hover:bg-[#A6331B] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow transition-all cursor-pointer"
          >
            Request Corporate Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
