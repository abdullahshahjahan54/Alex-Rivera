import React from 'react';
import { 
  Code2, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUp, 
  SlidersHorizontal,
  Mail,
  Phone,
  Map
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { settings, setIsAdminOpen, setIsSiteMapOpen } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#0a0d14] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {settings.brandName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building modern digital experiences for businesses. Turning concepts into scalable, fast, and high-converting web applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={settings.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter/X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(`#${item.toLowerCase()}`);
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsSiteMapOpen(true)}
                  className="hover:text-blue-400 text-blue-400/90 transition-colors flex items-center gap-1 text-xs sm:text-sm"
                  id="footer-sitemap-link"
                >
                  <Map className="w-3 h-3 text-blue-400" />
                  <span>Interactive Sitemap</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                'Web Development',
                'Business Websites',
                'E-Commerce',
                'Landing Pages',
                'Web Applications',
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#services');
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${settings.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{settings.email}</span>
              </a>
              <a
                href={`tel:${settings.phone}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{settings.phone}</span>
              </a>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsSiteMapOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white border border-blue-500/20 text-xs transition-colors"
                  title="View Site Map & Architecture"
                >
                  <Map className="w-3 h-3 text-blue-400" />
                  <span>Site Map</span>
                </button>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] text-xs transition-colors"
                  title="Admin Settings & CMS"
                >
                  <SlidersHorizontal className="w-3 h-3 text-blue-400" />
                  <span>Admin CMS</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <span className="text-slate-400 font-medium">{settings.brandName}</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React 19, TypeScript &amp; Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors flex items-center gap-1"
              aria-label="Back to top"
              id="back-to-top-btn"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
