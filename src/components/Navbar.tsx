"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBackgroundColor = () => {
    if (!scrolled) return "rgba(255, 255, 255, 0)";
    return theme === "dark" ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.7)";
  };

  const getWidth = () => {
    if (!scrolled) return "100%";
    if (windowWidth >= 1024) return "50%";
    if (windowWidth >= 768) return "70%";
    return "90%";
  };

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        width: getWidth(),
        top: scrolled ? "1rem" : "0",
        borderRadius: scrolled ? "9999px" : "0px",
        backgroundColor: getBackgroundColor(),
        paddingTop: scrolled ? "0.75rem" : "1.5rem",
        paddingBottom: scrolled ? "0.75rem" : "1.5rem",
        boxShadow: scrolled ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1
      }}
      className={`fixed left-0 right-0 z-50 mx-auto backdrop-blur-xl border-white/20 dark:border-white/10 px-6 ${
        scrolled ? "border" : "border-transparent"
      } dark:bg-slate-900/70`}
      style={{
        backgroundColor: scrolled ? undefined : "transparent"
      }}
    >
      <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? "" : "container mx-auto"}`}>
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer text-slate-800 dark:text-white"
        >
          CVM<span className="text-cyan-500">.</span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-slate-800 dark:text-slate-100 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer font-semibold transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-800 dark:text-slate-100 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer font-bold text-lg flex items-center justify-between group"
                  >
                    {link.name}
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId="activeDotMobile"
                    />
                  </ScrollLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
