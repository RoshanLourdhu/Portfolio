import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D0C]/90 backdrop-blur-md border-b border-[#1F2722] py-4 shadow-xl shadow-black/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="site-container">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-[#B7F36B] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-[#151A17] border border-[#253129] group-hover:border-[#B7F36B]/50 flex items-center justify-center transition-colors shadow-sm">
              <span className="font-mono font-bold text-base text-[#F3F5F2] tracking-wider group-hover:text-[#B7F36B] transition-colors">
                {profileData.initials}
                <span className="text-[#B7F36B]">.</span>
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-[#F3F5F2] group-hover:text-white transition-colors">
                {profileData.name}
              </span>
              <span className="text-xs font-mono text-[#A1AAA3] tracking-wide">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#151A17]/80 border border-[#1F2722] p-1.5 rounded-full backdrop-blur-md shadow-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1F2722] text-[#B7F36B] font-semibold shadow-sm'
                      : 'text-[#A1AAA3] hover:text-[#F3F5F2] hover:bg-[#1A211D]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-3.5">
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] transition-all duration-200 shadow-md shadow-[#B7F36B]/20 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-[#151A17] border border-[#253129] text-[#A1AAA3] hover:text-[#F3F5F2] focus:outline-none focus:ring-2 focus:ring-[#B7F36B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D0C]/95 backdrop-blur-xl border-b border-[#1F2722] px-5 pt-4 pb-6 space-y-3.5 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium border ${
                  activeSection === item.href.substring(1)
                    ? 'bg-[#151A17] text-[#B7F36B] border-[#B7F36B]/30'
                    : 'bg-[#111513] text-[#A1AAA3] border-[#1F2722] hover:text-[#F3F5F2]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1F2722]">
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-[#B7F36B] text-[#0B0D0C] hover:bg-[#C5F785] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
