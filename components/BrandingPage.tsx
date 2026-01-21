import React from 'react';

const BrandingPage: React.FC = () => {
  return (
    <div className="bg-midnight-indigo text-starlight-white font-sans p-8">
      <div className="container mx-auto">
        <header className="text-center mb-16 pb-8 border-b border-faint-ring">
          <h1 className="text-5xl font-extrabold mb-2 tracking-wider">
            <svg width="100%" height="80" viewBox="0 0 600 80" className="mx-auto">
              <defs>
                <filter id="glowWarm">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur"/>
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
                <filter id="glowBlue">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur"/>
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
                x="50%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="end" 
                fill="#F2FCFB"
                filter="url(#glowBlue)"
                style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '0.05em', fontFamily: "'PalatinoCustom','Palatino Linotype','Palatino','Times New Roman',serif" }}
              >
                Tame
              </text>
              <text 
                x="50%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="start" 
                dx="10"
                fill="#FEEBC8"
                filter="url(#glowWarm)"
                style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '0.05em', fontFamily: "'PalatinoCustom','Palatino Linotype','Palatino','Times New Roman',serif" }}
              >
                the DMN
              </text>
            </svg>
          </h1>
          <p className="text-lg opacity-80">Brand Color System & Usage Guidelines</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Logo & Imagery</h2>
          <div className="bg-dark-panel p-8 rounded-lg text-center border border-faint-ring shadow-lg shadow-black/30">
            <img 
              src="/tame-the-dmn-logo-v2-background.jpeg" 
              alt="Tame the DMN Logo" 
              className="max-w-full h-auto rounded-lg shadow-2xl shadow-electric-cyan/20"
            />
            <p className="mt-6 opacity-80 text-sm">Primary brand logo with background. Ensure proper spacing and visibility.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Core Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Swatch color="bg-midnight-indigo" name="Midnight Indigo" hex="#0A1128" role="Primary Background" />
            <Swatch color="bg-dark-panel" name="Dark Panel" hex="#1E293B" role="Cards / Secondary Backgrounds" />
            <Swatch color="bg-metal-grey" name="Metal Grey" hex="#64748B" role="Borders / Inactive Icons" />
            <Swatch color="bg-subtext" name="Subtext" hex="#94A3B8" role="Secondary Text, Card Text & Copy" />
            <Swatch color="bg-faint-ring" name="Faint Ring" hex="#334155" role="Dividers / Subtle Strokes" />
            <Swatch color="bg-electric-cyan" name="Electric Cyan" hex="#00E5FF" role="Accent / Cool Energy" />
            <Swatch color="bg-molten-gold" name="Molten Gold" hex="#FF9F1C" role="CTA / Warm Energy" />
            <Swatch color="bg-signal-green" name="Signal Green" hex="#10B981" role="Success / In Tune Indicators" />
            <Swatch color="bg-alert-red" name="Alert Red" hex="#EF4444" role="Errors / Critical Alerts" />
            <Swatch color="bg-plasma-pink" name="Plasma Pink" hex="#EC4899" role="Gradients / Creative Accents" />
            <Swatch color="bg-warm-cream" name="Warm Cream" hex="#FEEBC8" role="Soft Highlights / Warm Accents" />
            <Swatch color="bg-logo-cool" name="Logo Cool Fill" hex="#C7DEEF" role='"Tame" word fill color' isLight />
            <Swatch color="bg-tame-glow-light" name="Tame Glow Light" hex="#6E81A8" role='Outer glow for "Tame"' />
            <Swatch color="bg-tame-glow-deep" name="Tame Glow Deep" hex="#4A5875" role='Inner glow for "Tame" depth' />
            <Swatch color="bg-dmn-glow-warm" name="Warm Glow" hex="#E49256" role='Outer glow for "the DMN"' />
            <Swatch color="bg-dmn-glow-deep" name="Deep Warm Glow" hex="#C96B2E" role='Inner glow for "the DMN" depth' />
            <Swatch color="bg-purple" name="Purple" hex="#c084fc" role="Shadow / Depth or Secondary Accent" />
            <Swatch color="bg-starlight-white" name="Starlight White" hex="#F0F8FF" role="Typography / Highlights" isLight />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Gradients & Mood</h2>
          <p className="mb-4 opacity-80">The brand relies heavily on the contrast between cool intellect (Cyan) and fiery action (Gold), grounded by the deep Indigo.</p>
          <div className="h-36 w-full rounded-lg bg-gradient-to-r from-electric-cyan via-midnight-indigo to-molten-gold mb-4 relative flex items-end p-4">
            <span className="bg-black/60 px-2 py-1 rounded text-xs">Cool-to-Warm Spectrum</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gradient-to-r from-midnight-indigo to-electric-cyan rounded-lg"></div>
            <div className="h-20 bg-gradient-to-r from-electric-cyan via-purple to-plasma-pink rounded-lg relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <span className="relative z-10 text-white font-bold text-xs tracking-widest drop-shadow-md">CHROMATIC RESONANCE</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Usage Application</h2>
          <UsageTable />
        </section>

        <section>
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Component Preview</h2>
          <div className="bg-dark-panel p-8 rounded-lg border border-faint-ring shadow-lg shadow-black/30">
            <h1 className="text-4xl mb-4">Ready to <span className="text-[#397399]" style={{ textShadow: '0 0 18px rgba(57, 115, 153, 0.95), 0 0 28px rgba(57, 115, 153, 0.5)' }}>Tame</span> the <span className="text-molten-gold" style={{ textShadow: '0 0 15px rgba(255, 159, 28, 0.6)' }}>DMN</span>?</h1>
            <p className="max-w-prose mb-6">This is how your typography and color hierarchy interacts. The high contrast ensures readability while maintaining the energetic, mystical aesthetic of the brand.</p>
            <div>
              <a href="#" className="inline-block bg-molten-gold text-black font-bold py-3 px-6 rounded-md mr-4 transition hover:opacity-90">Get Started</a>
              <a href="#" className="inline-block border-2 border-electric-cyan text-electric-cyan font-bold py-2.5 px-6 rounded-md transition hover:bg-electric-cyan/10">Learn More</a>
            </div>
          </div>
        </section>

        <footer className="text-center opacity-50 mt-16 text-sm">
          Generated for Tame the DMN Project
        </footer>
      </div>
    </div>
  );
};

const Swatch = ({ color = '', bgHex = undefined, name, hex, role, isLight = false }) => (
  <div className="bg-dark-panel rounded-lg overflow-hidden border border-faint-ring transition transform hover:-translate-y-1 shadow-lg shadow-black/30">
    <div
      className={`h-36 w-full ${color || ''} ${isLight ? 'border-b border-slate-300' : ''}`}
      style={bgHex ? { backgroundColor: bgHex } : undefined}
    ></div>
    <div className="p-5">
      <span className={`font-bold text-lg mb-1 block ${isLight ? 'text-slate-800' : ''}`}>{name}</span>
      <span className="font-mono opacity-70 text-sm bg-black/30 px-2 py-1 rounded">{hex}</span>
      <span className="block text-sm mt-3 opacity-60">{role}</span>
    </div>
  </div>
);

const UsageTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-dark-panel rounded-lg overflow-hidden border border-faint-ring shadow-lg shadow-black/30">
      <thead>
        <tr>
          <th className="text-left p-4 bg-dark-panel/80 text-electric-cyan font-semibold uppercase text-sm tracking-wider">Element</th>
          <th className="text-left p-4 bg-dark-panel/80 text-electric-cyan font-semibold uppercase text-sm tracking-wider">Color Recommendation</th>
          <th className="text-left p-4 bg-dark-panel/80 text-electric-cyan font-semibold uppercase text-sm tracking-wider">Context</th>
        </tr>
      </thead>
      <tbody>
        <UsageRow color="bg-midnight-indigo" element="Backgrounds" recommendation="Midnight Indigo" context="Main container backgrounds, app interfaces." />
        <UsageRow color="bg-dark-panel" element="Cards / Secondary" recommendation="Dark Panel" context="Cards, table shells, and secondary backgrounds." />
        <UsageRow color="bg-metal-grey" element="Borders & Icons" recommendation="Metal Grey" context="Divider lines, borders, and inactive icon states." />
        <UsageRow color="bg-subtext" element="Secondary Text" recommendation="Subtext" context="Supporting copy, descriptions, and secondary headings." />
        <UsageRow color="bg-faint-ring" element="Dividers & Strokes" recommendation="Faint Ring" context="Subtle borders, dividers, and line separators." />
        <UsageRow color="bg-molten-gold" element="Primary Actions (CTA)" recommendation="Molten Gold" context='"Buy Now", "Subscribe", or critical alerts. High visibility.' />
        <UsageRow color="bg-signal-green" element="Success States" recommendation="Signal Green" context="Confirmation messages, completion indicators, and 'in tune' status states." />
        <UsageRow color="bg-alert-red" element="Errors & Alerts" recommendation="Alert Red" context="Error messages, critical warnings, and urgent system alerts." />
        <UsageRow color="bg-plasma-pink" element="Creative Accents" recommendation="Plasma Pink" context="Marketing headers, gradient fills, and vibrant brand moments." />
        <UsageRow color="bg-warm-cream" element="Soft Highlights" recommendation="Warm Cream" context="Gentle highlights, warm backgrounds, and soft emphasis areas." />
        <UsageRow color="bg-electric-cyan" element="Interactive States" recommendation="Electric Cyan" context="Hyperlinks, hover effects, active navigation tabs." />
        <UsageRow color="bg-logo-cool" element="Logo Cool Fill" recommendation="Logo Cool" context='Primary wordmark fill for "Tame" text in the logo.' />
        <UsageRow color="bg-tame-glow-light" element="Tame Glow (Light)" recommendation="Tame Glow Light" context='Outer glow tint for "Tame" in the logo lockup.' />
        <UsageRow color="bg-tame-glow-deep" element="Tame Glow (Deep)" recommendation="Tame Glow Deep" context='Inner/depth glow for "Tame" in the logo lockup.' />
        <UsageRow color="bg-dmn-glow-warm" element="DMN Glow (Warm)" recommendation="DMN Glow Warm" context='Outer warm glow for the "DMN" half of the logo.' />
        <UsageRow color="bg-dmn-glow-deep" element="DMN Glow (Deep)" recommendation="DMN Glow Deep" context='Inner/depth warm glow for the "DMN" half of the logo.' />
        <UsageRow color="bg-starlight-white" element="Body Text" recommendation="Starlight White" context="General reading text for maximum contrast on Indigo." />
        <UsageRow color="bg-purple" element="Shadows" recommendation="Purple" context="Use for card shadows or secondary backgrounds to add richness." />
      </tbody>
    </table>
  </div>
);

const UsageRow = ({ color = '', element, recommendation, context }) => (
  <tr className="border-b border-faint-ring">
    <td className="p-4 font-bold">{element}</td>
    <td className="p-4 flex items-center">
      <span className={`inline-block w-4 h-4 rounded-full mr-3 ${color || ''}`}></span>
      {recommendation}
    </td>
    <td className="p-4 opacity-80">{context}</td>
  </tr>
);

export default BrandingPage;