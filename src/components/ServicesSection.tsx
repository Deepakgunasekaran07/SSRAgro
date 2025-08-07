import React, { useEffect, useRef, useState } from 'react';
import { TreePine, Factory, Leaf } from 'lucide-react';

interface AnimatedNumberProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasAnimated, target, duration]);

  return (
    <div
      ref={ref}
      className="text-3xl md:text-4xl font-bold text-white font-mono min-h-[3.5rem] min-w-[13ch] flex items-center justify-center"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const ImpactCard = ({
  image,
  icon,
  target,
  label,
  suffix = '',
}: {
  image: string;
  icon: React.ReactNode;
  target: number;
  label: string;
  suffix?: string;
}) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg">
    <div
      style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="absolute inset-0 z-0"
    />
    <div className="absolute inset-0 bg-black/40 z-10" />
    <div className="relative z-20 flex flex-col items-center text-center p-6 h-full min-h-[220px] justify-center">
      <div className="bg-green-300/20 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      <AnimatedNumber target={target} suffix={suffix} />
      <p className="text-green-100 mt-2 font-semibold">{label}</p>
    </div>
  </div>
);

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b2b26]">
            Total energy produced
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#0b2b26] max-w-2xl mx-auto">
            Every unit of solar power we've generated means cleaner air, fewer emissions, and a greener planet. See how far we've come.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ImpactCard
            image="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767652/unnamed_4_wmp8u2.png"
            icon={<Leaf size={36} />}
            target={69655095}
            suffix=".69 KWh"
            label="Total Energy Produced"
          />

          <ImpactCard
            image="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767477/unnamed_3_gbvxrc.png"
            icon={<Factory size={36} />}
            target={57117178}
            suffix=".46 kg CO₂"
            label="CO₂ Emissions Avoided"
          />

          <ImpactCard
            image="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767642/unnamed_5_qvjo2z.png"
            icon={<TreePine size={36} />}
            target={2719865}
            label="Trees Planted Equivalent"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;