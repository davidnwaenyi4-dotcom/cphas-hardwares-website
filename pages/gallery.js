import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GALLERY_ITEMS = [
  { id: 1, title: 'Welding Work' },
  { id: 2, title: 'Steel Fabrication' },
  { id: 3, title: 'Hardware Display' },
  { id: 4, title: 'Equipment Setup' },
  { id: 5, title: 'Metal Work' },
  { id: 6, title: 'Professional Team' }
]

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-600">Our Work & Services in Action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">Image: {item.title}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">Ready to see your project come to life?</p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
