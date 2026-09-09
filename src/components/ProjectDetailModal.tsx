import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Calendar, 
  Building, 
  Layers, 
  TrendingUp,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0c101a] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0a0d15]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
              id="close-project-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Main Preview Image with Glow & Overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-slate-900 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs text-blue-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    Client: {project.client}
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all border border-white/[0.1]"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Deep Dive Overview */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Project Architecture &amp; Execution
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Deliverables & Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Key Technical Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-[#0a0d15] border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Need a similar solution for your business?
            </span>
            <button
              onClick={() => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
            >
              Start This Project
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
