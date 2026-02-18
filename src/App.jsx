import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Mail, ArrowRight, Sun, Moon, 
  Linkedin, Instagram, Shield, 
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
      <nav className="fixed w-full z-50 glass px-6 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img 
            src="/logo.png" 
            alt="AdvisorX" 
            className={`h-7 md:h-10 w-auto object-contain transition-all duration-300 ${!darkMode ? 'logo-smart-filter' : ''}`} 
          />
          
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 md:p-2.5 rounded-premium bg-slate-100 dark:bg-brand-blue/10 text-brand-blue transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="mailto:hi@advisorxgrowth.com" className="px-5 md:px-8 py-2 md:py-2.5 bg-brand-blue text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] rounded-premium uppercase">
              Inquire
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center pt-20 px-6 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#0066FF08_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,#0066FF15_0%,transparent_60%)] -z-10" />
        
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.5em] uppercase mb-6 md:mb-8 block">Venture Ecosystem Platform</span>
            <h1 className="text-5xl md:text-[100px] font-black tracking-tighter leading-[0.95] md:leading-[0.85] mb-8 md:mb-12">
              BUILDING <br />
              <span className="text-brand-blue italic font-light">10,000</span> LEADERS.
            </h1>
            <p className="text-lg md:text-3xl text-slate-500 dark:text-brand-gray max-w-4xl mb-10 md:mb-14 leading-relaxed font-light">
              Empowering founders and entrepreneurs through a disciplined, execution-driven startup ecosystem across India and Dubai.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-10 text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
               <span>India</span> <span>Dubai</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-slate-50 dark:bg-brand-navy/20 border-y border-slate-200 dark:border-brand-blue/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase">Why AdvisorX Exists</h2>
            <p className="text-slate-500 dark:text-brand-gray text-lg md:text-xl mb-10">Founders fail not because of lack of ideas, but because they are not ready to build.</p>
            <div className="space-y-4 font-bold">
               {['Startups are not validated', 'Execution happens without structure', 'Investors are approached too early'].map(item => (
                 <div key={item} className="flex items-center gap-3 text-[11px] md:text-sm font-bold uppercase tracking-widest text-brand-blue">
                   <XCircle size={18} /> {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="p-8 md:p-12 bg-white dark:bg-brand-black border border-slate-200 dark:border-brand-blue/20 rounded-premium shadow-xl dark:shadow-none">
            <h3 className="text-lg font-bold mb-8 text-brand-blue tracking-widest uppercase text-xs md:text-sm">Governed Identity</h3>
            <ul className="space-y-6">
              {[
                { t: "Not a course", d: "A structured readiness journey." },
                { t: "Not a free community", d: "A selective incubation platform." },
                { t: "A governed ecosystem", d: "Execution-backed support and controlled access." }
              ].map(item => (
                <li key={item.t}>
                  <span className="block font-black text-base md:text-lg uppercase tracking-tight">{item.t}</span>
                  <span className="text-slate-400 dark:text-brand-gray text-sm">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="ecosystem" className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-24 text-center md:text-left">
            {[
              { l: "Founders", v: "3" },
              { l: "Active Members", v: "6,300+" },
              { l: "Brand Partners", v: "19+" },
              { l: "Extended Network", v: "1.5 Lakh+" }
            ].map(s => (
              <div key={s.l}>
                <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter text-brand-blue">{s.v}</div>
                <div className="text-[9px] md:text-[10px] font-bold tracking-widest text-slate-400 uppercase leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
          
          <div className="p-8 md:p-12 bg-slate-100 dark:bg-brand-navy/30 rounded-premium border border-slate-200 dark:border-brand-blue/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
               <h3 className="text-xl md:text-3xl font-black mb-2 uppercase tracking-tighter italic leading-tight text-slate-900 dark:text-white">"Readiness is earned, not assumed."</h3>
               <p className="text-slate-500 dark:text-brand-gray font-bold tracking-widest text-[9px] md:text-xs uppercase">Operating across India and Dubai.</p>
            </div>
            <ArrowRight size={32} className="text-brand-blue hidden md:block" />
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2">
             <Lock className="text-brand-blue size-12 md:size-16 mb-8" />
             <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none uppercase">Governance & Discipline.</h2>
             <p className="text-brand-gray text-lg md:text-xl mb-12 font-light italic leading-relaxed">
               "Internal evaluation systems and controlled progression. Not every process is disclosed. This is intentional."
             </p>
             <div className="grid grid-cols-2 gap-4 md:gap-6">
                {['Internal Evaluation', 'Clear Authority', 'Controlled Progression', 'Merit-Based Access'].map(i => (
                  <div key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/50">
                    <CheckCircle2 size={14} className="text-brand-blue shrink-0" /> {i}
                  </div>
                ))}
             </div>
          </div>
          <div className="lg:w-1/2 w-full p-8 md:p-16 bg-brand-blue rounded-premium shadow-[0_0_60px_rgba(0,102,255,0.3)]">
             <h4 className="text-xl md:text-2xl font-black mb-8 uppercase tracking-tighter text-white">The Promise</h4>
             <div className="space-y-4 text-base md:text-lg font-bold text-white italic border-l-2 border-white/30 pl-6 md:pl-8 uppercase tracking-tighter">
               <p>We build readiness.</p>
               <p>We enable execution.</p>
               <p>We protect trust.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-24 md:pt-40 pb-12 px-6 md:px-8 border-t border-slate-200 dark:border-brand-blue/10 bg-white dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16 md:gap-20 mb-20 md:mb-32">
          <div className="lg:col-span-2">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className={`h-8 md:h-10 mb-8 transition-all ${!darkMode ? 'logo-smart-filter' : ''}`} 
            />
            <p className="text-slate-500 dark:text-brand-gray max-w-sm text-base md:text-lg leading-relaxed mb-10">
              A venture ecosystem platform for the next generation of business owners.
            </p>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/company/advisor-x-growth/" target="_blank" rel="noreferrer" className="text-brand-blue hover:scale-125 transition-transform"><Linkedin size={24}/></a>
              <a href="https://www.instagram.com/advisorxgrowth/" target="_blank" rel="noreferrer" className="text-brand-blue hover:scale-125 transition-transform"><Instagram size={24}/></a>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex flex-col lg:items-end lg:text-right">
            <h4 className="font-bold mb-6 md:mb-8 text-[10px] md:text-[11px] tracking-[0.4em] text-brand-blue uppercase">Official Inquiries</h4>
            <a href="mailto:hi@advisorxgrowth.com" className="text-xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white hover:text-brand-blue transition-colors underline underline-offset-8 decoration-brand-blue/20">
              hi@advisorxgrowth.com
            </a>
            <p className="text-slate-400 text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-8">
              India | Dubai
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 md:pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between text-[9px] md:text-[10px] text-slate-400 font-bold tracking-[0.4em] uppercase gap-4 text-center md:text-left">
          <p>© 2026 ADVISORX GROWTH. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
             <span>Intentional Disclosure Only</span>
             <span>Selective Incubation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}