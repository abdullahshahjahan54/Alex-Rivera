import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AdminDashboard } from './components/admin/AdminDashboard';

const PortfolioMain: React.FC = () => {
  const { 
    selectedProjectModal, 
    setSelectedProjectModal, 
    setSelectedServiceForContact 
  } = usePortfolio();

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Navbar */}
      <Navbar onContactClick={() => handleScrollTo('contact')} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero 
          onViewWorkClick={() => handleScrollTo('projects')}
          onStartProjectClick={() => handleScrollTo('contact')}
        />

        {/* Animated Trust & Stats Section */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services 
          onSelectServiceForInquiry={(serviceTitle) => {
            setSelectedServiceForContact(serviceTitle);
            handleScrollTo('contact');
          }}
        />

        {/* Skills & Architecture Section */}
        <Skills />

        {/* Projects Showcase & Case Studies Section */}
        <Projects />

        {/* 5-Step Work Process Timeline */}
        <Process />

        {/* Why Choose Me Section */}
        <WhyChooseMe />

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* Contact Form & Direct Channels Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />

      {/* Interactive Project Case Study Modal */}
      <ProjectDetailModal 
        project={selectedProjectModal} 
        onClose={() => setSelectedProjectModal(null)} 
      />

      {/* Admin CMS Panel */}
      <AdminDashboard />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioMain />
    </PortfolioProvider>
  );
}
