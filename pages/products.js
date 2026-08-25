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
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Aluminum Sheets',
    category: 'Metal Materials',
    price: '₦8,500',
    description: 'Premium aluminum sheets for various applications',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Welding Equipment',
    category: 'Equipment',
    price: '₦45,000',
    description: 'Professional grade welding machines and tools',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop'
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

          {/* How to Update Products Section */}
          <div className="mt-16 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📸 Update Your Product Images</h2>
            <p className="text-gray-700 mb-4">To replace product images with your own:</p>
            <div className="bg-white p-6 rounded-lg border border-gray-300 font-mono text-sm">
              <p className="text-gray-600 mb-4">Edit <span className="text-blue-600 font-bold">pages/products.js</span> and change the image URLs:</p>
              <div className="bg-gray-100 p-4 rounded overflow-x-auto">
                <code className="text-gray-800">{`image: 'YOUR_IMAGE_URL_HERE'`}</code>
              </div>
              <p className="text-gray-600 mt-4">You can use:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Direct image URLs from Unsplash, Pexels, or Pixabay</li>
                <li>Your own hosted images</li>
                <li>Cloudinary or similar image hosting services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
