import React from 'react';

const GallerySection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Facility / Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Add your photo <img> tags here in the future */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-400">
            Gallery is coming soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 