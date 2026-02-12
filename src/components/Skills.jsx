import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";

const skills = [
  { label: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { label: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { label: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { label: "React", icon: SiReact, color: "text-sky-400" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { label: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { label: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { label: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { label: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { label: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { label: "Postman", icon: SiPostman, color: "text-orange-500" },
  { label: "Git", icon: SiGit, color: "text-red-500" },
  { label: "GitHub", icon: SiGithub, color: "text-gray-300" },
  { label: "Java", icon: FaJava, color: "text-red-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      {/* Floating blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-sky-500/20 blur-[130px] rounded-full top-10 left-20"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-emerald-500/20 blur-[150px] rounded-full bottom-20 right-10"
      />

      {/* Shining circle */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/10 blur-[200px] rounded-full"
      />

      {/* Falling particles */}
      {[...Array(16)].map((_, i) => (
        <motion.span
          key={`skills-particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-300/70 rounded-full"
          initial={{
            x: Math.random() * 1920,
            y: Math.random() * 1080,
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
            ease: "linear",
          }}
        />
      ))}

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center relative z-20 mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-400"
        >
          Technical Skills
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-20">
        {skills.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
              className="
                group relative rounded-2xl p-6 
                bg-black/60 border border-white/10 
                backdrop-blur-xl shadow-xl
                transition-all duration-300
                hover:shadow-cyan-500/40 hover:border-cyan-400/40
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Upper shine line */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-80 animate-pulse"></span>

              {/* Icon */}
              <Icon
                size={40}
                className={`${s.color} relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-all`}
              />

              {/* Label */}
              <p className="mt-3 text-sm text-gray-200 group-hover:text-white relative z-10 font-medium">
                {s.label}
              </p>

              {/* Bottom animated border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
