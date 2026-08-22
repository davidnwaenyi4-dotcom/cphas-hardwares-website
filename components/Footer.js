import React from 'react'
import Link from 'next/link'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">CPHAS Hardwares</h3>
            <p className="text-gray-300 mb-4">Quality Hardware & Fabrication Services since establishment.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-yellow-400 transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" />
                <span>0708 000 8951</span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span>121 Aba Road, Waterlines, Port Harcourt</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                <span>info@cphashardwares.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://facebook.com/cphashardwares" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <FaFacebook size={24} />
                <span>Facebook</span>
              </a>
              <a href="https://wa.me/2347080008951" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <FaWhatsapp size={24} />
                <span>WhatsApp</span>
              </a>
              <a href="https://instagram.com/cphashardwares" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com/cphashardwares" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <FaTwitter size={24} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cphas Hardwares Limited. All rights reserved.</p>
          <p className="mt-2">Serving Port Harcourt with quality and excellence.</p>
        </div>
      </div>
    </footer>
  )
}
