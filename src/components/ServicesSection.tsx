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
      className="flex flex-col items-center text-center bg-white border border-[#0635a0]/10 p-6 rounded-xl shadow-md transform transition hover:scale-105"
    >
      <div className="bg-[#0635a0]/10 text-[#0635a0] w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-[#0635a0]">
        {count}{suffix}
      </div>
      <p className="text-gray-700 mt-2">{label}</p>
    </div>
  );
};

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0635a0] mb-4">
           Total energy produced 
          </h2>
          <div className="w-24 h-1 bg-[#0635a0] mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every unit of solar power we’ve generated means cleaner air, fewer emissions, and a greener planet. See how far we’ve come.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <StatItem
            icon={<Leaf size={36} />}
            label="Total Energy Produced"
            target={85000}
            suffix=" kWh"
          />
          <StatItem
            icon={<Factory size={36} />}
            label="CO₂ Emissions Avoided"
            target={25000}
            suffix=" kg"
          />
          <StatItem
            icon={<TreePine size={36} />}
            label="Trees Planted Equivalent"
            target={12000}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
