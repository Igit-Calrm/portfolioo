"use client";

import { Github, Download, ExternalLink, Calendar, MapPin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export default function MainContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full md:w-2/3 bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200 p-8 md:p-12 relative"
    >
      {/* Top Controls */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <ThemeToggle />
      </div>

      {/* Header */}
      <motion.header variants={itemVariants} className="mb-10 pt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white uppercase tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
          Carl Vincent Maloles
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-lg">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Web Developer & CRM Specialist</span>
          </div>
          <span className="hidden sm:inline text-gray-300">|</span>
          <div className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
            <Github className="w-5 h-5" />
            <a href="https://github.com/Igit-Calrm" target="_blank" rel="noopener noreferrer">Igit-Calrm</a>
          </div>
        </div>
        
        <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex"
        >
            <button className="flex items-center gap-2 bg-slate-900 dark:bg-cyan-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-500/20">
                <Download className="w-4 h-4" />
                Download Resume
            </button>
        </motion.div>
      </motion.header>

      {/* Profile */}
      <motion.section variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-widest">
            Profile
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 rounded-full"></div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            With a fervent dedication to resolving challenges and a steadfast commitment to keeping up with new technologies, 
            I am enthusiastic about utilizing my expertise in practical situations. I look forward to collaborating with diverse 
            teams to foster innovation and accomplish the goals of the organization.
            <br /><br />
            Enthusiastic Web Developer and CRM Specialist with hands-on experience in building web applications and optimizing 
            Go High Level CRM for automations, funnels, and client workflows.
            </p>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-widest">
            Education
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 rounded-full"></div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border-l-4 border-cyan-500 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white">Bachelor of Science in Information Technology</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Polytechnic University of the Philippines - Lopez Quezon</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-2">
            <Calendar className="w-4 h-4" />
            <span>2020-2024</span>
          </div>
        </div>
      </motion.section>

      {/* Work Experience */}
      <motion.section variants={itemVariants} className="mb-10">
        <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-widest">
            Work Experience
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 rounded-full"></div>
        </div>

        <div className="space-y-6 relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 pb-2">
            {/* Job 1 */}
            <ExperienceCard 
                title="CRM Specialist (Go High Level)"
                company="Freelance"
                type="Remote"
                period="June 2025 – October 2025"
                points={[
                    "Developed custom workflows, funnels, automations, and websites in Go High Level.",
                    "Optimized CRM pipelines, SMS/email campaigns, and scheduling tools to improve lead management.",
                    "Delivered web and CRM solutions that increased conversions and reduced manual workload."
                ]}
            />

            {/* Job 2 */}
            <ExperienceCard 
                title="Full Stack & IoT Developer – Smart Pill Dispensing App"
                company="Freelance"
                type="Remote"
                period="June – October 2025"
                points={[
                    "Designed and developed a smart pill dispensing system combining an Arduino-powered hardware device with a full stack web and mobile app.",
                    "Built a responsive React Native interface integrated with Firebase for real-time monitoring, scheduling, and dosage tracking.",
                    "Implemented hardware-software synchronization to automate pill dispensing and improve medication adherence."
                ]}
            />

            {/* Job 3 */}
            <ExperienceCard 
                title="FRONTEND DEVELOPER"
                role="Junior Web Developer"
                company="Trifecta Solutions Inc x UNLAD"
                location="Quezon City"
                period="September 2024 - July 2025"
                points={[
                    "Frontend Developer for ERP software",
                    "Full Stack Developer for Reward System",
                    "Frontend Developer for School Management App",
                    "Frontend Developer for Insurance Management System"
                ]}
            />

            {/* Job 4 */}
            <ExperienceCard 
                title="Junior Programmer - Internship"
                company="Trifecta Solutions Inc x UNLAD"
                location="Quezon City"
                period="April - July 2024"
                points={[
                    "Completed 600 hours of Internship as a Full Stack Developer"
                ]}
                isLast
            />
        </div>
      </motion.section>
    </motion.main>
  );
}

function ExperienceCard({ title, role, company, type, location, period, points, isLast = false }: any) {
    return (
        <motion.div 
            className="relative"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-cyan-500 shadow-sm"></span>
            
            <div className="mb-1">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">{title}</h3>
                {role && <p className="font-medium text-slate-700 dark:text-slate-300">{role}</p>}
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">{company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{period}</span>
                    </div>
                    {(type || location) && (
                        <>
                             <span>•</span>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>{type || location}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm marker:text-cyan-500">
                {points.map((point: string, idx: number) => (
                    <li key={idx} className="pl-1">{point}</li>
                ))}
            </ul>
        </motion.div>
    )
}
