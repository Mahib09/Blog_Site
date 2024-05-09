import { useState, useEffect } from "react";
export function ThemeToggle() {
  const themes = [
    { value: "dark", label: "DARK" },
    { value: "light", label: "LIGHT" },
  ];
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="container">
      <div className="flex gap-3 text-gray-500 dark:text-neutral-400 mt-2">
        {themes.map((mode) => (
          <div key={mode.value}>
            <input
              name="theme"
              type="radio"
              value={mode.value}
              id={mode.value}
              checked={theme === mode.value}
              onChange={handleChange}
              className="accent-neutral-900"
            />
            <label
              htmlFor={mode.value}
              className="hover:text-black dark:hover:text-white"
            >
              {mode.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
