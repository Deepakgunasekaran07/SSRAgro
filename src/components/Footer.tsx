import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b2b26] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-green-100 mb-6">
              Sustainable solar energy solutions for helping farms reduce costs and environmental impact since 2016.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="https://youtube.com" icon={<Youtube size={20} />} />
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#energy">Energy</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-green-100 mb-4">
              Subscribe to our newsletter to receive updates on solar technology, incentives, and success stories.
            </p>
            <form className="mb-4 w-full">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-green-700 text-white px-4 py-3 rounded-l-lg focus:outline-none w-full"
                />
                <button 
                  type="submit"
                  className="bg-[#f0d003] hover:bg-green-300 text-[#0b2b26] px-4 py-3 rounded-r-lg transition-colors duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </form>
            <p className="text-green-200 text-sm">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SSR Agro Energy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-green-200 text-sm">
              <a href="#" className="hover:text-[#f0d003] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#f0d003] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#f0d003] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-green-700 hover:bg-[#f0d003] text-white hover:text-[#0b2b26] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-green-100 hover:text-[#f0d003] transition-colors duration-300 flex items-center"
      >
        <ChevronRight size={16} className="mr-2" />
        {children}
      </a>
    </li>
  );
};

export default Footer;