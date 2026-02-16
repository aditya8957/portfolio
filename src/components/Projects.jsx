import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "CodeArena",
       description:
    "A full-stack MERN based coding platform where users can solve programming problems, submit code in multiple languages, and receive real-time execution results using Judge0 API.",

      highlights: [
        "Secure JWT authentication with protected routes",
        "Role-based access control (Admin & User)",
        "Monaco Editor integration",
        "Multi-language code execution using Judge0 API",
        "Submission history with execution status, memory & time tracking",
        "Redis caching for optimized performance"
      ],

      techStack: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Judge0 API",
        "Monaco Editor",
        "Redis",
        "JWT",
        "Tailwind CSS"
      ],
      github: "https://github.com/aditya8957/CodeArena",
      // demo: "#",
      image: "/images/codearna2.png", 
    },
   {
      title: "Swiggy (Frontend)",
      description:
        "A responsive Swiggy-inspired food delivery frontend built with React that fetches real-time restaurant and menu data using live APIs.",

      highlights: [
        "Live restaurant & menu data using Swiggy public API",
        "Dynamic routing with React Router",
        "Search and filter functionality",
        "Cart management with state handling",
        "Shimmer UI & loading skeletons",
        "Responsive design for all screen sizes"
      ],

      techStack: [
        "React",
        "React Router",
        "Redux / Context API",
        "Tailwind CSS",
        "Live API Integration"
      ],
      github: "https://github.com/aditya8957/Swiggy-Frontend",
      image: "/images/swiggy.png",
    },
    {
      title: "Weather Web App",
      description:
        "Responsive weather app using real-time API and geolocation.",
      highlights: [
        "Geolocation API integration",
        "Real-time weather API",
        "Error & loading states",
        "Google Maps search",
        "API call optimization",
      ],
      techStack: ["JavaScript", "Weather API", "Google Maps", "CSS"],
      github:
        "https://github.com/aditya8957/WeatherApp",
      image: "/images/weatherapp (2).png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-cyan-500/30 
              rounded-2xl p-8 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* Left content */}
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {p.title}
                  </h3>

                  <p className="text-gray-300 mt-3">{p.description}</p>

                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((point, idx) => (
                      <li key={idx} className="text-gray-300 flex gap-2">
                        <span className="text-emerald-400">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full 
                        bg-cyan-900/30 border border-cyan-500/40 
                        text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-6">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:underline"
                    >
                      <FiGithub />
                      GitHub
                    </a>

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:underline"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    )}
                  </div>
                </div>

              
                {/* Right image */}
               <div className="w-full md:w-4/5 lg:w-3/4 rounded-xl overflow-hidden border border-cyan-500/30 mx-auto">

                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-cyan-400 text-sm">
                      Project Screenshot
                    </span>
                  )}
                </div>



              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
