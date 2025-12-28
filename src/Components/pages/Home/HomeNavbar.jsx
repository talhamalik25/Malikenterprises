import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { id: 'home', name: 'Home', path: '#home' },
  { id: 'product', name: 'Products', path: '/product', isExternal: true },
  { id: 'clients', name: 'Clients', path: '#clients' },
  { id: 'contact', name: 'Contact', path: '#contact' },
  { id: 'transport', name: 'Transport', path: '/transport', isExternal: true }
];

const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => ({
        id,
        element: document.getElementById(id)
      }));

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.filter(link => !link.isExternal).map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    if (link.isExternal) {
      return;
    }
    scrollToSection(link.id);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-blue-600 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:03331230531" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">0333-1230531</span>
              </a>
              <a href="mailto:malikenterprises76@gmail.com" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline font-medium">malikenterprises76@gmail.com</span>
              </a>
            </div>
            <div className="text-sm font-medium">
              Industrial Safety & Transport Solutions
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
               <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <img src="/favicon.png" alt="Logo" />
              </div>
              <div>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className='text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors'
                >
                  Malik Enterprises
                </button>
                <p className="text-xs text-gray-600 font-medium">Since 2008</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8'>
            {NAV_LINKS.map((link) => (
              link.isExternal ? (
                <Link
                  key={link.id}
                  to={link.path}
                  className="text-base font-semibold transition-all duration-300 text-gray-700 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`text-base font-semibold transition-all duration-300 relative pb-1 ${
                    activeSection === link.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-2">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label='menu' 
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden border-t border-gray-200 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-4 py-6 space-y-2">
          {NAV_LINKS.map((link) => (
            link.isExternal ? (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 rounded-md font-semibold transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-4 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            )
          ))}

          <button
            onClick={() => {
              scrollToSection('contact');
              setIsMenuOpen(false);
            }}
            className='w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4 shadow-md'
          >
            <a href="#contact">Get Quote</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;