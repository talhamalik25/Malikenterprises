import React, { useEffect, useRef, useState } from 'react';
import { Truck, Construction, Settings, Shield, Clock, MapPin, CheckCircle, Package,Zap} from 'lucide-react';

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

const SERVICES = [
 {
    icon: Package,
    title: 'Lifter',
    description: 'Heavy-duty lifting equipment transport with specialized trailers and secure tie-down systems for safe handling.',
    image: 'https://media.istockphoto.com/id/2215696600/photo/hydraulic-truck-crane-isolated-on-white-clipping-path.jpg?s=612x612&w=0&k=20&c=LjbKQJVdICRxKfYD6mQM2WQBZY85vWzrLUlhq-AS-Vo=',
    features: [
      'Reinforced Trailers',
      'Secure Loading',
      'Experienced Operators',
      'All Size Capacity'
    ]
  },
    {
    icon: Truck,
    title: 'Trailer',
    description: 'Large capacity trailer transport for bulk goods and heavy equipment with secure loading systems.',
    image: 'https://media.istockphoto.com/id/499034617/photo/container.jpg?s=612x612&w=0&k=20&c=X5jsR59YZGjKAVtxVsfij8yK9NzLN6O_OjOwr5f8g9o=',
    features: [
      'Bulk Capacity',
      'Heavy Equipment',
      'Secure Strapping',
      'Long Distance'
    ]
  },
  {
    icon: Construction,
    title: 'Crane',
    description: 'High-capacity lifting crane transport with route planning, permits, and secure loading for oversized equipment.',
    image: 'https://media.istockphoto.com/id/2215696601/photo/hydraulic-truck-crane-isolated-on-white-clipping-path.jpg?s=612x612&w=0&k=20&c=OkKe0i0pkTtysXdtDA5zUuN1lqdoHV7509I6LFnVb-o=',
    features: [
      'Route Planning',
      'Permit Handling',
      'Mobile & Tower Cranes',
      'Safe Disassembly'
    ]
  },
    {
    icon: Zap,
    title: 'Compressor',
    description: 'Industrial air compressor and generator transport with secure mounting and vibration protection.',
    image: 'https://media.istockphoto.com/id/1499634658/photo/mobile-diesel-generator-isolated.jpg?s=612x612&w=0&k=20&c=S5Wg4L0fVNrgvKOFLakxbe3sDX4ls7oX2uFa3iwHGoE=',
    features: [
      'Vibration Protection',
      'Secure Mounting',
      'All Generator Types',
      'Quick Setup'
    ]
  },
  {
    icon: Construction,
    title: 'Boom Loader',
    description: 'Material handling and lifting boom loader transport with specialized equipment for safe transit.',
    image: 'https://media.istockphoto.com/id/2178150224/vector/mobile-crane-with-h-beam-on-white-background.jpg?s=612x612&w=0&k=20&c=dHzxDl8MPOPYdbH7V78sNq6BRul3Jr0gEW5n5pdwk_Y=',
    features: [
      'Material Handling',
      'Heavy Lifting',
      'Site-to-Site',
      'Professional Crew'
    ]
  },
  {
    icon: Construction,
    title: 'Crawler Crane',
    description: 'Heavy crawler crane transport with specialized equipment and route surveys for maximum safety.',
    image: 'https://media.istockphoto.com/id/2215596813/photo/excavator-heavy-construction-machinery-3d-rendering-on-white-background.jpg?s=612x612&w=0&k=20&c=RgnHsO-pZVGk1khasqtOG6Dym1cxG6VdF2GVQnP-tHE=',
    features: [
      'Heavy Capacity',
      'Route Survey',
      'Permit Coordination',
      'Expert Handling'
    ]
  },

];


const WHY_CHOOSE = [
  {
    icon: Shield,
    title: 'Insured Transport',
    description: 'Full insurance coverage for complete peace of mind'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Reliable scheduling and punctual service'
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'Serving all major cities across Pakistan'
  }
];

const TransportServices = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-md uppercase tracking-wide">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transport Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional heavy equipment transport services with safety and reliability as our top priorities
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Services List */}
        <div className="space-y-12 mb-20">
          {SERVICES.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 200}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}>
                  
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${
                    index % 2 === 0 ? '' : 'lg:col-start-2'
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center shadow-xl">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Why Choose Us */}
        <FadeInWhenVisible delay={400}>
          <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Choose Our Transport Services?</h3>
              <p className="text-orange-100 max-w-2xl mx-auto">
                We combine experience, reliability, and safety to provide the best transport solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WHY_CHOOSE.map((item, index) => (
                <FadeInWhenVisible key={index} delay={500 + (index * 100)}>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-orange-100">{item.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  );
};

export default TransportServices;