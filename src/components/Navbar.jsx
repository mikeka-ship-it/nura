import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full px-8 py-4 flex items-center justify-between w-[90%] max-w-5xl ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border border-primary/10 text-primary shadow-lg' 
        : 'bg-transparent text-white'
    }`}>
      <div className="font-sans font-bold text-xl tracking-tight">Nura Health</div>
      <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
        <a href="#features" className="hover:opacity-70 transition-opacity">Diagnostics</a>
        <a href="#philosophy" className="hover:opacity-70 transition-opacity">Philosophy</a>
        <a href="#protocol" className="hover:opacity-70 transition-opacity">Protocol</a>
      </div>
      <button className="magnetic-btn bg-accent text-white px-6 py-2 rounded-full font-sans font-medium text-sm flex items-center gap-2">
        <span className="relative z-10 flex items-center gap-2">Apply <ArrowRight size={16} /></span>
      </button>
    </nav>
  );
}
