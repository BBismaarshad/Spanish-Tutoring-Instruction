import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsGrid } from './components/ProgramsGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { LevelQuizWidget } from './components/LevelQuizWidget';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LevelAssessmentModal } from './components/LevelAssessmentModal';

export function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('conversational');

  const handleOpenTrialModal = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('conversational');
    }
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E293B] flex flex-col font-sans selection:bg-[#C84B31] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Page Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenTrialModal={handleOpenTrialModal} />

        {/* Tailored Programs Grid */}
        <ProgramsGrid onOpenTrialModal={handleOpenTrialModal} />

        {/* Why Choose Us & Methodology */}
        <WhyChooseUs />

        {/* Student Reviews & Testimonials */}
        <Testimonials />

        {/* Interactive 60-Second Level Assessor Quiz */}
        <LevelQuizWidget onOpenTrialModal={handleOpenTrialModal} />

        {/* Contact Section & Form & Location Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Free Trial / Assessment Multi-Step Modal */}
      <LevelAssessmentModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        initialCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
