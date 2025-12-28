import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

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

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Our Address',
    details: 'Malik Enterprises - Oxford Corner, Kharadar',
    link: 'https://maps.google.com/?q=Karachi,Pakistan'
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: '0333-1230531',
    link: 'tel:03331230531'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: 'malikenterprises76@gmail.com',
    link: 'mailto:malikenterprises76@gmail.com'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Mon - Sat: 9:00 AM - 6:00 PM',
    link: null
  }
];

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md uppercase tracking-wide">
                Our Location
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're located in Karachi, ready to serve your industrial supply needs
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            
            <FadeInWhenVisible delay={200}>
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-5">
                  {CONTACT_INFO.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Direction Button */}
            <FadeInWhenVisible delay={300}>
              <a
                href="https://www.google.com/maps/dir//VX2V%2B58W,+Ghulam+Ali+Allana+Rd,+Kharadar+Ghulam+Hussain+Kasim+Quarters,+Karachi/@24.982428,67.1285248,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb315004e1467db:0x1a19ad1292cb86a2!2m2!1d66.9933099!2d24.8504818?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl hover:active:scale-95"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </FadeInWhenVisible>

          </div>

          {/* Google Map */}
       <FadeInWhenVisible delay={400}>
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 h-full min-h-[500px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890123!2d67.00123456789012!3d24.86123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8a0b0b0b0b%3A0x1234567890abcdef!2sOxford%20Corner%2C%20Ghulam%20Ali%20Allana%20Rd%2C%20Kharadar%2C%20Karachi!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: '500px' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Malik Enterprises - Oxford Corner, Kharadar"
    ></iframe>
  </div>
</FadeInWhenVisible>

        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible delay={500}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Place an Order?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Contact us today for bulk orders, custom requirements, or any inquiries about our products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03331230531"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:malikenterprises76@gmail.com"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  );
};

export default LocationSection;