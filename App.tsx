import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SpokeGrid } from './components/SpokeGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-dmn-dark text-slate-200 selection:bg-dmn-cyan selection:text-dmn-dark">
      {/* Navbar overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-dmn-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="font-serif font-bold text-white text-lg tracking-wider">
            Tame the DMN
        </div>
        <div className="hidden md:flex gap-6 text-xs font-mono uppercase tracking-widest text-slate-400">
            <a href="#ecosystem" className="hover:text-dmn-cyan transition-colors">Ecosystem</a>
        </div>
      </nav>

      <Hero />
      <ProblemSection />
      <SpokeGrid />
      <Footer />
    </main>
  );
};

export default App;