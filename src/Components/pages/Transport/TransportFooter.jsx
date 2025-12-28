import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  'Loader Transport',
  'Crane Transport',
  'Excavator Transport',
  'Bulldozer Transport',
  'Generator Transport',
  'Industrial Equipment',
  'Construction Machinery',
  'Oversized Loads'
];

const QUICK_LINKS = [
  { name: 'Home', path: '#home' },
  { name: 'Services', path: '#services' },
  { name: 'FAQs', path: '#faqs' },
  { name: 'Location', path: '#location' },
  { name: 'Contact', path: '#contact' }
];

const TransportFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <img src="/logo2.png" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Arif Malik & Sons</h3>
                <p className="text-sm text-gray-400">Logistics</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional heavy equipment transport services with safety and reliability. Serving all major cities across Pakistan.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Parent Company */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h4 className="font-bold mb-2">Our Parent Company</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded flex items-center justify-center">
                  <img src="/favicon.png" alt="Logo" className='w-full h-full'/>
                </div>
                <div>
                  <p className="font-semibold text-sm">Malik Enterprises</p>
                  <p className="text-xs text-gray-400">Industrial Supplies</p>
                </div>
              </div>
              <a 
                href="/" 
                className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center gap-1 transition-colors duration-300"
              >
                Visit Website
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              
              <a 
                href="tel:03331230531"
                className="flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold">0333-1230531</p>
                </div>
              </a>

              <a 
                href="mailto:arifmaliknsons@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-sm break-all">arifmaliknsons@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">Arif Malik & Sons - Oxford Corner, Kharadar</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
       <div className="border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray-400 text-sm text-center md:text-left">
        © {currentYear} Malik Enterprises. All Rights Reserved.
      </p>
      <div className="flex items-center gap-1">
        <p className="text-gray-400 text-sm">
          Designed by <span className="text-orange-400 font-semibold">Talha Malik</span>
        </p>
        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/923142209297" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-white text-sm font-semibold rounded-lg shadow transition-colors"
        >
          <img 
  src="/whatsapplogo.png" 
  alt="WhatsApp Logo" 
  className="w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 active:scale-95 hover:scale-95 transition-transform duration-200"
/>

        </a>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
};

export default TransportFooter;