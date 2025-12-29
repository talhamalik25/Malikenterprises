import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCT_CATEGORIES = [
  'Uniforms',
  'Lab Coats',
  'T-Shirts',
  'Pants',
  'Suits',
  'Safari Suits',
  'Coveralls',
  'Waist Coats',
  'Hats & Caps',
  'Sweaters',
  'Jackets',
  'Safety Shoes'
];

const  QUICK_LINKS = [
  { name: 'Home', path: '#home' },
  { name: 'Products', path: '#products' },
  { name: 'Clients', path: '#clients' },
  { name: 'FAQs', path: '#faqs' },
  { name: 'Contact', path: '#contact' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                <img src="/favicon.png" alt="" className="object-cover w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Malik Enterprises</h3>
                <p className="text-sm text-gray-400">Since 2008</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a leading manufacturer of uniforms & allied products working with several organizations with great reputation.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <Link to="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.slice(0, 8).map((category, index) => (
                <li key={index}>
                 <a
  href=""
  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
>
  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  {category}
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h4 className="font-bold mb-2">Our Second Company</h4>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-12 h-12 rounded flex items-center justify-center">
                  <img src="/logo2.png" alt="" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Arif Malik & Sons</p>
                  <p className="text-xs text-gray-400">Logistics</p>
                </div>
              </div>

              <Link
                to="/transport"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors duration-300"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">

              <Link
                to="tel:03331230531"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold">0333-1230531</p>
                </div>
              </Link>

              <Link
                to="mailto:malikenterprises76@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-sm break-all">malikenterprises76@gmail.com</p>
                </div>
              </Link>

               <div className="flex items-start gap-3 text-gray-400">
                              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-semibold">Malikenterprices - Oxford Corner, Kharadar</p>
                              </div>
                            </div>

            </div> 
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Malik Enterprises. All Rights Reserved.
            </p>

           <div className="flex flex-col sm:flex-row items-center gap-1">
                  <p className="text-gray-400 text-sm">
                    Developed by
                    <span className="text-blue-400 font-semibold ml-1">
                      Talha Malik
                    </span>
                  </p>
                
                  <Link
                    to="https://wa.me/923142209297"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg shadow transition-transform active:scale-95"
                  >
                    <img
                      src="/whatsapplogo.png"
                      alt="WhatsApp Logo"
                      className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                    <span className="sm:inline text-green-400 text-sm font-medium">
                WhatsApp
              </span>
                  </Link>
                </div>


          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
