import React, { useEffect, useRef, useState } from 'react';
import { Battery, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarIntensity(70 + Math.sin(Date.now() / 2000) * 15);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-start bg-white"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dlfitvhc0/image/upload/v1752042315/DSC_3980_kgeqog.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        {/* Black overlay for text clarity */}
        <div className="absolute inset-0 bg-primary-green/70 z-0" />

        {/* Solar Text Centered */}
        <div className="relative z-10 text-left px-8 md:px-12 lg:px-16">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-primary-yellow tracking-tight leading-none transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="relative inline-block group cursor-pointer" style={{ color: '#f0d003' }}>
              SSR Agro Energy
              <div
                className="absolute inset-0 blur-sm transition-opacity duration-1000"
                style={{ opacity: 0.3 + solarIntensity / 300, color: '#f0d003' }}
              >
                SSR Agro Energy
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </span>
            <span className="text-white/60 ml-1">®</span>
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 mt-6 inline-block border border-white/20 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-light bg-gradient-to-r from-[#f0d003] to-green-300 bg-clip-text text-transparent font-semibold drop-shadow-lg">
              Energizing Progress with Clean, Reliable Power Since 2016.
            </h2>
          </div>

        </div>

        {/* Live Solar Data Box */}
        <div className="absolute bottom-20 right-4 md:right-6 z-20">
          <div className="bg-primary-green/80 backdrop-blur-sm rounded-full px-7 py-4 flex items-center space-x-5 border border-accent-yellow/30">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-accent-yellow rounded-full animate-pulse" />
              <span className="text-white text-base md:text-lg font-medium">Live Solar Data</span>
            </div>
            <div className="w-px h-5 bg-accent-yellow/30" />
            <div className="text-accent-yellow text-base font-mono">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="w-px h-5 bg-accent-yellow/30" />
            <div className="text-white text-lg md:text-xl font-semibold font-mono">
              {Math.round(solarIntensity * 12.5)}kWh
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default HeroSection;