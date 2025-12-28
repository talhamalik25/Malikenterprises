import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
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
    id: 4,
    name: "Protective Coverall",
    category: "Safety Wear",
    description: "Safety Approved | Industrial Grade",
    image: "https://plus.unsplash.com/premium_photo-1664301934873-5552967a543f?w=1200",
    features: ["Full Protection", "Multiple Pockets", "Reinforced Seams"]
  },
  {
    id: 5,
    name: "Industrial Helmet",
    category: "Head Protection",
    description: "Impact Resistant | Adjustable Fit",
    image: "https://media.istockphoto.com/id/171326814/photo/yellow-hard-hat-on-white-with-clipping-path.jpg?s=612x612&w=0&k=20&c=xbpjXBkKO8KlSiuZz8bxTmKKX0OlcqWyE7n3A1F6lUg=",
    features: ["Hard Shell", "Ventilation System", "Adjustable Straps"]
  },
  {
    id: 6,
    name: "Work Gloves",
    category: "Hand Protection",
    description: "Cut Resistant | Heavy Duty",
    image: "https://media.istockphoto.com/id/874114444/photo/leather-work-glove.webp?a=1&b=1&s=612x612&w=0&k=20&c=2_1XiMItJ6rxuodNJqkVxrekFkhcffbH43R_vboooQs=",
    features: ["Cut Protection", "Grip Technology", "Durable Material"]
  }
];

// Fade In Animation Component
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        }`}
    >
      {children}
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <FadeInWhenVisible>
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
        </FadeInWhenVisible>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRODUCTS.map((product, index) => (
            <FadeInWhenVisible key={product.id} delay={index * 100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4 flex-1">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-700 animate-fade-in"
                        style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s`, animationFillMode: 'both' }}
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}

                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* See More Button */}
        <FadeInWhenVisible delay={600}>
          <div className="text-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 group">
              <Link to="/Product">View More</Link>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </FadeInWhenVisible>

      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;