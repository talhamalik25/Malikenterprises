import React, { useEffect, useRef, useState } from 'react';
import { Truck, ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

// Hero Images for Transport
const TRANSPORT_IMAGES = [
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200'
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

const TransportHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % TRANSPORT_IMAGES.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TRANSPORT_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TRANSPORT_IMAGES.length) % TRANSPORT_IMAGES.length);

  // Touch handlers for swipe with visible drag effect
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative min-h-screen bg-white pt-24" id='home'>

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

      {/* Hero Section with Background Image Slider */}
      <div 
        className="relative h-[600px] lg:h-[700px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {/* Background Images */}
        {TRANSPORT_IMAGES.map((image, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + TRANSPORT_IMAGES.length) % TRANSPORT_IMAGES.length;
          const isNext = index === (currentSlide + 1) % TRANSPORT_IMAGES.length;
          
          let transform = 'translateX(100%)';
          if (isActive) {
            transform = `translateX(${isDragging ? dragOffset : 0}px)`;
          } else if (isPrev) {
            transform = `translateX(${isDragging ? dragOffset - window.innerWidth : '-100%'})`;
          } else if (isNext) {
            transform = `translateX(${isDragging ? dragOffset + window.innerWidth : '100%'})`;
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 ${isDragging ? '' : 'transition-all duration-700 ease-out'}`}
              style={{ 
                transform,
                opacity: (isActive || (isDragging && (isPrev || isNext))) ? 1 : 0
              }}
            >
              <img
                src={image}
                alt={`Transport Slide ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
            </div>
          );
        })}

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">

              {/* Company Badge */}
              <div
                className="inline-flex items-center gap-3 px-5 py-3 bg-orange-600 text-white rounded-full mb-6 animate-fade-in-down"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                <Truck className="w-5 h-5" />
                <span className="text-sm font-semibold">Arif Malik & Sons - Logistics Solutions</span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                Heavy Equipment
                <br />
                <span className="text-orange-400">Transport Specialists</span>
              </h1>

              {/* Description */}
              <p
                className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
              >
                Safe and reliable transportation of loaders, cranes, and heavy machinery across Pakistan. Our experienced team ensures secure handling from loading to delivery.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 animate-fade-in-up"
                style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
              >
                <a href="#services">
                  <button
                    className="
                      px-5 py-3 text-sm
                      sm:px-6 sm:py-3 sm:text-base
                      md:px-8 md:py-4 md:text-lg
                      bg-orange-600 text-white font-semibold
                      rounded-md
                      flex items-center justify-center gap-2
                      transition-all duration-300
                      shadow-md
                      hover:bg-orange-700 hover:shadow-xl
                      active:scale-95 md:hover:scale-105
                    "
                  >
                    Our Services
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </a>
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
                  </button>
                </a>
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
          {TRANSPORT_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'w-12 bg-orange-500'
                : 'w-8 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <FadeInWhenVisible delay={200}>
        <div className="relative -mt-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                <FadeInWhenVisible delay={300}>
                  <div className="text-center group cursor-pointer">
                    <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Deliveries</div>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={400}>
                  <div className="text-center border-l border-gray-200 group cursor-pointer">
                    <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Fleet Vehicles</div>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={500}>
                  <div className="text-center border-l border-gray-200 group cursor-pointer">
                    <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years Experience</div>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={600}>
                  <div className="text-center border-l border-gray-200 group cursor-pointer">
                    <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Safety Record</div>
                  </div>
                </FadeInWhenVisible>

              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Bottom Padding */}
      <div className="h-20"></div>

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

export default TransportHero;