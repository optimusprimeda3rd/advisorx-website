import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, ChevronRight, Globe, TrendingUp, Mail, Phone, ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function AdvisorX() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-blue selection:text-white">

      <nav className="fixed w-full z-50 glass border-b border-brand-blue/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="AdvisorX Logo" className="h-7 w-auto object-contain" />
          <div className="hidden md:flex space-x-10 text-[10px] font-bold tracking-[0.3em] items-center">
            <a href="#about" className="text-white/70 hover:text-brand-blue transition-colors">THE MISSION</a>
            <a href="#ecosystem" className="text-white/70 hover:text-brand-blue transition-colors">ECOSYSTEM</a>
            <a href="#contact" className="px-6 py-2 border border-brand-blue/50 text-brand-blue hover:bg-brand-blue hover:text-white transition-all">CONNECT</a>
          </div>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center pt-20 px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#0066FF22_0%,#050810_60%)] -z-10" />
        
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-[110px] font-black tracking-tight leading-[0.85] mb-12">
              GOVERNED <br />
              <span className="text-brand-blue">READINESS.</span> <br />
              <span className="text-white/20">UNBIASED GROWTH.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-gray max-w-2xl mb-14 leading-relaxed font-light">
              AdvisorX is a venture ecosystem platform built to discipline the chaos of early-stage startups through selective incubation and execution support.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <button className="bg-brand-blue hover:bg-blue-700 text-white px-10 py-5 font-bold text-sm tracking-[0.2em] transition-all flex items-center gap-4 group">
                ENTER ECOSYSTEM <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex gap-6 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                <span>India</span>
                <span>Dubai</span>
                <span>Saudi Arabia</span>
                <span>Qatar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section id="about" className="py-40 px-8 bg-brand-navy/30 border-y border-brand-blue/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <FadeIn>
            <div className="w-20 h-1 bg-brand-blue mb-10" />
            <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter">WHY WE <br/>EXIST.</h2>
            <p className="text-brand-gray text-xl leading-relaxed">
              Most founders fail because they approach investors too early and build without validation. AdvisorX exists to bring discipline where chaos exists.
            </p>
          </FadeIn>
          
          <div className="space-y-12">
            {[
              { t: "Build Founders First", d: "We focus on readiness before the code." },
              { t: "Validate Next", d: "Market clarity is earned, not assumed." },
              { t: "Connect Later", d: "Investors are approached only when justified." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="group">
                  <h3 className="text-brand-blue text-sm font-bold tracking-[0.2em] uppercase mb-2 group-hover:translate-x-2 transition-transform">{item.t}</h3>
                  <p className="text-white text-lg font-light opacity-60">{item.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { v: "6,300+", l: "COMMUNITY MEMBERS" },
              { v: "1.5L+", l: "EXTENDED NETWORK" },
              { v: "19+", l: "BRAND PARTNERS" },
              { v: "3", l: "INCUBATING NOW" }
            ].map((s, i) => (
              <div key={i} className="border-l border-brand-blue/20 pl-8 py-4">
                <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">{s.v}</div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-brand-blue uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer id="contact" className="pt-40 pb-10 px-8 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-20 mb-40">
            <div className="col-span-1">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto mb-10" />
              <p className="text-brand-gray leading-relaxed text-sm max-w-xs">
                A Venture Ecosystem Platform and Group of Managed Communities.
                We build readiness. We enable execution.
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-brand-blue uppercase">Contact</h4>
              <a href="mailto:hi@advisorxgrowth.com" className="block text-2xl font-bold hover:text-brand-blue transition-colors underline decoration-brand-blue/30 underline-offset-8">
                hi@advisorxgrowth.com
              </a>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-brand-blue uppercase">Headquarters</h4>
              <p className="text-white/60 font-bold uppercase tracking-widest leading-loose">
                India | Dubai <br /> Saudi Arabia | Qatar
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-brand-blue/10 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase">
            <p>© 2024 ADVISORX GROWTH. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <span>Governed Ecosystem</span>
              <span>Merit-Based Access</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}