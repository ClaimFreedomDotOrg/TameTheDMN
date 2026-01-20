import React from 'react';

const BrandingPage: React.FC = () => {
  return (
    <div className="bg-midnight-indigo text-starlight-white font-sans p-8">
      <div className="container mx-auto">
        <header className="text-center mb-16 pb-8 border-b border-white/10">
          <h1 className="text-5xl font-extrabold mb-2 tracking-wider">
            <span className="text-electric-cyan" style={{ textShadow: '0 0 15px rgba(0, 229, 255, 0.6)' }}>Tame</span> the <span className="text-molten-gold" style={{ textShadow: '0 0 15px rgba(255, 159, 28, 0.6)' }}>DMN</span>
          </h1>
          <p className="text-lg opacity-80">Brand Color System & Usage Guidelines</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Logo & Imagery</h2>
          <div className="bg-white/5 p-8 rounded-lg text-center">
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
            <Swatch color="bg-electric-cyan" name="Electric Cyan" hex="#00E5FF" role="Accent / Cool Energy" />
            <Swatch color="bg-molten-gold" name="Molten Gold" hex="#FF9F1C" role="CTA / Warm Energy" />
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
            <div className="h-20 bg-gradient-to-r from-purple to-molten-gold rounded-lg"></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Usage Application</h2>
          <UsageTable />
        </section>

        <section>
          <h2 className="text-3xl mb-6 border-l-4 border-electric-cyan pl-4">Component Preview</h2>
          <div className="bg-white/5 p-8 rounded-lg">
            <h1 className="text-4xl mb-4">Ready to <span className="text-electric-cyan" style={{ textShadow: '0 0 15px rgba(0, 229, 255, 0.6)' }}>Tame</span> the <span className="text-molten-gold" style={{ textShadow: '0 0 15px rgba(255, 159, 28, 0.6)' }}>DMN</span>?</h1>
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

const Swatch = ({ color, name, hex, role, isLight = false }) => (
  <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 transition transform hover:-translate-y-1">
    <div className={`h-36 w-full ${color} ${isLight ? 'border-b border-slate-300' : ''}`}></div>
    <div className="p-5">
      <span className={`font-bold text-lg mb-1 block ${isLight ? 'text-slate-800' : ''}`}>{name}</span>
      <span className="font-mono opacity-70 text-sm bg-black/30 px-2 py-1 rounded">{hex}</span>
      <span className="block text-sm mt-3 opacity-60">{role}</span>
    </div>
  </div>
);

const UsageTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white/5 rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="text-left p-4 bg-white/5 text-electric-cyan font-semibold uppercase text-sm tracking-wider">Element</th>
          <th className="text-left p-4 bg-white/5 text-electric-cyan font-semibold uppercase text-sm tracking-wider">Color Recommendation</th>
          <th className="text-left p-4 bg-white/5 text-electric-cyan font-semibold uppercase text-sm tracking-wider">Context</th>
        </tr>
      </thead>
      <tbody>
        <UsageRow color="bg-midnight-indigo" element="Backgrounds" recommendation="Midnight Indigo" context="Main container backgrounds, app interfaces." />
        <UsageRow color="bg-molten-gold" element="Primary Actions (CTA)" recommendation="Molten Gold" context='"Buy Now", "Subscribe", or critical alerts. High visibility.' />
        <UsageRow color="bg-electric-cyan" element="Interactive States" recommendation="Electric Cyan" context="Hyperlinks, hover effects, active navigation tabs." />
        <UsageRow color="bg-starlight-white" element="Body Text" recommendation="Starlight White" context="General reading text for maximum contrast on Indigo." />
        <UsageRow color="bg-purple" element="Shadows" recommendation="Purple" context="Use for card shadows or secondary backgrounds to add richness." />
      </tbody>
    </table>
  </div>
);

const UsageRow = ({ color, element, recommendation, context }) => (
  <tr className="border-b border-white/5">
    <td className="p-4 font-bold">{element}</td>
    <td className="p-4 flex items-center">
      <span className={`inline-block w-4 h-4 rounded-full mr-3 ${color}`}></span>
      {recommendation}
    </td>
    <td className="p-4 opacity-80">{context}</td>
  </tr>
);

export default BrandingPage;