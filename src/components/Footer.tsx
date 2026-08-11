import React, { useState } from 'react';
import { GraduationCap, Phone, MapPin, Mail, Shield, X } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/spanishData';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-12 border-t border-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C84B31] text-white flex items-center justify-center font-bold text-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white leading-tight">
                  {INSTITUTE_INFO.name}
                </span>
                <span className="text-xs font-sans text-[#D97706] tracking-wider uppercase font-semibold">
                  Spanish Tutoring & Instruction • Austin, TX
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-sans">
              Dedicated 1-on-1 and small group Spanish language instruction in Central West Austin. Preparing students for academic exams and professionals for fluent real-world conversation.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
              <Shield className="w-4 h-4 text-[#D97706]" />
              <span>Verified Austin Small Business • Certified Educators</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider text-[#D97706]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-sans">
              <li><a href="#programs" className="hover:text-[#C84B31] transition-colors">Academic & AP/IB Prep</a></li>
              <li><a href="#programs" className="hover:text-[#C84B31] transition-colors">Adult Conversational Immersion</a></li>
              <li><a href="#programs" className="hover:text-[#C84B31] transition-colors">Business & Medical Spanish</a></li>
              <li><a href="#why-us" className="hover:text-[#C84B31] transition-colors">The Boutique Advantage</a></li>
              <li><a href="#testimonials" className="hover:text-[#C84B31] transition-colors">Google Reviews (4.9★)</a></li>
              <li><a href="#level-quiz" className="hover:text-[#C84B31] transition-colors">60-Second Level Quiz</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider text-[#D97706]">
              Austin Studio Address
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C84B31] shrink-0 mt-1" />
                <span>{INSTITUTE_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C84B31] shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="hover:text-[#C84B31] font-semibold text-white">
                  {INSTITUTE_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C84B31] shrink-0" />
                <span>{INSTITUTE_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Boutique Spanish Institute. All rights reserved. Austin, TX.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy & Terms
            </button>
            <a href="#main-navbar" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white text-[#1E293B] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E2E8F0] space-y-4">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <h3 className="font-serif font-bold text-lg text-[#1E293B]">
                Privacy Policy & Studio Terms
              </h3>
              <button onClick={() => setShowPrivacyModal(false)} className="text-[#1E293B]/60 hover:text-[#1E293B]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#1E293B]/80 leading-relaxed max-h-60 overflow-y-auto pr-2">
              <p className="font-bold text-[#1E293B]">1. Client Privacy</p>
              <p>We respect your privacy. Any personal information provided during registration or booking is strictly used for class scheduling and communication.</p>
              
              <p className="font-bold text-[#1E293B]">2. Scheduling & Cancellations</p>
              <p>Individual 1-on-1 sessions require 24-hour advance notice for rescheduling to avoid forfeit of session credit.</p>

              <p className="font-bold text-[#1E293B]">3. Free Trial Policy</p>
              <p>Free trial sessions include a 30-minute level assessment and consultative goal roadmap without purchase commitment.</p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="bg-[#1E293B] text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
