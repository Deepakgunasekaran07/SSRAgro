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
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dlfitvhc0/image/upload/v1752042315/DSC_3980_kgeqog.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        {/* Blurred dark overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-0" />

        {/* Solar Text Centered */}
        <div className="relative z-10 text-center px-4">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
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
            <span className="text-white/60 ml-1">®</span>
          </h1>

          <h2 className="text-xl sm:text-2xl mt-6 text-white/80 font-light">
            Sustainable Energy — Sustainable Future
          </h2>

          {/* Learn More Button */}
          <button
            onClick={() => navigate('/about')}
            className="inline-block bg-[#0635a0] hover:bg-[#022a85] text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-8"
          >
            Learn More
          </button>
        </div>

        {/* Live Solar Data Box */}
        <div className="absolute bottom-3 left-4 md:left-6 z-20">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-3 border border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#0635a0] rounded-full animate-pulse" />
              <span className="text-white/80 text-xs md:text-sm font-medium">Live Solar Data</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="text-white/60 text-xs font-mono">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="text-white text-xs font-mono">
              {Math.round(solarIntensity * 12.5)}kWh
            </div>
          </div>
        </div>
      </section>
      
      {/* About Preview Below Hero */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0635a0] mb-4">
            About SSR Agro Energy
          </h3>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Pioneering sustainable solar solutions to empower agriculture since 2015.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="inline-block bg-[#0635a0] hover:bg-[#022a85] text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;