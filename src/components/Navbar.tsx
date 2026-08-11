import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, GraduationCap } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/spanishData';

interface NavbarProps {
  onOpenTrialModal: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Student Reviews', href: '#testimonials' },
    { name: 'Level Quiz', href: '#level-quiz' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-4 border-b border-[#FAF7F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#C84B31] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#A6331B] transition-colors">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1E293B] leading-tight group-hover:text-[#C84B31] transition-colors">
              Boutique Spanish
            </span>
            <span className="text-xs font-sans text-[#C84B31] tracking-wider uppercase font-semibold">
              Institute • Austin, TX
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#1E293B]/80 hover:text-[#C84B31] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Items */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${INSTITUTE_INFO.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#1E293B] hover:text-[#C84B31] transition-colors bg-white px-3.5 py-2 rounded-lg border border-[#E2E8F0] shadow-2xs"
          >
            <Phone className="w-4 h-4 text-[#C84B31]" />
            <span>{INSTITUTE_INFO.phoneDisplay}</span>
          </a>

          <button
            id="nav-book-trial-btn"
            onClick={() => onOpenTrialModal()}
            className="flex items-center gap-2 bg-[#C84B31] hover:bg-[#A6331B] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Book Free Trial</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${INSTITUTE_INFO.phone}`}
            className="sm:hidden p-2 text-[#C84B31] hover:bg-white rounded-lg border border-[#E2E8F0]"
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1E293B] hover:bg-[#E2E8F0]/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E2E8F0] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E293B] hover:text-[#C84B31] py-2 px-3 rounded-md hover:bg-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1E293B] bg-white py-3 rounded-lg border border-[#E2E8F0]"
            >
              <Phone className="w-4 h-4 text-[#C84B31]" />
              <span>Call Us: {INSTITUTE_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#C84B31] hover:bg-[#A6331B] text-white text-sm font-semibold py-3 rounded-lg shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>Book Free Trial Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
