import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Lock, 
  Unlock, 
  Inbox, 
  Briefcase, 
  Sliders, 
  Settings, 
  MessageSquare, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Plus, 
  Edit3, 
  ExternalLink,
  Save,
  RotateCcw,
  Sparkles,
  Phone,
  Mail,
  Building,
  DollarSign
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Project, Testimonial, ProjectCategory } from '../../types';

export const AdminDashboard: React.FC = () => {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    isAdminAuthenticated, 
    setIsAdminAuthenticated,
    inquiries,
    updateInquiryStatus,
    deleteInquiry,
    projects,
    addProject,
    updateProject,
    deleteProject,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    settings,
    updateSettings,
    resetToDefaults
  } = usePortfolio();

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'projects' | 'testimonials' | 'settings'>('inquiries');

  // Filter inquiries
  const [inquiryFilter, setInquiryFilter] = useState<'all' | 'new' | 'contacted' | 'completed'>('all');

  // Edit / Add Project state
  const [isEditingProject, setIsEditingProject] = useState<boolean>(false);
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    title: '',
    category: 'Business',
    shortDescription: '',
    fullDescription: '',
    client: '',
    year: '2026',
    liveUrl: 'https://unsplash.com',
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    features: ['Responsive UI', 'Sub-second loading', 'Conversion optimized'],
    metrics: [{ label: 'PageSpeed', value: '100/100' }, { label: 'Conversions', value: '+120%' }],
    featured: false,
  });

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(settings);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123' || passwordInput === 'admin') {
      setIsAdminAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. (Demo passcode: admin123)');
    }
  };

  const handleDemoUnlock = () => {
    setIsAdminAuthenticated(true);
    setAuthError('');
  };

  const filteredInquiries = inquiryFilter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === inquiryFilter);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setSaveSuccessMsg('Website settings saved successfully!');
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title) return;

    if (projectForm.id) {
      updateProject(projectForm as Project);
    } else {
      addProject({
        title: projectForm.title || 'Untitled Project',
        category: (projectForm.category as ProjectCategory) || 'Business',
        shortDescription: projectForm.shortDescription || '',
        fullDescription: projectForm.fullDescription || '',
        client: projectForm.client || 'Private Client',
        year: projectForm.year || '2026',
        liveUrl: projectForm.liveUrl || '#',
        githubUrl: projectForm.githubUrl,
        image: projectForm.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        technologies: projectForm.technologies || ['React', 'Tailwind CSS'],
        features: projectForm.features || ['Modern UX'],
        metrics: projectForm.metrics || [{ label: 'Performance', value: '100%' }],
        featured: !!projectForm.featured,
      });
    }

    setIsEditingProject(false);
    setProjectForm({
      title: '',
      category: 'Business',
      shortDescription: '',
      fullDescription: '',
      client: '',
      year: '2026',
      liveUrl: 'https://unsplash.com',
      githubUrl: '',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      features: ['Responsive UI', 'Sub-second loading', 'Conversion optimized'],
      metrics: [{ label: 'PageSpeed', value: '100/100' }],
      featured: false,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl bg-[#090d16] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] my-4"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07090e]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2">
                Portfolio CMS &amp; Inquiries Panel
                {isAdminAuthenticated && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Mode
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-400">Dynamic website content &amp; client inquiry management</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated && (
              <button
                onClick={() => setIsAdminAuthenticated(false)}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                title="Lock admin panel"
              >
                <Lock className="w-3 h-3" />
                <span className="hidden sm:inline">Lock</span>
              </button>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
              aria-label="Close admin dashboard"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Gate if not authenticated */}
        {!isAdminAuthenticated ? (
          <div className="p-8 sm:p-12 max-w-md mx-auto text-center space-y-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Admin Authentication</h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter your security passcode to access client inquiries, edit showcase projects, and update site settings.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter passcode (e.g. admin123)"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 text-center font-mono"
              />
              {authError && <p className="text-xs text-rose-400">{authError}</p>}
              
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Dashboard</span>
              </button>
            </form>

            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={handleDemoUnlock}
                className="text-xs text-blue-400 hover:text-blue-300 underline font-medium"
              >
                Or click here to 1-Click Demo Unlock (Instant Access)
              </button>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Tabs & Views */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-white/[0.06] bg-[#07090e]/60 overflow-x-auto">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'inquiries'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Inbox className="w-3.5 h-3.5" />
                <span>Client Inquiries ({inquiries.length})</span>
                {inquiries.filter(i => i.status === 'new').length > 0 && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'projects'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Manage Projects ({projects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'testimonials'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Testimonials ({testimonials.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'settings'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Website Settings</span>
              </button>
            </div>

            {/* Content Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              
              {/* TAB 1: INQUIRIES MANAGEMENT */}
              {activeTab === 'inquiries' && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Contact Form Inquiries</h3>
                      <p className="text-xs text-slate-400">All prospect submissions captured in real-time</p>
                    </div>

                    {/* Status Filter Buttons */}
                    <div className="flex items-center gap-1.5 bg-white/[0.03] p-1 rounded-xl border border-white/[0.06]">
                      {(['all', 'new', 'contacted', 'completed'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setInquiryFilter(filter)}
                          className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-colors ${
                            inquiryFilter === filter
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {filteredInquiries.length === 0 ? (
                    <div className="p-12 text-center text-slate-500 rounded-2xl bg-white/[0.01] border border-white/[0.05]">
                      No inquiries found in this view.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredInquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/30 transition-all space-y-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                inq.status === 'new'
                                  ? 'bg-cyan-400 animate-pulse'
                                  : inq.status === 'contacted'
                                  ? 'bg-amber-400'
                                  : 'bg-emerald-400'
                              }`} />
                              <div>
                                <h4 className="font-bold text-white text-base">{inq.name}</h4>
                                <span className="text-xs text-slate-400 font-mono">
                                  {new Date(inq.createdAt).toLocaleDateString()} at{' '}
                                  {new Date(inq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                              </div>
                            </div>

                            {/* Status Changer Select & Delete */}
                            <div className="flex items-center gap-2">
                              <select
                                value={inq.status}
                                onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                                className="px-2.5 py-1.5 rounded-lg bg-[#0c101a] border border-white/[0.1] text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
                              >
                                <option value="new">Mark as: New</option>
                                <option value="contacted">Mark as: Contacted</option>
                                <option value="completed">Mark as: Completed</option>
                              </select>

                              <button
                                onClick={() => deleteInquiry(inq.id)}
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors"
                                title="Delete inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Quick Info Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-white/[0.01] p-3 rounded-xl border border-white/[0.04]">
                            <div>
                              <span className="text-slate-500 block">Business:</span>
                              <span className="text-slate-200 font-medium">{inq.businessName}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Service:</span>
                              <span className="text-blue-400 font-medium">{inq.projectType}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Budget:</span>
                              <span className="text-emerald-400 font-medium">{inq.budget}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Contact:</span>
                              <div className="flex items-center gap-2 pt-0.5">
                                <a
                                  href={`mailto:${inq.email}`}
                                  className="text-blue-400 hover:underline"
                                  title="Send email"
                                >
                                  Email
                                </a>
                                {inq.phone && inq.phone !== 'Not provided' && (
                                  <>
                                    <span className="text-slate-600">•</span>
                                    <a
                                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-emerald-400 hover:underline"
                                      title="WhatsApp"
                                    >
                                      WhatsApp
                                    </a>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Message Body */}
                          <div className="p-3 rounded-xl bg-[#080b12] text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                            &ldquo;{inq.message}&rdquo;
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: PROJECTS MANAGEMENT */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Project Showcase Manager</h3>
                      <p className="text-xs text-slate-400">Add, edit, feature, or remove portfolio case studies</p>
                    </div>

                    {!isEditingProject && (
                      <button
                        onClick={() => {
                          setProjectForm({
                            title: '',
                            category: 'Business',
                            shortDescription: '',
                            fullDescription: '',
                            client: '',
                            year: '2026',
                            liveUrl: 'https://unsplash.com',
                            githubUrl: '',
                            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
                            technologies: ['React', 'Next.js', 'Tailwind CSS'],
                            features: ['Responsive UI', 'Sub-second loading'],
                            metrics: [{ label: 'PageSpeed', value: '100/100' }],
                            featured: false,
                          });
                          setIsEditingProject(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Project</span>
                      </button>
                    )}
                  </div>

                  {/* Edit/Add Form */}
                  {isEditingProject ? (
                    <form onSubmit={handleSaveProject} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.1] space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                        <h4 className="font-bold text-white text-sm">
                          {projectForm.id ? 'Edit Project' : 'Create New Project'}
                        </h4>
                        <button
                          type="button"
                          onClick={() => setIsEditingProject(false)}
                          className="text-xs text-slate-400 hover:text-white"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Project Title</label>
                          <input
                            type="text"
                            required
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Category</label>
                          <select
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as ProjectCategory })}
                            className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                          >
                            <option value="Business">Business</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="Portfolio">Portfolio</option>
                            <option value="Web Apps">Web Apps</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Client Name</label>
                          <input
                            type="text"
                            value={projectForm.client}
                            onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Year</label>
                          <input
                            type="text"
                            value={projectForm.year}
                            onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Spotlight Featured</label>
                          <label className="flex items-center gap-2 pt-2 text-xs text-slate-300 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={!!projectForm.featured}
                              onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                              className="rounded border-white/20"
                            />
                            <span>Feature on Homepage Hero</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Image URL (Unsplash or direct WebP/PNG)</label>
                        <input
                          type="url"
                          value={projectForm.image}
                          onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Live Demo URL</label>
                        <input
                          type="url"
                          value={projectForm.liveUrl}
                          onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Short Description</label>
                        <input
                          type="text"
                          value={projectForm.shortDescription}
                          onChange={(e) => setProjectForm({ ...projectForm, shortDescription: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Full Description (Case Study)</label>
                        <textarea
                          rows={3}
                          value={projectForm.fullDescription}
                          onChange={(e) => setProjectForm({ ...projectForm, fullDescription: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white resize-none"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsEditingProject(false)}
                          className="px-4 py-2 rounded-lg bg-white/[0.05] text-xs text-slate-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                        >
                          Save Project
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projects.map((p) => (
                        <div
                          key={p.id}
                          className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-14 h-14 rounded-xl object-cover"
                            />
                            <div>
                              <h4 className="text-sm font-bold text-white">{p.title}</h4>
                              <span className="text-[11px] text-blue-400 font-mono">
                                {p.category} {p.featured && '• Spotlight'}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setProjectForm(p);
                                setIsEditingProject(true);
                              }}
                              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300"
                              title="Edit project"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deleteProject(p.id)}
                              className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                              title="Delete project"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: TESTIMONIALS MANAGEMENT */}
              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Client Testimonials</h3>
                      <p className="text-xs text-slate-400">Manage client reviews shown in the homepage carousel</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {testimonials.map((t) => (
                      <div
                        key={t.id}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start justify-between gap-4"
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-10 h-10 rounded-xl object-cover"
                          />
                          <div>
                            <div className="text-sm font-bold text-white">{t.name}</div>
                            <div className="text-xs text-slate-400">{t.role}, {t.business}</div>
                            <p className="text-xs text-slate-300 mt-2 italic">&ldquo;{t.review}&rdquo;</p>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteTestimonial(t.id)}
                          className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 shrink-0"
                          title="Delete testimonial"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SETTINGS MANAGEMENT */}
              {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="text-lg font-bold text-white">Website &amp; Brand Settings</h3>
                    <p className="text-xs text-slate-400">Update your portfolio branding, contact channels, and live metrics</p>
                  </div>

                  {saveSuccessMsg && (
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>{saveSuccessMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Brand Name</label>
                      <input
                        type="text"
                        value={settingsForm.brandName}
                        onChange={(e) => setSettingsForm({ ...settingsForm, brandName: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Profession</label>
                      <input
                        type="text"
                        value={settingsForm.profession}
                        onChange={(e) => setSettingsForm({ ...settingsForm, profession: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Contact Email</label>
                      <input
                        type="email"
                        value={settingsForm.email}
                        onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Phone Number</label>
                      <input
                        type="text"
                        value={settingsForm.phone}
                        onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">WhatsApp Number (Digits only)</label>
                      <input
                        type="text"
                        value={settingsForm.whatsappNumber}
                        onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                        placeholder="15552348901"
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Location</label>
                      <input
                        type="text"
                        value={settingsForm.location}
                        onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Metrics Counters */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Websites Built</label>
                      <input
                        type="number"
                        value={settingsForm.websitesBuilt}
                        onChange={(e) => setSettingsForm({ ...settingsForm, websitesBuilt: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Happy Clients</label>
                      <input
                        type="number"
                        value={settingsForm.happyClients}
                        onChange={(e) => setSettingsForm({ ...settingsForm, happyClients: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Years Experience</label>
                      <input
                        type="number"
                        value={settingsForm.yearsExperience}
                        onChange={(e) => setSettingsForm({ ...settingsForm, yearsExperience: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0c101a] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={resetToDefaults}
                      className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Defaults</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-blue-500/20 transition-all"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save All Settings</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};
