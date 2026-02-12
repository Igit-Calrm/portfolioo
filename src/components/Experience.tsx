"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "CRM Specialist (Go High Level)",
    company: "Freelance",
    type: "Remote",
    period: "June 2025 – October 2025",
    description: [
      "Developed custom workflows, funnels, automations, and websites in Go High Level.",
      "Optimized CRM pipelines, SMS/email campaigns, and scheduling tools to improve lead management.",
      "Delivered web and CRM solutions that increased conversions and reduced manual workload."
    ]
  },
  {
    title: "Full Stack & IoT Developer",
    company: "Smart Pill Dispensing App (Freelance)",
    type: "Remote",
    period: "June 2025 – October 2025",
    description: [
      "Designed and developed a smart pill dispensing system combining an Arduino-powered hardware device with a full stack web and mobile app.",
      "Built a responsive React Native interface integrated with Firebase for real-time monitoring, scheduling, and dosage tracking.",
      "Implemented hardware-software synchronization to automate pill dispensing and improve medication adherence."
    ]
  },
  {
    title: "Junior Web Developer",
    company: "Trifecta Solutions Inc x UNLAD",
    type: "Quezon City",
    period: "September 2024 - July 2025",
    description: [
      "Frontend Developer for ERP software",
      "Full Stack Developer for Reward System",
      "Frontend Developer for School Management App",
      "Frontend Developer for Insurance Management System"
    ]
  },
  {
    title: "Junior Programmer - Internship",
    company: "Trifecta Solutions Inc x UNLAD",
    type: "Quezon City",
    period: "April 2024 - July 2024",
    description: [
      "Completed 600 hours of Internship as a Full Stack Developer"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/20 dark:border-white/10 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium mt-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 leading-relaxed">
                    <span className="mt-2.5 w-2 h-2 bg-cyan-500 rounded-full shrink-0 shadow-lg shadow-cyan-500/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
