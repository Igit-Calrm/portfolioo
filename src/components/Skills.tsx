"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    items: ["React", "CSS", "Tailwind CSS", "HTML", "Native Wind", "NextJS",   "Shadcn", "React Native", "Expo", "Bootstrap"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Firebase", "MongoDB", "API Integration"]
  },
  {
    category: "CRM & Tools",
    items: ["Go High Level", "Arduino IDE", "Funnels & Automations", "JDK", "Git/GitHub", "Android Studio", "VS Code", "Npm", "Figma"]
  },
  {
    category: "Languages",
    items: ["JavaScript", "C++", "TypeScript" , "Java" , "Python", "Kotlin"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-4"
          >
            My Tech Stack
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-xl hover:shadow-cyan-500/10 transition-all group relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500/50 to-blue-600/50" />
              
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors tracking-tight flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <motion.span 
                    key={item} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-[11px] font-black rounded-xl border border-white/20 dark:border-white/10 shadow-sm uppercase tracking-wider hover:bg-cyan-500 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
