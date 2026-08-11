import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/spanishData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: 'Conversational Adults',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C84B31]/10 text-[#C84B31] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Austin Studio & Contact</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E293B]">
            Get in Touch or Visit Our Studio
          </h2>
          <p className="text-base sm:text-lg text-[#1E293B]/70 font-sans">
            Have questions about our tutoring programs, class schedules, or AP/IB exam prep? Send us a message or give us a call directly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Address Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] space-y-6 shadow-2xs">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#1E293B] mb-2">
                  Contact Information
                </h3>
                <p className="text-xs text-[#1E293B]/70 leading-relaxed font-sans">
                  We are conveniently situated in Central West Austin on Northland Drive with dedicated client parking.
                </p>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E293B]/60 mb-0.5">Studio Address</p>
                  <p className="font-serif font-bold text-base text-[#1E293B]">
                    {INSTITUTE_INFO.address}
                  </p>
                  <p className="text-xs text-[#C84B31] font-semibold mt-1">
                    {INSTITUTE_INFO.neighborhood}
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E293B]/60 mb-0.5">Direct Phone</p>
                  <a
                    href={`tel:${INSTITUTE_INFO.phone}`}
                    className="font-serif font-bold text-lg text-[#1E293B] hover:text-[#C84B31] transition-colors"
                  >
                    {INSTITUTE_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#1E293B]/60 mt-0.5">Call or SMS for immediate inquiries</p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-[#1E293B]/10 text-[#1E293B] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E293B]/60 mb-0.5">Email Contact</p>
                  <a
                    href={`mailto:${INSTITUTE_INFO.email}`}
                    className="font-sans font-semibold text-sm text-[#1E293B] hover:text-[#C84B31] transition-colors"
                  >
                    {INSTITUTE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours Item */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E293B]">
                  <Clock className="w-4 h-4 text-[#C84B31]" />
                  <span>Instruction Hours</span>
                </div>
                <div className="space-y-1 pt-1 text-xs text-[#1E293B]/80 font-medium">
                  {INSTITUTE_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-[#FAF7F2] pb-1">
                      <span>{h.days}:</span>
                      <span className="font-bold text-[#1E293B]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Map Preview Graphic Card */}
            <div className="bg-[#1E293B] text-white rounded-3xl p-6 border border-[#0F172A] relative overflow-hidden shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#D97706]" />
                  <span className="font-serif font-bold text-lg text-white">Austin Studio Map</span>
                </div>
                <span className="text-[10px] bg-[#C84B31] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Central West
                </span>
              </div>
              <p className="text-xs text-white/80 mb-4 font-sans">
                Located near Mopac Expressway & Northland Dr, 10 minutes from UT Austin & Downtown.
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(INSTITUTE_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D97706] hover:text-white transition-colors underline"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-2xl text-[#1E293B]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#1E293B]/70 font-sans">
                      Fill out the form below and an Austin instructor will respond within 2 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 771-7477"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                    >
                      <option value="Conversational Adults">Adult Conversational Immersion</option>
                      <option value="AP & IB Academic Prep">High School / AP & IB Spanish Prep</option>
                      <option value="College Spanish Tutoring">College Spanish Tutoring (UT Austin)</option>
                      <option value="Medical Spanish">Medical & Healthcare Spanish</option>
                      <option value="Legal & Corporate">Legal & Executive Corporate Spanish</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1">
                      Message or Inquiry *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your learning background, preferred class format (in-person or online), and target timeframe..."
                      className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#C84B31] hover:bg-[#A6331B] text-white font-semibold text-base py-4 px-6 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Instructors</span>
                  </button>

                  <p className="text-[11px] text-center text-[#1E293B]/60 font-medium">
                    We respect your privacy. Your information is never shared.
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-3xl text-[#1E293B]">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#1E293B]/80 max-w-md mx-auto font-sans">
                      Thank you, <span className="font-bold text-[#C84B31]">{formData.firstName}</span>. Our lead Austin instructor will review your inquiry regarding <span className="font-semibold">{formData.program}</span> and reply to <span className="font-semibold">{formData.email}</span> shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-[#1E293B] hover:bg-[#0F172A] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
