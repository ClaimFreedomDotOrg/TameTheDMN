import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'cyan' | 'amber' | 'ghost';
  className?: string;
  external?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'cyan', 
  className = '',
  external = false
}) => {
  const baseStyles = "relative px-8 py-3 font-mono font-bold tracking-widest text-sm uppercase transition-all duration-300 border backdrop-blur-sm group overflow-hidden";
  
  const variants = {
    cyan: "border-dmn-cyan text-dmn-cyan hover:bg-dmn-cyan/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:text-white shadow-[0_0_10px_rgba(6,182,212,0.1)]",
    amber: "border-dmn-amber text-dmn-amber hover:bg-dmn-amber/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:text-white shadow-[0_0_10px_rgba(245,158,11,0.1)]",
    ghost: "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
  };

  const scanlineColors = {
    cyan: "via-dmn-cyan/20",
    amber: "via-dmn-amber/20",
    ghost: "via-white/10"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { 
    href, 
    target: external ? "_blank" : undefined, 
    rel: external ? "noopener noreferrer" : undefined 
  } : { onClick };

  return (
    // @ts-ignore
    <Component 
      {...props} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Continuous Scanline Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-transparent ${scanlineColors[variant]} to-transparent -skew-x-12 animate-scan`} />
      </div>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Scanline effect on hover */}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-white/5" />
    </Component>
  );
};