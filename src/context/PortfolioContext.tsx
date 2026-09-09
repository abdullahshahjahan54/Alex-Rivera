import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Service, Skill, Testimonial, ProcessStep, SiteSettings, Inquiry } from '../types';
import {
  initialProjects,
  initialServices,
  initialSkills,
  initialProcessSteps,
  initialTestimonials,
  initialSiteSettings,
  initialInquiries,
} from '../data/initialData';

interface PortfolioContextType {
  projects: Project[];
  services: Service[];
  skills: Skill[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
  inquiries: Inquiry[];
  settings: SiteSettings;
  selectedServiceForContact: string | null;
  setSelectedServiceForContact: (serviceTitle: string | null) => void;
  selectedProjectModal: Project | null;
  setSelectedProjectModal: (project: Project | null) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isSiteMapOpen: boolean;
  setIsSiteMapOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (auth: boolean) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  deleteInquiry: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (testimonial: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  updateService: (service: Service) => void;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROJECTS: 'alex_portfolio_projects_v1',
  SERVICES: 'alex_portfolio_services_v1',
  SKILLS: 'alex_portfolio_skills_v1',
  TESTIMONIALS: 'alex_portfolio_testimonials_v1',
  INQUIRIES: 'alex_portfolio_inquiries_v1',
  SETTINGS: 'alex_portfolio_settings_v1',
  ADMIN_AUTH: 'alex_portfolio_admin_auth_v1',
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [services, setServices] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : initialSkills;
    } catch {
      return initialSkills;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return saved ? JSON.parse(saved) : initialInquiries;
    } catch {
      return initialInquiries;
    }
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSiteMapOpen, setIsSiteMapOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, isAdminAuthenticated ? 'true' : 'false');
  }, [isAdminAuthenticated]);

  const addInquiry = (inquiryData: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries(prev => prev.map(item => (item.id === id ? { ...item, status } : item)));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(item => item.id !== id));
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProj: Project = {
      ...projectData,
      id: `proj-${Date.now()}`,
    };
    setProjects(prev => [newProj, ...prev]);
  };

  const updateProject = (updated: Project) => {
    setProjects(prev => prev.map(p => (p.id === updated.id ? updated : p)));
    if (selectedProjectModal?.id === updated.id) {
      setSelectedProjectModal(updated);
    }
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (selectedProjectModal?.id === id) {
      setSelectedProjectModal(null);
    }
  };

  const addTestimonial = (testimonialData: Omit<Testimonial, 'id'>) => {
    const newTestimonial: Testimonial = {
      ...testimonialData,
      id: `test-${Date.now()}`,
    };
    setTestimonials(prev => [newTestimonial, ...prev]);
  };

  const updateTestimonial = (updated: Testimonial) => {
    setTestimonials(prev => prev.map(t => (t.id === updated.id ? updated : t)));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const updateService = (updated: Service) => {
    setServices(prev => prev.map(s => (s.id === updated.id ? updated : s)));
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetToDefaults = () => {
    setProjects(initialProjects);
    setServices(initialServices);
    setSkills(initialSkills);
    setTestimonials(initialTestimonials);
    setInquiries(initialInquiries);
    setSettings(initialSiteSettings);
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        services,
        skills,
        testimonials,
        processSteps: initialProcessSteps,
        inquiries,
        settings,
        selectedServiceForContact,
        setSelectedServiceForContact,
        selectedProjectModal,
        setSelectedProjectModal,
        isAdminOpen,
        setIsAdminOpen,
        isSiteMapOpen,
        setIsSiteMapOpen,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        addProject,
        updateProject,
        deleteProject,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        updateService,
        updateSettings,
        resetToDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
