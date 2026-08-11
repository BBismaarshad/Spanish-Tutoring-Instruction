import React, { useState, useEffect } from 'react';
import { X, Check, Sparkles, Calendar, User, Mail, Phone as PhoneIcon, GraduationCap, Users, Briefcase, CheckCircle2 } from 'lucide-react';
import { FreeTrialFormData } from '../types';
import { INSTITUTE_INFO } from '../data/spanishData';

interface LevelAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const LevelAssessmentModal: React.FC<LevelAssessmentModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'conversational',
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FreeTrialFormData>({
    programCategory: initialCategory,
    proficiencyLevel: 'Beginner A1-A2',
    learningGoal: 'Conversational Fluency',
    preferredTime: 'Weekday Evenings (5pm–8pm)',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({ ...prev, programCategory: initialCategory }));
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E293B]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-[#FAF7F2] px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#C84B31] text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1E293B]">
                Book Your Free Trial & Assessment
              </h3>
              <p className="text-xs text-[#1E293B]/60 font-sans">
                {INSTITUTE_INFO.name} • Austin, TX
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-[#E2E8F0] text-[#1E293B]/60 hover:text-[#1E293B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step === s
                        ? 'bg-[#C84B31] text-white'
                        : step > s
                        ? 'bg-[#1E293B] text-white'
                        : 'bg-[#FAF7F2] text-[#1E293B]/40 border border-[#E2E8F0]'
                    }`}
                  >
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:inline ${
                    step === s ? 'text-[#C84B31]' : 'text-[#1E293B]/60'
                  }`}>
                    {s === 1 ? 'Program Focus' : s === 2 ? 'Level & Preferences' : 'Contact Details'}
                  </span>
                  {s < 3 && <div className="w-8 sm:w-12 h-0.5 bg-[#E2E8F0] mx-1" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Program Focus */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-xl text-[#1E293B]">
                    What is your primary learning goal?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'academic', title: 'High School / College', desc: 'AP, IB, Exam Prep & Grades', icon: GraduationCap },
                      { id: 'conversational', title: 'Adult Conversational', desc: 'Travel, Daily Life, Immersion', icon: Users },
                      { id: 'business', title: 'Business & Healthcare', desc: 'Medical, Legal, Corporate', icon: Briefcase },
                    ].map((prog) => {
                      const Icon = prog.icon;
                      const isSelected = formData.programCategory === prog.id;

                      return (
                        <button
                          key={prog.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, programCategory: prog.id })}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#C84B31]/10 border-[#C84B31] ring-1 ring-[#C84B31]'
                              : 'bg-[#FAF7F2] border-[#E2E8F0] hover:bg-white'
                          }`}
                        >
                          <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-[#C84B31]' : 'text-[#1E293B]/60'}`} />
                          <p className="font-bold text-sm text-[#1E293B]">{prog.title}</p>
                          <p className="text-xs text-[#1E293B]/70 mt-1">{prog.desc}</p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#C84B31] hover:bg-[#A6331B] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow cursor-pointer"
                    >
                      Continue to Level Selection
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Level & Preferred Time */}
              {step === 2 && (
                <div className="space-y-5">
                  <h4 className="font-serif font-bold text-xl text-[#1E293B]">
                    Select Your Current Level & Preferred Time
                  </h4>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B]/70 mb-2">
                      Estimated Spanish Proficiency
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Beginner A1-A2', 'Intermediate B1-B2', 'Advanced C1-C2', 'Complete Beginner'].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setFormData({ ...formData, proficiencyLevel: lvl })}
                          className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                            formData.proficiencyLevel === lvl
                              ? 'bg-[#1E293B] text-white border-[#1E293B]'
                              : 'bg-[#FAF7F2] text-[#1E293B] border-[#E2E8F0] hover:bg-white'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B]/70 mb-2">
                      Preferred Schedule Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-[#FAF7F2] text-sm text-[#1E293B] font-medium focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                    >
                      <option value="Weekday Mornings (9am–12pm)">Weekday Mornings (9am–12pm)</option>
                      <option value="Weekday Afternoons (12pm–5pm)">Weekday Afternoons (12pm–5pm)</option>
                      <option value="Weekday Evenings (5pm–8pm)">Weekday Evenings (5pm–8pm)</option>
                      <option value="Saturday Morning (10am–2pm)">Saturday Morning (10am–2pm)</option>
                      <option value="Flexible Online Slot">Flexible Online Video Slot</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-[#1E293B]/60 hover:text-[#1E293B]"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#C84B31] hover:bg-[#A6331B] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow cursor-pointer"
                    >
                      Continue to Contact Info
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-xl text-[#1E293B]">
                    Where should we confirm your trial session?
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Sarah"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-[#FAF7F2] text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Jenkins"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-[#FAF7F2] text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-[#FAF7F2] text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 555-0199"
                        className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-[#FAF7F2] text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1">Specific Goals or Questions (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Preparing for AP Spanish exam in May, or need Medical Spanish for clinic intake..."
                      className="w-full p-3 rounded-xl border border-[#E2E8F0] bg-[#FAF7F2] text-sm text-[#1E293B] focus:ring-2 focus:ring-[#C84B31] outline-hidden"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-bold text-[#1E293B]/60 hover:text-[#1E293B]"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#C84B31] hover:bg-[#A6331B] text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#D97706]" />
                      <span>Confirm Free Trial Booking</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-3xl text-[#1E293B]">
                ¡Muchas Gracias, {formData.firstName}!
              </h3>
              <p className="text-base text-[#1E293B]/80 max-w-md mx-auto">
                We have received your trial booking request for our <span className="font-bold text-[#C84B31]">{formData.programCategory}</span> track.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E2E8F0] text-xs text-[#1E293B] text-left max-w-md mx-auto space-y-2">
              <p className="font-bold text-[#1E293B]">Booking Summary:</p>
              <p>• <span className="font-semibold">Level:</span> {formData.proficiencyLevel}</p>
              <p>• <span className="font-semibold">Requested Schedule:</span> {formData.preferredTime}</p>
              <p>• <span className="font-semibold">Studio Location:</span> {INSTITUTE_INFO.address}</p>
            </div>

            <p className="text-xs text-[#1E293B]/60">
              Our lead instructor will contact you via email ({formData.email}) or phone ({formData.phone}) within 1 business hour to finalize your time.
            </p>

            <button
              onClick={handleResetAndClose}
              className="bg-[#1E293B] hover:bg-[#0F172A] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
