"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User, Rocket, Target, Zap } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-20 left-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" 
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-24">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <User className="w-4 h-4" />
              Identity & Vision
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">Experiences</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] border border-white/20 dark:border-white/10 shadow-2xl group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Rocket className="w-24 h-24 text-cyan-500" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-500" />
                  My Mission
                </h3>
                
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-justify font-medium mb-8">
                  With a fervent dedication to resolving challenges and a steadfast commitment to keeping up with new technologies, 
                  I am enthusiastic about utilizing my expertise in practical situations. I look forward to collaborating with diverse 
                  teams to foster innovation and accomplish the goals of the organization.
                </p>

                <div className="p-6 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 italic text-lg text-slate-600 dark:text-slate-400 border-l-4 border-l-cyan-500">
                  "Turning complex problems into elegant, user-centric solutions through clean code and strategic automation."
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "CRM Strategy", desc: "Optimizing funnels and workflows in Go High Level." },
                  { icon: Zap, title: "Web Mastery", desc: "Building high-performance, responsive applications." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl border border-white/10"
                  >
                    <item.icon className="w-8 h-8 text-cyan-500 mb-4" />
                    <h4 className="font-black text-slate-900 dark:text-white mb-2 uppercase text-sm tracking-widest">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Stats & Interaction */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { label: "Years Experience", value: "1+", color: "from-cyan-500 to-blue-500", icon: Rocket },
                { label: "Projects Completed", value: "10+", color: "from-blue-500 to-indigo-500", icon: Target },
                { label: "Client Satisfaction", value: "100%", color: "from-indigo-500 to-purple-500", icon: Zap }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  className="p-8 bg-white/40 dark:bg-slate-900/40 rounded-[2.5rem] backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-xl flex items-center justify-between group overflow-hidden relative"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                    <h3 className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} tracking-tighter`}>
                      {stat.value}
                    </h3>
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-4 text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <h4 className="text-xl font-black mb-4 relative z-10 uppercase tracking-widest">Ready to Build?</h4>
                <p className="text-slate-400 font-medium mb-6 relative z-10">Let's collaborate on your next big idea and make it reality.</p>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all relative z-10">
                  Let's Talk
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
