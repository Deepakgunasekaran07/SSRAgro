import React, { useEffect, useRef, useState } from 'react';
import { Leaf, DollarSign, CloudSun, CheckCircle as CircleCheck } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix: string;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, duration }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-blue-200">
      {count}{suffix}
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const distance = windowHeight - rect.top;
        setScrollX(distance * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefitCards = [
    {
      icon: <Leaf size={32} />,
      title: "Clean Energy Contribution",
      desc: "We commit to generating 100% clean, renewable solar energy actively reducing reliance on fossil fuels and supporting India's clean energy targets.",
    },
    {
      icon: <CloudSun size={32} />,
      title: "Carbon Emission Reduction",
      desc: "Every unit of solar power we produce directly cuts carbon emissions, helping build a healthier, more sustainable environment for future generations.",
    },
    {
      icon: <CircleCheck size={32} />,
      title: "Environmental Responsibility",
      desc: "We operate with strict adherence to environmental regulations and sustainable practices, ensuring minimal ecological impact and responsible land use.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Community and National Impact",
      desc: "Through our energy generation, we support the local grid, contribute to national energy security, and play an active role in India's renewable energy growth story.",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0b2b26]">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-[#0b2b26] max-w-2xl mx-auto mb-8">
            Explore our solar installations and projects in action.
          </p>
          
          {/* Gallery Grid - Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            {/* First Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-105 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-[#0b2b26]/20 rounded-2xl animate-pulse"></div>
              <img 
                src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752768642/Screenshot_2025-07-17_at_9.40.20_PM_wibxwo.png" 
                alt="Solar Farm Overview" 
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/10 to-[#f0d003]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-300 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-[#f0d003] rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-lg font-semibold animate-slide-in">Solar Farm Overview</p>
                <p className="text-sm opacity-90 animate-slide-in-delayed">Main installation site</p>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-green-300/20 to-[#f0d003]/20 blur-xl"></div>
            </div>

            {/* Second Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-105 animate-float-delayed">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0d003]/20 to-green-300/20 rounded-2xl animate-pulse"></div>
              <img 
                src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752798304/DSC_3991_nft6qn.jpg" 
                alt="Solar Panel Installation" 
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0d003]/10 to-green-300/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-[#f0d003] rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              <div className="absolute top-8 left-8 w-2 h-2 bg-green-300 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              
              <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-lg font-semibold animate-slide-in">Solar Panel Installation</p>
                <p className="text-sm opacity-90 animate-slide-in-delayed">Professional setup</p>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#f0d003]/20 to-green-300/20 blur-xl"></div>
            </div>
          </div>

          <button
            onClick={() => window.location.href = '/gallery'}
            className="bg-green-300 hover:bg-[#0b2b26] text-[#0b2b26] hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;