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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/energy" element={<EnergySection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/calculator" element={<CalculatorSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;