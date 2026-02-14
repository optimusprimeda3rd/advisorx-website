import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Mail, ArrowRight, Sun, Moon, 
  Linkedin, Twitter, Instagram, Shield, 
  CheckCircle2, XCircle, Zap, Lock
} from 'lucide-react';

export default function AdvisorX() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-brand-blue selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 glass px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="AdvisorX" className="h-8 md:h-10 w-auto object-contain" />
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-premium bg-slate-200 dark:bg-brand-blue/10 text-brand-blue transition-all hover:scale-110"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="mailto:hi@advisorxgrowth.com" className="px-8 py-2.5 bg-brand-blue text-white text-[11px] font-bold tracking-[0.2em] rounded-premium hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all uppercase">
              Inquire
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Mission & Vision */}
      <header className="relative min-h-screen flex items-center pt-20 px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#0066FF10_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,#0066FF15_0%,transparent_60%)] -z-10" />
        
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">Venture Ecosystem Platform</span>
            <h1 className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-12">
              BUILDING <br />
              <span className="text-brand-blue italic font-light">10,000</span> LEADERS.
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 dark:text-brand-gray max-w-4xl mb-14 leading-relaxed font-light">
              Empowering students, founders, and entrepreneurs through a disciplined, execution-driven startup ecosystem across emerging markets.
            </p>
            <div className="flex gap-10 text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
               <span>India</span> <span>Dubai</span> <span>Saudi Arabia</span> <span>Qatar</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* PHILOSOPHY SECTION */}
      <section className="py-40 px-8 bg-brand-blue/5 dark:bg-brand-navy/20 border-y border-slate-200 dark:border-brand-blue/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tighter">WHY ADVISORX EXISTS</h2>
            <p className="text-slate-500 dark:text-brand-gray text-xl mb-10">Founders fail not because of lack of ideas, but because they are not ready to build.</p>
            <div className="space-y-4">
               {['Startups are not validated', 'Execution happens without structure', 'Investors are approached too early'].map(item => (
                 <div key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-blue">
                   <XCircle size={18} /> {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="p-12 bg-white dark:bg-brand-black border border-brand-blue/20 rounded-premium">
            <h3 className="text-xl font-bold mb-8 text-brand-blue tracking-widest uppercase">Governed Identity</h3>
            <ul className="space-y-6">
              {[
                { t: "Not a course", d: "A structured readiness journey." },
                { t: "Not a free community", d: "A selective incubation platform." },
                { t: "A governed ecosystem", d: "Execution-backed support and controlled access." }
              ].map(item => (
                <li key={item.t}>
                  <span className="block font-black text-lg uppercase tracking-tight">{item.t}</span>
                  <span className="text-slate-400 dark:text-brand-gray text-sm">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE MERIT SYSTEM */}
      <section id="ecosystem" className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">The Merit System</h2>
            <p className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs">Progress is earned. There are no bypasses.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 relative">
            {[
              { title: "Founder Readiness", desc: "Foundation of discipline and market understanding." },
              { title: "Startup Validation", desc: "Clarity before building. Evidence-based growth." },
              { title: "Incubation Support", desc: "Resources unlocked only after readiness is proven." },
              { title: "Investor Access", desc: "Introductions made only when justified." }
            ].map((step, i) => (
              <div key={i} className="p-10 bg-slate-50 dark:bg-brand-navy border border-slate-200 dark:border-brand-blue/10 rounded-premium relative group hover:border-brand-blue transition-colors">
                <div className="text-6xl font-black text-brand-blue/10 mb-6 italic">0{i+1}</div>
                <h4 className="text-lg font-black mb-4 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-brand-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & AUDIENCE */}
      <section className="py-40 px-8 bg-brand-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-32">
            <div>
              <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase text-brand-blue">Venture Support</h2>
              <div className="space-y-12">
                <div>
                  <h4 className="font-bold mb-4 tracking-widest uppercase text-xs text-white/40">Execution & Growth</h4>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest">
                    <li className="flex items-center gap-2"><Zap size={14} className="text-brand-blue"/> Marketing Enablement</li>
                    <li className="flex items-center gap-2"><Zap size={14} className="text-brand-blue"/> Hiring Assistance</li>
                    <li className="flex items-center gap-2"><Zap size={14} className="text-brand-blue"/> Market Entry Guidance</li>
                    <li className="flex items-center gap-2"><Zap size={14} className="text-brand-blue"/> Operational Setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 tracking-widest uppercase text-xs text-white/40">Community Management</h4>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">Professional management for brands and business networks.</p>
                  <p className="text-white text-xs font-bold tracking-[0.3em] uppercase">Setup • Engagement • Growth • Events</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">Who it's for</h2>
              {[
                { t: "Students & Early Founders", d: "A structured starting point with clarity and exposure." },
                { t: "Idea-Stage Startups", d: "A validation environment for founders needing market clarity." },
                { t: "Incubation-Ready", d: "Controlled execution where resources are earned." },
                { t: "Investors", d: "A disciplined deal-flow environment for ready startups." }
              ].map(item => (
                <div key={item.t} className="border-l-2 border-brand-blue/30 pl-8 hover:border-brand-blue transition-colors group">
                  <h5 className="font-black text-lg uppercase tracking-tight mb-2 group-hover:text-brand-blue transition-colors">{item.t}</h5>
                  <p className="text-brand-gray text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTH STATS */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-24">
            {[
              { l: "Founders", v: "3" },
              { l: "Core Directors", v: "9" },
              { l: "Micro-Influencers", v: "10+" },
              { l: "Active Members", v: "6,300+" },
              { l: "Brand Partners", v: "19+" }
            ].map(s => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-brand-blue">{s.v}</div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
          
          <div className="p-12 bg-slate-50 dark:bg-brand-navy/30 rounded-premium border border-slate-200 dark:border-brand-blue/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
               <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter italic">"Readiness is earned, not assumed."</h3>
               <p className="text-slate-500 dark:text-brand-gray font-bold tracking-widest text-xs uppercase">Operating across India, Dubai, Saudi Arabia, and Qatar.</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold tracking-[0.4em] text-brand-blue uppercase mb-2">Extended Network</p>
              <p className="text-4xl font-black tracking-tighter">1.5 LAKH+</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-40 px-8 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="md:w-1/2">
             <Lock className="text-brand-blue size-16 mb-8" />
             <h2 className="text-5xl font-black mb-10 tracking-tighter leading-none">GOVERNANCE & <br/>DISCIPLINE.</h2>
             <p className="text-brand-gray text-xl mb-12 font-light italic leading-relaxed">
               "Internal evaluation systems and controlled progression. Not every process is disclosed. This is intentional."
             </p>
             <div className="grid grid-cols-2 gap-6">
                {['Internal Evaluation', 'Clear Authority', 'Controlled Progression', 'Merit-Based Access'].map(i => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/50">
                    <CheckCircle2 size={14} className="text-brand-blue" /> {i}
                  </div>
                ))}
             </div>
          </div>
          <div className="md:w-1/2 p-12 md:p-20 bg-brand-blue rounded-premium shadow-[0_0_60px_rgba(0,102,255,0.2)]">
             <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter text-white">The Promise</h4>
             <div className="space-y-4 text-lg font-bold text-white italic border-l-2 border-white/30 pl-8 uppercase tracking-tighter">
               <p>We build readiness.</p>
               <p>We enable execution.</p>
               <p>We protect trust.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-40 pb-12 px-8 border-t border-slate-200 dark:border-brand-blue/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-2">
            <img src="/logo.png" alt="Logo" className="h-10 mb-10" />
            <p className="text-slate-500 dark:text-brand-gray max-w-sm text-lg leading-relaxed mb-10">
              A venture ecosystem platform for the next generation of business owners.
            </p>
            <div className="flex gap-8 text-brand-blue">
              <a href="#" className="hover:scale-125 transition-transform"><Linkedin size={22}/></a>
              <a href="#" className="hover:scale-125 transition-transform"><Twitter size={22}/></a>
              <a href="#" className="hover:scale-125 transition-transform"><Instagram size={22}/></a>
            </div>
          </div>
          
          <div className="col-span-2 flex flex-col md:items-end text-right">
            <h4 className="font-bold mb-8 text-[11px] tracking-[0.4em] text-brand-blue uppercase">Official Inquiries</h4>
            <a href="mailto:hi@advisorxgrowth.com" className="text-2xl md:text-5xl font-black hover:text-brand-blue transition-colors underline underline-offset-8 decoration-brand-blue/20">
              hi@advisorxgrowth.com
            </a>
            <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mt-8">
              Governed Ecosystem Network
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-slate-400 font-bold tracking-[0.4em] uppercase">
          <p>© 2026 ADVISORX GROWTH. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12 mt-6 md:mt-0">
             <span>Intentional Disclosure Only</span>
             <span>Selective Incubation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}