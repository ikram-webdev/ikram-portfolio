import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, MessageCircle, Code2, 
  Database, Layout, Globe, Smartphone, Terminal, Cpu, Menu, X, Sun, Moon, ArrowUp 
} from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const App = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Dark Mode Logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to Top Visibility Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("ikramkamboh818@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "Fleet Watch Management System",
      desc: "Real-time vehicle tracking and fleet management solution with advanced monitoring.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
      link: "https://fleet-watch-project.vercel.app/",
      img: "/fleetwatch.jpg"
    },
    {
      title: "Solar Inventory System",
      desc: "The Solar Inventory System is a web-based platform designed to help users select the most suitable solar energy solution.",
      tags: ["HTML5", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
      status: "Offline",
      img: "/solar.avif"
    }
  ];

  return (
    <div className="bg-white dark:bg-[#030014] text-gray-900 dark:text-white selection:bg-purple-500/30 min-h-screen overflow-x-hidden font-sans transition-colors duration-300 scroll-smooth">
      
      {/* BACKGROUND MESH */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 dark:bg-purple-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 dark:bg-blue-900/20 blur-[150px] rounded-full" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200 dark:border-white/5 bg-white/70 dark:bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-2xl font-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent tracking-tighter">
            IKRAM. WebDev
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors">Home</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors">Skills</a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-yellow-400 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href="https://wa.me/923129699582" target="_blank"
               className="flex items-center gap-x-2 text-purple-600 dark:text-purple-400 font-bold px-4 hover:scale-105 transition-all whitespace-nowrap">
              <FaWhatsapp size={24} className="shrink-0" /> 
              <span className="leading-none">Contact Me</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-800 dark:text-yellow-400">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed top-20 right-0 h-screen w-72 bg-white dark:bg-[#0a0a0a] border-l border-gray-200 dark:border-white/10 p-8 z-40 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-8">
                <a href="#home" onClick={()=>setIsOpen(false)} className="text-2xl font-bold">Home</a>
                <a href="#projects" onClick={()=>setIsOpen(false)} className="text-2xl font-bold">Projects</a>
                <a href="#skills" onClick={()=>setIsOpen(false)} className="text-2xl font-bold">Skills</a>
                <hr className="border-gray-200 dark:border-white/5" />
                <a href="https://wa.me/923129699582" className="flex items-center gap-3 text-green-500 font-bold text-xl">
                  <FaWhatsapp size={28} /> WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="relative mx-auto w-40 h-40 mb-10">
              <div className="absolute inset-0 bg-purple-600 blur-[60px] opacity-40 rounded-full animate-pulse" />
              <img 
                src="/profile.jpg" 
                alt="Muhammad Ikram" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-gray-200 dark:border-white/20 p-1 backdrop-blur-3xl"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Muhammad+Ikram&background=6366f1&color=fff&size=128" }}
              />
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
              Full & MERN Stack <br /> 
              <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12">
              Transforming complex business logic into seamless user experiences. 
              Specialized in building scalable full-stack Web Applications with high precision.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="#projects" className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-purple-500/10">View Work</a>
              <a href="https://github.com/ikram-webdev" target="_blank" className="px-10 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl font-black flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
                <Github size={20} /> Github
              </a>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto py-32 px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Featured Projects</h2>
            <div className="h-1 w-32 bg-purple-500 rounded-full mx-auto md:mx-0" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -12 }} className="group relative bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-[32px] overflow-hidden hover:border-purple-500/30 transition-all duration-500">
                <div className="h-52 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 dark:opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#030014] to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 px-3 py-1 rounded-lg ">{tag}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" className="flex items-center justify-between w-full p-4 bg-gray-200 dark:bg-white/5 rounded-2xl group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <span className="font-black text-sm  tracking-widest">Live Preview</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="max-w-7xl mx-auto py-32 px-6 border-t border-gray-200 dark:border-white/5">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">My Tech Stack
                <div className="h-1 w-32 bg-purple-500 rounded-full mt-3" />
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I focus on modern, performant technologies that provide the best user experience.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10"><Terminal className="text-purple-500" /></div>
                 <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10"><Cpu className="text-blue-500" /></div>
                 <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10"><Globe className="text-green-500" /></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Frontend", val: "JavaScript • React • TailwindCSS" },
                { label: "Backend", val: "Node.js • Express.js" },
                { label: "Database", val: "MongoDB • SQL" },
                { label: "Tools", val: "VS Code • Github • Postman • Vercel • Render" }
              ].map((s, i) => (
                <div key={i} className="p-6 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-3xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  <p className="text-xs font-black text-purple-500 uppercase tracking-widest mb-2">{s.label}</p>
                  <p className="text-xl font-bold">{s.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-5xl mx-auto py-32 px-6">
          <div className="relative p-12 md:p-20 rounded-[48px] overflow-hidden text-center border border-gray-200 dark:border-white/10 shadow-2xl bg-gray-50 dark:bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent -z-10" />
            <h2 className="text-3xl md:text-6xl font-black mb-8">Let's Build Something <br /> Extraordinary</h2>
            <div className="flex flex-col items-center gap-8">
              <button onClick={copyEmail} className="group flex items-center gap-4 bg-gray-900 dark:bg-white px-10 py-5 rounded-2xl text-white dark:text-black font-black hover:scale-105 transition-all shadow-2xl">
                <Mail size={24} /> {copied ? "Email Copied!" : "ikramkamboh818@gmail.com"}
              </button>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                 <a href="https://wa.me/923129699582" target="_blank" className="p-4 bg-green-500/10 text-green-600 rounded-2xl border border-green-500/20 hover:bg-green-500 hover:text-white transition-all"><FaWhatsapp size={24} /></a>
                 <a href="https://www.linkedin.com/in/muhammad-ikram-460663256" target="_blank" className="p-4 bg-blue-500/10 text-blue-600 rounded-2xl border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all"><Linkedin size={24} /></a>
                 <a href="https://www.fiverr.com/ikram_546" target="_blank" className="px-6 py-4 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 font-black italic hover:bg-gray-900 hover:text-white transition-all">Fiverr.</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BACK TO TOP BUTTON */}
      <div className="fixed bottom-10 right-2 -translate-x-1/2 z-50">
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={goToTop}
              className="p-4 bg-purple-600 text-white rounded-full shadow-2xl shadow-purple-500/40 hover:bg-purple-700 transition-all flex items-center justify-center border border-white/20 group"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <footer className="py-10 text-center border-t border-gray-200 dark:border-white/5 relative z-10">
        <p className="text-gray-500 font-medium tracking-widest uppercase text-[10px]">
          Designed & Coded by Muhammad Ikram • 2026
        </p>
      </footer>
    </div>
  );
};

export default App;