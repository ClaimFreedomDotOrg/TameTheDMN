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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-midnight-indigo/80 backdrop-blur-md border-b border-white/5">
        <div className="font-serif font-bold text-white text-lg tracking-wider">
            Tame the DMN
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-slate-400">
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
