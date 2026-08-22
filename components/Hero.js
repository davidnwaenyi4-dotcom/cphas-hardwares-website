import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Cphas Hardwares</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Quality Hardware Materials & Professional Fabrication Services
        </p>
        <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
          Serving Port Harcourt with excellence. Premium hardware materials and professional fabrication services at competitive prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
            View Our Products
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
