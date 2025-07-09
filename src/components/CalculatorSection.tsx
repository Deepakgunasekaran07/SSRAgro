import React, { useState, useRef, useEffect } from 'react';
import { Calculator, ArrowRight, Sun } from 'lucide-react';

const CalculatorSection: React.FC = () => {
  const [farmSize, setFarmSize] = useState<number>(10);
  const [currentBill, setCurrentBill] = useState<number>(15000);
  const [dailyUsage, setDailyUsage] = useState<number>(100);
  const [savings, setSavings] = useState<number>(0);
  const [systemSize, setSystemSize] = useState<number>(0);
  const [roi, setRoi] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

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

  const calculateSavings = () => {
    const estimatedSystemSize = Math.ceil(dailyUsage * 0.25);
    const annualSavings = currentBill * 0.35 * 12;
    const estimatedCost = estimatedSystemSize * 100000;
    const estimatedRoi = Math.ceil(estimatedCost / annualSavings);
    
    setSystemSize(estimatedSystemSize);
    setSavings(annualSavings);
    setRoi(estimatedRoi);
    setShowResults(true);
    
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="calculator" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solar <span className="text-[#0635a0]">Savings Calculator</span>
          </h2>
          <div className="w-24 h-1 bg-[#0635a0] mx-auto mb-6"></div>
          <p className="text-xl text-[#0635a0] max-w-3xl mx-auto">
            Estimate your potential savings with our solar energy solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#00c5ff] to-[#0635a0] text-white">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Calculator className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Estimate Your Savings</h3>
              </div>
              
              <p className="mb-8">
                Use our calculator to get a quick estimate of how much you could save by switching to solar energy for your agricultural operations.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Farm Size (Acres)</label>
                  <input 
                    type="range"
                    min="1"
                    max="100"
                    value={farmSize}
                    onChange={(e) => setFarmSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>1</span>
                    <span>{farmSize} acres</span>
                    <span>100</span>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Current Monthly Electricity Bill (₹)</label>
                  <input 
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={currentBill}
                    onChange={(e) => setCurrentBill(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>₹1,000</span>
                    <span>₹{currentBill.toLocaleString()}</span>
                    <span>₹100,000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Daily Electricity Usage (kWh)</label>
                  <input 
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={dailyUsage}
                    onChange={(e) => setDailyUsage(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>10 kWh</span>
                    <span>{dailyUsage} kWh</span>
                    <span>500 kWh</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={calculateSavings}
                className="mt-8 bg-white text-[#0635a0] hover:[#1e3ecb] px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full"
              >
                Calculate Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div 
              ref={resultsRef}
              className={`md:w-1/2 p-8 md:p-12 ${showResults ? '' : 'flex items-center justify-center'}`}
            >
              {showResults ? (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Your Estimated Savings</h3>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Recommended System Size</h4>
                    <p className="text-3xl font-bold text-[#0635a0]">{systemSize} kW</p>
                    <p className="text-sm text-gray-500 mt-1">Based on your daily usage</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Annual Savings</h4>
                    <p className="text-3xl font-bold text-[#0635a0]">₹{savings.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-1">Approximately 35% reduction in energy costs</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Estimated ROI Period</h4>
                    <p className="text-3xl font-bold text-[#0635a0]">{roi} years</p>
                    <p className="text-sm text-gray-500 mt-1">Payback period for your investment</p>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="#contact" 
                      className="bg-[#1e3ecb] hover:bg-[#0635a0] text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Get a Detailed Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 animate-fade-in">
                  <div className="mb-8 flex justify-center">
                    <div className="bg-blue-100 rounded-full p-6">
                      <Sun className="h-16 w-16 text-[#0635a0] animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Harness the Power of the Sun
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Calculate your savings and see how solar energy can transform your agricultural business
                  </p>
                  <div className="space-y-4 text-lg text-gray-700">
                    <p className="flex items-center justify-center">
                      <span className="w-3 h-3 bg-[#0635a0] rounded-full mr-2"></span>
                      Reduce operational costs
                    </p>
                    <p className="flex items-center justify-center">
                      <span className="w-3 h-3 bg-[#0635a0] rounded-full mr-2"></span>
                      Increase farm efficiency
                    </p>
                    <p className="flex items-center justify-center">
                      <span className="w-3 h-3 bg-[#0635a0] rounded-full mr-2"></span>
                      Sustainable farming future
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;