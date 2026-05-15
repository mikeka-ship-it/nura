import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const cardsData = [
  { step: '01', title: 'Cellular Baseline', desc: 'Comprehensive sequencing of your genome, microbiome, and blood biomarkers to establish your absolute biological truth.' },
  { step: '02', title: 'Intervention Matrix', desc: 'A dynamically adjusting protocol of peptides, supplements, and lifestyle modifications designed exclusively for your unique biology.' },
  { step: '03', title: 'Continuous Telemetry', desc: '24/7 monitoring of key health vectors. We don\'t guess; we measure, adapt, and optimize in real-time.' }
];

export default function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (i === 0) return; // Skip first card
        
        gsap.to(cardsRef.current[i - 1], {
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
          scale: 0.9,
          filter: 'blur(20px)',
          opacity: 0.5,
          ease: 'none'
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-background pt-24 pb-48">
      <div className="px-8 md:px-16 max-w-7xl mx-auto mb-24">
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary tracking-tight">The Protocol.</h2>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        {cardsData.map((data, i) => (
          <div 
            key={data.step}
            ref={el => cardsRef.current[i] = el}
            className="sticky top-24 w-full h-[70vh] bg-white rounded-[3rem] p-12 shadow-2xl border border-primary/5 flex flex-col md:flex-row gap-12 overflow-hidden mb-12 origin-top"
          >
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-mono text-accent text-lg mb-6 tracking-widest">STEP // {data.step}</span>
              <h3 className="font-sans font-bold text-4xl text-primary mb-6">{data.title}</h3>
              <p className="font-outfit text-xl text-primary/70 leading-relaxed max-w-md">{data.desc}</p>
            </div>
            
            {/* Abstract SVG Animation placeholder per card */}
            <div className="flex-1 bg-background rounded-[2rem] flex items-center justify-center overflow-hidden relative">
              {i === 0 && (
                <svg className="w-48 h-48 animate-spin-slow text-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="20" strokeDasharray="2 6" />
                </svg>
              )}
              {i === 1 && (
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-8 opacity-20">
                    {Array.from({length: 100}).map((_, j) => <div key={j} className="bg-primary rounded-full w-2 h-2 mx-auto" />)}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent/50 blur-sm animate-scan" />
                </div>
              )}
              {i === 2 && (
                <svg className="w-full h-32 text-accent opacity-50" viewBox="0 0 200 50" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0 25 H40 L50 10 L60 40 L70 25 H200" strokeDasharray="300" strokeDashoffset="0">
                    <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
