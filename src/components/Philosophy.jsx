import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.phil-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.to('.parallax-bg', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '20%',
        ease: 'none'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-48 px-8 md:px-16 w-full bg-dark overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576086476234-1103be98f096?q=80&w=1200&auto=format&fit=crop" 
          alt="Abstract microscopic cellular" 
          loading="lazy"
          className="parallax-bg w-full h-[120%] object-cover opacity-20 -top-[10%]"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12">
        <p className="phil-line font-sans text-xl md:text-3xl text-background/60 font-light max-w-3xl">
          Most healthcare focuses on: reacting to symptoms when the body is already failing.
        </p>
        <p className="phil-line font-drama italic text-4xl md:text-7xl text-white leading-tight">
          We focus on: <span className="text-accent">optimizing</span> cellular function before disease ever begins.
        </p>
      </div>
    </section>
  );
}
