import React from 'react';
import { Link } from 'react-router-dom';

const HandTufted = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Overlay */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-2xl mx-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{fontFamily: 'Brush Script MT, cursive'}}>
              Hand Tufted
            </h1>
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">TOP SELLER</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With this method, the weaver uses a specific tool to push wool's thread through a matrix cotton cloth which he previously traced the negative design on.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The weaver follows the design's trace, covering every cloth's section with relating wool's colour. After weaving, he glues a cloth to the back to fix the pile and he completes finishing process cropping, carving and brushing the carpet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> product's small irregularities are not defects, but proofs of handmade manufacturing process. All the carpets of this collection can be customized changing sizes and colours on client's request.
            </p>
            <Link 
              to="/custom-rug-form"
              className="inline-block mt-6 border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              Enquire About Handtufted
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{fontFamily: 'Brush Script MT, cursive'}}>Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=600" alt="Hand Tufted 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600" alt="Hand Tufted 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" alt="Hand Tufted 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1584268028410-3de7960f62b9?w=400" alt="Hand Tufted 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400" alt="Hand Tufted 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandTufted;