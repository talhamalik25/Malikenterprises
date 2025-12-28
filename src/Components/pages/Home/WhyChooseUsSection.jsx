import React, { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Headphones, Shield, Clock, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Superior craftsmanship and materials that meet international standards",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "Bulk Supply",
    description: "Competitive pricing for wholesale and bulk orders with flexible payment terms",
    color: "cyan"
  },
  {
    icon: Headphones,
    title: "Fast Response",
    description: "24/7 customer service with quick turnaround on all inquiries and orders",
    color: "indigo"
  },
  {
    icon: Shield,
    title: "Certified Products",
    description: "All safety equipment certified and approved by relevant authorities",
    color: "blue"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable delivery service across Pakistan with shipment tracking",
    color: "cyan"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to help you choose the right products for your needs",
    color: "indigo"
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
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Your Trusted Industrial Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine quality products, competitive pricing, and exceptional service to deliver the best value for your business
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEATURES.map((feature, index) => (
            <FadeInWhenVisible key={index} delay={index * 150}>
              <div className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-600">
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Line Animation */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;