import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Globe, Target, TrendingUp, Shield, Zap, Leaf } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * number));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, number]);

  return (
    <div
      ref={ref}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-green-300"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-300 to-[#0b2b26] rounded-full mb-4 mx-auto">
        <div className="text-white">{icon}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#0b2b26] mb-2">
          {count}{suffix}
        </div>
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('vision-mission');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const tabs = [
    { id: 'vision-mission', label: 'Our Vision/Mission', icon: Target },
  ];

  const tabContent = {
    'vision-mission': {
      title: "Our Vision/Mission",
      description: "We are dedicated to generating clean, sustainable solar power that supports national energy goals, reduces carbon emissions, and contributes to a robust, future-ready energy ecosystem. Through operational excellence and responsible practices, we aim to deliver long-term value for communities, stakeholders, and the environment.",
      details: []
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      {/* Removed decorative circles for a clean white background */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={contentRef}
          className="opacity-0 transition-all duration-1000 transform translate-y-10"
        >
          {/* Hero Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-300 text-[#0b2b26] rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2 text-[#f0d003]" />
              Since 2016
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0b2b26] to-green-300 bg-clip-text text-transparent">
              About <span className="text-[#0b2b26]">SSR Agro Energy</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At the core of everything we do is a quiet commitment to clean, reliable solar energy.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            <StatCard icon={<Zap size={24} />} number={8} label="Years of Excellence" suffix="+" />
            <StatCard icon={<Globe size={24} />} number={2} label="MW Capacity" suffix="" />
            <StatCard icon={<Shield size={24} />} number={100} label="% Clean Energy" suffix="" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b2b26] to-green-300 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105">
                <img 
                  src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754582758/WhatsApp_Image_2025-08-06_at_11.09.21_AM_pgdryt.jpg" 
                  alt="Solar panels in a farm field" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="space-y-8">
              <div className="flex space-x-1 bg-green-100 p-1 rounded-xl">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-white text-[#0b2b26] shadow-md'
                          : 'text-gray-600 hover:text-[#0b2b26]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2 text-[#f0d003]" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0b2b26]">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-green-300">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-green-300 text-[#0b2b26] rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2 text-[#f0d003]" />
                Our Journey
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b2b26]">Our Story</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  In 2016, we embarked on our solar energy journey with a clear and conscious purpose to produce clean, sustainable power and actively reduce our carbon footprint.
                </p>
                <p>
                  As a company deeply connected to the land and resources that support us, we believe it is our responsibility to give back to nature as much as we take.
                </p>
                <p>
                  Our decision to invest in solar farms was driven by a commitment to be part of the solution to the world's growing energy and environmental challenges.
                </p>
                <p>
                  Today, our solar farms generate <span className="font-semibold text-[#0b2b26]">2 MW</span> of clean, renewable power, actively reducing carbon emissions and supporting the nation's transition to sustainable energy.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b2b26] to-green-300 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105">
                  <img 
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754582795/WhatsApp_Image_2025-08-06_at_11.09.22_AM_usqzft.jpg" 
                    alt="SSR Agro Energy Our Story" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;