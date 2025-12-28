import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Phone } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          
          {/* 404 Number */}
          <div className="mb-8 animate-bounce">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Error Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-blue-100/70 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-400/30 text-white font-semibold rounded-lg hover:bg-slate-800/70 hover:border-blue-400/50 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/#products" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
                Products
              </Link>
              <Link to="/#clients" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
                Clients
              </Link>
              <Link to="/transport" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
                Transport
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-8 text-blue-100/60 text-sm">
            <p className="mb-2">Need immediate assistance?</p>
            <a href="tel:03331230531" className="text-blue-400 hover:text-blue-300 font-semibold">
              Call: 0333-1230531
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NotFound;