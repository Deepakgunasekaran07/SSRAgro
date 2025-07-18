import React, { useEffect, useRef, useState } from 'react';
import { TreePine, Factory, Leaf } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  target: number;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, target, suffix = '', duration = 2000 }) => {
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
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, target, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center bg-white border border-green-300 p-6 rounded-xl shadow-md transform transition hover:scale-105"
    >
      <div className="bg-green-300/20 text-[#0b2b26] w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-[#0b2b26]">
        {count}{suffix}
      </div>
      <p className="text-green-700 mt-2 font-semibold">{label}</p>
    </div>
  );
};

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Gallery Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center mb-8">
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

      {/* Impact Statistics Section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b2b26]">
            Total energy produced 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#0b2b26] max-w-2xl mx-auto">
            Every unit of solar power we’ve generated means cleaner air, fewer emissions, and a greener planet. See how far we’ve come.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="relative rounded-xl overflow-hidden">
            <div style={{ backgroundImage: "url('https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767652/unnamed_4_wmp8u2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 z-0" />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 flex flex-col items-center text-center p-6 h-full min-h-[220px] justify-center">
              <div className="bg-green-300/20 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Leaf size={36} />
              </div>
              <div className="text-4xl font-bold text-white">
                85000 kWh
              </div>
              <p className="text-green-100 mt-2 font-semibold">Total Energy Produced</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <div style={{ backgroundImage: "url('https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767477/unnamed_3_gbvxrc.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 z-0" />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 flex flex-col items-center text-center p-6 h-full min-h-[220px] justify-center">
              <div className="bg-green-300/20 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Factory size={36} />
              </div>
              <div className="text-4xl font-bold text-white">
                25000 kg
              </div>
              <p className="text-green-100 mt-2 font-semibold">CO₂ Emissions Avoided</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <div style={{ backgroundImage: "url('https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767642/unnamed_5_qvjo2z.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 z-0" />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 flex flex-col items-center text-center p-6 h-full min-h-[220px] justify-center">
              <div className="bg-green-300/20 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <TreePine size={36} />
              </div>
              <div className="text-4xl font-bold text-white">
                12000
              </div>
              <p className="text-green-100 mt-2 font-semibold">Trees Planted Equivalent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;