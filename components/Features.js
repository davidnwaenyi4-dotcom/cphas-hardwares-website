import React from 'react'
import { FaCheck, FaTruck, FaHeart, FaUsers } from 'react-icons/fa'

const FEATURES = [
  {
    icon: FaCheck,
    title: 'High Quality',
    description: 'Premium materials sourced from trusted suppliers'
  },
  {
    icon: FaTruck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your location'
  },
  {
    icon: FaHeart,
    title: 'Best Prices',
    description: 'Competitive pricing without compromising quality'
  },
  {
    icon: FaUsers,
    title: 'Expert Team',
    description: 'Experienced professionals ready to help'
  }
]

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                <Icon className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
