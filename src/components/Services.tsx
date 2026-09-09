import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Building2, 
  ShoppingBag, 
  Flame, 
  Cpu, 
  Sparkles, 
  Smartphone, 
  SearchCheck, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Service } from '../types';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const { services } = usePortfolio();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-teal-400" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#090d16]/70 backdrop-blur-sm border-t border-white/[0.06]">
      {/* Glow aura */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>High-Impact Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Services I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Engineered for performance, aesthetics, and measurable commercial results. Every solution is custom-coded to your business requirements.
          </motion.p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.07] hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-blue-500/10"
            >
              {/* Subtle top-right index badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs text-slate-500 font-semibold group-hover:text-blue-400 transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-3 mb-6">
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <div className="pt-3 border-t border-white/[0.05] space-y-1.5">
                  {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer with Arrow Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{service.deliveryTime}</span>
                </div>

                <button
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-white group/btn transition-colors focus:outline-none"
                  title={`Inquire about ${service.title}`}
                  id={`inquire-service-${service.id}`}
                >
                  <span>Inquire</span>
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 group-hover/btn:bg-blue-500 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Glowing bottom border indicator on hover */}
              <div className="absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
