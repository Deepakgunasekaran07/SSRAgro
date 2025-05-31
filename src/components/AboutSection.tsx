import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) {
            contentRef.current.classList.add('animate-slide-up');
          }
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
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={contentRef}
          className="opacity-0 transition-all duration-1000 transform translate-y-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-green-600">SSR Agro Energy</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering sustainable energy solutions for India's agricultural sector since 2015.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-600 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105">
                <img 
                  src="https://i.ibb.co/L4P0K0N/RASAA-3918.jpg" 
                  alt="Solar panels in a farm field" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At SSR Agro Energy, we're on a mission to transform India's agricultural landscape through innovative solar solutions. By combining cutting-edge solar technology with deep agricultural expertise, we help farmers reduce operational costs, increase productivity, and contribute to a greener planet.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="h-6 w-6 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Sustainable Solutions</h4>
                      <p className="text-gray-600">Customized solar implementations that reduce carbon footprint while maximizing efficiency.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="h-6 w-6 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Agricultural Expertise</h4>
                      <p className="text-gray-600">Deep understanding of farming operations and specialized knowledge in agricultural energy requirements.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="h-6 w-6 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Economic Benefits</h4>
                      <p className="text-gray-600">Solutions that provide significant ROI and long-term savings through reduced energy costs.</p>
                    </div>
                  </div>
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