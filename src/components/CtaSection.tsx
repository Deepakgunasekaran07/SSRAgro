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
      className="py-24 bg-gradient-to-b from-blue-50 to-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-[#0635a0]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#0635a0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0635a0]/10 rounded-full p-3 mr-4 text-[#0635a0]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0635a0]/10 rounded-full p-3 mr-4 text-[#0635a0]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">info@ssragroenergy.com</p>
                    <p className="text-gray-600">support@ssragroenergy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0635a0]/10 rounded-full p-3 mr-4 text-[#0635a0]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-600">
                      123 Green Energy Way,<br />
                      Sustainable Business Park,<br />
                      Gurugram, Haryana 122001,<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-lg mb-4">Office Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday:</p>
                    <p>10:00 AM - 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0635a0] focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0635a0] focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0635a0] focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0635a0] focus:border-transparent transition-all duration-300"
                    placeholder="Solar Installation Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0635a0] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-[#0635a0] hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full md:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto bg-[#0635a0] rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to harness the power of the sun?</h3>
            <p className="text-lg text-blue-100 mb-8">
              Schedule a free consultation with our solar experts and start your journey towards energy independence.
            </p>
            <button className="bg-white text-[#0635a0] hover:bg-[#00cdff] px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;