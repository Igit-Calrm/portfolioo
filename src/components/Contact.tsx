"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Email</h3>
                <a href="mailto:carlmaloles88@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 transition-colors">
                  carlmaloles88@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-300">09452438249</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-300">028 Brgy. Danlagan Lopez, Quezon</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Connect</h3>
                <div className="flex gap-4">
                    <a href="https://linkedin.com/in/carl-vincent-t-maloles" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/Igit-Calrm" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
          </motion.div>

          {/* Contact Form (Visual Only) */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 ml-1">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all backdrop-blur-sm" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 ml-1">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all backdrop-blur-sm" placeholder="your@email.com" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 ml-1">Message</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all backdrop-blur-sm resize-none" placeholder="Your message..." />
                </div>
                <button className="w-full py-4 bg-cyan-500 text-white font-bold rounded-2xl hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
