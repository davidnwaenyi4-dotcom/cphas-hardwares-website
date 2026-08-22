import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Cphas Hardwares Limited</h1>
            
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Cphas Hardwares Limited is a leading provider of quality hardware materials and fabrication services in Port Harcourt, Nigeria.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
              <p>
                To provide high-quality hardware materials and professional fabrication services that exceed customer expectations.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Information</h2>
              <p><strong>Address:</strong> 121 Aba Road, By Wami Street, Waterlines, Port Harcourt 500101, Rivers, Nigeria</p>
              <p><strong>Phone:</strong> 0708 000 8951</p>
              <p><strong>Email:</strong> info@cphashardwares.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
