import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Shahkar Rugs</h1>
          <p className="text-lg text-gray-200">Crafting Excellence Since 2003</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2003, Shahkar Rugs has grown from a small artisan workshop in rural India 
                  to become a respected leader in the handmade rug industry. Our journey began with a 
                  simple mission: to preserve traditional rug-making techniques while creating beautiful, 
                  high-quality pieces accessible to homes worldwide.
                </p>
                <p>
                  Every rug we create tells a story of dedication, craftsmanship, and cultural heritage. 
                  Our skilled artisans, many of whom have inherited their craft through generations, pour 
                  their heart and soul into each piece, ensuring that every knot, every thread, and every 
                  color is perfect.
                </p>
                <p>
                  We take pride in our commitment to sustainability and ethical practices. By supporting 
                  rural artisans and using eco-friendly materials and dyes, we ensure that our rugs are 
                  not only beautiful but also responsible choices for conscious consumers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400" 
                alt="Artisan at work"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?w=400" 
                alt="Traditional loom"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every rug undergoes rigorous quality checks.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Artisans</h3>
              <p className="text-gray-600">
                We support and empower skilled artisans from rural communities.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly materials and practices for a better tomorrow.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                Every piece is crafted with love, care, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Skilled Artisans</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Rugs Crafted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Rug?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Explore our collection or create a custom piece tailored to your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Browse Collection
            </a>
            <a
              href="/custom-rug-form"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;