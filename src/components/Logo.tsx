import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-800 rounded-full p-2 mr-2 w-14 h-14 flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754580669/SSR_wbbeg0.png"
          alt="SSR Logo"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="font-bold text-xl leading-tight">
        <span className="text-white block">SSR</span>
        <span className="block text-sm text-white -mt-1">Agro Energy</span>
      </div>
    </div>
  );
};

export default Logo;