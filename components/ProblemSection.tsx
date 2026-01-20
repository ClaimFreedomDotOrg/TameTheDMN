import React from 'react';
import { BrainCircuit, Lock, Activity } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-dmn-dark border-y border-white/5">
      <div className="absolute inset-0 bg-demon-glow opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border border-dmn-amber/30 p-8 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.1)]">
               <div className="flex items-center gap-4 mb-6 border-b border-dmn-amber/20 pb-4">
                  <Activity className="text-dmn-amber animate-pulse" />
                  <h3 className="text-dmn-amber font-mono text-xl tracking-wider">THREAT_DETECTED</h3>
               </div>
               <div className="space-y-4">
                  <div className="h-2 bg-slate-800 rounded overflow-hidden">
                    <div className="h-full bg-dmn-amber w-[85%] relative">
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-dmn-amber/80 text-right">DMN ACTIVITY: 85% [CRITICAL]</p>
                  
                  <div className="h-2 bg-slate-800 rounded overflow-hidden">
                    <div className="h-full bg-dmn-cyan w-[15%]"></div>
                  </div>
                  <p className="font-mono text-xs text-dmn-cyan/80 text-right">SALIENCE NETWORK: 15% [DORMANT]</p>
               </div>
               <div className="mt-8 font-mono text-sm text-slate-400">
                                     <p>&gt; SCANNING CORTEX...</p>
                                     <p>&gt; RUMINATION LOOP DETECTED.</p>
                                     <p>&gt; DEFAULT MODE NETWORK HIJACKED.</p>
                                     <p className="text-dmn-amber animate-pulse">&gt; INITIATING LOCKDOWN.</p>               </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-dmn-amber/50 rounded-tl-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-dmn-amber/50 rounded-br-xl"></div>
          </div>

          {/* Copy Side */}
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              The Great Heist
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Humanity’s attention has been stolen. A parasitic loop in the brain—the hijacked <span className="text-dmn-amber font-bold">Default Mode Network (DMN)</span>—is running a constant simulation of fear, lack, and anxiety.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              They call it "The Voice," "Wetiko," or the Ego. It generates false narratives that keep you asleep. We do not kill the ego; we tame it. We turn the Master into the Servant.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-start gap-3">
                  <Lock className="text-dmn-amber shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold font-mono">LOCKED OUT</h4>
                    <p className="text-slate-400 text-sm">Access to the Divine Spark is blocked by noise.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <BrainCircuit className="text-dmn-cyan shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold font-mono">RE-WIRE</h4>
                    <p className="text-slate-400 text-sm">Activate the Salience Network. The Operator.</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};