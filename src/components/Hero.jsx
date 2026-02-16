import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import RadioHero from "./RadioHero";

const Hero = () => {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Floating blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-96 h-96 bg-sky-500/20 blur-[120px] rounded-full top-20 left-10"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-emerald-500/20 blur-[150px] rounded-full bottom-20 right-10"
      />

      {/* Falling particles */}
      {[...Array(16)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-cyan-300/70 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: "+=200",
            y: "+=350",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 border border-sky-400/20 rounded-full"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 bg-cyan-400 rounded-full absolute -top-2 left-1/2"
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-20 text-center max-w-3xl px-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
            Aditya Pratap
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-cyan-300 font-medium h-10"
        >
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer",
                "Backend Developer",
                "DSA Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 max-w-xl mx-auto mt-4"
        >
          B.Tech Computer Science student at KIET Ghaziabad, passionate about
          building beautiful web applications and solving complex problems with
          code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mt-8 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-xl flex items-center gap-2 font-medium"
          >
            View Projects <ArrowRight size={18} />
          </a>

          <a
            href="https://drive.google.com/file/d/1yE9Zhb4j-0bNCwulWqlvAe2eUAGlP_WB/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center gap-2 font-medium"
          >
            View Resume <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-10"
        >
          <a
            href="https://github.com/aditya8957"
            target="_blank"
            className="hover:scale-125 hover:text-cyan-400 transition"
          >
            <Github size={28} />
          </a>

          <a
            href="mailto:adityapratap8957@gmail.com"
            className="hover:scale-125 hover:text-cyan-400 transition"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-pratap-9a768632a/"
            target="_blank"
            className="hover:scale-125 hover:text-cyan-400 transition"
          >
            <Linkedin size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
