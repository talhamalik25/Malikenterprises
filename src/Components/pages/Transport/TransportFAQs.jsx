import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Truck, Shield, Package } from 'lucide-react';

// FAQ Categories
const FAQ_CATEGORIES = [
  {
    id: 'loader',
    title: 'Loader Transport',
    icon: Truck,
    faqs: [
      {
        question: 'What types of loaders can you transport?',
        answer: 'We transport all types of loader vehicles including compact loaders, wheel loaders, skid steer loaders, and track loaders of various sizes. Our fleet is equipped with reinforced trailers and secure tie-down systems to handle loaders of all capacities.'
      },
      {
        question: 'How do you ensure the safety of loader transport?',
        answer: 'We use specialized equipment including reinforced trailers, heavy-duty straps, and secure tie-down systems. Our experienced operators follow strict loading and unloading procedures, and we conduct thorough inspections before and after each transport.'
      },
      {
        question: 'What is the typical delivery timeframe?',
        answer: 'Delivery timeframes depend on the distance and route. Local deliveries within Karachi typically take 1-2 days, while inter-city transport can take 3-5 days. We provide tracking updates and keep you informed throughout the journey.'
      }
    ]
  },
  {
    id: 'crane',
    title: 'Crane Transport',
    icon: Package,
    faqs: [
      {
        question: 'Do you handle permits for oversized crane transport?',
        answer: 'Yes, we handle all necessary permits and documentation for oversized and overweight crane transport. Our team coordinates with relevant authorities to ensure smooth passage on designated routes.'
      },
      {
        question: 'Can you transport mobile and tower cranes?',
        answer: 'Absolutely! We specialize in transporting both mobile cranes and tower cranes. Our team carefully disassembles tower cranes when necessary and ensures safe loading, transport, and delivery to your site.'
      },
      {
        question: 'What route planning do you provide?',
        answer: 'We conduct comprehensive route surveys to identify the safest and most efficient path. This includes checking road conditions, bridge weight limits, overhead clearances, and potential obstacles to ensure smooth transit.'
      }
    ]
  },
  {
    id: 'machinery',
    title: 'Heavy Machinery',
    icon: Shield,
    faqs: [
      {
        question: 'What types of industrial equipment do you transport?',
        answer: 'We transport a wide range of heavy machinery including excavators, bulldozers, compactors, generators, industrial pumps, manufacturing equipment, and construction machinery. Each piece is secured according to its specific requirements.'
      },
      {
        question: 'Is insurance included in the transport service?',
        answer: 'Yes, we provide comprehensive insurance coverage for all equipment during transport. This includes protection against damage, theft, and accidents. Additional coverage options are available based on equipment value.'
      },
      {
        question: 'How do you handle machinery loading and unloading?',
        answer: 'We use specialized loading equipment including hydraulic ramps, cranes, and forklifts. Our trained operators follow manufacturer guidelines and safety protocols to ensure damage-free loading and unloading at both pickup and delivery locations.'
      },
      {
        question: 'Do you provide nationwide transport services?',
        answer: 'Yes, we provide heavy equipment transport services across all major cities in Pakistan including Karachi, Lahore, Islamabad, Faisalabad, Multan, and surrounding areas. We have experience with long-distance hauls and challenging routes.'
      }
    ]
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

// Single FAQ Item Component
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInWhenVisible delay={index * 100}>
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-orange-50 transition-colors duration-300 group"
        >
          <span className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors pr-8">
            {question}
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-5 text-gray-600 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

const TransportFAQs = () => {
  const [activeCategory, setActiveCategory] = useState('loader');

  const activeCategoryData = FAQ_CATEGORIES.find(cat => cat.id === activeCategory);

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-md uppercase tracking-wide">
                FAQ's
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our transport services
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Category Tabs */}
        <FadeInWhenVisible delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {FAQ_CATEGORIES.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </FadeInWhenVisible>

        {/* FAQs Content */}
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible delay={300}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              
              {/* Category Header */}
              <div className="bg-linear-to-r from-orange-600 to-orange-500 px-6 py-4 flex items-center gap-3">
                {React.createElement(activeCategoryData.icon, { 
                  className: "w-6 h-6 text-white" 
                })}
                <h3 className="text-xl font-bold text-white">
                  {activeCategoryData.title}
                </h3>
              </div>

              {/* FAQ Items */}
              <div>
                {activeCategoryData.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                  />
                ))}
              </div>

            </div>
          </FadeInWhenVisible>
        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible delay={400}>
          <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our transport specialists are here to help. Contact us for personalized assistance.
            </p>
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#contact">Contact Us</a>
            </button>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  );
};

export default TransportFAQs;