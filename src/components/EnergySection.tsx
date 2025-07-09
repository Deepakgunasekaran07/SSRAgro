import React, { useEffect, useRef, useState } from 'react';
import { Leaf, DollarSign, CloudSun, CheckCircle as CircleCheck, TreePine, Factory } from 'lucide-react';

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

const EnergySection: React.FC = () => {
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
      desc: "We commit to generating 100% clean, renewable solar energy — actively reducing reliance on fossil fuels and supporting India's clean energy targets.",
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
    <>
      {/* Benefits Section */}
      <section
        id="benefits"
        ref={sectionRef}
        className="py-24 relative"
        style={{
          backgroundImage: "url('https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/28/full/1724835314-5004.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80 z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-[#FFFF]">Clean Energy</span> Commitment
            </h2>
            <div className="w-24 h-1 bg-[#022a85] mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover how solar energy is shaping a more sustainable, self-reliant future for Indian agriculture.
            </p>
          </div>

          {/* Flip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefitCards.map((item, idx) => (
              <div
                key={idx}
                className="group [perspective:1000px]"
              >
                <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#0635a0]">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-center px-2">{item.title}</h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg p-6 flex items-center justify-center text-sm text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Counter Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Counter target={30} suffix="%" duration={2000} />
              <p className="text-gray-200 mt-2">Average Energy Cost Reduction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Counter target={500} suffix="+" duration={2000} />
              <p className="text-gray-200 mt-2">Successful Installations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Counter target={25} suffix="k" duration={2000} />
              <p className="text-gray-200 mt-2">Tons of CO₂ Prevented</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Counter target={7} suffix="" duration={2000} />
              <p className="text-gray-200 mt-2">Years Average ROI Period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Impact Stats Section */}
      <section id="impact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0635a0] mb-4">
             Total energy produced 
            </h2>
            <div className="w-24 h-1 bg-[#0635a0] mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every unit of solar power we've generated means cleaner air, fewer emissions, and a greener planet. See how far we've come.
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
    </>
  );
};

export default EnergySection; 