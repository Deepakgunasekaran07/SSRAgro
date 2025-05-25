import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled 
          ? 'shadow-lg py-2' 
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <NavLink onClick={() => handleNavClick('about')}>About</NavLink>
            <NavLink onClick={() => handleNavClick('services')}>Services</NavLink>
            <NavLink onClick={() => handleNavClick('benefits')}>Benefits</NavLink>
            <NavLink onClick={() => handleNavClick('projects')}>Projects</NavLink>
            <NavLink onClick={() => handleNavClick('calculator')}>Calculator</NavLink>
            <button 
              onClick={() => handleNavClick('contact')}
              className="ml-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Contact Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink onClick={() => handleNavClick('about')}>About</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('services')}>Services</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('benefits')}>Benefits</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('projects')}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('calculator')}>Calculator</MobileNavLink>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-all flex justify-center items-center mt-2"
            >
              Contact Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 font-medium hover:text-green-600 transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left font-medium py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default Navbar;