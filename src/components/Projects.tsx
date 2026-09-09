import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  ArrowRight, 
  Eye, 
  Sparkles, 
  Layers, 
  TrendingUp,
  FolderGit2
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const { projects, setSelectedProjectModal } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Business',
    'Restaurant',
    'Automotive',
    'Real Estate',
    'E-Commerce',
    'Portfolio',
    'Web Apps',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featuredProject = projects.find(p => p.featured) || projects[0];

  return (
    <section id="projects" className="relative py-28 bg-[#090d16]/80 backdrop-blur-md border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>Verified Work Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Explore real-world client builds across luxury real estate, fine dining, exotic dealerships, and enterprise SaaS. Every project is crafted for conversion and speed.
          </motion.p>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Featured Project Hero Card (when All category is active and featuredProject exists) */}
        {activeCategory === 'All' && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 rounded-3xl p-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-purple-500/30 shadow-2xl"
          >
            <div className="rounded-[22px] bg-[#0c101a] p-6 sm:p-8 lg:p-10 border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Spotlight Project
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {featuredProject.category} • {featuredProject.year}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredProject.fullDescription}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {featuredProject.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-base sm:text-lg font-bold text-white">{m.value}</div>
                      <div className="text-[11px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-xs font-mono text-blue-300 border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProjectModal(featuredProject)}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-sm flex items-center gap-2 border border-white/[0.1] transition-all"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                  </a>
                </div>
              </div>

              {/* Right Image Preview (6 cols) */}
              <div 
                onClick={() => setSelectedProjectModal(featuredProject)}
                className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/[0.1] group cursor-pointer"
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-semibold">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Inspect Showcase</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl"
              >
                {/* Project Image Container */}
                <div 
                  onClick={() => setSelectedProjectModal(project)}
                  className="relative h-56 overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090d16]/85 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-blue-400">
                    {project.category}
                  </div>

                  {/* Top Right Inspect Tooltip */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono mb-1">
                      Client: {project.client}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.02] text-[10px] text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProjectModal(project)}
                      className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/[0.08] transition-all flex items-center gap-1.5"
                      id={`view-project-${project.id}`}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-xs font-semibold text-blue-300 hover:text-white border border-blue-500/30 transition-all flex items-center gap-1.5"
                      title="Open live website preview"
                      id={`live-demo-${project.id}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
