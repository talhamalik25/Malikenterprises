import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PRODUCTS = [
   {
    id: 1,
    name: "Protective Coverall",
    category: "Safety Wear",
    description: "Safety Approved | Industrial Grade",
    image: "https://plus.unsplash.com/premium_photo-1664301934873-5552967a543f?w=1200",
    features: ["Full Protection", "Multiple Pockets", "Reinforced Seams"]
  },
    {
    id: 2,
    name: "Safety Vest",
    category: "Safety Wear",
    description: "High Visibility | 100% Polyester",
    image: "https://media.istockphoto.com/id/1363449652/vector/safety-vest-set.jpg?s=612x612&w=0&k=20&c=ZLeTIP96HG0pOMxuHmpelhPowbZ6IfZt5qAVmH11p10=",
    features: ["Reflective Strips", "Durable Fabric", "All Weather"]
  },
  
  {
    id: 3,
    name: "Uniform Shirt",
    category: "Workwear",
    description: "Durable Fabric | Industrial Use",
    image: "https://media.istockphoto.com/id/1281297067/photo/blank-black-and-white-polo-shirt-mock-up-front-view.jpg?s=612x612&w=0&k=20&c=huUDQsZS9TxUH_SMEyCEYUaEBYuWHp6GJIXCXOco7TU=",
    features: ["Breathable", "Easy Care", "Custom Branding"]
  },

     {
    id: 1,
    name: "Men's Safety Shoes",
    category: "Safety Footwear",
    description: "Premium Leather | Safety Grip Sole",
    image: "https://media.istockphoto.com/id/466843741/photo/safety-boots-isolated-on-white.jpg?s=612x612&w=0&k=20&c=KlATr7zb7oZH6m_KIoU2gYxmIp95PKVYL-Y5ldZeh20=",
    features: ["Steel Toe Cap", "Anti-Slip Sole", "Water Resistant"]
  },
   {
    id: 2,
    name: "Welding Helmet",
    category: "Face Protection",
    description: "Auto-Darkening | Full Face",
    image: "https://media.istockphoto.com/id/654994138/photo/welded-equipment.jpg?s=612x612&w=0&k=20&c=sHPbyzkYR9XbTPK0mPq2q_Bkm5lkhJ0CeZhPp83_YmM=",
    features: ["UV Protection", "Impact Resistant", "Adjustable Fit"]
  },
  {
    id: 3,
    name: "Industrial Ear Muffs",
    category: "Hearing Protection",
    description: "Noise Cancelling | High NRR",
    image: "https://media.istockphoto.com/id/509808366/photo/ear-muff-for-noise-protection-ear.jpg?s=612x612&w=0&k=20&c=I2X9O4ldy4JUOHC2VtFmPaU_aY9bHvy0l04yCekzEiA=",
    features: ["Cushioned Fit", "Adjustable Headband", "Durable"]
  },
   {
    id: 6,
    name: "Fire Fighting Suit",
    category: "Fire Safety",
    description: "Heat Resistant | Fire Approved",
    image: "https://media.istockphoto.com/id/1405214281/photo/firefighter-uniforms-these-safety-suits-are-made-of-heat-and-fire-resistant-fabrics.jpg?s=612x612&w=0&k=20&c=FsrbEUgl-Ro0SvolFxevSzP-pSr6gPKkLkF5HaLlCv0=",
    features: ["Flame Resistant", "Thermal Protection", "High Visibility"]
  },
  {
    id: 8,
    name: "Industrial Helmet",
    category: "Head Protection",
    description: "Impact Resistant | Adjustable Fit",
    image: "https://media.istockphoto.com/id/171326814/photo/yellow-hard-hat-on-white-with-clipping-path.jpg?s=612x612&w=0&k=20&c=xbpjXBkKO8KlSiuZz8bxTmKKX0OlcqWyE7n3A1F6lUg=",
    features: ["Hard Shell", "Ventilation System", "Adjustable Straps"]
  },
  {
    id: 9,
    name: "Work Gloves",
    category: "Hand Protection",
    description: "Cut Resistant | Heavy Duty",
    image: "https://media.istockphoto.com/id/874114444/photo/leather-work-glove.webp?a=1&b=1&s=612x612&w=0&k=20&c=2_1XiMItJ6rxuodNJqkVxrekFkhcffbH43R_vboooQs=",
    features: ["Cut Protection", "Grip Technology", "Durable Material"]
  },
  {
    id: 10,
    name: "Safari Suit",
    category: "Workwear",
    description: "Comfort Fit | Industrial Use",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
    features: ["Multiple Pockets", "Breathable Fabric", "Durable Stitching"]
  },
  {
    id: 11,
    name: "Industrial Safety Gloves",
    category: "Hand Protection",
    description: "Cut Resistant | Heavy Duty",
    image: "https://media.istockphoto.com/id/164446264/vector/protective-yellow-gloves-laying-on-a-white-background.jpg?s=612x612&w=0&k=20&c=MhTFd-fytoSMuarsuPDo_ds_c1WhgRWkWsp7G4EJbc0=",
    features: ["Strong Grip", "Heat Resistant", "Long Life"]
  },
  {
    id: 12,
    name: "Safety Harness",
    category: "Fall Protection",
    description: "Full Body | Construction Use",
    image: "https://media.istockphoto.com/id/1440872328/photo/3d-rendering-realistic-construction-safety-harness.jpg?s=612x612&w=0&k=20&c=AjU9qXNYk-wKKz6sUv5Bg93aSS3P8dgt0JsC7_qcJ_8=",
    features: ["High Load Capacity", "Adjustable Straps", "Durable Webbing"]
  },
  {
    id: 13,
    name: "Industrial Gumboots",
    category: "Safety Footwear",
    description: "Waterproof | Chemical Resistant",
    image: "https://media.istockphoto.com/id/1249913227/photo/yellow-rubber-boots-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Jod1aiqEEOreezqRTbhNPhRSlLi2Vshd_7gfpJKUsHM=",
    features: ["Anti-Slip Sole", "PVC Material", "All Weather Use"]
  },
  {
    id: 14,
    name: "Safety Goggles",
    category: "Eye Protection",
    description: "Anti-Fog | Chemical Splash",
    image: "https://media.istockphoto.com/id/1672074625/photo/safety-goggles.jpg?s=612x612&w=0&k=20&c=NqaLZtzziQpEnzFaY2SzK6LRToHGrAp_f41gBcAeoNU=",
    features: ["Ventilated", "Crystal Clear", "Scratch Resistant"]
  },
  {
    id: 15,
    name: "Industrial Rain Coat",
    category: "Weather Protection",
    description: "100% Waterproof | High Visibility",
    image: "https://media.istockphoto.com/id/534888811/photo/jacket-men.jpg?s=612x612&w=0&k=20&c=ylayXS4CEAH-5-BUxeZvaiFcqpskZJQNHkfnuM6KdoU=",
    features: ["Reflective Strips", "Hooded", "Sealed Seams"]
  }
];


const ProductPage = () => {
  return (
    <section id="product" className="py-20 bg-gray-50 mt-20">
       <a
      href="https://wa.me/923331230531?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
       hover:bg-green-600 bg-white
        shadow-lg hover:scale-110
        transition-all duration-300
      "
    >
     <img src="/whatsapp.png" alt="" />
        
    </a>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-85 overflow-hidden bg-gray-100">
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

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPage;
