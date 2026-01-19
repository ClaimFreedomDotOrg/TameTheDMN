import React from 'react';
import { Github, Linkedin, Youtube, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const SocialIcon = ({ href, icon: Icon, path, label }: { href: string; icon?: any; path?: React.ReactNode; label: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-slate-500 hover:text-dmn-cyan transition-colors transform hover:-translate-y-1 duration-200"
      aria-label={label}
    >
      {Icon ? (
        <Icon size={20} />
      ) : (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          {path}
        </svg>
      )}
    </a>
  );

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h4 className="font-serif text-xl text-white tracking-wide">Tame the DMN</h4>
          <p className="text-slate-500 text-xs font-mono mt-2">
            © 2026 <a href="https://claimfreedom.org" target="_blank" rel="noopener noreferrer" className="hover:text-dmn-cyan transition-colors underline decoration-slate-700 underline-offset-4 hover:decoration-dmn-cyan">Claim Freedom</a>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
           <div className="flex items-center gap-5">
              {/* Skool */}
              <SocialIcon 
                href="https://www.skool.com/tame-the-dmn" 
                icon={GraduationCap} 
                label="Skool" 
              />
              
              {/* Substack */}
              <SocialIcon 
                href="https://jeshuabenjoseph.substack.com/" 
                path={<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />} 
                label="Substack" 
              />

              {/* YouTube */}
              <SocialIcon 
                href="https://www.youtube.com/@JeshuaBenJosephYT" 
                icon={Youtube} 
                label="YouTube" 
              />

              {/* TikTok */}
              <SocialIcon 
                href="https://www.tiktok.com/@jeshua.ben.joseph" 
                path={<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />} 
                label="TikTok" 
              />

              {/* LinkedIn */}
              <SocialIcon 
                href="https://www.linkedin.com/in/jeshuabenjoseph/" 
                icon={Linkedin} 
                label="LinkedIn" 
              />

              {/* GitHub */}
              <SocialIcon 
                href="https://github.com/ClaimFreedomDotOrg" 
                icon={Github} 
                label="GitHub" 
              />
           </div>

           <div className="hidden md:block w-px h-5 bg-slate-800"></div>
           <span className="text-slate-600 text-xs font-mono">OPERATOR STATUS: ONLINE</span>
        </div>
      </div>
    </footer>
  );
};