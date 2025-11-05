// PatchedWork.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const PatchedWork = () => {
  const gallery = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    'https://images.unsplash.com/photo-1604599455544-e72127c8fab7?w=500',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500',
    'https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=500',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500',
    'https://images.unsplash.com/photo-1585847439961-0136a3c5c58e?w=500',
    'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=500',
    'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/95 p-8 md:p-12 rounded-lg max-w-2xl mx-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Brush Script MT, cursive'}}>Patched Work</h1>
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">CUSTOMER FAVORITE</p>
            <p className="text-gray-700 mb-4">
              Patchwork collection has been created for the purpose of recycling and modernizing the classic carpet Colour in the trendy element, yellow, turquoise, fuchsia.
            </p>
            <p className="text-gray-700 mb-4">
              Every piece is created by putting together carpets patterned by ancient motifs, all stitched together with a love on linen wool-dyed.
            </p>
            <p className="text-gray-700 mb-4">
              The result is a precious hand-weaving, very light and original. The multi coloured yarn is a precious and antique look of them.
            </p>
            <p className="text-gray-700"><strong>Note:</strong> product's small irregularities are not defects, but proofs of handmade manufacturing process.</p>
            <p className="text-gray-700 mt-2">All the carpets of this collection can be customized changing sizes on client's request.</p>
            <Link to="/custom-rug-form" className="inline-block mt-6 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition">Enquire</Link>
          </div>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src={img} alt={`Patched ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// LeatherCarpet.jsx
export const LeatherCarpet = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid md:grid-cols-2 gap-0 h-[500px]">
        <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Brush Script MT, cursive'}}>Leather Carpet</h1>
          <p className="text-sm uppercase tracking-wider mb-6">EXCLUSIVE</p>
          <p className="mb-4 leading-relaxed">
            We are engaged in offering high quality and widely appreciated Floor Leather Carpet. These are designed and crafted as per the latest market trends using high grade leather.
          </p>
          <p className="mb-4 leading-relaxed">
            Being one of the prominent names in this industry, we are actively indulged in manufacturing and supplying a huge collection of Leather Carpet from Bhadohi.
          </p>
          <p className="mb-6 leading-relaxed">
            These are our latest design in leather carpet. It is an enviable product to our customers at their reasonable prices.
          </p>
          <Link to="/custom-rug-form" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-max">Inquire</Link>
        </div>
        <div 
          className="bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800')"}}
        />
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6,7,8,9].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src={`https://images.unsplash.com/photo-${1595526114035 + i}-0d45ed16cfbf?w=500`} alt={`Leather ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// JuteRugs.jsx
export const JuteRugs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-96 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-lg mb-2" style={{fontFamily: 'Brush Script MT, cursive'}}>Welcome to</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">THE NEXT BIG THING</h1>
          <p className="text-xl mb-8">Rug Made with JUTE</p>
          <Link to="/custom-rug-form" className="inline-block border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">Enquire about Jute Rug</Link>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src={`https://images.unsplash.com/photo-${1584638369949 + i}?w=400`} alt={`Jute ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// FlatWeave.jsx
export const FlatWeave = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Brush Script MT, cursive'}}>Flat Weave</h1>
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-6">TOP CHOICE</p>
            <div className="text-gray-700 space-y-4 mb-8">
              <p>Also known as Dhurrie. A dhurrie (also dhurri or durry) is a thick flat-woven rug or carpet used traditionally in India as floorcoverings.</p>
              <p>The concept of dhurrie is a little bit different from a rug or carpet, because they were use for bedding or packaging, not only as a floor covering. But since the dhurries serve the same purpose as carpet or rugs they can be described as one.</p>
              <p>Dhurries are made from four types of materials:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Cotton</li>
                <li>Wool</li>
                <li>Jute</li>
                <li>Silk</li>
              </ol>
              <p>And in variety of combination of all these materials. This material is first converted into thread and then woven into dhurries.</p>
              <p>Dhurries are made manually by skilled artisans on a traditional horizontal (kana) or vertical loom.</p>
            </div>
            <Link to="/custom-rug-form" className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition">Enquire about Flat Weave</Link>
          </div>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=1200" alt="Flat Weave" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src={`https://images.unsplash.com/photo-${1578507065211 + i}?w=400`} alt={`Flat Weave ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// DesignersEdition.jsx
export const DesignersEdition = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <img src="https://images.unsplash.com/photo-1604599455544-e72127c8fab7?w=1600" alt="Designer Edition" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white" style={{fontFamily: 'Brush Script MT, cursive'}}>Designer Edition</h1>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{fontFamily: 'Brush Script MT, cursive'}}>Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6,7,8,9].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <img src={`https://images.unsplash.com/photo-${1604599455544 + i}?w=500`} alt={`Designer ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// CoirMats.jsx
export const CoirMats = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=400" alt="Coir Mat" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Coir Mats</h1>
        </div>
      </div>
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=400',
              'https://images.unsplash.com/photo-1584638369949-5fc0531c4e2f?w=400',
              'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=400',
            ].concat(Array(9).fill(null).map((_, i) => `https://images.unsplash.com/photo-${1578507065211 + i}?w=400`)).map((img, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img src={img} alt={`Coir Mat ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};