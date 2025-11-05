import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CustomRugForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: '',
    material: '',
    design: '',
    color: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon with a custom quote.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Rug Form</h1>
          <p className="text-lg text-gray-200">Design your perfect rug with our experts</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tell Us About Your Dream Rug</h2>
            <p className="text-gray-600">
              Fill out the form below and our artisans will create a custom quote tailored to your specifications.
              We'll work with you to bring your vision to life.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Rug Specifications */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rug Specifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Desired Size *
                  </label>
                  <select
                    name="size"
                    required
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select size</option>
                    <option value="3x5">3' x 5' - Small</option>
                    <option value="4x6">4' x 6' - Medium</option>
                    <option value="5x8">5' x 8' - Medium Large</option>
                    <option value="6x9">6' x 9' - Large</option>
                    <option value="8x10">8' x 10' - Extra Large</option>
                    <option value="9x12">9' x 12' - Room Size</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Material *
                  </label>
                  <select
                    name="material"
                    required
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select material</option>
                    <option value="wool">Wool</option>
                    <option value="silk">Silk</option>
                    <option value="wool-silk">Wool & Silk Blend</option>
                    <option value="cotton">Cotton</option>
                    <option value="jute">Jute</option>
                    <option value="leather">Leather</option>
                    <option value="coir">Coir</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Design Type *
                  </label>
                  <select
                    name="design"
                    required
                    value={formData.design}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select design</option>
                    <option value="traditional">Traditional/Persian</option>
                    <option value="modern">Modern/Contemporary</option>
                    <option value="geometric">Geometric</option>
                    <option value="abstract">Abstract</option>
                    <option value="floral">Floral</option>
                    <option value="solid">Solid Color</option>
                    <option value="custom">Custom Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Color Preference
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Blue and Gold, Neutral tones"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-plus">$5,000+</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div className="pt-6 border-t border-gray-200">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Details or Special Requests
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us more about your vision, room dimensions, design inspiration, or any special requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-6 rounded-lg transition flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                Get Custom Quote
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll respond within 24-48 hours with a detailed quote and design consultation
              </p>
            </div>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Quick Response</h3>
            <p className="text-sm text-gray-600">Get your quote within 24-48 hours</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Expert Guidance</h3>
            <p className="text-sm text-gray-600">Work directly with master artisans</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">100% Custom</h3>
            <p className="text-sm text-gray-600">Fully tailored to your specifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomRugForm;