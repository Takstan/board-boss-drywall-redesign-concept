import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenQuote = () => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1217] text-slate-100 flex flex-col font-sans selection:bg-[#ff6b00] selection:text-white">
      {/* 3-Zone Sticky Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreProjects={handleExploreProjects}
        />

        {/* Trust & Recognition Section with Animated Count-Up */}
        <TrustStats />

        {/* Services & Core Capabilities Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Featured Projects Gallery */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenQuote={handleOpenQuote}
        />

        {/* Why Choose Board Boss: Foreman Oversight & Execution */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* Our Process: 4-Stage Builder Workflow */}
        <ProcessSection onOpenQuote={handleOpenQuote} />

        {/* About the Team & Founder Story */}
        <TeamSection />

        {/* Builder & Developer Testimonials */}
        <TestimonialsSection />

        {/* Final CTA: RFQ Lead Form & Instant Drywall Estimator Tool */}
        <QuoteSection />
      </main>

      {/* Professional Industrial Footer */}
      <Footer />

      {/* Detailed Project Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
