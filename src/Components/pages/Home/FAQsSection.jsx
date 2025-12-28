import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Package, Truck, Shield, Shirt, HardHat, Box } from 'lucide-react';
import { Link } from 'react-router-dom';


// FAQ Categories with icons
const FAQ_CATEGORIES = [
  {
    id: 'safety-wear',
    title: 'Safety Wear',
    icon: Shield,
    faqs: [
      {
        question: 'Coveralls',
        answer: 'We provide high-quality, durable coveralls designed for maximum protection and comfort. Perfect for industrial and field work environments. Available in various sizes and can be customized with company logos.'
      },
      {
        question: 'Reflective Vests',
        answer: 'Our reflective vests enhance visibility and safety in low-light conditions, perfect for construction and roadside work. Meets international safety standards with high-visibility reflective strips.'
      },
      {
        question: 'Safety Helmets',
        answer: 'Our safety helmets are made to meet industry standards, offering excellent impact protection and comfort for workers on-site. Available in multiple colors with adjustable straps.'
      }
    ]
  },
  {
    id: 'uniforms',
    title: 'Uniforms & Apparel',
    icon: Shirt,
    faqs: [
      {
        question: 'Uniforms',
        answer: 'We supply a variety of professional uniforms designed for safety, comfort, and a polished appearance suitable for any industry. Custom embroidery and logo printing available.'
      },
      {
        question: 'T-Shirts',
        answer: 'Our t-shirts are made from breathable fabric, ensuring comfort and durability. Available in multiple colors and styles to suit your branding needs.'
      },
      {
        question: 'Jackets',
        answer: 'Our jackets offer warmth, durability, and professional styling, perfect for outdoor and industrial work environments. Water-resistant options available.'
      }
    ]
  },
  {
    id: 'safety-equipment',
    title: 'Safety Equipment',
    icon: HardHat,
    faqs: [
      {
        question: 'Safety Shoes',
        answer: 'Our safety shoes are built for protection and comfort, featuring anti-slip soles, steel toes, and durable materials suitable for tough work conditions. Available in various sizes and styles.'
      },
      {
        question: 'Gloves',
        answer: 'We provide high-quality work gloves designed to protect hands while ensuring flexibility and comfort during work. Different types available for welding, handling, and general use.'
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
          className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300 group"
        >
          <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors pr-8">
            {question}
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
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

const FAQsSection = () => {
  const [activeCategory, setActiveCategory] = useState('safety-wear');

  const activeCategoryData = FAQ_CATEGORIES.find(cat => cat.id === activeCategory);

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md uppercase tracking-wide">
                FAQ's
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
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
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 flex items-center gap-3">
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
          <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-xl p-8 md:p-12 text-center shadow-xl mt-15">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
              <Link to="#contact">Contact Us</Link>
            </button>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  );
};

export default FAQsSection;