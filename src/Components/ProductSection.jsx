import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Men's Sports Shoes",
    category: "Safety Footwear",
    description: "Premium Leather | Safety Grip Sole",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    features: ["Steel Toe Cap", "Anti-Slip Sole", "Water Resistant"]
  },
  {
    id: 2,
    name: "Safety Vest",
    category: "Safety Wear",
    description: "High Visibility | 100% Polyester",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
    features: ["Reflective Strips", "Durable Fabric", "All Weather"]
  },
  {
    id: 3,
    name: "Uniform Shirt",
    category: "Workwear",
    description: "Durable Fabric | Industrial Use",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    features: ["Breathable", "Easy Care", "Custom Branding"]
  },
  {
    id: 4,
    name: "Protective Coverall",
    category: "Safety Wear",
    description: "Safety Approved | Industrial Grade",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500",
    features: ["Full Protection", "Multiple Pockets", "Reinforced Seams"]
  },

  // 🔹 NEW INDUSTRIAL PRODUCTS 🔹
  {
    id: 5,
    name: "Industrial Coverall Suit",
    category: "Protective Clothing",
    description: "Heavy Duty | Chemical Resistant",
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=500&q=80",
    features: ["Flame Resistant", "Oil Proof", "High Durability"]
  },
  {
    id: 6,
    name: "Life Jacket",
    category: "Marine Safety",
    description: "Buoyancy Certified | Emergency Use",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
    features: ["High Buoyancy", "Quick Release Buckles", "Waterproof"]
  },
  {
    id: 7,
    name: "Fire Fighting Suit",
    category: "Fire Safety",
    description: "Heat Resistant | Fire Approved",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80",
    features: ["Flame Resistant", "Thermal Protection", "High Visibility"]
  },
  {
    id: 8,
    name: "Safari Suit",
    category: "Workwear",
    description: "Comfort Fit | Industrial Use",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
    features: ["Multiple Pockets", "Breathable Fabric", "Durable Stitching"]
  },
  {
    id: 9,
    name: "Safety Helmet",
    category: "Head Protection",
    description: "Impact Resistant | Construction Grade",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9c1d06?auto=format&fit=crop&w=500&q=80",
    features: ["Shock Absorption", "Adjustable Fit", "Certified Safety"]
  },
  {
    id: 10,
    name: "Industrial Safety Gloves",
    category: "Hand Protection",
    description: "Cut Resistant | Heavy Duty",
    image: "https://images.unsplash.com/photo-1584467735871-b0b46b47f4c1?auto=format&fit=crop&w=500&q=80",
    features: ["Strong Grip", "Heat Resistant", "Long Life"]
  },
  {
    id: 11,
    name: "Safety Harness",
    category: "Fall Protection",
    description: "Full Body | Construction Use",
    image: "https://images.unsplash.com/photo-1596495578065-7e0763fa7c30?auto=format&fit=crop&w=500&q=80",
    features: ["High Load Capacity", "Adjustable Straps", "Durable Webbing"]
  },
  {
    id: 12,
    name: "Industrial Gumboots",
    category: "Safety Footwear",
    description: "Waterproof | Chemical Resistant",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500&q=80",
    features: ["Anti-Slip Sole", "PVC Material", "All Weather Use"]
  },
  {
    id: 13,
    name: "Welding Helmet",
    category: "Face Protection",
    description: "Auto-Darkening | Full Face",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80",
    features: ["UV Protection", "Impact Resistant", "Adjustable Fit"]
  },
  {
    id: 14,
    name: "Industrial Ear Muffs",
    category: "Hearing Protection",
    description: "Noise Cancelling | High NRR",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    features: ["Cushioned Fit", "Adjustable Headband", "Durable"]
  },
  {
    id: 15,
    name: "Safety Goggles",
    category: "Eye Protection",
    description: "Anti-Fog | Chemical Splash",
    image: "https://images.unsplash.com/photo-1531297461136-82lw9z2x3b4?auto=format&fit=crop&w=500&q=80",
    features: ["Ventilated", "Crystal Clear", "Scratch Resistant"]
  },
  {
    id: 16,
    name: "Industrial Rain Coat",
    category: "Weather Protection",
    description: "100% Waterproof | High Visibility",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=500&q=80",
    features: ["Reflective Strips", "Hooded", "Sealed Seams"]
  }
];


const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md">
              OUR PRODUCTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality industrial supplies and safety equipment for all your business needs
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All products meet international safety standards</p>
            </div>

            <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-gray-200 md:pl-8 pt-8 md:pt-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bulk Orders</h3>
              <p className="text-gray-600">Competitive pricing for wholesale purchases</p>
            </div>

            <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-gray-200 md:pl-8 pt-8 md:pt-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround time across Pakistan</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;