import React, { useState } from 'react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752768642/Screenshot_2025-07-17_at_9.40.20_PM_wibxwo.png",
      alt: "Solar Farm Overview",
      title: "Solar Farm Overview",
      description: "Main installation site showcasing our comprehensive solar farm setup"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752798304/DSC_3991_nft6qn.jpg",
      alt: "Solar Panel Installation",
      title: "Solar Panel Installation",
      description: "Professional solar panel installation and setup process"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752766216/DSC_3989_ehccaj.jpg",
      alt: "Agricultural Solar Integration",
      title: "Agricultural Integration",
      description: "Solar panels seamlessly integrated with agricultural land"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752766083/DSC_3997_iakfna.jpg",
      alt: "Solar Farm Operations",
      title: "Solar Farm Operations",
      description: "Daily operations and maintenance of our solar facilities"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752767652/unnamed_4_wmp8u2.png",
      alt: "Solar Energy Production",
      title: "Energy Production",
      description: "Clean energy generation in action"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752042315/DSC_3980_kgeqog.jpg",
      alt: "Solar Farm Landscape",
      title: "Farm Landscape",
      description: "Beautiful landscape view of our solar farm"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752799655/DSC_3991_yj3tkb.jpg",
      alt: "New Photo 1",
      title: "New Solar Field Angle",
      description: "Another view of our solar field during golden hour"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752799655/DSC_4002_f3tuuf.jpg",
      alt: "New Photo 2",
      title: "Equipment Check",
      description: "Staff inspecting the solar inverters and electrical panels"
    },
    {
      src: "https://res.cloudinary.com/dlfitvhc0/image/upload/v1752799654/DSC_3987_qzbqnn.jpg",
      alt: "New Photo 3",
      title: "Energy Monitoring",
      description: "Real-time monitoring of solar energy production"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Header */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-[#0b2b26] to-green-300">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our Gallery
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our solar installations, projects, and the journey of clean energy production at SSR Agro Energy.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-300 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-[#f0d003] rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-green-300/20 to-[#f0d003]/20 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.history.back()}
            className="bg-[#0b2b26] hover:bg-green-300 text-white hover:text-[#0b2b26] px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-green-300 text-4xl font-bold transition-colors duration-300 z-10"
            >
              ×
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-10"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-10"
            >
              ›
            </button>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{images[selectedImage].title}</h3>
                <p className="text-white/90">{images[selectedImage].description}</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;