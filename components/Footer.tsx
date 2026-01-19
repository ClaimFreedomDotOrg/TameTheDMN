import React from 'react';
import { Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="font-serif text-xl text-white tracking-wide">Tame the DMN</h4>
          <p className="text-slate-500 text-xs font-mono mt-2">© {new Date().getFullYear()} Claim Freedom Protocol.</p>
        </div>

        <div className="flex gap-6">
           <a href="https://github.com/ClaimFreedomDotOrg" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-dmn-cyan transition-colors">
              <Github size={20} />
           </a>
           {/* Placeholder for social if needed later, keeping layout balanced */}
           <div className="w-px h-5 bg-slate-800"></div>
           <span className="text-slate-600 text-xs font-mono self-center">OPERATOR STATUS: ONLINE</span>
        </div>
      </div>
    </footer>
  );
};