import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EnergySection from './components/EnergySection';
import ProjectsSection from './components/ProjectsSection';
import CalculatorSection from './components/CalculatorSection';
import ContactSection from './components/CtaSection';
import Footer from './components/Footer';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ImpactStats from './components/ServicesSection';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  {/* Vision/Mission and Our Story are in AboutSection */}
                  <ImpactStats />
                  {/* Total Energy Produced is in ImpactStats */}
                  <EnergySection />
                  {/* Our Clean Energy Commitment is in EnergySection */}
                  <BenefitsSection />
                  {/* Gallery section is in BenefitsSection */}
                  <ContactSection />
                  {/* Get in Touch is in ContactSection */}
                </>
              }
            />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;