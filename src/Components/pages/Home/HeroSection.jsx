import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


// Hero Images
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200',
  'https://plus.unsplash.com/premium_photo-1664301934873-5552967a543f?w=1200'
];

// Fade In Animation Component
const FadeInUp = ({ children, delay = 0 }) => {
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

      {/* Full Width Image Slider with Overlay */}
      <div className="relative h-150 lg:h-175 overflow-hidden">

        {/* Images */}
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
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

              {/* Badge with Animation */}
              <div
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-6 animate-fade-in-down"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                <span>Karachi's #1 Industrial Supplier</span>
              </div>

              {/* Main Heading with Animation */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                Premium Quality
                <br />
                <span className="text-blue-400">Industrial Solutions</span>
              </h1>

              {/* Description with Animation */}
              <p
                className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
              >
                Trusted supplier of uniforms, safety equipment & industrial supplies for Pakistan's leading organizations since 2008.
              </p>

              {/* CTA Buttons with Animation */}
              <div
                className="flex flex-wrap gap-4 animate-fade-in-up"
                style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
              > <Link to="/Product">
                  <button
                    className="
                           px-5 py-3 text-sm
                           sm:px-6 sm:py-3 sm:text-base
                           md:px-8 md:py-4 md:text-lg
                           bg-blue-600 text-white font-semibold
                           rounded-md
                           flex items-center justify-center gap-2
                           transition-all duration-300
                           shadow-md
                           hover:bg-blue-700 hover:shadow-xl
                           active:scale-95 md:hover:scale-105
                         "
                  >
                    View Products
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                </Link>
                <a href="#contact">
                  <button
                    className="
                           px-5 py-3 text-sm
                           sm:px-6 sm:py-3 sm:text-base
                           md:px-8 md:py-4 md:text-lg
                           bg-white text-slate-900 font-semibold
                           rounded-md
                           flex items-center justify-center gap-2
                           transition-all duration-300
                           shadow-md
                           hover:bg-gray-100 hover:shadow-xl
                           active:scale-95 md:hover:scale-105
                         "
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Contact Us
                  </button></a>



              </div>

            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'w-12 bg-blue-500'
                : 'w-8 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section with Animation */}
      <FadeInUp delay={200}>
        <div className="relative -mt-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                <FadeInUp delay={300}>
                  <div className="text-center group cursor-pointer">
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Products</div>
                  </div>
                </FadeInUp>

                <FadeInUp delay={400}>
                  <div className="text-center border-l border-gray-200 group cursor-pointer">
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Clients</div>
                  </div>
                </FadeInUp>

                <FadeInUp delay={500}>
                  <div className="text-center border-l border-gray-200 group cursor-pointer">
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years</div>
                  </div>
                </FadeInUp>

                <FadeInUp delay={600}>
                  <div className="text-center border-l border-gray-200 group cursor-pointer">
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Satisfaction</div>
                  </div>
                </FadeInUp>

              </div>
            </div>
          </div>
        </div>
      </FadeInUp>


      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>

    </section>
  );
};

export default HeroSection;