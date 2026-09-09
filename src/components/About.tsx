import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Code, 
  Sparkles, 
  Smartphone, 
  Gauge, 
  Search, 
  Users, 
  ShieldCheck, 
  X, 
  Terminal, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { settings } = usePortfolio();
  const [showBioModal, setShowBioModal] = useState(false);

  const pillars = [
    {
      title: 'Professional Approach',
      desc: 'Transparent timelines, detailed project roadmaps, and frequent progress demos.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    },
    {
      title: 'Clean Code',
      desc: 'Strict TypeScript typing, modular architecture, and self-documenting clean components.',
      icon: <Code className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Modern UI/UX',
      desc: 'Contemporary design systems, micro-interactions, subtle glows, and dark/light luxury ergonomics.',
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Responsive Development',
      desc: 'Bespoke layouts engineered for mobile phones, tablets, laptops, and 4K displays.',
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Performance Optimization',
      desc: 'Sub-second page loads, minimal JavaScript payloads, WebP images, and 95+ Core Web Vitals.',
      icon: <Gauge className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'SEO-Friendly Structure',
      desc: 'Semantic HTML5 hierarchy, JSON-LD schema markup, OpenGraph cards, and fast crawlability.',
      icon: <Search className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Client-Focused Development',
      desc: 'I do not build for vanity; every feature is designed to convert visitors into paying clients.',
      icon: <Users className="w-5 h-5 text-rose-400" />,
    },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>About The Developer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Turning Ideas Into Powerful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Digital Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            I specialize in engineering modern websites and digital experiences for ambitious businesses.
            By uniting clean code craftsmanship with conversion-focused design, I transform your online presence
            from a digital business card into an active revenue engine.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Developer Visual & Decorative Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-white/[0.08] to-transparent shadow-2xl">
              <div className="relative rounded-[22px] bg-[#0c101a] p-6 sm:p-8 overflow-hidden border border-white/[0.08]">
                
                {/* Visual Avatar Banner */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-white/[0.08] group">
                  <img
                    src="https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=800&q=80"
                    alt="Developer workspace and creative code setup"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-[#0c101a]/40 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white">{settings.brandName}</span>
                    </div>
                    <span className="text-[11px] text-blue-300 font-mono">Full-Stack Craft</span>
                  </div>
                </div>

                {/* Micro Terminal Bio */}
                <div className="rounded-xl bg-[#07090e] border border-white/[0.06] p-4 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 pb-1 border-b border-white/[0.05]">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>developer-profile.config.ts</span>
                  </div>
                  <div>
                    <span className="text-purple-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4 text-slate-400">
                    name: <span className="text-emerald-300">&apos;{settings.brandName}&apos;</span>,
                  </div>
                  <div className="pl-4 text-slate-400">
                    location: <span className="text-cyan-300">&apos;{settings.location}&apos;</span>,
                  </div>
                  <div className="pl-4 text-slate-400">
                    focus: <span className="text-amber-300">&apos;High-Converting Web Architecture&apos;</span>,
                  </div>
                  <div className="pl-4 text-slate-400">
                    corePhilosophy: <span className="text-blue-300">&apos;Speed, Beauty &amp; Conversions&apos;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* More About Me Button */}
                <button
                  onClick={() => setShowBioModal(true)}
                  className="mt-6 w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.1] hover:border-blue-500/40 text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 group"
                  id="more-about-me-btn"
                >
                  <span>More About Me</span>
                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* 7 Core Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <h3 className="text-xl font-bold text-white mb-4">
              My Engineering &amp; Delivery Standards:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/30 transition-all group ${
                    idx === pillars.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Extended Biography Modal */}
      <AnimatePresence>
        {showBioModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0c101a] border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBioModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Behind The Code</h3>
                  <p className="text-xs text-blue-400 font-mono">{settings.profession}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-white/[0.08] pt-4">
                <p>
                  Hello! I&apos;m <strong className="text-white">{settings.brandName}</strong>, a web developer obsessed with high-speed performance, sharp typography, and conversion-driven digital products.
                </p>
                <p>
                  Over the past {settings.yearsExperience}+ years, I have worked alongside entrepreneurs, restaurant directors, real estate developers, and corporate founders to eliminate slow, generic templates. I replace them with bespoke, lightning-fast digital assets that immediately command authority.
                </p>

                <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20">
                  <h4 className="text-xs uppercase font-bold text-blue-300 tracking-wider mb-2">
                    My Core Development Rule:
                  </h4>
                  <p className="text-xs text-slate-300 italic">
                    &ldquo;If a website takes longer than 1.5 seconds to load, or fails to clarify the business value proposition in 5 seconds, it is losing money every single hour.&rdquo;
                  </p>
                </div>

                <h4 className="text-sm font-bold text-white pt-2">Why work with an independent specialist?</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Direct communication:</strong> No junior account managers or endless back-and-forth telephone games. You speak directly with the engineer writing your code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Tailored architecture:</strong> Clean TypeScript components built for your exact operational requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Long-term reliability:</strong> Modern codebases that are easy to maintain, extend, and scale.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setShowBioModal(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
