import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Terminal, 
  Laptop, 
  CheckCircle2, 
  Zap, 
  TrendingUp,
  Cpu,
  Layers,
  Eye
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HeroProps {
  onViewWorkClick: () => void;
  onStartProjectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onStartProjectClick }) => {
  const { settings } = usePortfolio();
  const [activeVisualTab, setActiveVisualTab] = useState<'editor' | 'preview'>('editor');

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#60a5fa 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/[0.08] border border-blue-500/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-blue-200">
                Available for New Projects
              </span>
              <span className="text-blue-500/50">|</span>
              <span className="text-[11px] text-slate-400">Q2 &amp; Q3 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Digital Experiences That Make Businesses{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Stand Out.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              I design and develop modern, responsive and high-performance websites that help businesses build a strong online presence and turn visitors into customers.
            </p>

            {/* Secondary Tagline Pill */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-400 mb-8 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5">
              <span className="text-blue-400 font-semibold">Modern</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-semibold">Fast</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-400 font-semibold">Responsive</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">SEO-Friendly</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onViewWorkClick}
                className="group relative px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                id="hero-view-work-btn"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartProjectClick}
                className="px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-blue-400/40 transition-all duration-200 flex items-center justify-center gap-2 hover:text-white"
                id="hero-start-project-btn"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Start a Project</span>
              </button>
            </div>

            {/* Target Audience Badges */}
            <div className="mt-10 pt-8 border-t border-white/[0.06] w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                Tailored for high-growth sectors:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Small Businesses',
                  'Restaurants',
                  'Car Dealerships',
                  'Real Estate',
                  'Startups',
                  'E-Commerce',
                  'Personal Brands',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Mockup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Developer Window Shell */}
            <div className="relative rounded-2xl bg-[#0d111a]/90 border border-white/[0.1] shadow-2xl shadow-blue-950/50 backdrop-blur-xl overflow-hidden group">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d14] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">
                    {activeVisualTab === 'editor' ? 'ProductionApp.tsx' : 'LivePreview — 60fps'}
                  </span>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center bg-white/[0.05] p-0.5 rounded-lg border border-white/[0.06]">
                  <button
                    onClick={() => setActiveVisualTab('editor')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1.5 ${
                      activeVisualTab === 'editor'
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Code</span>
                  </button>
                  <button
                    onClick={() => setActiveVisualTab('preview')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1.5 ${
                      activeVisualTab === 'preview'
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Animated Code Editor */}
              {activeVisualTab === 'editor' ? (
                <div className="p-5 font-mono text-[12.5px] leading-relaxed text-slate-300 overflow-x-auto min-h-[340px] select-none">
                  <div className="text-slate-500 mb-2">
                    // Modern React 19 + TypeScript + Next.js Engine
                  </div>
                  <div>
                    <span className="text-purple-400">import</span> &#123;{' '}
                    <span className="text-blue-300">ModernExperience</span> &#125;{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-emerald-300">&apos;@digital/agency&apos;</span>;
                  </div>
                  <div>
                    <span className="text-purple-400">import</span> &#123;{' '}
                    <span className="text-blue-300">FastSpeed</span>,{' '}
                    <span className="text-blue-300">HighConversion</span> &#125;{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-emerald-300">&apos;@metrics/growth&apos;</span>;
                  </div>
                  <br />
                  <div>
                    <span className="text-blue-400">export default function</span>{' '}
                    <span className="text-amber-300">Website</span>() &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-200">business</span> = &#123;
                  </div>
                  <div className="pl-8 text-cyan-300">
                    performance: <span className="text-amber-400">&apos;100/100 Core Web Vitals&apos;</span>,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    conversionRate: <span className="text-emerald-400">+140%</span>,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    loadTime: <span className="text-blue-400">&apos;0.38s (Global CDN)&apos;</span>,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    seoRankings: <span className="text-purple-300">&apos;Page 1 Google&apos;</span>,
                  </div>
                  <div className="pl-4">&#125;;</div>
                  <br />
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-8 text-blue-400">
                    &lt;<span className="text-cyan-400">DigitalFlagship</span>&#123;...business&#125;&gt;
                  </div>
                  <div className="pl-12 text-slate-400">
                    &lt;<span className="text-indigo-300">DeliverCustomerValue</span> /&gt;
                  </div>
                  <div className="pl-8 text-blue-400">&lt;/<span className="text-cyan-400">DigitalFlagship</span>&gt;</div>
                  <div className="pl-4">);</div>
                  <div>&#125;</div>
                </div>
              ) : (
                /* Tab 2: Live UI Interactive Card Preview */
                <div className="p-5 min-h-[340px] flex flex-col justify-between bg-gradient-to-br from-[#0c1220] to-[#080c14]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                          <Laptop className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white">Client Showcase Preview</span>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Live Uptime 99.99%
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-xs text-slate-400 mb-1">Monthly Conversion Lift</div>
                      <div className="text-2xl font-bold text-white flex items-center gap-2">
                        <span>+185.4%</span>
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[85%] rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <div className="text-[11px] text-slate-400">SEO Index</div>
                        <div className="text-sm font-bold text-cyan-300">100 / 100</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <div className="text-[11px] text-slate-400">TTFB Speed</div>
                        <div className="text-sm font-bold text-emerald-400">42 ms</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <span>Target: Mobile &amp; Desktop</span>
                    <span className="text-blue-400 font-mono">SSR Cached</span>
                  </div>
                </div>
              )}

              {/* Status footer bar */}
              <div className="px-4 py-2 bg-[#090c13] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> TypeScript 5.8
                  </span>
                  <span>ESM Module</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Vite / Next 15</span>
                </div>
              </div>
            </div>

            {/* Floating UI Badge 1: PageSpeed Score (Top Right) */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 sm:-right-6 bg-[#0c101a]/95 border border-emerald-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Google Lighthouse</div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="text-emerald-400">100 / 100</span>
                  <span className="text-[10px] text-slate-400 font-normal">Score</span>
                </div>
              </div>
            </motion.div>

            {/* Floating UI Badge 2: Tech Stack (Bottom Left) */}
            <motion.div
              animate={{ y: [6, -5, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0c101a]/95 border border-blue-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Stack Architecture</div>
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <span className="text-blue-300">React 19</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-cyan-300">Next.js</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-indigo-300">Tailwind</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
