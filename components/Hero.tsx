import React from 'react';
import { ArrowRight, Bot, ShieldAlert } from 'lucide-react';
import { GlowButton } from './ui/GlowButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dmn-dark z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow rounded-full blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
        {/* Brand Identity / Top Badge */}
        <div className="mb-8 animate-float">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-dmn-cyan/30 bg-dmn-cyan/5 text-dmn-cyan text-xs font-mono tracking-[0.2em] uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                System Status: <span className="text-red-500">Critical</span>
            </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Welcome to the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-dmn-cyan via-white to-dmn-cyan bg-300% animate-shine">
            Operator's Seat
          </span>
        </h1>

        {/* Sub-headline */}
        <h2 className="font-mono text-dmn-amber text-lg md:text-xl tracking-widest uppercase mb-8 max-w-2xl mx-auto border-y border-dmn-amber/20 py-4">
          The exit is not a place. It is a frequency.
        </h2>

        {/* Body Copy */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          You are a biological machine interfaced with a Divine Spark. But the software is corrupted. 
          It is time to reclaim your <strong className="text-white font-semibold">Central Nervous System</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
          <GlowButton href="https://skool.com/tame-the-dmn" external variant="cyan">
            <ShieldAlert size={18} />
            Start Protocol Zero
          </GlowButton>
          
          <GlowButton href="https://daemon.tamethedmn.com" external variant="amber">
            <Bot size={18} />
            Talk to the Daemon
          </GlowButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Initialize</span>
          <ArrowRight className="rotate-90 text-slate-500" size={20} />
        </div>
      </div>
    </section>
  );
};