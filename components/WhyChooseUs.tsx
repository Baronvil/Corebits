import React from 'react';
import { Section } from './ui/Section';
import { MapPin, Award, Handshake, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep understanding of the Nigerian public sector nuances and private market dynamics, ensuring solutions that actually work on the ground.'
  },
  {
    icon: Award,
    title: 'Global Standards',
    description: 'We benchmark our PMS frameworks and IT strategies against international ISO standards and global best practices.'
  },
  {
    icon: Handshake,
    title: 'Client Commitment',
    description: 'We don’t just deliver reports; we partner with you through implementation, capacity building, and long-term support.'
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    description: 'Full adherence to NDPR data privacy laws and federal civil service guidelines for performance management.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <Section id="why-us" dark className="border-t border-slate-800">
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Partner with Corebit?</h2>
          <p className="text-slate-400 text-lg">
            We bridge the gap between local challenges and world-class operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group p-4 rounded-xl hover:bg-slate-800 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-lg border border-slate-700 group-hover:border-brand-primary">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};