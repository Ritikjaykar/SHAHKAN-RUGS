import React from 'react';
import { Link } from 'react-router-dom';

const HandKnotted = () => {
  const products = [
    { id: 1, image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500', name: 'Persian Blue & White' },
    { id: 2, image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500', name: 'Golden Medallion' },
    { id: 3, image: 'https://images.unsplash.com/photo-1584268028410-3de7960f62b9?w=500', name: 'Ruby Red Classic' },
    { id: 4, image: 'https://images.unsplash.com/photo-1601887370915-c4bb9bb2129f?w=500', name: 'Ivory Blue Pattern' },
    { id: 5, image: 'https://images.unsplash.com/photo-1585847439961-0136a3c5c58e?w=500', name: 'Traditional Red' },
    { id: 6, image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500', name: 'Navy Floral' },
    { id: 7, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', name: 'Beige Oriental' },
    { id: 8, image: 'https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=500', name: 'Cream & Brown' },
    { id: 9, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500', name: 'Green Vintage' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-600">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600166898405-da9535204843?w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Hand Knotted</h1>
            <p className="text-xl md:text-2xl mb-6">TOP SELLER</p>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed">
              We are THE Persian & Oriental Rug specialists and we've brought together the biggest collection of hand knotted rugs ever
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-3 text-sm md:text-base font-medium text-gray-900 text-center">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/custom-rug-form"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Enquire About Hand Knotted
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandKnotted;