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
  const scrollLockRef = useRef(false); // to prevent rapid scroll jumps

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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollLockRef.current) return;

      scrollLockRef.current = true;

      if (e.deltaY > 0) {
        // Scroll down
        setCurrentSlide(prev => (prev === projects.length - 1 ? prev : prev + 1));
      } else if (e.deltaY < 0) {
        // Scroll up
        setCurrentSlide(prev => (prev === 0 ? 0 : prev - 1));
      }

      setTimeout(() => {
        scrollLockRef.current = false;
      }, 800); // Delay between scrolls
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b2b26]">
            Our <span className="text-[#f0d003]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#f0d003] mx-auto mb-6"></div>
          <p className="text-xl text-[#0b2b26] max-w-3xl mx-auto">
            Explore some of our successful solar installations across India's agricultural sector.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
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
                      <h3 className="text-2xl font-bold mb-2 text-[#0b2b26]">{project.title}</h3>
                      <p className="text-green-700 mb-4 font-semibold">{project.location}</p>
                      <p className="text-[#0b2b26] mb-6">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <p className="text-sm text-green-700 font-semibold">Capacity</p>
                          <p className="text-lg font-bold text-[#0b2b26]">{project.capacity}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <p className="text-sm text-green-700 font-semibold">Completion</p>
                          <p className="text-lg font-bold text-[#0b2b26]">{project.completion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: Remove buttons since scroll replaces them */}
          {/* <button ... /> */}
        </div>

        {/* Optional: Remove pagination dots too */}
      </div>
    </section>
  );
};

export default ProjectsSection;