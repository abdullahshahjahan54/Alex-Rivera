import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Code2, 
  ShieldCheck, 
  SlidersHorizontal,
  Briefcase,
  Map
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const { settings, setIsAdminOpen, setIsSiteMapOpen, inquiries } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const newInquiriesCount = inquiries.filter(i => i.status === 'new').length;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0d14] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-blue-200 transition-colors flex items-center gap-1.5">
                {settings.brandName}
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
              </span>
              <span className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                {settings.profession}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                  id={`nav-${link.name.toLowerCase()}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-blue-500/20 border border-blue-400/40 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Sitemap Modal Trigger */}
            <button
              onClick={() => setIsSiteMapOpen(true)}
              className="px-3 py-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all hover:border-blue-500/30 flex items-center gap-1.5 text-xs font-semibold"
              title="View Structured Site Map & Architecture"
              id="open-sitemap-btn"
            >
              <Map className="w-3.5 h-3.5 text-blue-400" />
              <span>Sitemap</span>
            </button>

            {/* Admin Dashboard Trigger */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="relative p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all hover:border-blue-500/30"
              title="Open Admin CMS Dashboard"
              id="open-admin-btn"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {newInquiriesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#07090e]">
                  {newInquiriesCount}
                </span>
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={onContactClick}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-sm focus:outline-none"
              id="cta-navbar-work"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 rounded-full group-hover:opacity-100 transition-opacity" />
              <span className="relative block px-5 py-2 rounded-full bg-[#0b0e17] text-white group-hover:bg-transparent transition-all duration-200 flex items-center gap-2">
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu & Admin Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsSiteMapOpen(true)}
              className="p-2.5 rounded-xl text-slate-300 bg-white/[0.05] border border-white/10"
              aria-label="Open sitemap"
            >
              <Map className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2.5 rounded-xl text-slate-300 bg-white/[0.05] border border-white/10"
              aria-label="Admin settings"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-white/[0.08] bg-[#090d16]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="px-4 py-3 text-base font-medium rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-blue-400/80">#</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSiteMapOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Map className="w-4 h-4 text-blue-400" />
                  <span>Interactive Site Map (XML / Structure)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdminOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4 text-blue-400" />
                  <span>Manage Portfolio (Admin CMS)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
