import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRODUCTS = [
  { id: 1, name: 'Steel Rods', category: 'Metal Materials' },
  { id: 2, name: 'Aluminum Sheets', category: 'Metal Materials' },
  { id: 3, name: 'Copper Wires', category: 'Metal Materials' },
  { id: 4, name: 'Iron Bars', category: 'Metal Materials' },
  { id: 5, name: 'Stainless Steel Plates', category: 'Metal Materials' },
  { id: 6, name: 'Galvanized Sheets', category: 'Metal Materials' },
  { id: 7, name: 'Brass Rods', category: 'Metal Materials' },
  { id: 8, name: 'Zinc Coated Steel', category: 'Metal Materials' },
  { id: 9, name: 'Mild Steel Angles', category: 'Metal Materials' },
  { id: 10, name: 'Channel Sections', category: 'Metal Materials' },
  
  { id: 11, name: 'Welding Machine', category: 'Equipment' },
  { id: 12, name: 'Arc Welder', category: 'Equipment' },
  { id: 13, name: 'MIG Welder', category: 'Equipment' },
  { id: 14, name: 'TIG Welder', category: 'Equipment' },
  { id: 15, name: 'Plasma Cutter', category: 'Equipment' },
  { id: 16, name: 'Angle Grinder', category: 'Equipment' },
  { id: 17, name: 'Power Drill', category: 'Equipment' },
  { id: 18, name: 'Circular Saw', category: 'Equipment' },
  { id: 19, name: 'Bench Grinder', category: 'Equipment' },
  { id: 20, name: 'Air Compressor', category: 'Equipment' },
  
  { id: 21, name: 'Stainless Steel Bolts', category: 'Fittings' },
  { id: 22, name: 'Galvanized Screws', category: 'Fittings' },
  { id: 23, name: 'Nuts & Bolts Set', category: 'Fittings' },
  { id: 24, name: 'Washers', category: 'Fittings' },
  { id: 25, name: 'Lock Nuts', category: 'Fittings' },
  { id: 26, name: 'Anchor Bolts', category: 'Fittings' },
  { id: 27, name: 'Eye Bolts', category: 'Fittings' },
  { id: 28, name: 'U-Bolts', category: 'Fittings' },
  { id: 29, name: 'T-Bolts', category: 'Fittings' },
  { id: 30, name: 'Carriage Bolts', category: 'Fittings' },
  
  { id: 31, name: 'Cast Iron Pipes', category: 'Pipes' },
  { id: 32, name: 'PVC Pipes', category: 'Pipes' },
  { id: 33, name: 'Galvanized Pipes', category: 'Pipes' },
  { id: 34, name: 'Copper Pipes', category: 'Pipes' },
  { id: 35, name: 'Steel Tubing', category: 'Pipes' },
  { id: 36, name: 'Aluminum Tubing', category: 'Pipes' },
  { id: 37, name: 'Stainless Steel Tubing', category: 'Pipes' },
  { id: 38, name: 'HDPE Pipes', category: 'Pipes' },
  { id: 39, name: 'Flexible Hoses', category: 'Pipes' },
  { id: 40, name: 'Pipe Fittings', category: 'Pipes' },
  
  { id: 41, name: 'Industrial Paint', category: 'Finishing' },
  { id: 42, name: 'Epoxy Coating', category: 'Finishing' },
  { id: 43, name: 'Polyurethane Paint', category: 'Finishing' },
  { id: 44, name: 'Rust Inhibitor', category: 'Finishing' },
  { id: 45, name: 'Primer', category: 'Finishing' },
  { id: 46, name: 'Lacquer', category: 'Finishing' },
  { id: 47, name: 'Varnish', category: 'Finishing' },
  { id: 48, name: 'Anti-Corrosive Paint', category: 'Finishing' },
  { id: 49, name: 'Metal Polish', category: 'Finishing' },
  { id: 50, name: 'Protective Coating', category: 'Finishing' },
  
  { id: 51, name: 'Welding Rods', category: 'Welding Supplies' },
  { id: 52, name: 'Welding Wire', category: 'Welding Supplies' },
  { id: 53, name: 'Flux Cored Wire', category: 'Welding Supplies' },
  { id: 54, name: 'Argon Gas', category: 'Welding Supplies' },
  { id: 55, name: 'CO2 Gas', category: 'Welding Supplies' },
  { id: 56, name: 'Welding Helmet', category: 'Welding Supplies' },
  { id: 57, name: 'Welding Gloves', category: 'Welding Supplies' },
  { id: 58, name: 'Welding Apron', category: 'Welding Supplies' },
  { id: 59, name: 'Welding Torch', category: 'Welding Supplies' },
  { id: 60, name: 'Welding Nozzle', category: 'Welding Supplies' },
  
  { id: 61, name: 'Door Hinges', category: 'Hardware' },
  { id: 62, name: 'Door Locks', category: 'Hardware' },
  { id: 63, name: 'Padlocks', category: 'Hardware' },
  { id: 64, name: 'Chain Links', category: 'Hardware' },
  { id: 65, name: 'Hooks & Eyes', category: 'Hardware' },
  { id: 66, name: 'Nails', category: 'Hardware' },
  { id: 67, name: 'Rivets', category: 'Hardware' },
  { id: 68, name: 'Spring Clips', category: 'Hardware' },
  { id: 69, name: 'Wire Clamps', category: 'Hardware' },
  { id: 70, name: 'Cable Ties', category: 'Hardware' },
  
  { id: 71, name: 'Safety Helmets', category: 'Safety Equipment' },
  { id: 72, name: 'Safety Goggles', category: 'Safety Equipment' },
  { id: 73, name: 'Work Gloves', category: 'Safety Equipment' },
  { id: 74, name: 'Safety Boots', category: 'Safety Equipment' },
  { id: 75, name: 'Reflective Vests', category: 'Safety Equipment' },
  { id: 76, name: 'Dust Masks', category: 'Safety Equipment' },
  { id: 77, name: 'Respirators', category: 'Safety Equipment' },
  { id: 78, name: 'Hearing Protection', category: 'Safety Equipment' },
  { id: 79, name: 'First Aid Kit', category: 'Safety Equipment' },
  { id: 80, name: 'Safety Signs', category: 'Safety Equipment' },
  
  { id: 81, name: 'Measuring Tape', category: 'Tools' },
  { id: 82, name: 'Spirit Level', category: 'Tools' },
  { id: 83, name: 'Hammer', category: 'Tools' },
  { id: 84, name: 'Wrench Set', category: 'Tools' },
  { id: 85, name: 'Screwdriver Set', category: 'Tools' },
  { id: 86, name: 'Pliers', category: 'Tools' },
  { id: 87, name: 'Adjustable Wrench', category: 'Tools' },
  { id: 88, name: 'Socket Set', category: 'Tools' },
  { id: 89, name: 'Chisel', category: 'Tools' },
  { id: 90, name: 'Saw', category: 'Tools' },
  
  { id: 91, name: 'Scaffolding Pipes', category: 'Construction' },
  { id: 92, name: 'Rebar', category: 'Construction' },
  { id: 93, name: 'Wire Mesh', category: 'Construction' },
  { id: 94, name: 'Concrete Nails', category: 'Construction' },
  { id: 95, name: 'Expanding Anchors', category: 'Construction' },
  { id: 96, name: 'Fence Posts', category: 'Construction' },
  { id: 97, name: 'Gate Hinges', category: 'Construction' },
  { id: 98, name: 'Grating', category: 'Construction' },
  { id: 99, name: 'Metal Mesh', category: 'Construction' },
  { id: 100, name: 'Structural Steel', category: 'Construction' },
  
  { id: 101, name: 'Electrolytic Copper', category: 'Specialty Materials' },
  { id: 102, name: 'Lead Sheets', category: 'Specialty Materials' },
  { id: 103, name: 'Tin Plate', category: 'Specialty Materials' },
  { id: 104, name: 'Titanium Alloy', category: 'Specialty Materials' },
  { id: 105, name: 'Nickel Alloy', category: 'Specialty Materials' },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))]
  
  let filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory)

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600">Over 100+ Quality Hardware & Materials</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Count */}
          <div className="mb-6 text-center">
            <p className="text-gray-600 font-semibold">Showing {filteredProducts.length} products</p>
          </div>

          {/* Products List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredProducts.map(product => (
                <div key={product.id} className="p-4 hover:bg-gray-50 transition flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Inquire
                  </button>
                </div>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
