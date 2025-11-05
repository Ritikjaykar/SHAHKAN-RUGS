import React from 'react';
import { Link } from 'react-router-dom';

const Handloom = () => {
  const gallery = [
    { id: 1, image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500' },
    { id: 2, image: 'https://images.unsplash.com/photo-1585847439961-0136a3c5c58e?w=500' },
    { id: 3, image: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=500' },
    { id: 4, image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=500' },
    { id: 5, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500' },
    { id: 6, image: 'https://images.unsplash.com/photo-1584638369949-5fc0531c4e2f?w=500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Factory Image */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-3xl mx-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900" style={{fontFamily: 'Brush Script MT, cursive'}}>
              Handloom
            </h1>
            <p className="text-sm uppercase tracking-wider text-center text-gray-600 mb-6">NEW ADDITION</p>
            <div className="text-gray-700 space-y-4">
              <p>
                The carpets of this collection are machine-woven. Comparing with using the best New Zealand wool or India Wool and the brightest shades.
              </p>
              <p>
                This weaving method makes it possible to alternate velour processing with boucle one, bringing out handmade manufacturing and showing versatility and chromographic impact.
              </p>
              <p>
                <strong>Note:</strong> product's small irregularities are not defects, but proofs of handmade manufacturing process.
              </p>
            </div>
            <div className="text-center mt-6">
              <Link 
                to="/custom-rug-form"
                className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
              >
                Enquire about Handloom
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily: 'Brush Script MT, cursive'}}>Gallery</h2>
          <p className="text-center text-gray-600 mb-12 uppercase tracking-wider text-sm">FEATURED SHOWCASE</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div 
                key={item.id}
                className="aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <img 
                  src={item.image}
                  alt={`Handloom ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Handloom;