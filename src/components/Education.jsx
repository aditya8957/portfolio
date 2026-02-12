import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      {/* Dull background overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Glowing blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full top-10 left-20"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-emerald-500/20 blur-[150px] rounded-full bottom-20 right-10"
      />

      {/* Soft glowing ring */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/10 blur-[200px] rounded-full mx-auto left-0 right-0"
      />

      <div className="max-w-5xl mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-cyan-400 text-center flex items-center justify-center gap-3"
        >
          <GraduationCap size={32} />
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-4 space-y-12">

          {/* B.Tech */}
          <div className="ml-8 relative">
            <div className="w-4 h-4 bg-emerald-500 rounded-full absolute -left-10 top-2"></div>

            <span className="text-2xl font-bold">
              B.Tech — Computer Science (3rd Year)
            </span>

            <p className="text-gray-400">
              KIET Group of Institutions, Ghaziabad
            </p>

            <p className="text-sm text-gray-400 mb-4">
              Current CGPA: 8.6 / 10
            </p>
          </div>

          {/* 12th */}
          <div className="ml-8 relative">
            <div className="w-4 h-4 bg-cyan-500 rounded-full absolute -left-10 top-2"></div>

            <span className="text-2xl font-bold">
              Senior Secondary  (XII) — CBSE
            </span>

            <p className="text-gray-400">
              Escorts World School, Kanpur
            </p>

            <p className="text-sm text-gray-400 mb-4">
              Percentage: 90.6%
            </p>
          </div>

          {/* 10th */}
          <div className="ml-8 relative">
            <div className="w-4 h-4 bg-purple-500 rounded-full absolute -left-10 top-2"></div>

            <span className="text-2xl font-bold">
              Secondary (X) — CBSE
            </span>

            <p className="text-gray-400">
              Escorts World School, Kanpur
            </p>

            <p className="text-sm text-gray-400 mb-4">
              Percentage: 81.33%
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
