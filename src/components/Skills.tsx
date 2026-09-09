import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Code, 
  FileJson, 
  Atom, 
  Zap, 
  Layers, 
  Server, 
  Database, 
  Flame, 
  Network, 
  GitBranch, 
  Github, 
  Cpu 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools & Cloud'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools & Cloud'] as const;

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2':
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-yellow-400" />;
      case 'FileJson':
        return <FileJson className="w-5 h-5 text-blue-400" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-cyan-400 animate-spin-slow" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-slate-100" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Network':
        return <Network className="w-5 h-5 text-purple-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'Github':
        return <Github className="w-5 h-5 text-slate-200" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>Technical Mastery</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Technologies &amp; Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            I leverage modern, battle-tested technologies to deliver fast, secure, and future-proof digital platforms.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/40 p-4 sm:p-5 flex flex-col justify-between group transition-all duration-200 shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-200">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    {skill.experience}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h4>
                  <div className="text-[11px] text-slate-400 mb-2.5">
                    {skill.category}
                  </div>

                  {/* Level meter bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
