import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Hero Images
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200',
  'https://plus.unsplash.com/premium_photo-1664301934873-5552967a543f?w=1200'
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section id="home" className="relative min-h-screen bg-white pt-24">
      
      {/* Full Width Image Slider with Overlay */}
      <div className="relative h-150 lg:h-175 overflow-hidden">
        
        {/* Images */}
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          </div>
        ))}

        {/* Content Over Image */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md mb-6">
                <span>Karachi's #1 Industrial Supplier</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Quality
                <br />
                <span className="text-blue-400">Industrial Solutions</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trusted supplier of uniforms, safety equipment & industrial supplies for Pakistan's leading organizations since 2008.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300">
                  Get Quote
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-blue-500' 
                  : 'w-8 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Products</div>
              </div>

              <div className="text-center border-l border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Clients</div>
              </div>

              <div className="text-center border-l border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years</div>
              </div>

              <div className="text-center border-l border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Satisfaction</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Padding */}
      <div className="h-20"></div>

    </section>
  );
};

export default HeroSection;