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
          observer.disconnect();
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
    <div ref={counterRef} className="text-4xl font-extrabold text-[#0b2b26]">
      {count}{suffix}
    </div>
  );
};

const EnergySection: React.FC = () => {
  const benefits = [
    {
      icon: <Leaf size={24} />,
      title: "Clean Energy Contribution",
      desc: "We commit to generating 100% clean, renewable solar energy — actively reducing reliance on fossil fuels and supporting India's clean energy targets."
    },
    {
      icon: <CloudSun size={24} />,
      title: "Carbon Emission Reduction",
      desc: "Every unit of solar power we produce directly cuts carbon emissions, helping build a healthier, more sustainable environment for future generations."
    },
    {
      icon: <CircleCheck size={24} />,
      title: "Environmental Responsibility",
      desc: "We operate with strict adherence to environmental regulations and sustainable practices, ensuring minimal ecological impact and responsible land use."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Community and National Impact",
      desc: "Through our energy generation, we support the local grid, contribute to national energy security, and play an active role in India's renewable energy growth story."
    }
  ];

  return (
    <section
      id="energy"
      className="py-24 relative"
      style={{
        backgroundImage: "url('https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/28/full/1724835314-5004.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-green-300">Clean Energy</span> Commitment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-green-300 max-w-3xl mx-auto">
            Discover how solar energy is shaping a more sustainable, self-reliant future for Indian agriculture.
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-green-300/20 via-white/10 to-[#f0d003]/20 backdrop-blur-md p-8 rounded-2xl border-2 border-green-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#f0d003] to-green-300 text-[#0b2b26] w-12 h-12 flex items-center justify-center rounded-full mr-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white bg-gradient-to-r from-green-300 to-[#f0d003] bg-clip-text text-transparent">{item.title}</h3>
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-green-100 to-[#f0d003]/20 rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Counter target={30} suffix="%" duration={2000} />
            <p className="text-white mt-2 font-bold">Average Energy Cost Reduction</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-[#f0d003]/20 rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Counter target={500} suffix="+" duration={2000} />
            <p className="text-white mt-2 font-bold">Successful Installations</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-[#f0d003]/20 rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Counter target={25} suffix="k" duration={2000} />
            <p className="text-white mt-2 font-bold">Tons of CO₂ Prevented</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-[#f0d003]/20 rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Counter target={7} suffix="" duration={2000} />
            <p className="text-white mt-2 font-bold">Years Average ROI Period</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergySection;