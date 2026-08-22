import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      <div className="aspect-square bg-gray-300 flex items-center justify-center">
        <span className="text-gray-400 text-center">{product.name}</span>
      </div>
      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Inquire
          </button>
        </div>
      </div>
    </div>
  )
}
