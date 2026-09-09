import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Workflow, 
  PenTool, 
  Code, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Process: React.FC = () => {
  const { processSteps } = usePortfolio();
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-cyan-400" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-indigo-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>Structured Execution</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            How I Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            A battle-tested, 5-stage development methodology designed for speed, clarity, and zero surprise delays.
          </motion.p>
        </div>

        {/* 5-Step Animated Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10 -translate-y-12 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-blue-950/30 border-blue-500/60 shadow-xl shadow-blue-500/10 scale-105'
                      : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.07] hover:border-blue-500/30'
                  }`}
                >
                  {/* Top indicator & step number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isSelected
                        ? 'bg-blue-600/30 border-blue-400 text-white'
                        : 'bg-white/[0.04] border-white/[0.08] text-slate-300 group-hover:scale-110'
                    }`}>
                      {getStepIcon(step.iconName)}
                    </div>
                    <span className={`font-mono text-sm font-bold tracking-wider ${
                      isSelected ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-6">
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      Deliverables:
                    </div>
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom indicator */}
                  <div className={`mt-4 pt-2 text-[11px] font-medium flex items-center justify-between transition-colors ${
                    isSelected ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    <span>Phase {idx + 1} of 5</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-blue-400' : ''}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
