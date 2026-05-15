import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // close mobile menu if open
    
    // Cinematic GSAP scroll animation
    gsap.to(window, {
      scrollTo: { y: targetId, offsetY: 80 }, // Offset for the fixed navbar
      duration: 1.2,
      ease: "power3.inOut"
    });
  };

  const navLinks = [
    { name: 'Diagnostics', href: '#features' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Protocol', href: '#protocol' }
  ];

  return (
    <>
      <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between w-[95%] md:w-[90%] max-w-5xl ${
        scrolled || isOpen
          ? 'bg-background/90 backdrop-blur-xl border border-primary/10 text-primary shadow-lg' 
          : 'bg-transparent text-white'
      }`}>
        <div className="font-sans font-bold text-lg md:text-xl tracking-tight z-50 relative">Nura Health</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 z-50 relative">
          <button className="magnetic-btn bg-accent text-white px-5 py-2 rounded-full font-sans font-medium text-sm flex items-center gap-2">
            <span className="relative z-10 flex items-center gap-2">Apply <ArrowRight size={16} className="hidden md:block" /></span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-primary/20 bg-background/50 backdrop-blur transition-transform active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center gap-10 font-sans text-3xl font-medium tracking-tight">
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-4 py-2"
              style={{
                transitionDelay: `${isOpen ? i * 75 + 100 : 0}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
