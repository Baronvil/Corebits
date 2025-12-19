import React from 'react';
import { Button } from './ui/Button';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-dark min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-brand-primary border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted by Top Nigerian Enterprises</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Optimizing Performance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">
                Empowering Growth.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Corebit Consulting delivers world-class Performance Management Systems and IT strategies tailored for Nigeria's public sector and dynamic private businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Schedule a Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">
                Explore Solutions
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Public Agencies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-400">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10yr</div>
                <div className="text-sm text-slate-400">Industry Excellence</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 backdrop-blur-xl p-4">
               {/* Abstract decorative representation of a dashboard/system */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
               <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
               
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                 alt="Team analyzing data"
                 className="rounded-lg shadow-inner relative z-10 w-full object-cover h-[500px]" 
               />
               
               {/* Floating Badge */}
               <div className="absolute bottom-8 right-8 z-20 bg-white p-4 rounded-lg shadow-xl max-w-xs">
                 <div className="flex items-center space-x-3 mb-2">
                   <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                   <p className="text-sm font-bold text-slate-800">System Operational</p>
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-primary w-[85%]"></div>
                 </div>
                 <p className="text-xs text-slate-500 mt-2">KPI Targets Exceeded by 15%</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};