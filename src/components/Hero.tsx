"use client";

import { Github, Download, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase mb-4 block text-sm md:text-base">
            Welcome to my portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 dark:from-cyan-400 dark:to-cyan-200">
              Carl Vincent
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            Web Developer & CRM Specialist passionate about building aesthetic websites and optimizing workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                download="Carl_Vincent_Resume.pdf"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-black text-lg transition-all flex items-center gap-2 shadow-[0_10px_30px_rgba(8,112,184,0.3)] hover:shadow-[0_20px_40px_rgba(8,112,184,0.4)]"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl font-black text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer backdrop-blur-sm block shadow-lg"
              >
                Contact Me
              </ScrollLink>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
            <a href="https://github.com/Igit-Calrm" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/carl-vincent-t-maloles" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:carlmaloles88@gmail.com" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="flex-1 flex justify-center md:justify-end relative group"
        >
          {/* Floating background elements for "Pro" look */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-24 h-24 bg-cyan-500/10 rounded-3xl blur-xl"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          />

          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute inset-4 bg-white dark:bg-slate-800 rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(8,112,184,0.2)] dark:shadow-none overflow-hidden border-4 border-white/50 dark:border-slate-700/50 backdrop-blur-sm"
            >
               <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                    {/* Using a high-quality professional cartoon avatar URL - handsome with laptop */}
                    <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carl&mood=happy&clothing=graphicShirt&clothingColor=262e33&graphicType=laptop&top=shortHair&hairColor=2c1b18&facialHair=none" 
                        alt="Carl Vincent Cartoon" 
                        className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                    
                    {/* Glass Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-slate-800 dark:text-white">Available for Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
