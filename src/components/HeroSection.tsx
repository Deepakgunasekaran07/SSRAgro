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

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-16 sm:pt-20 md:pt-24 lg:pt-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Top Right Button - Adjusted for navbar */}
      <div className="absolute top-24 right-4 md:top-28 md:right-6 z-20">
        <button 
          onClick={handleGetStarted}
          className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-white transition-all duration-300 flex items-center space-x-2 shadow-lg"
        >
          <span>Get Started</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Side Tab - Only on very large screens */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 hidden 2xl:block">
        <div className="bg-black/80 backdrop-blur-sm text-white px-2 py-6 text-xs font-medium tracking-wider">
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            SOLAR
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-8">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          
          {/* Top Section - Title with more spacing on mobile */}
          <div className={`mb-6 md:mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.8] tracking-tight">
              Solar<span className="text-white/60">®</span>
            </h1>
          </div>

          {/* Middle Section - Solar Panel Visual */}
          <div className={`mb-6 md:mb-8 flex-1 max-h-48 sm:max-h-56 md:max-h-72 lg:max-h-80 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full max-w-4xl mx-auto h-full min-h-40 sm:min-h-48">
              {/* Solar Panel Container */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Background Image with Orange Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80')`, // Replace with your solar panel image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Orange tinted overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-2000/40 to-amber-600/50 rounded-2xl"></div>
                
                {/* Inner content */}
                <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white px-2 sm:px-4">
                    <Sun className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 mx-auto mb-2 md:mb-4 text-yellow-300 animate-pulse" />
                    <h3 className="text-base sm:text-lg md:text-2xl font-light mb-1 md:mb-2">Advanced Solar Technology</h3>
                    <p className="text-white/80 text-xs sm:text-sm md:text-lg">Powering Agricultural Innovation</p>
                  </div>
                </div>
                
                {/* Animated decorative elements */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <Leaf className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-green-400 animate-bounce" />
                </div>
                <div className="absolute top-1/2 right-4 sm:right-6">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            
            {/* Left Column */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4 md:mb-6 leading-tight">
                Sustainable Energy—<br />
                Sustainable Future
              </h2>
              
              <button 
                onClick={handleLearnMore}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 sm:space-x-3"
              >
                <div className="flex space-x-1">
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-white"></div>
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-white/60"></div>
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-white/40"></div>
                </div>
                <span>Learn More</span>
              </button>
            </div>

            {/* Right Column */}
            <div className={`lg:text-right transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3 md:mb-4">
                Transform your agricultural operations with cutting-edge solar solutions.
              </p>
              <p className="text-white/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6">
                Boost productivity by 25% while reducing operational costs and creating a sustainable future for farming across India.
              </p>
              
              {/* Stats */}
              <div className="flex justify-center lg:justify-end space-x-4 sm:space-x-6 md:space-x-8">
                <div className="text-center lg:text-right">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">500+</div>
                  <div className="text-white/60 text-xs md:text-sm">Projects</div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">50MW</div>
                  <div className="text-white/60 text-xs md:text-sm">Capacity</div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">25%</div>
                  <div className="text-white/60 text-xs md:text-sm">Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Indicator */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center space-x-2 sm:space-x-3 z-20">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white/80 text-xs md:text-sm">Live Solar Data Available</span>
      </div>
    </section>
  );
};

export default HeroSection;