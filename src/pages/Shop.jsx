import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';

const Shop = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryTitles = {
    'hand-knotted': 'Hand Knotted Rugs',
    'hand-tufted': 'Hand Tufted Rugs',
    'handloom': 'Handloom Rugs',
    'patched-work': 'Patched Work Rugs',
    'leather-carpet': 'Leather Carpets',
    'jute-rugs': 'Jute Rugs',
    'flat-weave': 'Flat Weave Rugs',
    'designers-edition': 'Designers Edition',
    'coir-mats': 'Coir Mats'
  };

  const allProducts = [
    {
      id: 1,
      name: 'Traditional Persian Rug',
      category: 'hand-knotted',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500',
      size: "8' x 10'",
      material: 'Wool & Silk'
    },
    {
      id: 2,
      name: 'Modern Abstract Design',
      category: 'hand-tufted',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=500',
      size: "6' x 9'",
      material: 'Premium Wool'
    },
    {
      id: 3,
      name: 'Geometric Pattern Rug',
      category: 'handloom',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500',
      size: "5' x 8'",
      material: 'Cotton & Wool'
    },
    {
      id: 4,
      name: 'Vintage Patchwork',
      category: 'patched-work',
      price: 999,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      size: "4' x 6'",
      material: 'Recycled Wool'
    },
    {
      id: 5,
      name: 'Luxury Leather Carpet',
      category: 'leather-carpet',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500',
      size: "8' x 10'",
      material: 'Genuine Leather'
    },
    {
      id: 6,
      name: 'Natural Jute Rug',
      category: 'jute-rugs',
      price: 599,
      image: 'https://images.unsplash.com/photo-1584638369949-5fc0531c4e2f?w=500',
      size: "5' x 7'",
      material: 'Natural Jute'
    },
    {
      id: 7,
      name: 'Scandinavian Flat Weave',
      category: 'flat-weave',
      price: 899,
      image: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=500',
      size: "6' x 9'",
      material: 'Cotton'
    },
    {
      id: 8,
      name: 'Contemporary Designer Rug',
      category: 'designers-edition',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1604599455544-e72127c8fab7?w=500',
      size: "9' x 12'",
      material: 'Silk & Wool'
    },
    {
      id: 9,
      name: 'Eco-Friendly Coir Mat',
      category: 'coir-mats',
      price: 299,
      image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=500',
      size: "3' x 5'",
      material: 'Natural Coir'
    },
    {
      id: 10,
      name: 'Royal Persian Design',
      category: 'hand-knotted',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500',
      size: "10' x 14'",
      material: 'Pure Silk'
    },
    {
      id: 11,
      name: 'Bohemian Hand Tufted',
      category: 'hand-tufted',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
      size: "5' x 8'",
      material: 'Wool'
    },
    {
      id: 12,
      name: 'Striped Handloom Runner',
      category: 'handloom',
      price: 799,
      image: 'https://images.unsplash.com/photo-1585847439961-0136a3c5c58e?w=500',
      size: "3' x 10'",
      material: 'Cotton'
    }
  ];

  const filteredProducts = category 
    ? allProducts.filter(p => p.category === category)
    : allProducts;

  const pageTitle = category 
    ? categoryTitles[category] 
    : 'All Rugs';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg text-gray-200">Discover our collection of handcrafted rugs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <span className="text-gray-600">{filteredProducts.length} Products</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>

            {/* View Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$500 - $1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$1000 - $2500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Over $2500</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Small (3' x 5')</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Medium (5' x 8')</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Large (8' x 10')</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Extra Large (9' x 12'+)</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Wool</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Silk</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Cotton</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Jute</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-gray-300"></button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-6'
        }>
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className={`bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={viewMode === 'list' ? 'w-64 flex-shrink-0' : 'aspect-square'}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-primary transition">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>{product.size}</span>
                  <span>•</span>
                  <span>{product.material}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
            <Link to="/shop" className="text-primary hover:underline mt-4 inline-block">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;