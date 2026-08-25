import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const PRODUCTS = [
  {
    id: 1,
    name: 'Steel Rods',
    category: 'Metal Materials',
    price: '₦15,000',
    description: 'High quality steel rods for construction and fabrication',
    image: 'https://images.unsplash.com/photo-1634142072976-1c7e614b4a29?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Aluminum Sheets',
    category: 'Metal Materials',
    price: '₦8,500',
    description: 'Premium aluminum sheets for various applications',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Welding Equipment',
    category: 'Equipment',
    price: '₦45,000',
    description: 'Professional grade welding machines and tools',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Hardware Fittings',
    category: 'Fittings',
    price: '₦3,200',
    description: 'Complete range of hardware fittings and accessories',
    image: 'https://images.unsplash.com/photo-1587280591945-5a1dc0ae1ab0?w=500&h=500&fit=crop'
  },
  {
    id: 5,
    name: 'Iron Pipes',
    category: 'Pipes',
    price: '₦12,000',
    description: 'Durable iron pipes for plumbing and construction',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=500&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'Paint & Coatings',
    category: 'Finishing',
    price: '₦5,500',
    description: 'Industrial grade paints and protective coatings',
    image: 'https://images.unsplash.com/photo-1578519615848-e41da4d3d5df?w=500&h=500&fit=crop'
  }
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))]
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products & Price List</h1>
            <p className="text-xl text-gray-600">Quality Hardware and Materials at Competitive Prices</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
