"use client";

import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header>
      <h2>From header</h2>
      <button
        type="button"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        {theme}
      </button>
    </header>
  );
};

export default Header;
