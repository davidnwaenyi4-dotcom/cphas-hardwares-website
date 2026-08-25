import React, { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      {/* Product Image */}
      <div className="aspect-square bg-gray-300 flex items-center justify-center overflow-hidden relative">
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-center text-gray-400">
            <p className="text-sm">📦</p>
            <p className="text-xs">{product.name}</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
            Inquire
          </button>
        </div>
      </div>
    </div>
  )
}
