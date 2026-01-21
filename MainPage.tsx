import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SpokeGrid } from './components/SpokeGrid';
import { Footer } from './components/Footer';

const MainPage: React.FC = () => {
  const handleScrollToEcosystem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-midnight-indigo text-slate-200 selection:bg-electric-cyan selection:text-midnight-indigo">
      {/* Navbar overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-midnight-indigo/80 backdrop-blur-md border-b border-faint-ring">
        <div className="flex items-center">
            <svg width="240" height="40" viewBox="0 0 300 50" className="mr-4">
              <defs>
                <filter id="glowWarmNav">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
                  <feFlood floodColor="#e49256" floodOpacity="0.95" result="warmGlow"/>
                  <feComposite in="warmGlow" in2="blur" operator="in" result="glowEffect"/>
                  <feFlood floodColor="#c96b2e" floodOpacity="0.75" result="deepGlow"/>
                  <feComposite in="deepGlow" in2="blur" operator="in" result="glowEffect2"/>
                  <feMerge>
                    <feMergeNode in="glowEffect"/>
                    <feMergeNode in="glowEffect2"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="glowBlueNav">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
                  <feFlood floodColor="#6e81a8" floodOpacity="0.95" result="blueGlow"/>
                  <feComposite in="blueGlow" in2="blur" operator="in" result="blueEffect"/>
                  <feFlood floodColor="#4a5875" floodOpacity="0.65" result="deepBlue"/>
                  <feComposite in="deepBlue" in2="blur" operator="in" result="blueEffect2"/>
                  <feMerge>
                    <feMergeNode in="blueEffect"/>
                    <feMergeNode in="blueEffect2"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <text 
                x="35%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="end" 
                fill="#F2FCFB"
                filter="url(#glowBlueNav)"
                style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '0.05em', fontFamily: "'PalatinoCustom','Palatino Linotype','Palatino','Times New Roman',serif" }}
              >
                Tame
              </text>
              <text 
                x="35%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="start" 
                dx="5"
                fill="#FEEBC8"
                filter="url(#glowWarmNav)"
                style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '0.05em', fontFamily: "'PalatinoCustom','Palatino Linotype','Palatino','Times New Roman',serif" }}
              >
                the DMN
              </text>
            </svg>
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-subtext">
            <a 
              href="#ecosystem" 
              onClick={handleScrollToEcosystem}
              className="hover:text-electric-cyan transition-colors cursor-pointer"
            >
              Ecosystem
            </a>
        </div>
      </nav>

      <Hero />
      <ProblemSection />
      <SpokeGrid />
      <Footer />
    </main>
  );
};

export default MainPage;
