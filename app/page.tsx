"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Asset Management System with QR Integration",
    desc: "Spearheaded the complete end-to-end development lifecycle—from UI/UX design to full-stack implementation. Designed a QR Code-based inventory solution that successfully replaced manual recording processes, minimizing human error and providing real-time data visibility.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL"],
    gradient: "from-rose-100 to-orange-100",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100",
  },
  {
    title: "Tax Administration & SP2 Document System",
    desc: "Independently engineered and delivered a digital document management platform for the Ministry of Finance (North Sumatra) to streamline the issuance of Surat Perintah (SP2) and tax execution documents, significantly reducing bureaucratic delays.",
    tech: ["Full-Stack", "Workflow Automation", "SQL"],
    gradient: "from-sky-100 to-indigo-100",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-100",
  },
  {
    title: "Conference Management & Automated Billing System",
    desc: "Architected the backend infrastructure for a comprehensive platform managing academic paper conferences. Designed an automated logic capable of instantly generating critical financial documents including Invoices, Receipts, and Letters of Acceptance (LoA).",
    tech: ["Backend Logic", "RESTful APIs", "Database Architecture"],
    gradient: "from-emerald-100 to-teal-100",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Human Resource Information System",
    desc: "Architecting and developing a comprehensive HR platform from the ground up to digitalize the full employee lifecycle, payroll, and attendance. Designed automated multi-tier approval workflows to enforce corporate policy.",
    tech: ["Next.js", "System Analysis", "Workflow Design"],
    gradient: "from-violet-100 to-fuchsia-100",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100",
  },
];

const marqueeProjects = [...projects, ...projects, ...projects, ...projects];

const experiences = [
  {
    role: "Web Developer",
    comp: "PT. Eska Link",
    year: "Feb 2026 - Present",
    points: [
      "Optimize and ensure the reliability of business-critical Sales Force applications, directly supporting high-traffic, daily corporate sales operations.",
      "Diagnose and resolve complex system disruptions across multiple business modules, minimizing operational downtime and preventing revenue loss.",
      "Analyze evolving business requirements to strategize and implement system enhancements, improving overall workflow efficiency.",
    ],
    logo: "https://ui-avatars.com/api/?name=EL&background=ffe4e6&color=e11d48&rounded=true&bold=true",
  },
  {
    role: "Web Developer / IT Programmer",
    comp: "PT. Terakorp Indonesia",
    year: "Oct 2025 - Dec 2025",
    points: [
      "Spearheaded feature enhancements within the Hospital Information System (HIS), including advanced data filtering and reporting automation to support management oversight.",
      "Executed rapid troubleshooting and critical data corrections under pressure, ensuring seamless, uninterrupted daily healthcare operations.",
    ],
    logo: "https://ui-avatars.com/api/?name=TI&background=e0f2fe&color=0284c7&rounded=true&bold=true",
  },
  {
    role: "Backend Intern",
    comp: "Human Centric Engineering",
    year: "Feb 2025 - May 2025",
    points: [
      "Developed backend systems for an academic conference management platform and successfully optimized document archiving workflows.",
    ],
    logo: "https://ui-avatars.com/api/?name=HC&background=dcfce3&color=16a34a&rounded=true&bold=true",
  },
];

const words = ["ECOSYSTEM.", "EXPERIENCES.", "SOLUTIONS.", "INNOVATION."];

function AutoScrollExperience() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);
  const animRef = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Speed: px per frame
    const speed = 0.7;

    const step = () => {
      if (!isHovered.current) {
        posRef.current += speed;

        // When we've scrolled one "third" (one set of experiences), reset to start seamlessly
        const oneThird = el.scrollHeight / 3;
        if (posRef.current >= oneThird) {
          posRef.current -= oneThird;
        }

        el.scrollTop = posRef.current;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    // Sync posRef with actual scroll position after manual scroll
    if (scrollRef.current) {
      posRef.current = scrollRef.current.scrollTop;
    }
  };

  const handleScroll = () => {
    // While hovered and user is scrolling manually, keep posRef in sync
    if (isHovered.current && scrollRef.current) {
      posRef.current = scrollRef.current.scrollTop;
    }
  };

  return (
    <div className="relative">
      {/* Top fade mask */}
      <div
        className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #FAFAFA 0%, transparent 100%)",
        }}
      />
      {/* Bottom fade mask */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #FAFAFA 0%, transparent 100%)",
        }}
      />

      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        className="h-[520px] overflow-y-auto overflow-x-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        <div className="space-y-6 py-4">
          {Array.from({ length: 20 })
            .flatMap(() => experiences)
            .map((exp, i) => (
            <div
              key={i}
              className="group bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:bg-white transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={exp.logo}
                      alt={`${exp.comp} logo`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-slate-600 font-medium">{exp.comp}</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-slate-100 border border-slate-200 text-slate-600 rounded-full text-xs font-bold font-mono uppercase tracking-wider">
                  {exp.year}
                </div>
              </div>
              <div className="h-[1px] w-full bg-slate-100 mb-6" />
              <ul className="space-y-3 text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-rose-400 mt-1.5 flex-shrink-0 text-xs">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPastelOptimized() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const cursorX = useSpring(0, { stiffness: 100, damping: 30, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 30, mass: 0.5 });

  const [wordIndex, setWordIndex] = useState(0);
  const [time, setTime] = useState("");
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    const timeInterval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250);
      cursorY.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", moveCursor);

    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.05 + Math.random() * 0.1,
        size: 2 + Math.random() * 4,
      }));
      setParticles(newParticles);
    };
    generateParticles();

    let animationFrameId;
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((p) => ({
          ...p,
          y: p.y - p.speed < -10 ? 110 : p.y - p.speed,
          x: p.x + Math.sin(p.y * 0.05) * 0.02,
        }))
      );
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    animateParticles();

    return () => {
      clearInterval(wordInterval);
      clearInterval(timeInterval);
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      ref={containerRef}
      className="bg-[#FAFAFA] text-slate-800 font-sans min-h-screen selection:bg-rose-200 selection:text-slate-900 overflow-clip relative"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* CONTINUOUS AMBIENT DUST */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-slate-400 rounded-full blur-[1px]"
            style={{
              left: `${p.x}vw`,
              top: `${p.y}vh`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* PASTEL CURSOR AURA */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-rose-300/30 to-violet-300/30 z-0"
        style={{ x: cursorX, y: cursorY }}
      />

      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
      >
        <div className="backdrop-blur-xl bg-white/60 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-8 py-4 flex items-center justify-between">
          <h1 className="font-bold tracking-tight text-xl text-slate-900">
            Kahfi Albaihaqi<span className="text-rose-400">.</span>
          </h1>
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-slate-400">
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <a href="#education" className="hover:text-rose-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-rose-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-rose-400 transition-colors">Work</a>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 px-5 py-2.5 rounded-full transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.nav>

      {/* HERO & ABOUT SECTION */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-rose-200/50 blur-[100px] rounded-full mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-200/50 blur-[120px] rounded-full mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite]" />
        </motion.div>

        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-5 py-2 mb-8 rounded-full bg-white/80 border border-slate-200 shadow-sm text-xs font-semibold text-slate-500 flex items-center gap-3 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>
            <div className="w-[1px] h-4 bg-slate-300"></div>
            <div className="font-mono text-slate-400">{time || "Loading..."} WIB</div>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 leading-[0.9] pb-4"
            >
              ARCHITECTING
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none h-[1em]">
            <span className="italic font-serif font-light text-slate-400">the</span>{" "}
            <div className="relative w-[300px] md:w-[600px] text-center md:text-left flex items-center justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-violet-400 to-sky-400"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium mt-6"
          >
            I translate complex logic into seamless operational workflows. Bridging robust backend security with dynamic
            frontend reactivity.
          </motion.p>
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 px-6 relative z-10 border-t border-slate-200/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
              Education & Credentials
            </h2>
            <p className="text-slate-500 text-lg font-medium">The academic foundation behind the logic.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">Telkom University</h3>
                <p className="text-xl text-slate-600 font-medium">Bachelor of Information Technology</p>
              </div>
              <div className="md:text-right">
                <div className="inline-block px-4 py-1.5 bg-violet-100 text-violet-600 rounded-full font-bold text-sm tracking-widest uppercase mb-2">
                  2021 - 2025
                </div>
                <p className="text-slate-800 font-mono font-bold text-lg">GPA: 3.68 / 4.00</p>
              </div>
            </div>

            <div className="h-[1px] w-full bg-slate-200 mb-8"></div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A12.014 12.014 0 0010.3 1C5.167 1 1 5.167 1 10.3c0 5.133 4.167 9.3 9.3 9.3 5.133 0 9.3-4.167 9.3-9.3 0-1.01-.115-1.996-.333-2.946A10.015 10.015 0 0110.3 19C5.581 19 1.75 15.169 1.75 10.45c0-4.72 3.831-8.55 8.55-8.55a10.015 10.015 0 017.067 2.813A12.014 12.014 0 0011.3 1.046zM10.3 3a7.3 7.3 0 100 14.6 7.3 7.3 0 000-14.6z" clipRule="evenodd" />
                  </svg>
                  Final Project
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Developed a Web-Based Inventory Management System with QR Code Integration to optimize asset tracking
                  and reduce manual operational errors.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licenses & Certifications
                </h4>
                <ul className="space-y-3 text-slate-600 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0"></span>
                    <span>
                      Google IT Support Professional Certificate{" "}
                      <span className="text-slate-400 text-sm">(2022)</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                    <span>
                      Intellectual Property Rights (HKI) - QR Asset System{" "}
                      <span className="text-slate-400 text-sm">(2025)</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0"></span>
                    <span>
                      English Proficiency Test Certified <span className="text-slate-400 text-sm">(2025)</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL JOURNEY SECTION — AUTO-SCROLL */}
      <section id="experience" className="py-24 px-6 border-t border-slate-200/40 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              A timeline of system engineering and technical impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AutoScrollExperience />
          </motion.div>
        </div>
      </section>

      {/* SELECTED WORK SECTION (HORIZONTAL MARQUEE) */}
      <section id="projects" className="py-24 overflow-hidden relative border-t border-slate-200/40">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Selected Work</h2>
          <p className="text-slate-500 mt-2 font-medium">Engineering impact through code. Hover to pause.</p>
        </div>

        <div className="flex w-[200%] md:w-[150%] animate-marquee pb-8">
          {marqueeProjects.map((project, i) => (
            <div key={i} className="w-[340px] md:w-[440px] flex-shrink-0 mx-4">
              <div className="group h-full bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:bg-white transition-all duration-500 cursor-default flex flex-col justify-between">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]`}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${project.iconBg} ${project.iconColor} font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow`}
                    >
                      0{(i % projects.length) + 1}
                    </motion.div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-slate-300 group-hover:text-slate-800 transition-colors -rotate-45 group-hover:rotate-0 duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{project.desc}</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-40 px-6 relative overflow-hidden flex flex-col items-center text-center border-t border-slate-200/40"
      >
        <div className="absolute bottom-0 w-[800px] h-[400px] bg-gradient-to-t from-sky-200/60 to-transparent blur-[100px] pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8"
        >
          LET&apos;S <span className="italic font-serif font-light text-slate-400">talk.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg md:text-xl max-w-xl mb-12 font-medium"
        >
          Open for engineering roles and collaborations. I&apos;m ready to bring my analytical background to your next
          big system.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:kahfialbhqi.work@gmail.com"
          className="relative px-8 py-4 bg-slate-900 text-white shadow-xl shadow-slate-900/20 font-bold rounded-full overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300">
            kahfialbhqi.work@gmail.com
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-400 font-medium text-sm relative z-10 border-t border-slate-200/40">
        <p>© {new Date().getFullYear()} Kahfi Albaihaqi. All rights reserved.</p>
      </footer>
    </div>
  );
}