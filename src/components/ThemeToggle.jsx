import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-blue-400 hover:text-blue-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <MdLightMode className="h-6 w-6" /> : <MdDarkMode className="h-6 w-6" />}
    </button>
  );
}

export default ThemeToggle;
