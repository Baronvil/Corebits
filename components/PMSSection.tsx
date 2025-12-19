import React from 'react';
import { Section } from './ui/Section';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';

const data = [
  { name: 'Q1', performance: 65, efficiency: 40 },
  { name: 'Q2', performance: 72, efficiency: 55 },
  { name: 'Q3', performance: 79, efficiency: 70 },
  { name: 'Q4', performance: 92, efficiency: 88 },
];

export const PMSSection: React.FC = () => {
  return (
    <Section id="pms" className="bg-slate-50 dark:bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enterprise KPI Dashboard</h3>
                <p className="text-sm text-slate-500">Real-time performance tracking</p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">Live Data</span>
            </div>
            
            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="performance" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorPerf)" name="Org. Performance" />
                  <Area type="monotone" dataKey="efficiency" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorEff)" name="Cost Efficiency" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                 <div className="text-xs text-slate-500 uppercase font-semibold">Goal Achievement</div>
                 <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">92.4%</div>
                 <div className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                   <TrendingUp className="w-3 h-3 mr-1" /> +12% vs last quarter
                 </div>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                 <div className="text-xs text-slate-500 uppercase font-semibold">Employee Engagement</div>
                 <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">88.1%</div>
                 <div className="text-xs text-blue-600 dark:text-blue-400 flex items-center mt-1">
                   <Users className="w-3 h-3 mr-1" /> Top Tier
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
            Core PMS Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Data-Driven Performance Management
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Move beyond annual reviews. Corebit implements continuous performance management systems that align individual goals with government mandates and corporate strategies.
          </p>
          
          <ul className="space-y-4 pt-4">
            {[
              'Automated KPI Tracking & Real-time Analytics',
              '360-Degree Feedback Mechanisms',
              'Civil Service & Private Sector Compliant Frameworks',
              'Succession Planning & Talent Development'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="ml-3 text-slate-700 dark:text-slate-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};