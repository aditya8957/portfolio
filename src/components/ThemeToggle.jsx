// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <div className="fixed right-6 bottom-8 z-50">
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.92 }}
        title="Toggle theme"
        className="flex items-center gap-3 px-3 py-2 rounded-full shadow-lg
                   bg-white/10 backdrop-blur-md border border-white/6
                   hover:scale-[1.03] transition-transform"
      >
        <motion.span
          key={theme}
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2"
        >
          {theme === "dark" ? (
            <>
              <Moon size={18} className="text-purple-300" />
              <span className="hidden sm:inline text-sm text-gray-200">Dark</span>
            </>
          ) : (
            <>
              <Sun size={18} className="text-yellow-400" />
              <span className="hidden sm:inline text-sm text-gray-800">Light</span>
            </>
          )}
        </motion.span>
      </motion.button>
    </div>
  );
}
