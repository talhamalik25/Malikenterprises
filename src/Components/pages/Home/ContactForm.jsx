import React, { useEffect, useRef, useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.send(
    'service_intgl7d',
    'template_auj38vg',
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: 'malikenterprises76@gmail.com' // 👈 Yahan ayega
    },
    'iouqgmxN6jD_w1Ufh'
  )
  .then(() => {
    setIsSuccess(true);
    setIsSubmitting(false);
  })
  .catch((error) => {
    console.error('Error:', error);
    setIsSubmitting(false);
  });
};

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md uppercase tracking-wide">
                Contact Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <FadeInWhenVisible delay={200}>
            <div className="bg-white rounded-xl shadow-xl border-2 border-gray-100 p-8">
              
              {isSuccess ? (
                // Success Message
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                // Contact Form
                <div className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                        placeholder="0300-1234567"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-4 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                </div>
              )}

            </div>
          </FadeInWhenVisible>

          {/* Right Side - Info & Features */}
          <div className="space-y-8">
            
            <FadeInWhenVisible delay={300}>
              <div className="bg-linear-to-br from-blue-600 to-blue-500 rounded-xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Quick Response</h4>
                      <p className="text-blue-100 text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Custom Solutions</h4>
                      <p className="text-blue-100 text-sm">Tailored products to meet your specific needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                      <p className="text-blue-100 text-sm">Best rates for bulk orders and wholesale</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Guidance</h4>
                      <p className="text-blue-100 text-sm">Professional advice on product selection</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeInWhenVisible>


          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;