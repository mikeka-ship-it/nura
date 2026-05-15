import React from 'react';

export default function Membership() {
  return (
    <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto bg-background">
      <div className="text-center mb-24">
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary tracking-tight">Apply for Membership</h2>
        <p className="font-outfit text-lg text-primary/60 mt-4 max-w-xl mx-auto">We accept a limited number of new patients each quarter to ensure uncompromising precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        <div className="bg-white rounded-[2rem] p-10 border border-primary/5 shadow-sm">
          <h3 className="font-sans font-bold text-2xl text-primary mb-2">Essential</h3>
          <p className="font-outfit text-primary/60 mb-8">Quarterly baseline tracking.</p>
          <button className="w-full py-4 rounded-full border border-primary/20 text-primary font-sans font-medium hover:bg-primary/5 transition-colors">Apply</button>
        </div>

        <div className="bg-primary text-white rounded-[3rem] p-12 shadow-2xl relative scale-105 z-10 ring-4 ring-accent/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Recommended</div>
          <h3 className="font-sans font-bold text-3xl mb-2">Performance</h3>
          <p className="font-outfit text-white/60 mb-8">Full telemetry and custom protocols.</p>
          <button className="magnetic-btn w-full py-4 rounded-full bg-accent text-white font-sans font-medium">Apply Now</button>
        </div>

        <div className="bg-white rounded-[2rem] p-10 border border-primary/5 shadow-sm">
          <h3 className="font-sans font-bold text-2xl text-primary mb-2">Enterprise</h3>
          <p className="font-outfit text-primary/60 mb-8">For high-performing teams.</p>
          <button className="w-full py-4 rounded-full border border-primary/20 text-primary font-sans font-medium hover:bg-primary/5 transition-colors">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
