import React from 'react';
import { Button } from './ui/Button';
import { ChevronRight, ShieldCheck, Sparkles, BarChart2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-[#020617] min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
         {/* Animated gradient mesh */}
         <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
         <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 rounded-full px-5 py-2 text-sm font-semibold text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              <span className="tracking-wide uppercase text-xs">Certified PMS & IT Advisors</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Elevate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Governance</span> Through Data.
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Corebit Consulting bridges the gap between organizational potential and world-class performance for Nigeria's most ambitious agencies and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="primary" className="h-14 px-8 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Work With Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="h-14 px-8 text-lg text-white border-slate-700 hover:bg-white hover:text-brand-dark transition-all"
                onClick={() => onNavigate('services')}
              >
                Our Solutions
              </Button>
            </div>

            <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-10">
              <div className="border-l-2 border-emerald-500 pl-4">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Agencies Served</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-white mb-1">10bn+</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Funds Optimized</div>
              </div>
              <div className="hidden sm:block border-l-2 border-amber-500 pl-4">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">ISO Standard</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative perspective-1000 animate-in slide-in-from-right duration-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(5,150,105,0.3)] border border-slate-700/50 bg-slate-900/50 backdrop-blur-2xl p-3">
               <img 
                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                 alt="World class infrastructure"
                 className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[560px]" 
               />
               
               {/* Floating Dashboard Element */}
               <div className="absolute top-10 -right-12 z-20 bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl animate-bounce-slow">
                 <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-emerald-500 rounded-lg text-white">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-emerald-400">Efficiency Index</p>
                      <p className="text-lg font-bold text-white">94.2%</p>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="h-1.5 w-32 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-4/5"></div>
                    </div>
                    <p className="text-[10px] text-slate-400">Performance vs Baseline</p>
                 </div>
               </div>

               {/* Stats Overlay */}
               <div className="absolute bottom-10 left-10 z-20 bg-[#0f172a]/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 shadow-2xl">
                 <div className="flex items-center space-x-2 text-blue-400 mb-2">
                   <Sparkles className="w-4 h-4" />
                   <span className="text-[10px] font-bold uppercase tracking-wider">AI Integration Active</span>
                 </div>
                 <h4 className="text-white font-bold text-lg mb-1">Predictive PMS</h4>
                 <p className="text-slate-400 text-xs">Real-time KPI forecasting deployed.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};