import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  Smartphone, 
  Search, 
  Code, 
  ShieldCheck, 
  HeadphonesIcon, 
  Briefcase 
} from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const points = [
    {
      title: 'Modern Design',
      description: 'Sophisticated aesthetics, balanced negative space, and custom UI components tailored to modern tastes.',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    },
    {
      title: 'Fast Performance',
      description: 'Sub-second page rendering, lightweight asset bundles, and 95+ Google Lighthouse scores.',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Fully Responsive',
      description: 'Pixel-perfect fluidity across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'SEO Friendly',
      description: 'Technical SEO hygiene, semantic tags, OpenGraph previews, and clean crawlable architectures.',
      icon: <Search className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Clean Development',
      description: 'Modular TypeScript codebase, no bloated drag-and-drop builders, and self-documenting code.',
      icon: <Code className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Secure Solutions',
      description: 'Hardened HTTP headers, sanitization against XSS/CSRF, and secure environment credentials handling.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Client Support',
      description: 'Dedicated post-launch warranty, direct WhatsApp & email access, and prompt feature updates.',
      icon: <HeadphonesIcon className="w-5 h-5 text-pink-400" />,
    },
    {
      title: 'Business Focused',
      description: 'Every layout decision, button placement, and headline is engineered to turn casual traffic into paying clients.',
      icon: <Briefcase className="w-5 h-5 text-teal-400" />,
    },
  ];

  return (
    <section className="relative py-28 bg-[#090d16]/70 backdrop-blur-sm border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>The Competitive Edge</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Why Choose Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            I do not build generic cookie-cutter templates. Here is why ambitious businesses partner with me for their primary digital infrastructure.
          </motion.p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  {point.icon}
                </div>
                {/* Animated checkmark indicator */}
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-300 transition-colors mb-2 flex items-center gap-1.5">
                <span>{point.title}</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
