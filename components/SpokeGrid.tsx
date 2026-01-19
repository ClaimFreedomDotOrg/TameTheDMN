import React from 'react';
import { BookOpen, Bot, Users, Gamepad2, Cpu, Radio, ExternalLink } from 'lucide-react';
import { Spoke } from '../types';

const spokes: Spoke[] = [
  {
    id: 'wiki',
    title: 'The Knowledge Base',
    subtitle: 'claimfreedom.org',
    description: 'The Source of Truth. A comprehensive Neuro-Gnostic wiki covering the neuroscience, philosophy, and theology.',
    url: 'https://claimfreedom.org',
    cta: 'Access Archives',
    icon: BookOpen,
    variant: 'cyan'
  },
  {
    id: 'ai',
    title: 'The AI Guide',
    subtitle: 'The Daemon',
    description: 'A RAG system grounded in Protocol. Specialized user journeys for crisis stabilization and shadow work.',
    url: 'https://daemon.tamethedmn.com',
    cta: 'Activate Daemon',
    icon: Bot,
    variant: 'amber'
  },
  {
    id: 'training',
    title: 'The Training',
    subtitle: 'Protocol Zero',
    description: 'The community of Operators. Join "Protocol Zero: The Great Heist" on Skool to reclaim your hardware.',
    url: 'https://skool.com/tame-the-dmn',
    cta: 'Join Protocol',
    icon: Users,
    variant: 'cyan'
  },
  {
    id: 'sim',
    title: 'The Simulation',
    subtitle: 'Critical Mass',
    description: 'A massively multiplayer bio-rhythm game. Sync rhythms globally to flush out the "Wetiko" virus.',
    url: 'https://tamethedemon.com',
    cta: 'Enter Game',
    icon: Gamepad2,
    variant: 'amber'
  },
  {
    id: 'hardware',
    title: 'The Hardware',
    subtitle: 'Halo Tuner',
    description: 'Project H.A.L.O. A wearable neuro-feedback device acting as mechanical training wheels for the Listener.',
    url: 'https://halotuner.com',
    cta: 'View Specs',
    icon: Cpu,
    variant: 'cyan'
  },
  {
    id: 'voice',
    title: 'The Signal',
    subtitle: 'Substack',
    description: 'Field notes and transmissions from the front lines of the consciousness revolution.',
    url: 'https://jeshuabenjoseph.substack.com',
    cta: 'Receive Signal',
    icon: Radio,
    variant: 'purple' // Special variant for the signal
  }
];

export const SpokeGrid: React.FC = () => {
  return (
    <section className="py-24 bg-dmn-dark relative overflow-hidden" id="ecosystem">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">The Ecosystem</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dmn-cyan to-transparent mx-auto"></div>
          <p className="mt-4 text-slate-400 font-mono uppercase tracking-widest text-sm">Select Your Interface</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spokes.map((spoke) => {
            const isAmber = spoke.variant === 'amber';
            const accentColor = isAmber ? 'text-dmn-amber' : 'text-dmn-cyan';
            const borderColor = isAmber ? 'group-hover:border-dmn-amber/50' : 'group-hover:border-dmn-cyan/50';
            const shadowColor = isAmber ? 'group-hover:shadow-dmn-amber/20' : 'group-hover:shadow-dmn-cyan/20';

            return (
              <a 
                key={spoke.id}
                href={spoke.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-slate-900/40 border border-white/5 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-slate-900/80 hover:shadow-2xl ${borderColor} ${shadowColor}`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg bg-white/5 ${accentColor}`}>
                    <spoke.icon size={32} strokeWidth={1.5} />
                  </div>
                  <ExternalLink className="text-slate-600 group-hover:text-white transition-colors" size={16} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-white transition-colors">{spoke.title}</h3>
                <p className={`font-mono text-xs uppercase tracking-wider mb-4 ${accentColor} opacity-80`}>{spoke.subtitle}</p>
                <p className="text-slate-400 leading-relaxed text-sm mb-8 h-20 overflow-hidden text-ellipsis">
                  {spoke.description}
                </p>

                {/* CTA Fake Button */}
                <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${accentColor} border-b border-transparent group-hover:border-current transition-all`}>
                  {spoke.cta}
                  <div className="w-1 h-1 bg-current rounded-full animate-ping" />
                </div>
                
                {/* Decorative Corners */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-2 h-2 border-t border-r ${isAmber ? 'border-dmn-amber' : 'border-dmn-cyan'}`}></div>
                </div>
                <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-2 h-2 border-b border-l ${isAmber ? 'border-dmn-amber' : 'border-dmn-cyan'}`}></div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};