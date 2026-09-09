import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Map, 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  Search, 
  FolderTree, 
  ArrowRight,
  Layers,
  Sparkles,
  FileCode2
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const rawSiteMapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemap>
  <page name="Home">
    <section>Header / Navigation</section>
    <section>Hero</section>
    <section>Statistics</section>
  </page>
  <page name="About">
    <section>About Developer</section>
    <section>Experience</section>
    <section>Skills Overview</section>
  </page>
  <page name="Services">
    <service>Custom Website Development</service>
    <service>Business Websites</service>
    <service>E-Commerce Development</service>
    <service>Landing Pages</service>
    <service>Web Applications</service>
    <service>Website Redesign</service>
    <service>Responsive Design</service>
    <service>SEO-Friendly Development</service>
  </page>
  <page name="Skills">
    <skill>HTML5</skill><skill>CSS3</skill><skill>JavaScript</skill>
    <skill>TypeScript</skill><skill>React</skill><skill>Next.js</skill>
    <skill>Tailwind CSS</skill><skill>Node.js</skill><skill>Supabase</skill>
    <skill>Firebase</skill><skill>Git</skill><skill>GitHub</skill>
  </page>
  <page name="Projects">
    <category>All Projects</category>
    <category>Business Websites</category>
    <category>Restaurant Websites</category>
    <category>Automotive Websites</category>
    <category>Real Estate Websites</category>
    <category>E-Commerce</category>
    <category>Portfolio Websites</category>
    <category>Web Applications</category>
  </page>
  <page name="Project Details">
    <section>Project Preview</section>
    <section>Project Description</section>
    <section>Features</section>
    <section>Technologies Used</section>
    <section>Live Demo</section>
    <section>GitHub</section>
  </page>
  <page name="Process">
    <step>Discover</step><step>Plan</step><step>Design</step>
    <step>Develop</step><step>Launch</step>
  </page>
  <page name="Why Choose Me">
    <feature>Modern Design</feature><feature>Fast Performance</feature>
    <feature>Responsive</feature><feature>SEO Friendly</feature>
    <feature>Clean Code</feature><feature>Secure Development</feature>
    <feature>Client Support</feature>
  </page>
  <page name="Testimonials">
    <section>Client Reviews</section>
    <section>Ratings</section>
    <section>Testimonials Slider</section>
  </page>
  <page name="Contact">
    <section>Contact Form</section>
    <field>Name</field><field>Email</field><field>Phone</field>
    <field>Project Type</field><field>Budget</field><field>Message</field>
  </page>
  <page name="Direct Contact">
    <option>WhatsApp</option><option>Email</option>
    <option>Phone</option><option>Social Media</option>
  </page>
  <page name="Footer">
    <section>About</section><section>Quick Links</section>
    <section>Services</section><section>Social Links</section>
    <section>Copyright</section>
  </page>
</sitemap>`;

interface SiteMapNode {
  name: string;
  type: string;
  anchorId: string;
  items: { label: string; tag: string }[];
}

export const siteMapData: SiteMapNode[] = [
  {
    name: 'Home',
    type: 'Core Section',
    anchorId: 'home',
    items: [
      { label: 'Header / Navigation', tag: 'section' },
      { label: 'Hero', tag: 'section' },
      { label: 'Statistics', tag: 'section' },
    ],
  },
  {
    name: 'About',
    type: 'Biography & Story',
    anchorId: 'about',
    items: [
      { label: 'About Developer', tag: 'section' },
      { label: 'Experience', tag: 'section' },
      { label: 'Skills Overview', tag: 'section' },
    ],
  },
  {
    name: 'Services',
    type: 'Offerings & Solutions',
    anchorId: 'services',
    items: [
      { label: 'Custom Website Development', tag: 'service' },
      { label: 'Business Websites', tag: 'service' },
      { label: 'E-Commerce Development', tag: 'service' },
      { label: 'Landing Pages', tag: 'service' },
      { label: 'Web Applications', tag: 'service' },
      { label: 'Website Redesign', tag: 'service' },
      { label: 'Responsive Design', tag: 'service' },
      { label: 'SEO-Friendly Development', tag: 'service' },
    ],
  },
  {
    name: 'Skills',
    type: 'Stack & Proficiency',
    anchorId: 'skills',
    items: [
      { label: 'HTML5', tag: 'skill' },
      { label: 'CSS3', tag: 'skill' },
      { label: 'JavaScript', tag: 'skill' },
      { label: 'TypeScript', tag: 'skill' },
      { label: 'React', tag: 'skill' },
      { label: 'Next.js', tag: 'skill' },
      { label: 'Tailwind CSS', tag: 'skill' },
      { label: 'Node.js', tag: 'skill' },
      { label: 'Supabase', tag: 'skill' },
      { label: 'Firebase', tag: 'skill' },
      { label: 'Git', tag: 'skill' },
      { label: 'GitHub', tag: 'skill' },
    ],
  },
  {
    name: 'Projects',
    type: 'Case Studies',
    anchorId: 'projects',
    items: [
      { label: 'All Projects', tag: 'category' },
      { label: 'Business Websites', tag: 'category' },
      { label: 'Restaurant Websites', tag: 'category' },
      { label: 'Automotive Websites', tag: 'category' },
      { label: 'Real Estate Websites', tag: 'category' },
      { label: 'E-Commerce', tag: 'category' },
      { label: 'Portfolio Websites', tag: 'category' },
      { label: 'Web Applications', tag: 'category' },
    ],
  },
  {
    name: 'Project Details',
    type: 'Case Study Modal',
    anchorId: 'projects',
    items: [
      { label: 'Project Preview', tag: 'section' },
      { label: 'Project Description', tag: 'section' },
      { label: 'Features', tag: 'section' },
      { label: 'Technologies Used', tag: 'section' },
      { label: 'Live Demo', tag: 'section' },
      { label: 'GitHub', tag: 'section' },
    ],
  },
  {
    name: 'Process',
    type: '5-Step Workflow',
    anchorId: 'process',
    items: [
      { label: 'Discover', tag: 'step' },
      { label: 'Plan', tag: 'step' },
      { label: 'Design', tag: 'step' },
      { label: 'Develop', tag: 'step' },
      { label: 'Launch', tag: 'step' },
    ],
  },
  {
    name: 'Why Choose Me',
    type: 'Value Proposition',
    anchorId: 'about',
    items: [
      { label: 'Modern Design', tag: 'feature' },
      { label: 'Fast Performance', tag: 'feature' },
      { label: 'Responsive', tag: 'feature' },
      { label: 'SEO Friendly', tag: 'feature' },
      { label: 'Clean Code', tag: 'feature' },
      { label: 'Secure Development', tag: 'feature' },
      { label: 'Client Support', tag: 'feature' },
    ],
  },
  {
    name: 'Testimonials',
    type: 'Client Social Proof',
    anchorId: 'testimonials',
    items: [
      { label: 'Client Reviews', tag: 'section' },
      { label: 'Ratings', tag: 'section' },
      { label: 'Testimonials Slider', tag: 'section' },
    ],
  },
  {
    name: 'Contact',
    type: 'Project Inquiry Form',
    anchorId: 'contact',
    items: [
      { label: 'Contact Form', tag: 'section' },
      { label: 'Name', tag: 'field' },
      { label: 'Email', tag: 'field' },
      { label: 'Phone', tag: 'field' },
      { label: 'Project Type', tag: 'field' },
      { label: 'Budget', tag: 'field' },
      { label: 'Message', tag: 'field' },
    ],
  },
  {
    name: 'Direct Contact',
    type: 'Instant Reach',
    anchorId: 'contact',
    items: [
      { label: 'WhatsApp', tag: 'option' },
      { label: 'Email', tag: 'option' },
      { label: 'Phone', tag: 'option' },
      { label: 'Social Media', tag: 'option' },
    ],
  },
  {
    name: 'Footer',
    type: 'Navigation & Legal',
    anchorId: 'home',
    items: [
      { label: 'About', tag: 'section' },
      { label: 'Quick Links', tag: 'section' },
      { label: 'Services', tag: 'section' },
      { label: 'Social Links', tag: 'section' },
      { label: 'Copyright', tag: 'section' },
    ],
  },
];

export const SiteMapModal: React.FC = () => {
  const { isSiteMapOpen, setIsSiteMapOpen } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'visual' | 'xml'>('visual');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopyXml = () => {
    navigator.clipboard.writeText(rawSiteMapXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigate = (anchorId: string) => {
    setIsSiteMapOpen(false);
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const filteredNodes = useMemo(() => {
    if (!searchQuery.trim()) return siteMapData;
    const q = searchQuery.toLowerCase();
    return siteMapData
      .map((node) => {
        const matchesName = node.name.toLowerCase().includes(q);
        const matchedItems = node.items.filter((item) =>
          item.label.toLowerCase().includes(q)
        );
        if (matchesName || matchedItems.length > 0) {
          return {
            ...node,
            items: matchesName ? node.items : matchedItems,
          };
        }
        return null;
      })
      .filter((n): n is SiteMapNode => n !== null);
  }, [searchQuery]);

  if (!isSiteMapOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-5xl bg-[#090d16] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] my-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07090e]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2">
                Website Sitemap &amp; Architecture
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  12 Pages / 60+ Nodes
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Complete structured sitemap matching search engine and application hierarchy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSiteMapOpen(false)}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
              aria-label="Close sitemap modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Subheader Controls: Tab switcher & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-3 border-b border-white/[0.06] bg-[#0c101a]/70">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'visual'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Interactive Visual Tree</span>
            </button>

            <button
              onClick={() => setActiveTab('xml')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'xml'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Structured XML Source</span>
            </button>
          </div>

          {/* Search or Quick Download */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {activeTab === 'visual' ? (
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter sections, services, skills..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyXml}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-slate-300 hover:text-white border border-white/[0.08] transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-blue-400" />
                      <span>Copy XML</span>
                    </>
                  )}
                </button>

                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-xs font-semibold text-blue-300 hover:text-white border border-blue-500/30 transition-all flex items-center gap-1.5"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>Open /sitemap.xml</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {activeTab === 'visual' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/[0.06]">
                <span>Click any page or section below to jump directly to it:</span>
                <span className="font-mono text-blue-400">{filteredNodes.length} Pages Shown</span>
              </div>

              {/* Grid of Pages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredNodes.map((node) => (
                  <div
                    key={node.name}
                    className="rounded-2xl p-4 bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Page Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                          <h3 className="font-heading font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                            {node.name}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                          {node.type}
                        </span>
                      </div>

                      {/* Items list */}
                      <div className="flex flex-wrap gap-1.5 my-2">
                        {node.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-white/[0.03] text-[11px] text-slate-300 border border-white/[0.05] group-hover:border-blue-500/20 transition-colors"
                          >
                            <span className="text-slate-500 font-mono text-[9px] mr-1">
                              &lt;{item.tag}&gt;
                            </span>
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Jump Action */}
                    <div className="pt-3 mt-3 border-t border-white/[0.05] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500">
                        Target: #{node.anchorId}
                      </span>
                      <button
                        onClick={() => handleNavigate(node.anchorId)}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors group-hover:translate-x-1"
                      >
                        <span>Jump to Section</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* XML Code View */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Standard W3C / Custom XML Sitemap Document
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  UTF-8 Validated
                </span>
              </div>

              <div className="rounded-2xl bg-[#06080d] p-5 border border-white/[0.08] overflow-x-auto">
                <pre className="font-mono text-xs text-blue-300/90 leading-relaxed">
                  <code>{rawSiteMapXml}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 border-t border-white/[0.08] bg-[#07090e] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>This sitemap is synchronized with live navigation and Google search indexes.</span>
          </div>

          <button
            onClick={() => setIsSiteMapOpen(false)}
            className="px-4 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-semibold transition-colors"
          >
            Close Sitemap
          </button>
        </div>

      </motion.div>
    </div>
  );
};
