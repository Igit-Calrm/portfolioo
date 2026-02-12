"use client";

import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.aside 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full md:w-1/3 bg-[#0f2942] dark:bg-slate-900 text-white p-8 flex flex-col gap-8 relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

      {/* Profile Image Placeholder */}
      <motion.div variants={itemVariants} className="flex justify-center z-10">
        <div className="w-48 h-48 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-600 overflow-hidden relative shadow-2xl group transition-transform duration-300 hover:scale-105">
            {/* User should replace this with their actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-center">
                Add Photo Here
            </div>
            <img 
                src="/profile-placeholder.jpg" 
                alt="Carl Vincent Maloles" 
                className="w-full h-full object-cover opacity-0" // Hidden by default until image is added
            />
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div variants={itemVariants} className="space-y-4 z-10">
        <h2 className="text-xl font-bold tracking-widest uppercase border-b border-gray-500/50 pb-2 mb-4 text-cyan-400">Contact</h2>
        
        <div className="flex items-center gap-3 text-sm group">
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
            <Phone className="w-4 h-4 shrink-0 text-cyan-300" />
          </div>
          <span className="group-hover:text-cyan-200 transition-colors">09452438249</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm group">
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
            <Mail className="w-4 h-4 shrink-0 text-cyan-300" />
          </div>
          <a href="mailto:carlmaloles88@gmail.com" className="hover:text-cyan-200 transition-colors">carlmaloles88@gmail.com</a>
        </div>
        
        <div className="flex items-start gap-3 text-sm group">
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
            <MapPin className="w-4 h-4 shrink-0 text-cyan-300" />
          </div>
          <span className="group-hover:text-cyan-200 transition-colors">028 Brgy. Danlagan Lopez, Quezon</span>
        </div>
        
        <div className="flex items-start gap-3 text-sm group">
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
            <Linkedin className="w-4 h-4 shrink-0 text-cyan-300" />
          </div>
          <a href="https://linkedin.com/in/carl-vincent-t-maloles" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors break-all">
            linkedin.com/in/carl-vincent-t-maloles
          </a>
        </div>
      </motion.div>

      {/* Technical Skills Section */}
      <motion.div variants={itemVariants} className="space-y-6 z-10">
        <h2 className="text-xl font-bold tracking-widest uppercase border-b border-gray-500/50 pb-2 mb-4 text-cyan-400">Technical Skills</h2>
        
        {/* Frontend */}
        <div className="group">
          <h3 className="font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors">FRONTEND DEVELOPMENT</h3>
          <ul className="list-none space-y-1 text-sm text-gray-300">
            {["React.js", "Tailwind CSS Framework", "HTML", "CSS", "Shadcn", "React Native", "Expo", "Bootstrap"].map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="group">
          <h3 className="font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors">BACKEND DEVELOPMENT</h3>
          <ul className="list-none space-y-1 text-sm text-gray-300">
            {["NodeJs", "Firebase"].map((skill) => (
               <li key={skill} className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
               {skill}
             </li>
            ))}
          </ul>
        </div>

        {/* CRM & Marketing */}
        <div className="group">
          <h3 className="font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors">CRM & MARKETING AUTOMATION</h3>
          <ul className="list-none space-y-2 text-sm text-gray-300">
            <li>
                <div className="flex items-center gap-2 font-medium text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Web Development
                </div>
                <span className="block text-xs text-gray-400 pl-4 mt-0.5">(Responsive UI, Full-Stack Website, API Integration)</span>
            </li>
            <li>
                <div className="flex items-center gap-2 font-medium text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Go High Level
                </div>
                <span className="block text-xs text-gray-400 pl-4 mt-0.5">(funnels, pipelines, automations, SMS/email campaigns, reputation management, scheduling)</span>
            </li>
          </ul>
        </div>

        {/* Programming Language */}
        <div className="group">
          <h3 className="font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors">PROGRAMMING LANGUAGE</h3>
          <ul className="list-none space-y-1 text-sm text-gray-300">
             {["JavaScript", "TypeScript"].map((skill) => (
               <li key={skill} className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
               {skill}
             </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.aside>
  );
}
