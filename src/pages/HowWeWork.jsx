import React from 'react';

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <p className="text-lg mb-2 italic">21 years of</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">COMBINED EXPERIENCE</h1>
          <p className="text-lg">We believe in know-how you should</p>
          <div className="mt-8">
            <button className="text-white animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <p className="text-sm mt-2">Scroll down</p>
          </div>
        </div>
      </div>

      {/* Infographic Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Process Diagram */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="font-bold text-lg mb-2">Production Facilities</h3>
                  <p className="text-sm text-gray-600">State-of-the-art manufacturing units</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="font-bold text-lg mb-2">Skilled Artisans</h3>
                  <p className="text-sm text-gray-600">Expert craftsmen with years of experience</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="font-bold text-lg mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-600">Exporting to 40+ countries worldwide</p>
                </div>
              </div>
            </div>

            {/* World Map */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Our Global Presence</h3>
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 800 400" className="w-full max-w-3xl">
                  {/* Simplified world map */}
                  <path d="M100,100 Q150,80 200,100 T300,100" stroke="#D2691E" strokeWidth="2" fill="none"/>
                  <path d="M200,150 L400,150 L400,250 L200,250 Z" fill="#8B4513" opacity="0.3"/>
                  <circle cx="250" cy="200" r="5" fill="#D2691E"/>
                  <circle cx="450" cy="180" r="5" fill="#D2691E"/>
                  <circle cx="600" cy="220" r="5" fill="#D2691E"/>
                  <text x="250" y="240" fontSize="12" textAnchor="middle">Asia</text>
                  <text x="450" y="220" fontSize="12" textAnchor="middle">Europe</text>
                  <text x="600" y="260" fontSize="12" textAnchor="middle">Americas</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">21+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="bg-secondary text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Skilled Artisans</div>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Shahkar Rugs is deeply inherent in our traditional weaving skills, modernizing our industry by continuously 
              innovating every vertical of the brand by going the extra mile for clients and building fair trust with all 
              of the stakeholders, partnered by nature.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We practice how and which process is best for natural assets which are needed to run our operations in 
              the best possible way. Our practices by their very nature are sustainable.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The craft is genuinely passed, first hand, on from father to son across multiple generations. Although 
              this industry has enjoyed a long and reputed, a demand of all we started- textile, along with how to do 
              a different shape from this shape that we have called the fabric, along with a whole with a beautiful fabric 
              or project from here only was done. These innovations serve the end user to a larger extent.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              In the current times due to the pandemic and recession due to it in certain geographies, we have evolved 
              to ensure not just our company survives but our employees prosper. We have started various schemes to 
              upskill them so they can continue to add more value through advanced techniques.
            </p>
          </div>

          {/* How We Work Diagram */}
          <div className="mt-12 bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">How we work.</h3>
            
            <div className="space-y-8">
              {/* Small Orders */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-xs">Handmade</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2">Small Orders</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Custom designs available</li>
                    <li>• Quick turnaround time</li>
                    <li>• Personal attention to detail</li>
                  </ul>
                </div>
              </div>

              {/* Dispatch to Country */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">40+</div>
                      <div className="text-xs">Countries</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2">Dispatch to Country</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Global shipping network</li>
                    <li>• Secure packaging</li>
                    <li>• Track your order</li>
                  </ul>
                </div>
              </div>

              {/* Simple Building Process */}
              <div>
                <h4 className="font-bold text-xl mb-4 text-center">A Simple Building Process</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div className="text-sm">Design</div>
                  </div>
                  <div>
                    <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">✂️</span>
                    </div>
                    <div className="text-sm">Create</div>
                  </div>
                  <div>
                    <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div className="text-sm">Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adoption Value */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Adoption Value</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Each carpet can vary typically between few days if they don't have to recognize contrasts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>We can handle these costs and haven been doing so for-much around four family schedules.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Various sub-plans inform how far builds treating and welcoming of the styles that.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>In addition, we are working on inventory or building a new catalog for three- families</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Every simple provide an easy subject to list.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;