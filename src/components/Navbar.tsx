import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex justify-center pt-4">
        <div 
          className={`
            bg-gradient-to-r from-blue-400 via-blue-700 to-[#0635a0]
            rounded-full shadow-lg backdrop-blur-sm border border-orange-300/20
            transition-all duration-300 px-6 py-3
            ${scrolled ? 'shadow-xl scale-95' : 'shadow-lg'}
          `}
        >
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 mx-8">
              <NavLink to="/">Home</NavLink> 
              <NavLink to="/about">About</NavLink>
              <NavLink to="/energy">Energy</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/calculator">Calculator</NavLink>
            </nav>

            <Link
              to="/contact"
              className="hidden lg:flex bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 items-center text-sm font-medium backdrop-blur-sm border border-white/20"
            >
              Contact Us
              <ChevronDown className="ml-1 h-3 w-3" />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white focus:outline-none p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 mx-4">
          <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-2xl shadow-lg p-4 backdrop-blur-sm border border-orange-300/20">
            <nav className="flex flex-col space-y-2">
              <MobileNavLink to="/about" onClick={closeMenu}>About</MobileNavLink>
              <MobileNavLink to="/energy" onClick={closeMenu}>Energy</MobileNavLink>
              <MobileNavLink to="/projects" onClick={closeMenu}>Projects</MobileNavLink>
              <MobileNavLink to="/calculator" onClick={closeMenu}>Calculator</MobileNavLink>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-full transition-all flex justify-center items-center mt-2 text-sm font-medium backdrop-blur-sm border border-white/20"
              >
                Contact Us
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 font-medium text-white hover:bg-white/20 transition-all duration-300 relative group text-sm rounded-full backdrop-blur-sm"
  >
    {children}
    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps & { onClick: () => void }> = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="w-full text-left font-medium py-2 px-4 text-white hover:bg-white/20 rounded-full transition-all duration-300 text-sm backdrop-blur-sm"
  >
    {children}
  </Link>
);

export default Navbar;