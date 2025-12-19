import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'PMS Solutions', href: '#pms' },
    { name: 'IT Consulting', href: '#it' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-brand-primary p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              Corebit<span className="text-brand-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-primary transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isScrolled 
                  ? 'bg-brand-dark text-white hover:bg-slate-800' 
                  : 'bg-white text-brand-dark hover:bg-slate-100'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg bg-brand-primary text-white font-semibold"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};