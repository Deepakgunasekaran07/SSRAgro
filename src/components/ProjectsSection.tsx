import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  capacity: string;
  completion: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sunflower Farms Solar Integration",
    location: "Gujarat, India",
    description: "A large-scale solar installation powering irrigation systems and processing facilities for a 200-acre sunflower farm.",
    image: "https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    capacity: "150 kW",
    completion: "2022"
  },
  {
    id: 2,
    title: "Green Rice Paddies Initiative",
    location: "Punjab, India",
    description: "Solar-powered water pumping system for rice cultivation, reducing diesel consumption by 90%.",
    image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    capacity: "75 kW",
    completion: "2023"
  },
  {
    id: 3,
    title: "Organic Vineyard Solar Project",
    location: "Maharashtra, India",
    description: "Complete energy solution for an organic vineyard, including processing, refrigeration, and irrigation.",
    image: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    capacity: "120 kW",
    completion: "2022"
  },
  {
    id: 4,
    title: "Dairy Farm Energy Modernization",
    location: "Haryana, India",
    description: "Solar installation powering milking, refrigeration, and processing equipment for a large dairy operation.",
    image: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    capacity: "200 kW",
    completion: "2023"
  }
];

const ProjectsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our successful solar installations across India's agricultural sector.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-green-600 mb-4">{project.location}</p>
                      <p className="text-gray-700 mb-6">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Capacity</p>
                          <p className="text-lg font-semibold">{project.capacity}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Completion</p>
                          <p className="text-lg font-semibold">{project.completion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-green-600 w-8' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;