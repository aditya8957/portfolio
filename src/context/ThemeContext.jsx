// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children, defaultTheme = "dark" }) {
  const [theme, setTheme] = useState(() => {
    // init from localStorage or use default
    try {
      const saved = localStorage.getItem("site-theme");
      return saved || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // We use Tailwind's class strategy: add or remove the 'dark' class
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // persist
    try {
      localStorage.setItem("site-theme", theme);
    } catch {}

    // apply a data attribute for CSS if you want to target [data-theme]
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
