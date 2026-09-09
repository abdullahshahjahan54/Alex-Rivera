import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { settings, addInquiry, selectedServiceForContact, setSelectedServiceForContact } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    projectType: 'Custom Website Development',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // If a user clicked "Inquire" on a service card, automatically prefill the project type
  useEffect(() => {
    if (selectedServiceForContact) {
      setFormData(prev => ({ ...prev, projectType: selectedServiceForContact }));
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceForContact]);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide project details (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      addInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        businessName: formData.businessName || 'Independent',
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#06b6d4', '#10b981', '#ffffff'],
        });
      } catch {
        // Ignore if confetti fails
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        projectType: 'Custom Website Development',
        budget: '$5,000 - $10,000',
        message: '',
      });
      setSelectedServiceForContact(null);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#07090e] overflow-hidden border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4"
          >
            <span>Start A Collaboration</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Let&apos;s discuss your idea and build something amazing together. Fill out the form below or reach out directly for immediate assistance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards & Quick Connect (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/[0.08] shadow-xl space-y-6">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prefer an immediate conversation? Reach out directly via WhatsApp, email, or a phone call. I typically respond within 2-4 business hours.
              </p>

              {/* Direct Buttons */}
              <div className="space-y-3 pt-2">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent('Hi Alex, I would like to discuss a website project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-950/20 hover:bg-emerald-900/30 border border-emerald-500/30 text-white flex items-center justify-between transition-all group shadow-sm"
                  id="direct-whatsapp-btn"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Chat on WhatsApp</div>
                      <div className="text-sm font-bold text-white">Instant Message</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${settings.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="p-4 rounded-2xl bg-blue-950/20 hover:bg-blue-900/30 border border-blue-500/30 text-white flex items-center justify-between transition-all group shadow-sm"
                  id="direct-email-btn"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email Address</div>
                      <div className="text-sm font-bold text-white">{settings.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Phone Direct */}
                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-white flex items-center justify-between transition-all group shadow-sm"
                  id="direct-phone-btn"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Direct Phone</div>
                      <div className="text-sm font-bold text-white">{settings.phone}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Prompt reply guaranteed within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA &amp; client data privacy protection</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-white/[0.02] border border-white/[0.08] shadow-2xl relative">
              
              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Project Inquiry Received!</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Thank you for reaching out. Your inquiry has been logged directly into my system. I will review your requirements and follow up within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" id="portfolio-contact-form">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      id="input-name"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. marcus@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      id="input-email"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      id="input-phone"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Vance Hospitality Group"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      id="input-business-name"
                    />
                  </div>
                </div>

                {/* Row 3: Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c101a] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      id="select-project-type"
                    >
                      <option value="Custom Website Development">Custom Website Development</option>
                      <option value="Business Websites">Business Websites</option>
                      <option value="E-Commerce Development">E-Commerce Development</option>
                      <option value="Landing Pages">Landing Pages</option>
                      <option value="Web Applications">Web Applications</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Responsive Design">Responsive Design</option>
                      <option value="SEO-Friendly Development">SEO-Friendly Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c101a] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      id="select-budget"
                    >
                      <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Hourly / Retainer">Hourly / Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Overview &amp; Goals *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what you want to build, target launch dates, and key features..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    id="input-message"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:opacity-95 text-white font-bold text-base shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  id="submit-inquiry-btn"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  By submitting, you agree to direct communication regarding your project proposal.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
