import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SERVICES = [
  {
    title: 'Professional Welding',
    description: 'Expert welding services for construction, fabrication, and repair work'
  },
  {
    title: 'Fabrication Services',
    description: 'Custom fabrication of metal structures and components'
  },
  {
    title: 'Equipment Rental',
    description: 'Rent professional tools and equipment for your projects'
  },
  {
    title: 'Supply & Delivery',
    description: 'Reliable delivery of materials to your location'
  }
]

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive Hardware and Fabrication Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
