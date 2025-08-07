import React, { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

const CtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
      alert("Thank you for your inquiry! Our team will contact you shortly.");
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b2b26]">
            Get In <span className="text-[#0b2b26]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0b2b26] to-green-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#0b2b26] max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-[#0b2b26]">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-300/20 rounded-full p-3 mr-4 text-[#0b2b26]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-green-700 font-semibold">info@ssragroenergy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-300/20 rounded-full p-3 mr-4 text-[#0b2b26]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Head Office Address</h4>
                    <p className="text-green-700 font-semibold">
                      #171, 1st floor, MTH road,<br />
                      Villivakkam, Chennai -600049,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-300/20 rounded-full p-3 mr-4 text-[#0b2b26]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-green-700 font-semibold">+91 9986630246</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-[#0b2b26]">Send Us a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-100 focus:outline-none focus:ring-2 focus:ring-[#0b2b26] focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-100 focus:outline-none focus:ring-2 focus:ring-[#0b2b26] focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-green-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-green-100 focus:outline-none focus:ring-2 focus:ring-[#0b2b26] focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-100 focus:outline-none focus:ring-2 focus:ring-[#0b2b26] focus:border-transparent transition-all duration-300"
                    placeholder="Solar Installation Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-1">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-100 focus:outline-none focus:ring-2 focus:ring-[#0b2b26] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-[#0b2b26] hover:bg-green-300 text-white hover:text-[#0b2b26] px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full md:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CtaSection;