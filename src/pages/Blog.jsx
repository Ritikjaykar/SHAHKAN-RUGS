import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Timeless Elegance: Embracing Sustainability with Natural Wool Flat Weave Rugs',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600',
      excerpt: 'In the world of modern living, the allure of natural materials is undeniable. Wooden flat weave rugs provide aesthetic to collection of natural wool flat weave rugs, combining...'
    },
    {
      id: 2,
      title: 'Exploring Sustainable Methods for Dyeing Handmade Rugs at Shahkar Rugs: A Standard Approach for...',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600',
      excerpt: 'In the tapestry world of fine carpets, Shahkar rugs has always been known for it\'s commitment to quality, tradition...'
    },
    {
      id: 3,
      title: 'Explore the Elegance and Sustainability of Handmade wool rugs with Shahkar Rugs.',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600',
      excerpt: 'Pure Handmade on looms'
    },
    {
      id: 4,
      title: 'Timeless Elegance: The Art and Craft of Handmade Carpets',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600',
      excerpt: 'Handmade carpets are more than just floor coverings; they are intricate works of art that embody centuries of tradition...'
    },
    {
      id: 5,
      title: 'The Luxurious Allure of Leather Carpets: A Timeless Investment',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600',
      excerpt: 'Leather carpets have emerged as a sophisticated choice for interior design, offering a unique blend of luxury and durability...'
    },
    {
      id: 6,
      title: 'Eco-Friendly Elegance: The Rise of Jute Rugs',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1584638369949-5fc0531c4e2f?w=600',
      excerpt: 'In recent years, jute rugs have gained popularity as a sustainable and stylish flooring option...'
    }
  ];

  const recentPosts = [
    {
      title: 'Timeless Elegance: Embracing...',
      image: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=100'
    },
    {
      title: 'Exploring Sustainable Methods for...',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=100'
    },
    {
      title: 'Explore the Elegance and Sustainability of...',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=100'
    }
  ];

  const archive = [
    { month: 'Nov 2024', count: 2 },
    { month: 'Oct 2024', count: 2 },
    { month: 'Sep 2024', count: 2 }
  ];

  const tags = ['Handmade rug', 'carpet', 'leather', 'Flooring', 'natural', 'Wool flat', 'wool', 'dyeing', 'organic', 'art'];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-8">
                  <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-primary hover:text-secondary font-semibold text-sm">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Previous</button>
              <button className="px-4 py-2 bg-primary text-white rounded">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 hover:text-primary cursor-pointer line-clamp-2">
                          {post.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Archive */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Archive</h3>
                <div className="space-y-2">
                  {archive.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <a href="#" className="text-gray-700 hover:text-primary transition">
                        {item.month}
                      </a>
                      <span className="text-sm text-gray-500">({item.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
                <p className="text-sm mb-4">Get the latest updates and articles delivered to your inbox.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none"
                  />
                  <button className="w-full bg-white text-primary py-2 rounded font-semibold hover:bg-gray-100 transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;