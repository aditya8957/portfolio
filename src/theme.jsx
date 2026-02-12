export const toggleTheme = () => {
  const html = document.documentElement;

  html.classList.toggle("dark");

  // Save user preference
  const theme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
};
