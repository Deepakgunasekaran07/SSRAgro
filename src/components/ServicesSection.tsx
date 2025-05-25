import React, { useEffect, useRef } from 'react';
import { SunMedium, Gauge, Wrench, LineChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions designed specifically for agricultural applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<SunMedium size={32} />}
            title="Solar Installations"
            description="Custom designed solar panel installations for farms, warehouses, and agricultural facilities."
            delay={100}
          />
          
          <ServiceCard 
            icon={<Gauge size={32} />}
            title="Energy Audits"
            description="Comprehensive analysis of your current energy usage to identify opportunities for optimization."
            delay={300}
          />
          
          <ServiceCard 
            icon={<Wrench size={32} />}
            title="Maintenance & Support"
            description="Ongoing maintenance, monitoring, and support services to ensure optimal system performance."
            delay={500}
          />
          
          <ServiceCard 
            icon={<LineChart size={32} />}
            title="Efficiency Consulting"
            description="Expert advice on maximizing energy efficiency across your agricultural operations."
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;