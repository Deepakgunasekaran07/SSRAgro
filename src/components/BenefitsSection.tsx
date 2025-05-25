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
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
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
    <div ref={counterRef} className="text-4xl font-bold text-green-600">
      {count}{suffix}
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-24 relative"
      style={{ 
        backgroundImage: "url('https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/28/full/1724835314-5004.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The <span className="text-green-400">Benefits</span> of Solar Energy
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how solar energy can transform your agricultural business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Cost Savings</h3>
            <p className="text-gray-200">
              Significantly reduce your energy costs and protect against rising electricity prices.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Sustainability</h3>
            <p className="text-gray-200">
              Reduce your carbon footprint and contribute to a more sustainable agricultural industry.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
              <CloudSun size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Energy Independence</h3>
            <p className="text-gray-200">
              Gain energy autonomy and reliability, especially in remote agricultural locations.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
              <CircleCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Government Incentives</h3>
            <p className="text-gray-200">
              Take advantage of various subsidies and incentives available for agricultural solar projects.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Counter target={30} suffix="%" duration={2000} />
            <p className="text-gray-200 mt-2">Average Energy Cost Reduction</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Counter target={500} suffix="+" duration={2000} />
            <p className="text-gray-200 mt-2">Successful Installations</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Counter target={25} suffix="k" duration={2000} />
            <p className="text-gray-200 mt-2">Tons of CO₂ Prevented</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Counter target={7} suffix="" duration={2000} />
            <p className="text-gray-200 mt-2">Years Average ROI Period</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;