import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex justify-center pt-4">
        <div 
          className={`
            bg-gradient-to-r from-green-300 via-[#0b2b26] to-green-700
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
              <a href="#" onClick={e => handleMenuClick(e, 'hero')} className="px-4 py-2 font-medium text-white hover:bg-white/20 transition-all duration-300 relative group text-sm rounded-full backdrop-blur-sm">Home</a>
              <a href="#about" onClick={e => handleMenuClick(e, 'about')} className="px-4 py-2 font-medium text-white hover:bg-white/20 transition-all duration-300 relative group text-sm rounded-full backdrop-blur-sm">About</a>
              <a href="#energy" onClick={e => handleMenuClick(e, 'energy')} className="px-4 py-2 font-medium text-white hover:bg-white/20 transition-all duration-300 relative group text-sm rounded-full backdrop-blur-sm">Energy</a>
              <Link to="/gallery" className="px-4 py-2 font-medium text-white hover:bg-white/20 transition-all duration-300 relative group text-sm rounded-full backdrop-blur-sm">Gallery</Link>
            </nav>

            {/* Desktop Contact Us button */}
            <a
              href="#contact"
              onClick={e => handleMenuClick(e, 'contact')}
              className="hidden lg:flex bg-green-300 hover:bg-green-400 text-[#0b2b26] py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 items-center text-sm font-medium border border-green-400/40 hover:text-primary-green focus:text-primary-green"
            >
              Contact Us
            </a>

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
          <div className="bg-gradient-to-r from-green-300 via-[#0b2b26] to-green-700 rounded-2xl shadow-lg p-4 backdrop-blur-sm border border-orange-300/20">
            <nav className="flex flex-col space-y-2">
              <a href="#" onClick={e => handleMenuClick(e, 'hero')} className="w-full text-left font-medium py-2 px-4 text-white hover:bg-white/20 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">Home</a>
              <a href="#about" onClick={e => handleMenuClick(e, 'about')} className="w-full text-left font-medium py-2 px-4 text-white hover:bg-white/20 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">About</a>
              <a href="#energy" onClick={e => handleMenuClick(e, 'energy')} className="w-full text-left font-medium py-2 px-4 text-white hover:bg-white/20 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">Energy</a>
              <Link to="/gallery" onClick={closeMenu} className="w-full text-left font-medium py-2 px-4 text-white hover:bg-white/20 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">Gallery</Link>
              <a href="#contact" onClick={e => handleMenuClick(e, 'contact')} className="w-full text-left font-medium py-2 px-4 text-white bg-green-300 hover:bg-green-400 hover:text-primary-green rounded-full transition-all duration-300 text-sm">Contact Us</a>
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
