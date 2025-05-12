import { useEffect, useState } from "react";

export function useTheme() {
  // Estado inicial baseado no localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Se o tema for dark, adiciona a classe 'dark' no elemento HTML
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return { isDark, toggleTheme: () => setIsDark((prev) => !prev) };
}
