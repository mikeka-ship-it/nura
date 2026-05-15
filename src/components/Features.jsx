import React, { useState, useEffect, useRef } from 'react';
import { Activity, Beaker, Calendar } from 'lucide-react';
import gsap from 'gsap';

const Shuffler = () => {
  const [cards, setCards] = useState(['Genomic Sequencing', 'Metabolic Panel', 'Microbiome Assay']);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-72 w-full bg-white rounded-[2rem] p-6 shadow-sm border border-primary/5 flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="bg-background p-3 rounded-full"><Beaker className="text-primary" size={24} /></div>
        <span className="font-mono text-xs uppercase tracking-widest text-primary/50">Diag-01</span>
      </div>
      <div className="relative h-32 w-full mt-4 flex items-end justify-center">
        {cards.map((card, i) => (
          <div 
            key={card}
            className="absolute w-full p-4 rounded-xl border border-primary/10 bg-background text-center font-sans font-medium text-primary transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: `translateY(${-i * 12}px) scale(${1 - i * 0.05})`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.2
            }}
          >
            {card}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-sans font-bold text-xl text-dark">Deep Cellular Diagnostics</h3>
      </div>
    </div>
  );
};

const Typewriter = () => {
  const fullText = "Tracking 142 discrete biomarkers in real-time. Status: Optimal.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, Math.random() * 50 + 30);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 5000);
      return () => clearTimeout(reset);
    }
  }, [index, fullText]);

  return (
    <div className="h-72 w-full bg-dark rounded-[2rem] p-6 shadow-sm flex flex-col justify-between overflow-hidden group">
      <div className="flex justify-between items-start">
        <div className="bg-white/10 p-3 rounded-full"><Activity className="text-accent" size={24} /></div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">Live Feed</span>
        </div>
      </div>
      <div className="flex-1 mt-6">
        <p className="font-mono text-sm text-accent leading-relaxed">
          {text}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />
        </p>
      </div>
      <div>
        <h3 className="font-sans font-bold text-xl text-white">Biomarker Telemetry</h3>
      </div>
    </div>
  );
};

const Scheduler = () => {
  const container = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to('.cursor', { x: 60, y: 30, duration: 1, ease: 'power2.inOut' })
        .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.day-cell-wed', { backgroundColor: '#CC5833', color: '#fff', duration: 0.2 }, "-=0.1")
        .to('.cursor', { x: 120, y: 90, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.save-btn', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.1")
        .to('.cursor', { opacity: 0, duration: 0.3 })
        .set('.day-cell-wed', { backgroundColor: 'transparent', color: 'rgb(26 26 26 / 0.5)' })
        .set('.cursor', { x: 0, y: 0, opacity: 1 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative h-72 w-full bg-white rounded-[2rem] p-6 shadow-sm border border-primary/5 flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="bg-background p-3 rounded-full"><Calendar className="text-primary" size={24} /></div>
        <span className="font-mono text-xs uppercase tracking-widest text-primary/50">Proto-03</span>
      </div>
      <div className="relative flex-1 mt-6 w-full max-w-[200px] mx-auto">
        <div className="grid grid-cols-7 gap-1 font-mono text-[10px] text-center text-dark/50 mb-4">
          <div>S</div><div>M</div><div>T</div><div className="day-cell-wed rounded-full py-1 transition-colors">W</div><div>T</div><div>F</div><div>S</div>
        </div>
        <div className="save-btn w-full py-2 bg-primary/5 rounded-full text-center font-sans text-xs font-semibold text-primary mt-8 transition-transform">
          Save Protocol
        </div>
        
        {/* Animated SVG Cursor */}
        <svg className="cursor absolute top-0 left-0 w-6 h-6 text-dark drop-shadow-md z-10" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
        </svg>
      </div>
      <div>
        <h3 className="font-sans font-bold text-xl text-dark">Personalized Protocols</h3>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section id="features" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary tracking-tight">Interactive Functional Artifacts.</h2>
        <p className="font-outfit text-lg text-primary/60 mt-4 max-w-2xl">We replace generic health advice with precision data instruments.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Shuffler />
        <Typewriter />
        <Scheduler />
      </div>
    </section>
  );
}
