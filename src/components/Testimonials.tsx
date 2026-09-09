import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Building, 
  CheckCircle2,
  Pause,
  Play
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Testimonials: React.FC = () => {
  const { testimonials } = usePortfolio();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const total = testimonials.length;

  useEffect(() => {
    if (!isAutoplay || total <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, total]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  if (total === 0) return null;
  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>Client Success Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Trusted by Ambitious Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Read candid feedback from business owners and founders whose digital revenue grew with our bespoke engineering.
          </motion.p>
        </div>

        {/* Testimonials Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-blue-500/20 via-white/[0.06] to-cyan-500/20 shadow-2xl">
            <div className="rounded-[22px] bg-[#0c101a] p-8 sm:p-12 border border-white/[0.08] relative overflow-hidden">
              
              {/* Quote icon watermark */}
              <Quote className="absolute top-6 right-8 w-24 h-24 text-white/[0.02] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < current.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Review
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed italic">
                    &ldquo;{current.review}&rdquo;
                  </p>

                  {/* Client Information */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="w-14 h-14 rounded-2xl object-cover object-center border border-blue-500/30"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-white text-base">
                          {current.name}
                        </h4>
                        <p className="text-xs text-blue-400 font-medium flex items-center gap-1 mt-0.5">
                          <Building className="w-3 h-3" />
                          {current.role}, {current.business}
                        </p>
                      </div>
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs font-mono text-slate-300">
                      Project: {current.projectType}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-8 bg-blue-500'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons & Autoplay toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                    title={isAutoplay ? 'Pause carousel' : 'Resume carousel'}
                    aria-label={isAutoplay ? 'Pause carousel' : 'Resume carousel'}
                  >
                    {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                    aria-label="Previous testimonial"
                    id="prev-testimonial-btn"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                    aria-label="Next testimonial"
                    id="next-testimonial-btn"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
