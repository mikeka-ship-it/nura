import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex flex-col justify-end pb-24 px-8 md:px-16 overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526930382372-67bf22c0fce2?q=80&w=1200&auto=format&fit=crop" 
          alt="Biotechnology research" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="flex flex-col gap-2">
          <span className="hero-elem font-sans font-bold text-2xl md:text-4xl tracking-tight text-white/90">
            Medicine is the
          </span>
          <span className="hero-elem font-drama italic font-light text-6xl md:text-8xl lg:text-[10rem] leading-none text-white tracking-tighter">
            Precision.
          </span>
        </h1>
        <p className="hero-elem mt-8 font-outfit text-lg md:text-xl text-white/70 max-w-xl font-light">
          Precision longevity medicine powered by biological data. We redefine the boundaries of human health.
        </p>
        <div className="hero-elem mt-12">
          <button className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-sans font-semibold text-lg shadow-lg">
            <span className="relative z-10">Discover Protocol</span>
          </button>
        </div>
      </div>
    </section>
  );
}
