import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-emerald-900/30 shadow-lg shadow-emerald-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold flex items-center gap-2 text-white">
          <span className="text-cyan-400">&lt;
          <span>AP</span>
          <span className="text-cyan-400">/&gt;</span></span>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-white">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
           <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 text-white">
          <div className="px-6 py-6 flex flex-col gap-4">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

