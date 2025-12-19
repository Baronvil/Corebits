import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'gallery' | 'services' | 'backend';
  onNavigate: (destination: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme based on localStorage or system preference
    if (localStorage.getItem('theme') === 'dark' || 
       (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Special handling for pages
    if (href === '#gallery') {
      onNavigate('gallery');
    } else if (href === '#services') {
      onNavigate('services');
    } else if (href === '#home') {
      onNavigate('home');
    } else {
      // It's a hash link for the home page (e.g., #contact)
      onNavigate(href);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'PMS Solutions', href: '#pms' },
    { name: 'IT Consulting', href: '#it' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const isPageActive = (href: string) => {
    if (currentPage === 'gallery' && href === '#gallery') return true;
    if (currentPage === 'services' && href === '#services') return true;
    return false;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-emerald-500 transition-colors">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled || currentPage !== 'home' ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white lg:text-white'}`}>
              Corebit<span className="text-brand-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-brand-primary transition-colors ${
                  (isScrolled || currentPage !== 'home') ? 'text-slate-600 dark:text-slate-300' : 'text-slate-200 hover:text-white'
                } ${isPageActive(link.href) ? 'text-brand-primary font-bold' : ''}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                (isScrolled || currentPage !== 'home')
                  ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                (isScrolled || currentPage !== 'home')
                  ? 'bg-brand-dark text-white hover:bg-slate-800 dark:bg-white dark:text-brand-dark dark:hover:bg-slate-200' 
                  : 'bg-white text-brand-dark hover:bg-slate-100'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Theme Toggle Button (Mobile) */}
             <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                (isScrolled || currentPage !== 'home')
                  ? 'text-slate-900 dark:text-white' 
                  : 'text-white'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled || currentPage !== 'home' ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-lg h-screen">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-3 text-base font-medium rounded-md ${
                    isPageActive(link.href) 
                    ? 'text-brand-primary bg-slate-50 dark:bg-slate-800' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
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