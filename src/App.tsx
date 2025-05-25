import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CalculatorSection from './components/CalculatorSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <BenefitsSection />
          <ProjectsSection />
          <TestimonialsSection />
          <CalculatorSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;