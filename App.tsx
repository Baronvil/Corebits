import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PMSSection } from './components/PMSSection';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackendDashboard } from './components/BackendDashboard';
import { Gallery } from './components/Gallery';
import { LayoutDashboard, Monitor } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'gallery' | 'services' | 'backend'>('home');

  const toggleBackend = () => {
    if (view === 'backend') {
      setView('home');
      window.scrollTo(0, 0);
    } else {
      setView('backend');
    }
  };

  const handleNavigate = (destination: string) => {
    if (destination === 'gallery') {
      setView('gallery');
      window.scrollTo(0, 0);
    } else if (destination === 'services') {
      setView('services');
      window.scrollTo(0, 0);
    } else if (destination === 'home') {
      setView('home');
      window.scrollTo(0, 0);
    } else if (destination.startsWith('#')) {
      // If we are not on home page, switch to home first
      if (view !== 'home') {
        setView('home');
        // Small delay to allow DOM to render before scrolling
        setTimeout(() => {
          const id = destination.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const id = destination.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-white relative">
      
      {view === 'backend' ? (
        <BackendDashboard />
      ) : (
        <>
          <Navbar currentPage={view} onNavigate={handleNavigate} />
          
          <main className="flex-grow">
            {view === 'home' && (
              <>
                <Hero onNavigate={handleNavigate} />
                <WhyChooseUs />
                <PMSSection />
                <CaseStudies />
                <Testimonials />
                <Contact />
              </>
            )}

            {view === 'gallery' && (
              <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
                 <Gallery />
                 <div className="text-center pb-20">
                    <button 
                      onClick={() => handleNavigate('#contact')}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-primary rounded-full hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                    >
                      Start Your Project
                    </button>
                 </div>
              </div>
            )}

            {view === 'services' && (
              <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
                 <Services />
                 <div className="text-center pb-20">
                    <button 
                      onClick={() => handleNavigate('#contact')}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-primary rounded-full hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                    >
                      Request a Proposal
                    </button>
                 </div>
              </div>
            )}
          </main>
          
          <Footer />
        </>
      )}

      {/* Global Toggle Button */}
      <button
        onClick={toggleBackend}
        className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all duration-300 border-2 ${
          view !== 'backend' 
            ? 'bg-slate-900 text-white border-slate-700 hover:bg-slate-800' 
            : 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700'
        }`}
      >
        {view !== 'backend' ? (
            <>
                <LayoutDashboard className="w-4 h-4" /> 
                <span className="hidden sm:inline">Go to Backend</span>
            </>
        ) : (
            <>
                <Monitor className="w-4 h-4" /> 
                <span className="hidden sm:inline">Back to Website</span>
            </>
        )}
      </button>

    </div>
  );
};

export default App;