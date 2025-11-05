import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Art Creation',
      text: 'Shahkar rugs is one of best, leading manufacturing company ever they are providing good quality of product with reasonable price as well they have a lot of variety in hand made carpet.',
      color: 'from-slate-900 to-slate-700'
    },
    {
      name: 'K.S Enterprises',
      text: 'Excellent collection of carpets.."Inn Shaa Allah everyone will be satisfied. this company\'s Services',
      color: 'from-slate-900 to-slate-700'
    },
    {
      name: 'Abdul Jabbar',
      text: 'Very good quality products available.I will surely recommend my family and friends too.. 👍',
      color: 'from-slate-900 to-slate-700'
    },
    {
      name: 'Yusuf Ansari',
      text: 'Great company. They have lots of experience. Can manufacture variety of products. You should definitely look up for this firm.',
      color: 'from-slate-900 to-slate-700'
    },
    {
      name: 'Nagma Musheer',
      text: 'One stop manufacturing unit to purchase all kind of hand made,hand woven,hand tufted. Hand knotted carpets,ample of designs to choose from.you will definitely love it,must try...highly recommended.',
      color: 'from-slate-900 to-slate-700'
    },
    {
      name: 'Roaif Iftakhab',
      text: 'All type of handmade carpets of best quality, with "nice and friendly staff" Shahkar Rugs will provide you the best quality products of your choice.',
      color: 'from-slate-900 to-slate-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-600">
      {/* Header */}
      <div className="pt-20 pb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-wider">
          WHAT PEOPLE SAY
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${testimonial.color} p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2 underline decoration-red-400">
                  {testimonial.name}
                </h3>
              </div>
              
              <div className="relative">
                <p className="text-white text-center leading-relaxed italic mb-6">
                  {testimonial.text}
                </p>
                
                <div className="flex justify-center">
                  <svg className="w-16 h-16 text-red-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Share Your Experience?</h2>
          <p className="text-gray-600 mb-6">We'd love to hear from you! Share your testimonial with us.</p>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;