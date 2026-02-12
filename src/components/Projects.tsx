"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Layers, Code2, Globe, Smartphone, Monitor, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const projects = [
  {
    title: "Smart Pill Dispenser",
    category: "IoT & Mobile App",
    description: "An Arduino-powered dispensing system integrated with a React Native mobile app and Firebase for real-time scheduling.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1000"
    ],
    tags: ["React Native", "Arduino", "Firebase", "IoT"],
    github: "https://github.com/Igit-Calrm",
    demo: "#",
    color: "from-blue-500 to-cyan-500",
    type: "mobile",
    status: "active"
  },
  {
    title: "Reward System",
    category: "Full Stack Development",
    description: "A comprehensive reward and loyalty system featuring points tracking, redemption workflows, and administrative dashboards.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
    color: "from-amber-500 to-orange-500",
    type: "desktop",
    status: "inactive"
  },
  {
    title: "School Management App",
    category: "Education Tech",
    description: "Frontend for a robust educational platform managing student records, attendance, and academic performance tracking.",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000"
    ],
    tags: ["React", "Tailwind", "Shadcn"],
    github: "#",
    demo: "#",
    color: "from-indigo-500 to-blue-500",
    type: "desktop",
    status: "inactive"
  },
  {
    title: "CRM Automation Hub",
    category: "CRM & Automation",
    description: "Custom Go High Level workflows and funnels optimized for client lead generation and automated follow-ups.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    ],
    tags: ["Go High Level", "Automations", "Funnels"],
    github: "#",
    demo: "#",
    color: "from-purple-500 to-pink-500",
    type: "desktop",
    status: "active"
  },
  {
    title: "Enterprise ERP System",
    category: "Business Software",
    description: "A comprehensive ERP solution for business management with complex data tables and real-time analytics.",
    images: [
      "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000"
    ],
    tags: ["React", "PostgreSQL", "Tailwind", "Node.js"],
    github: "#",
    demo: "#",
    color: "from-emerald-500 to-teal-500",
    type: "desktop",
    status: "inactive"
  },
  {
    title: "Insurance Management",
    category: "Financial Services",
    description: "A secure and scalable insurance platform for managing policies, claims, and client documentation.",
    images: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000"
    ],
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
    color: "from-orange-500 to-red-500",
    type: "desktop",
    status: "inactive"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl transition-all duration-500 group-hover:shadow-cyan-500/20 group-hover:-translate-y-2">
        
        {/* Browser Header */}
        <div className="h-12 bg-white/50 dark:bg-slate-800/50 border-b border-white/20 dark:border-white/10 flex items-center px-6 gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/50" />
            <div className="w-3 h-3 rounded-full bg-amber-400/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/50" />
          </div>
          <div className="flex-1 max-w-md mx-auto bg-white/30 dark:bg-slate-700/30 rounded-full px-4 py-1.5 flex items-center gap-2">
            <Globe className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] text-slate-400 font-mono tracking-tight truncate">
              {project.status === 'active' ? `https://${project.title.toLowerCase().replace(/\s+/g, '-')}.com` : 'archive://offline-mode'}
            </span>
          </div>
          <div className="flex gap-2 text-slate-400">
            {project.type === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
          </div>
        </div>

        {/* Visual/Image Section (Slideshow) */}
        <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Default view for inactive jobs */}
          {project.status === 'inactive' && (
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-white text-xs font-black uppercase tracking-widest">Site Offline / Private Repo</p>
                <p className="text-white/60 text-[10px] mt-1">Archived view from previous role</p>
              </div>
            </div>
          )}

          {/* Slideshow Controls */}
          {project.images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevImage} className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextImage} className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
          
          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_: any, i: number) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage ? 'bg-white w-4' : 'bg-white/40'}`} />
            ))}
          </div>
        </div>

        <div className="p-8 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-6">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-3 rounded-2xl bg-gradient-to-br from-white/80 to-white/20 dark:from-slate-800/80 dark:to-slate-800/20 border border-white/20 dark:border-white/10 shadow-lg"
            >
              {project.type === 'mobile' ? <Smartphone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> : <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
            </motion.div>
            <div className="flex gap-3">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github} 
                className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-cyan-500 hover:text-white transition-all border border-white/20 dark:border-white/10 shadow-lg"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              {project.status === 'active' && (
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.demo} 
                  className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-cyan-500 hover:text-white transition-all border border-white/20 dark:border-white/10 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          <div className="mb-6">
            <motion.span 
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2 block"
            >
              {project.category}
            </motion.span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {project.description}
            </p>
          </div>

          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <span 
                key={i} 
                className="px-3 py-1.5 rounded-xl bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-[9px] font-black border border-white/20 dark:border-white/10 shadow-sm uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={`absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br ${project.color} opacity-0 blur-[100px] group-hover:opacity-20 transition-opacity duration-700`} />
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className={`h-1.5 w-full bg-gradient-to-r ${project.color} opacity-40`} 
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-widest mb-6"
          >
            <Layers className="w-4 h-4" />
            Project Catalog
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Showcase</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 uppercase tracking-[0.3em] text-[10px]">Curious for more?</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Igit-Calrm" 
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:shadow-2xl transition-all shadow-xl"
          >
            <Globe className="w-5 h-5" />
            View Github Repository
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
