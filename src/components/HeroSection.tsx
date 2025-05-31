import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Leaf, Sun, Battery, Activity } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [energyFlow, setEnergyFlow] = useState(0);
  const [solarIntensity, setSolarIntensity] = useState(75);
  const [currentTime, setCurrentTime] = useState(new Date());

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

  // Dynamic energy flow animation
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyFlow(prev => (prev >= 100 ? 0 : prev + 1));
      setSolarIntensity(prev => 70 + Math.sin(Date.now() / 2000) * 15);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
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
      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 transition-all duration-3000 ease-in-out"
        style={{
          background: `linear-gradient(${45 + Math.sin(Date.now() / 3000) * 10}deg, 
            rgba(0,0,0,0.3) 0%, 
            rgba(30,58,138,${0.1 + solarIntensity / 1000}) 40%, 
            rgba(146,64,14,${0.2 + solarIntensity / 800}) 100%)`
        }}
      ></div>



      {/* Enhanced Top Right Controls */}
      <div className="absolute top-24 right-4 md:top-28 md:right-6 z-20 space-y-3">
        <button 
          onClick={handleGetStarted}
          className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-white hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg group"
        >
          <span>Get Started</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        {/* Live Status Indicator */}
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs font-medium">LIVE</span>
        </div>
      </div>

      {/* Dynamic Side Panel */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block">
        <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-8 text-xs font-medium tracking-wider hover:bg-black/80 transition-all duration-300 border-l border-white/20">
          <div className="space-y-4" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            <div className="text-yellow-400">{Math.round(solarIntensity)}%</div>
            <div className="text-white/60">SOLAR</div>
            <div className="text-green-400">{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-8">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          
          {/* Enhanced Title with Dynamic Glow */}
          <div className={`mb-6 md:mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.8] tracking-tight relative">
              <span className="relative inline-block group cursor-pointer">
                Solar
                <div 
                  className="absolute inset-0 text-yellow-400 blur-sm transition-opacity duration-1000"
                  style={{ opacity: 0.3 + solarIntensity / 300 }}
                >
                  Solar
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </span>
              <span className="text-white/60 ml-2">®</span>
            </h1>
          </div>

          {/* Enhanced Solar Panel with Real-time Data */}
          <div className={`mb-6 md:mb-8 flex-1 max-h-48 sm:max-h-56 md:max-h-72 lg:max-h-80 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full max-w-4xl mx-auto h-full min-h-40 sm:min-h-48 group">
              
              {/* Main Solar Panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                style={{
                  boxShadow: `0 25px 50px -12px rgba(251, 191, 36, ${0.1 + solarIntensity / 1000})`
                }}>
                
                {/* Energy Flow Animation */}
                <div className="absolute inset-0 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80 transition-all duration-300"
                    style={{ 
                      width: `${energyFlow}%`,
                      animation: energyFlow === 100 ? 'pulse 0.5s ease-in-out' : 'none'
                    }}
                  ></div>
                  <div 
                    className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-60"
                    style={{ width: `${(energyFlow * 0.8) % 100}%` }}
                  ></div>
                </div>

                {/* Background with Dynamic Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-1000"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: `brightness(${0.8 + solarIntensity / 400}) saturate(${1 + solarIntensity / 300})`
                  }}
                ></div>
                
                {/* Dynamic Orange Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-1000"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(249, 115, 22, ${0.3 + solarIntensity / 500}) 0%, 
                      rgba(245, 158, 11, ${0.4 + solarIntensity / 400}) 100%)`
                  }}
                ></div>
                
                {/* Enhanced Content */}
                <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white px-2 sm:px-4">
                    <Sun 
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 mx-auto mb-2 md:mb-4 text-yellow-300 transition-all duration-1000"
                      style={{ 
                        transform: `rotate(${energyFlow * 3.6}deg) scale(${1 + solarIntensity / 500})`,
                        filter: `drop-shadow(0 0 ${solarIntensity / 20}px rgba(251, 191, 36, 0.6))`
                      }}
                    />
                    <h3 className="text-base sm:text-lg md:text-2xl font-light mb-1 md:mb-2 transition-colors duration-300">
                      Advanced Solar Technology
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm md:text-lg">
                      Generating {Math.round(solarIntensity)}% Capacity
                    </p>
                  </div>
                </div>
                
                {/* Real-time Indicators */}
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 text-xs font-mono">{Math.round(solarIntensity * 2.5)}kW</span>
                </div>
                
                <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                  <Battery className="h-4 w-4 text-blue-400" />
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-3 rounded ${
                          i < Math.floor(solarIntensity / 25) ? 'bg-green-400' : 'bg-white/30'
                        } transition-colors duration-300`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            
            {/* Left Column with Dynamic Text Effects */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4 md:mb-6 leading-tight">
                <span className="inline-block hover:text-yellow-200 transition-all duration-500 hover:scale-105 cursor-pointer">
                  Sustainable Energy—
                </span><br />
                <span className="inline-block hover:text-green-200 transition-all duration-500 hover:scale-105 cursor-pointer">
                  Sustainable Future
                </span>
              </h2>
              
              <button 
                onClick={handleLearnMore}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex space-x-1 relative z-10">
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-white group-hover:bg-yellow-300 transition-colors duration-300"></div>
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-white/60 group-hover:bg-yellow-200 transition-colors duration-300" style={{ transitionDelay: '0.1s' }}></div>
                  <div className="w-1 h-4 sm:h-5 md:h-6 bg-white/40 group-hover:bg-yellow-100 transition-colors duration-300" style={{ transitionDelay: '0.2s' }}></div>
                </div>
                <span className="relative z-10">Learn More</span>
              </button>
            </div>

            {/* Right Column with Enhanced Stats */}
            <div className={`lg:text-right transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3 md:mb-4 hover:text-white transition-colors duration-300">
                Transform your agricultural operations with cutting-edge solar solutions.
              </p>
              <p className="text-white/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6 hover:text-white/90 transition-colors duration-300">
                Boost productivity by 25% while reducing operational costs and creating a sustainable future for farming across India.
              </p>
              
              {/* Static Stats with Hover Effects */}
              <div className="flex justify-center lg:justify-end space-x-4 sm:space-x-6 md:space-x-8">
                <div className="text-center lg:text-right group cursor-pointer relative">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300 relative">
                    500+
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  <div className="text-white/60 text-xs md:text-sm group-hover:text-white/80 transition-colors duration-300">Projects</div>
                </div>
                <div className="text-center lg:text-right group cursor-pointer relative">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                    50MW
                  </div>
                  <div className="text-white/60 text-xs md:text-sm group-hover:text-white/80 transition-colors duration-300">Capacity</div>
                </div>
                <div className="text-center lg:text-right group cursor-pointer relative">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-green-300 group-hover:scale-110 transition-all duration-300">
                    25%
                  </div>
                  <div className="text-white/60 text-xs md:text-sm group-hover:text-white/80 transition-colors duration-300">Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Status Bar */}
      <div className="absolute bottom-1 left-4 md:bottom-1 md:left-6 z-20">
  <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-3 border border-white/10">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <span className="text-white/80 text-xs md:text-sm font-medium">Live Solar Data</span>
    </div>
    <div className="w-px h-4 bg-white/20"></div>
    <div className="text-white/60 text-xs font-mono">
      {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
    </div>
    <div className="w-px h-4 bg-white/20"></div>
    <div className="text-green-400 text-xs font-mono">
      {Math.round(solarIntensity * 12.5)}kWh
    </div>
  </div>
</div>


      {/* Custom Keyframes */}
      <style jsx>{`
        /* No custom keyframe animations needed */
      `}</style>
    </section>
  );
};

export default HeroSection;