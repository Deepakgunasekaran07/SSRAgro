import React from 'react';
import { Sun } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-800 rounded-full p-2 mr-2">
        <div className="relative">
          <Sun className="h-6 w-6 text-white" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-3 w-3 bg-white rounded-sm rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="font-bold text-xl">
        <span className="text-[#FFFFF]">SSR</span>
        <span className="block text-sm text-[#FFFFF] -mt-1">Agro Energy</span>
      </div>
    </div>
  );
};

export default Logo;