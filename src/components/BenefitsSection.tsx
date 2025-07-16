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
      desc: "We commit to generating 100% clean, renewable solar energy — actively reducing reliance on fossil fuels and supporting India’s clean energy targets.",
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
      desc: "Through our energy generation, we support the local grid, contribute to national energy security, and play an active role in India’s renewable energy growth story.",
    },
  ];

  return (
    <></>
  );
};

export default BenefitsSection;