import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-background rounded-t-[4rem] px-8 md:px-16 pt-24 pb-8 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-2">
          <h2 className="font-sans font-bold text-3xl mb-4 text-white">Nura Health</h2>
          <p className="font-outfit text-white/50 max-w-sm">Precision longevity medicine powered by biological data.</p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-white mb-6">Protocol</h4>
          <ul className="space-y-4 font-outfit text-white/50">
            <li><a href="#" className="hover:text-accent transition-colors">Diagnostics</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Interventions</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Telemetry</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-4 font-outfit text-white/50">
            <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Research</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">System Operational</span>
        </div>
        <p className="font-outfit text-white/30 text-sm">© 2026 Nura Health. All rights reserved.</p>
      </div>
    </footer>
  );
}
