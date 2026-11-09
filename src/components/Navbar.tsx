import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Board Boss', href: '#why-choose' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#team' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e1217]/95 backdrop-blur-md border-b border-[#283340] shadow-xl py-3.5'
          : 'bg-gradient-to-b from-[#0e1217]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-heading font-bold text-xl sm:text-2xl tracking-tight whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded bg-[#ff6b00] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md shadow-[#ff6b00]/20 group-hover:bg-[#e05e00] transition-colors">
              BB
            </div>
            <span>
              BOARD BOSS <span className="text-[#ff6b00]">DRYWALL</span>
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white hover:underline underline-offset-8 decoration-[#ff6b00] decoration-2 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Phone */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:9053212677"
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span className="tabular-nums">(905) 321-BOSS</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-lg shadow-lg shadow-[#ff6b00]/20 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151b22] border-b border-[#2b3746] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#2b3746]/50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:9053212677"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-300 bg-[#1c242f] rounded-lg border border-[#2b3746]"
            >
              <Phone className="w-4 h-4 text-[#ff6b00]" />
              <span className="tabular-nums">(905) 321-BOSS (2677)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#ff6b00] rounded-lg"
            >
              Request a Project Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
