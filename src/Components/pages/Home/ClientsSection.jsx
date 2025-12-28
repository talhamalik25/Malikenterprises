import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

// Client logos data
const CLIENTS = [
  {
    id: 1,
    name: "International Container Terminal (KICT)",
    logo: "/assets/Client1.png"
  },
  {
    id: 2,
    name: "Bahria Town Karachi",
    logo: "/assets/Client3.png"
  },
  {
    id: 3,
    name: "South Asia Pakistan Terminals (SAPT)",
    logo: "/assets/Client5.png"
  },
  {
    id: 4,
    name: "Perfect Transport Network (PTN)",
    logo: "/assets/Client7.png"
  },
  {
    id: 5,
    name: "Shaheen Freight Services",
    logo: "/assets/Client6.png"
  },
  {
    id: 6,
    name: "Pakistan Rangers",
    logo: "/assets/Client8.png"
  },
  {
    id: 7,
    name: "Dow University of Health Sciences (DUHS)",
    logo: "/assets/Client4.png"
  },
  {
    id: 8,
    name: "Mamji Hospital",
    logo: "/assets/Client2.png"
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-md mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">Trusted By Industry Leaders</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Valued Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud to serve Pakistan's most prestigious organizations with quality products and exceptional service
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {CLIENTS.map((client, index) => (
            <FadeInWhenVisible key={client.id} delay={index * 100}>
              <div className="relative bg-white border-2 border-blue-600 rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-indigo-600 hover:scale-105 hover:rotate-1">
                {/* Background Effect always visible */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-100 rounded-xl transition-transform duration-300 group-hover:scale-105"></div>

                {/* Logo Container */}
                <div className="relative flex items-center justify-center h-20">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-125 hover:rotate-3"
                  />
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Trust Indicators */}
        <FadeInWhenVisible delay={300}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Trusted Clients</div>
              <p className="text-sm text-gray-600 mt-2">Leading organizations across Pakistan</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-semibold">Years Experience</div>
              <p className="text-sm text-gray-600 mt-2">Serving industries since 2008</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Client Satisfaction</div>
              <p className="text-sm text-gray-600 mt-2">Quality guaranteed on every order</p>
            </div>

          </div>
        </FadeInWhenVisible>

      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;