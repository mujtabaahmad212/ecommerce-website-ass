import { useState } from 'react';
import { FiFilter, FiGrid, FiList, FiChevronDown } from 'react-icons/fi';
import ProductCard from './ProductCard';

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 256 },
    { id: 'electronics', name: 'Electronics', count: 89 },
    { id: 'fashion', name: 'Fashion', count: 67 },
    { id: 'home', name: 'Home & Garden', count: 45 },
    { id: 'sports', name: 'Sports', count: 55 },
  ];

  const products = [
    { name: "Wireless Headphones", price: 79.99, oldPrice: 99.99, badge: "Sale", rating: 4.5 },
    { name: "Smart Watch Pro", price: 199.99, badge: "New", rating: 4.8 },
    { name: "Leather Backpack", price: 149.99, oldPrice: 189.99, rating: 4.3 },
    { name: "Running Shoes", price: 129.99, rating: 4.6 },
    { name: "Bluetooth Speaker", price: 59.99, oldPrice: 79.99, badge: "Sale", rating: 4.4 },
    { name: "Fitness Tracker", price: 89.99, rating: 4.2 },
    { name: "Laptop Stand", price: 45.99, badge: "New", rating: 4.7 },
    { name: "Wireless Charger", price: 29.99, oldPrice: 39.99, rating: 4.1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="gradient-text animate-fadeInUp">Shop</h1>
        <div className="breadcrumb animate-fadeInUp delay-200">
          <a href="/">Home</a>
          <span>/</span>
          <span>Shop</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 animate-fadeInLeft">
            <div className="card p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <FiFilter className="text-green-500" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-lg transition-all ${selectedCategory === cat.id
                          ? 'gradient-bg text-white'
                          : 'hover:bg-gray-100'
                        }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-sm ${selectedCategory === cat.id ? 'text-white/80' : 'text-gray-400'}`}>
                        ({cat.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Price Range</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-green-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Colors</h4>
                <div className="flex flex-wrap gap-2">
                  {['bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-lime-500', 'bg-gray-500'].map((color, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 ${color} rounded-full hover:scale-110 transition-transform ring-2 ring-offset-2 ring-transparent hover:ring-gray-300`}
                    />
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button className="w-full btn-secondary text-sm">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1 animate-fadeInRight">
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{products.length}</span> products
              </p>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-green-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* View Toggle */}
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'gradient-bg text-white' : 'bg-white'}`}
                  >
                    <FiGrid />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'gradient-bg text-white' : 'bg-white'}`}
                  >
                    <FiList />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`${viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                : 'flex flex-col gap-6'
              }`}>
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  delay={index * 0.1}
                  {...product}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${page === 1
                      ? 'gradient-bg text-white'
                      : 'bg-white hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-all">
                Next →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;