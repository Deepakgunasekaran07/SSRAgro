import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Leaf, Sun } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingIcon = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`absolute animate-pulse ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: '3s'
      }}
    >
      <div className="bg-green-400/20 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-green-400/30">
        {children}
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/90 to-emerald-900/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Icons - Responsive positioning */}
      <FloatingIcon delay={0} className="top-16 sm:top-20 right-4 sm:right-20">
        <Sun className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400" />
      </FloatingIcon>
      <FloatingIcon delay={1000} className="bottom-32 left-4 sm:left-16">
        <Leaf className="h-4 w-4 sm:h-6 sm:w-6 text-green-400" />
      </FloatingIcon>
      <FloatingIcon delay={2000} className="top-1/3 right-8 sm:right-1/4">
        <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
      </FloatingIcon>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-2 mt-8 sm:mt-16 bg-green-500/10 backdrop-blur-sm border border-green-400/30 rounded-full transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
            <span className="text-green-300 text-xs sm:text-sm font-medium">Leading Solar Innovation</span>
          </div>

          <h1
            className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="block mb-2 sm:mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Sustainable
            </span>
            <span
              className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse"
              style={{ animationDuration: '4s' }}
            >
              Solar Solutions
            </span>
            <span className="block text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 sm:mt-2">
              for Agriculture
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            Revolutionizing farming with cutting-edge solar technology. 
            <span className="text-green-300 font-semibold"> Boost productivity, reduce costs, and create a sustainable future</span> for agriculture across India.
          </p>

          {/* Stats Row */}
          <div className={`flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">500+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">50MW</div>
              <div className="text-gray-300 text-xs sm:text-sm">Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">25%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Cost Reduction</div>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className={`flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <button 
              onClick={handleGetStarted}
              className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center group w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">Get Started Today</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transform group-hover:translate-x-2 transition-transform relative" />
            </button>
            
            <button 
              onClick={handleLearnMore}
              className="relative bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 group w-full sm:w-auto"
            >
              <span className="relative">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;